import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, 'dist');

if (fs.existsSync(dist)) {
  fs.rmSync(dist, { recursive: true, force: true });
}
fs.mkdirSync(dist, { recursive: true });

const itemsToCopy = ['index.html', 'css', 'js', 'img'];

for (const item of itemsToCopy) {
  const srcPath = path.join(__dirname, item);
  const destPath = path.join(dist, item);
  if (fs.existsSync(srcPath)) {
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
}

console.log('Successfully built static assets into dist/');
