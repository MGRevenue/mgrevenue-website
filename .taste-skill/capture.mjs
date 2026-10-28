// Full-page captures with motion settled (reduced motion), for the finish review.
// Usage: node .taste-skill/capture.mjs <url> <outdir>
import { spawn } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [url, out] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const port = 9334;
const chrome = spawn('chromium', ['--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${port}`,
  `--user-data-dir=${mkdtempSync(join(tmpdir(), 'cap-'))}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) {
  try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page'); } catch {}
  if (!target) await sleep(200);
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let seq = 0; const pending = new Map();
ws.addEventListener('message', (e) => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
const send = (method, params = {}) => new Promise((res) => { const id = ++seq; pending.set(id, res); ws.send(JSON.stringify({ id, method, params })); });

await send('Page.enable');
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
for (const [name, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844], ['tablet', 768, 1024]]) {
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 600 });
  await send('Page.navigate', { url }); await sleep(2500);
  await send('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
  // Lazy images never load in a capture that does not scroll: load them all and wait for decode.
  const ready = await send('Runtime.evaluate', { awaitPromise: true, returnByValue: true, expression: `(async () => {
    const imgs = [...document.images];
    imgs.forEach((i) => { i.loading = 'eager'; });
    await Promise.all(imgs.map((i) => i.complete && i.naturalWidth ? i.decode().catch(() => {}) : new Promise((r) => { i.addEventListener('load', r, { once: true }); i.addEventListener('error', r, { once: true }); }).then(() => i.decode().catch(() => {}))));
    const clipped = [...document.querySelectorAll('[data-reveal]')].filter((el) => getComputedStyle(el).clipPath !== 'none' || getComputedStyle(el).opacity < 0.99).length;
    return { images: imgs.length, loaded: imgs.filter((i) => i.complete && i.naturalWidth > 0).length, clipped };
  })()` });
  console.log(name, JSON.stringify(ready.result.result.value));
  const { result } = await send('Runtime.evaluate', { expression: 'document.documentElement.scrollHeight', returnByValue: true });
  const height = result.result.value;
  const shot = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { x: 0, y: 0, width: w, height, scale: 1 } });
  writeFileSync(join(out, `${name}.png`), Buffer.from(shot.result.data, 'base64'));
  console.log(`${name}.png ${w}×${height}`);
}
ws.close(); chrome.kill();
