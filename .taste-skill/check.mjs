// Targeted checks for the owner-review changes: logo states, headline fit, the
// partner calculator at several inputs, and the "adds up" entrance in motion.
// Usage: node .taste-skill/check.mjs <url> <outdir>
import { spawn } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const [url, out] = process.argv.slice(2);
mkdirSync(out, { recursive: true });
const port = 9335;
const chrome = spawn('chromium', ['--headless=new', '--no-sandbox', '--disable-gpu', '--hide-scrollbars', `--remote-debugging-port=${port}`,
  `--user-data-dir=${mkdtempSync(join(tmpdir(), 'chk-'))}`, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let target;
for (let i = 0; i < 50 && !target; i++) {
  try { target = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === 'page'); } catch {}
  if (!target) await sleep(200);
}
const ws = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener('open', r, { once: true }));
let seq = 0; const pending = new Map(); const errors = [];
ws.addEventListener('message', (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  if (m.method === 'Runtime.exceptionThrown') errors.push(m.params.exceptionDetails.exception?.description || m.params.exceptionDetails.text);
  if (m.method === 'Runtime.consoleAPICalled' && m.params.type === 'error') errors.push(m.params.args.map((a) => a.value ?? a.description).join(' '));
});
const send = (method, params = {}) => new Promise((res) => { const id = ++seq; pending.set(id, res); ws.send(JSON.stringify({ id, method, params })); });
const js = async (expression) => {
  const r = await send('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (r.result.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description || 'eval failed');
  return r.result.result.value;
};
// A document-coordinate crop (captureBeyondViewport) cannot draw position:fixed elements
// where they really are, so the bar and skip link are hidden for clipped shots only.
const shot = async (file, clip) => {
  if (clip) await js(`(() => { const s = document.createElement('style'); s.id = 'shot-hide-fixed'; s.textContent = '.bar, .skip { visibility: hidden !important; }'; document.head.append(s); return true; })()`);
  const r = await send('Page.captureScreenshot', { format: 'png', ...(clip ? { captureBeyondViewport: true, clip: { ...clip, scale: 1 } } : {}) });
  if (clip) await js(`(document.getElementById('shot-hide-fixed')?.remove(), true)`);
  writeFileSync(join(out, file), Buffer.from(r.result.data, 'base64'));
};
// Absolute rect of an element, for clipped screenshots.
const rectOf = (sel, pad = 0) => js(`(() => { const r = document.querySelector(${JSON.stringify(sel)}).getBoundingClientRect();
  return { x: 0, y: Math.max(0, r.top + scrollY - ${pad}), width: innerWidth, height: r.height + ${pad * 2} }; })()`);
// Set the calculator: clients by pressing the stepper, spend through the slider.
const setCalc = (clients, spend, cur = 'USD') => js(`(async () => {
  const r = document.getElementById('spend'); r.value = ${spend}; r.dispatchEvent(new Event('input', { bubbles: true }));
  const n = () => Number(document.querySelector('[data-out=clients]').textContent);
  for (let i = 0; i < 12 && n() !== ${clients}; i++) document.querySelector('[data-step="' + (n() < ${clients} ? 1 : -1) + '"]').click();
  await new Promise((r) => setTimeout(r, 350));
  const q = (s) => document.querySelector(s);
  const est = q('.est').getBoundingClientRect(), bar = q('.tenk__bar').getBoundingClientRect(), goal = q('.tenk__goal').getBoundingClientRect();
  const on = [...q('.tenk__bar').querySelectorAll('i.is-on:not([hidden])')];
  return { q: q('#est-q').textContent, monthly: q('[data-out=monthly]').textContent, yearly: q('[data-out=yearly]').textContent,
    say: q('[data-out=say]').textContent, key: q('[data-out=key]').textContent,
    blocks: [...q('.tenk__bar').children].filter((b) => !b.hidden).length, on: on.length,
    clientsVisible: on.filter((b) => b.getBoundingClientRect().right <= bar.right + 1).length,
    goalAtPct: Math.round(((goal.left + (q('.tenk__goal').classList.contains('is-left') ? 8 : goal.width - 8) - bar.left) / bar.width) * 100),
    goalInside: goal.left >= bar.left - 10 && goal.right <= bar.right + 10,
    figOverflow: q('.est__fig').getBoundingClientRect().right > est.right + 1,
    disabled: [...document.querySelectorAll('[data-step]')].map((b) => b.getAttribute('aria-disabled')).join('/') };
})()`);

await send('Page.enable');
await send('Runtime.enable');

for (const [name, w, h] of [['desktop', 1440, 900], ['mobile', 390, 844], ['tablet', 768, 1024]]) {
  await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] });
  await send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile: w < 600 });
  await send('Page.navigate', { url }); await sleep(2200);
  await js('document.fonts.ready.then(() => true)');

  const top = await js(`(() => {
    const logo = document.querySelector('.bar__brand').getBoundingClientRect();
    const h1 = document.querySelector('#hero-h');
    const lines = new Set([...h1.querySelectorAll('.ink')].flatMap((s) => [...s.getClientRects()].map((r) => Math.round(r.top))));
    const over = [...h1.querySelectorAll('.ink')].some((s) => s.getBoundingClientRect().right > innerWidth - 8);
    return { logoH: Math.round(logo.height), logoW: Math.round(logo.width), logoTop: Math.round(logo.top), barH: document.querySelector('.bar').offsetHeight,
      h1TextLines: lines.size, h1Overflow: over, docOverflow: document.documentElement.scrollWidth > innerWidth };
  })()`);
  await shot(`${name}-top.png`);

  await js('scrollTo(0, 420), new Promise((r) => setTimeout(r, 400))');
  const compact = await js(`(() => { const r = document.querySelector('.bar__brand').getBoundingClientRect();
    return { compact: document.querySelector('.bar').classList.contains('is-compact'), logoH: Math.round(r.height), logoTop: Math.round(r.top), logoMid: Math.round(r.top + r.height / 2) }; })()`);
  await shot(`${name}-scrolled.png`); // the viewport as seen: the fixed bar must be drawn where it really is

  await js(`document.getElementById('partners').scrollIntoView(), new Promise((r) => setTimeout(r, 300))`);
  const states = {};
  states.default = await js(`(() => { const q = (s) => document.querySelector(s); return { q: q('#est-q').textContent, monthly: q('[data-out=monthly]').textContent, say: q('[data-out=say]').textContent }; })()`);
  await shot(`${name}-partners-default.png`, await rectOf('#partners'));
  states.low = await setCalc(3, 7500);
  await shot(`${name}-partners-low.png`, await rectOf('#partners'));
  states.min = await setCalc(1, 2500, 'EUR');
  await shot(`${name}-partners-min.png`, await rectOf('.est', 40));
  states.max = await setCalc(10, 40000, 'GBP');
  await shot(`${name}-partners-max.png`, await rectOf('#partners'));
  console.log(name, JSON.stringify({ top, compact, states }, null, 1));
}

// Motion: the clients add up to the line the first time it is seen.
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'no-preference' }] });
await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url }); await sleep(2200);
await js(`(async () => { await document.fonts.ready; const y = document.querySelector('.tenk').getBoundingClientRect().top + scrollY - 500; scrollTo(0, y); })()`);
for (const t of [0, 250, 500, 750, 1000, 1600]) {
  await sleep(t === 0 ? 60 : 250 * (t === 1600 ? 2.4 : 1));
  await shot(`motion-${String(t).padStart(4, '0')}.png`, await rectOf('.tenk', 20));
}
console.log('errors', JSON.stringify(errors));
ws.close(); chrome.kill();
