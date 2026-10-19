// Tells IndexNow engines (Bing — and through it ChatGPT search —, Seznam,
// Yandex) that the site changed. Run after a deploy is live:
//   npm run indexnow
// The key file public/0acc90d324118e5824be70010fe5d73e.txt proves ownership of the host; keep both.
const KEY = '0acc90d324118e5824be70010fe5d73e';
const HOST = 'www.hirnix.studio';

const xml = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text());
const urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: ${urlList.length} URLs → HTTP ${res.status}`);
if (!res.ok) process.exitCode = 1;
