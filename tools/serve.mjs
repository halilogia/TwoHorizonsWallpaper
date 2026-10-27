// Tiny static server for local testing. POST /__save?name=preview.jpg (body: data URL) writes a file in the project root.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const port = Number(process.env.PORT) || 8123;
const types = { '.html': 'text/html', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg' };

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://x');
  if (req.method === 'POST' && url.pathname === '/__save') {
    const name = path.basename(url.searchParams.get('name') || 'shot.jpg');
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      fs.writeFileSync(path.join(root, name), Buffer.from(body.replace(/^data:[^,]+,/, ''), 'base64'));
      res.end('saved ' + name);
    });
    return;
  }
  const file = path.join(root, url.pathname === '/' ? 'index.html' : decodeURIComponent(url.pathname));
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.statusCode = 404; return res.end('not found'); }
  res.setHeader('Content-Type', types[path.extname(file)] || 'application/octet-stream');
  res.setHeader('Access-Control-Allow-Origin', '*');
  fs.createReadStream(file).pipe(res);
}).listen(port, '127.0.0.1', () => console.log('http://127.0.0.1:' + port));
