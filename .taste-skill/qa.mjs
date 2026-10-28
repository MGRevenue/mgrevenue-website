// Behaviour checks over the Chrome DevTools Protocol (Node 22+, system Chromium, no dependencies).
// Usage: node .taste-skill/qa.mjs http://127.0.0.1:8765/index.html
import { spawn } from 'node:child_process';
import { mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const url = process.argv[2];
const port = 9333;
const chrome = spawn('chromium', ['--headless=new', '--no-sandbox', '--disable-gpu', `--remote-debugging-port=${port}`,
  `--user-data-dir=${mkdtempSync(join(tmpdir(), 'qa-'))}`, 'about:blank'], { stdio: 'ignore' });
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
const evaluate = async (expr) => {
  const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true });
  if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description || 'eval failed');
  return r.result.result.value;
};
const key = async (k, code) => { for (const type of ['keyDown', 'keyUp']) await send('Input.dispatchKeyEvent', { type, key: k, code: code || k, windowsVirtualKeyCode: k === 'Escape' ? 27 : 0 }); };
const size = (width, height) => send('Emulation.setDeviceMetricsOverride', { width, height, deviceScaleFactor: 1, mobile: width < 600 });
const load = async () => { await send('Page.navigate', { url }); await sleep(2500); await evaluate('document.fonts.ready.then(() => true)'); };

const results = []; const check = (name, ok, detail = '') => results.push(`${ok ? 'PASS' : 'FAIL'}  ${name}${detail ? '  · ' + detail : ''}`);
await send('Page.enable'); await send('Runtime.enable');

// 1. Layout at every width: no sideways scroll, headline on two lines, nothing past the margins.
for (const [w, h] of [[320, 640], [360, 740], [390, 844], [430, 932], [768, 1024], [1024, 768], [1280, 800], [1440, 900], [1920, 1080], [2560, 1440]]) {
  await size(w, h); await load();
  const m = await evaluate(`(() => {
    const h1 = document.querySelector('h1'), fs = parseFloat(getComputedStyle(h1).fontSize);
    const line1 = { right: Math.max(...[...h1.querySelectorAll('.ink, .slot')].map((el) => el.getBoundingClientRect().right)) };
    const tops = new Set(); const range = document.createRange();
    for (const n of h1.querySelectorAll('.ink')) { range.selectNodeContents(n); for (const r of range.getClientRects()) if (r.width > 2) tops.add(Math.round(r.top / 4)); }
    const margin = parseFloat(getComputedStyle(document.querySelector('.hero__top')).paddingLeft);
    const heads = [...document.querySelectorAll('h2.head, h3.head')].map((el) => ({ t: el.textContent.trim().slice(0, 28), lines: Math.round(el.getBoundingClientRect().height / (parseFloat(getComputedStyle(el).fontSize) * 1.0)) })).filter((x) => x.lines > 2);
    return { sx: document.documentElement.scrollWidth - innerWidth, lines: tops.size, fs: Math.round(fs), over: Math.round(line1.right - (innerWidth - margin)), heads };
  })()`);
  check(`${w}px no sideways scroll`, m.sx <= 0, `scrollWidth−vw ${m.sx}`);
  check(`${w}px headline two lines inside margin`, m.lines === 2 && m.over <= 1, `${m.fs}px, ${m.lines} lines, overrun ${m.over}px`);
  check(`${w}px section headings ≤ 2 lines`, m.heads.length === 0, JSON.stringify(m.heads));
}

// 2. Phone menu: opens as a modal, Escape closes it, focus returns to Menu.
await size(390, 844); await load();
await evaluate(`document.querySelector('.bar .bar__menu').click()`); await sleep(450);
let s = await evaluate(`({ open: document.getElementById('menu').open, modal: document.getElementById('menu').matches(':modal'), exp: document.querySelector('.bar .bar__menu').getAttribute('aria-expanded') })`);
check('menu opens as modal', s.open && s.modal && s.exp === 'true', JSON.stringify(s));
await key('Escape'); await sleep(450);
s = await evaluate(`({ open: document.getElementById('menu').open, exp: document.querySelector('.bar .bar__menu').getAttribute('aria-expanded'), focus: document.activeElement === document.querySelector('.bar .bar__menu') })`);
check('Escape closes menu, focus returns', !s.open && s.exp === 'false' && s.focus, JSON.stringify(s));
await evaluate(`document.querySelector('.bar .bar__menu').click()`); await sleep(400);
await evaluate(`document.querySelector('#menu a[href="#partners"]').click()`); await sleep(1200);
s = await evaluate(`({ open: document.getElementById('menu').open, hash: location.hash, y: Math.round(document.getElementById('partners').getBoundingClientRect().top) })`);
check('menu link closes menu and lands on section', !s.open && s.hash === '#partners' && Math.abs(s.y) < 120, JSON.stringify(s));

// 3. Partner estimator: arithmetic, currency switch, aria-valuetext.
s = await evaluate(`(() => { const r = document.getElementById('spend'); r.value = 12500; r.dispatchEvent(new Event('input', { bubbles: true }));
  const eur = document.querySelector('input[name=cur][value=EUR]'); eur.checked = true; eur.dispatchEvent(new Event('change', { bubbles: true }));
  return { out: document.getElementById('spend-out').textContent, m: document.querySelector('[data-out=monthly]').textContent, y: document.querySelector('[data-out=yearly]').textContent,
    cap: document.querySelector('[data-cur-name]').textContent, vt: r.getAttribute('aria-valuetext'), proj: document.querySelector('[data-row=projection]').hidden }; })()`);
check('estimator: 10% of 12,500 = 1,250 / 15,000 a year in euros', s.out === '€12,500' && s.m === '1,250' && s.y === '15,000' && s.cap === 'euros' && s.vt === '€12,500 a month', JSON.stringify(s));
check('projection row hidden until owner implements it', s.proj === true);

// 4. The bar takes the tone of the chapter beneath it.
await size(1440, 900); await load();
const tones = [];
for (const id of ['top', 'sales', 'outsourcing', 'partners', 'about', 'contact']) {
  await evaluate(`document.getElementById('${id}').scrollIntoView({ behavior: 'instant' }); window.scrollBy(0, 40)`); await sleep(350);
  tones.push(`${id}:${await evaluate(`document.querySelector('.bar').dataset.tone`)}`);
}
check('bar tone follows chapters', tones.join(' ') === 'top:dark sales:dark outsourcing:panel partners:gold about:dark contact:light', tones.join(' '));
await evaluate(`window.scrollTo(0, document.querySelector('.hero__gold').offsetTop - 20)`); await sleep(350);
check('bar turns gold over the hero gold field', (await evaluate(`document.querySelector('.bar').dataset.tone`)) === 'gold');

// 5. Kosovo clock and reduced motion.
s = await evaluate(`({ shown: !document.querySelector('[data-kosovo-now]').hidden, t: document.querySelector('[data-kosovo-time]').textContent })`);
check('Kosovo clock renders', s.shown && /^\d{2}:\d{2}$/.test(s.t), s.t);
await send('Emulation.setEmulatedMedia', { features: [{ name: 'prefers-reduced-motion', value: 'reduce' }] }); await load();
s = await evaluate(`({ paused: document.querySelector('.slot video').paused, hidden: [...document.querySelectorAll('[data-reveal]')].filter((el) => getComputedStyle(el).opacity < 0.99).length })`);
check('reduced motion: loop paused, no hidden content', s.paused && s.hidden === 0, JSON.stringify(s));

console.log(results.join('\n'));
console.log(`\n${results.filter((r) => r.startsWith('FAIL')).length} FAIL / ${results.length} checks`);
ws.close(); chrome.kill();
