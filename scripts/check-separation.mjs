// 校验：构建产物与源码中不得出现其他灵动云域名（本站独立运营，不做站间链接）。
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
const RE = /(?:www\.)?lingdongyun\.(?:site|website|best|lol)/i;
const roots = ['dist', 'src', 'public'];
const hits = [];
const walk = (d) => {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) { walk(p); continue; }
    if (!/\.(html|xml|txt|js|mjs|ts|astro|css|json|md|svg|webmanifest)$|^_redirects$/i.test(n)) continue;
    readFileSync(p, 'utf8').split('\n').forEach((l, i) => { if (RE.test(l)) hits.push(`${p}:${i + 1}`); });
  }
};
for (const r of roots) { try { walk(r); } catch {} }
if (hits.length) { console.error('发现其他域名引用：\n' + hits.join('\n')); process.exit(1); }
console.log('OK：dist / src / public 中没有其他灵动云域名的引用');
