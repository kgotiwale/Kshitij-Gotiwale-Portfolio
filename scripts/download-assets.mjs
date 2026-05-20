import { createWriteStream, mkdirSync, existsSync } from 'fs';
import { pipeline } from 'stream/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.join(__dirname, '..');

const assets = {
  // Home page — parallax gallery images
  'public/images/home': [
    { url: 'https://framerusercontent.com/images/gl9rZP9rrhADYqEwQ67RSHIsA.png', name: 'home-01.png' },
    { url: 'https://framerusercontent.com/images/54KCEJP8ueXIiy0xxZ2nUTiRBC0.png', name: 'home-02.png' },
    { url: 'https://framerusercontent.com/images/Xev1GopnXBINaSNFHeSjGb21iLo.png', name: 'home-03.png' },
    { url: 'https://framerusercontent.com/images/E7jYZkm7rHI42aYhyJLIVFv2A.png', name: 'home-04.png' },
    { url: 'https://framerusercontent.com/images/0gAEs7qYkxoZrpVhHQ1wHMBafI.png', name: 'home-05.png' },
    { url: 'https://framerusercontent.com/images/xRfOfmanlklbOSjFGADeCClzts.png', name: 'home-06.png' },
    { url: 'https://framerusercontent.com/images/2FndqM5e1uh1qfdy9ooWYRkMR8.png', name: 'home-07.png' },
  ],
  // About page
  'public/images/about': [
    { url: 'https://framerusercontent.com/images/3EkDQek0Oj9RYBiDZMh5VDI4.png', name: 'profile.png' },
    { url: 'https://framerusercontent.com/images/L0V9bWLNYKqEpuIHeMqgdVUTp0.png', name: 'ocd-badge.png' },
  ],
  // Work page — project thumbnails
  'public/images/work': [
    { url: 'https://framerusercontent.com/images/HrsQ7OXlTIiPA5AJVGhBkpjtI.png', name: 'noise-jr.png' },
    { url: 'https://framerusercontent.com/images/pUVFuY57MIyh0MARyb2Kr1My8o.jpg', name: 'vernacular-coffee.jpg' },
    { url: 'https://framerusercontent.com/images/6YdxfXrrCjbzDZBsBBdSsx9VuU.png', name: 'vernacular-coffee-logo.png' },
    { url: 'https://framerusercontent.com/images/dC33vl268psS3GLoVeyMzaBRUE.jpg', name: 'sharing-plates.jpg' },
    { url: 'https://framerusercontent.com/images/wgQ7nFJQhlesgUTFV5ilNotvM0.jpg', name: 'studio-penli.jpg' },
    { url: 'https://framerusercontent.com/images/MnKV4gJRAyD2XOuVqKP1LaXIhg.jpg', name: 'komban-kampini.jpg' },
    { url: 'https://framerusercontent.com/images/WKc86WaWJa2rMSaQIMfVELNEE.jpg', name: 'full-circle.jpg' },
    { url: 'https://framerusercontent.com/images/RGbhHS2JbmhULz8wSjF4p7t4Nk.jpg', name: 'ylabs.jpg' },
    { url: 'https://framerusercontent.com/images/Iw8tYuDORRudLBkp1FUnpV9Hc.jpg', name: 'adplist.jpg' },
    { url: 'https://framerusercontent.com/images/ZXFpsA4HwfpO8WJlFNU9sxJWlH4.jpg', name: 'untitled-font.jpg' },
    { url: 'https://framerusercontent.com/images/bPIuXOfNO3Th58BsNlzmpnb0Vk.jpg', name: 'mdes-thesis.jpg' },
  ],
  // Archive page
  'public/images/archive': [
    { url: 'https://framerusercontent.com/images/T7A92rKirOWVTgs9tBLo7KIcyQ.jpg', name: 'archive-01.jpg' },
    { url: 'https://framerusercontent.com/images/wlexcoHjrTI4VcidsrqNRn7tGA.png', name: 'archive-02.png' },
    { url: 'https://framerusercontent.com/images/WxAuNLCYW9oQ7mY5boZP8imKxo.png', name: 'archive-03.png' },
    { url: 'https://framerusercontent.com/images/8pvpTy53NnjZO9ycj5nnY8r5nhE.png', name: 'archive-04.png' },
    { url: 'https://framerusercontent.com/images/wlNSOwRHgNjKltBAO6OQnqbTxb4.png', name: 'archive-05.png' },
    { url: 'https://framerusercontent.com/images/VgKrLuwGNqL3MIlmb36BrnK5eXI.gif', name: 'archive-06.gif' },
    { url: 'https://framerusercontent.com/images/Q5ujh1n31bgfdPYF9kjxLM4qofw.gif', name: 'archive-07.gif' },
    { url: 'https://framerusercontent.com/images/yJf735fttnLAUbM4jXchJBdfeI.jpeg', name: 'archive-08.jpg' },
    { url: 'https://framerusercontent.com/images/OBAzG4V6k8lIU9ehsCPUEyMRo.jpg', name: 'archive-09.jpg' },
    { url: 'https://framerusercontent.com/images/Aqtznj3x7H87unX7b4zTJj0gM.jpg', name: 'archive-10.jpg' },
    { url: 'https://framerusercontent.com/images/uGAWMefYbZcK8NeSbWLOF3sQ.png', name: 'archive-11.png' },
    { url: 'https://framerusercontent.com/images/jprp3PXZbNWplSzcT3DhRdfs8GA.jpg', name: 'archive-12.jpg' },
    { url: 'https://framerusercontent.com/images/LgB8Yp61RCgWR3IeeXyv9Pdt4.png', name: 'archive-13.png' },
    { url: 'https://framerusercontent.com/images/TKwtj5R5JtL3t7mxHssPYWLZoQo.png', name: 'archive-14.png' },
    { url: 'https://framerusercontent.com/images/WeLnz4gTO40sFHuVsfSGyY5zr8Y.jpg', name: 'archive-15.jpg' },
    { url: 'https://framerusercontent.com/images/R1KBt3V7B6IxxD7dEslvIA9g.jpg', name: 'archive-16.jpg' },
    { url: 'https://framerusercontent.com/images/SegQVkOCgSzPnT4g1lcRALTk.jpg', name: 'archive-17.jpg' },
    { url: 'https://framerusercontent.com/images/5valZZ4klREbWUPkAR4vwLK84U.jpg', name: 'archive-18.jpg' },
    { url: 'https://framerusercontent.com/images/iYOzAoF5zedwnQYmdWxwr94Lr8.png', name: 'archive-19.png' },
    { url: 'https://framerusercontent.com/images/6cPju5X3x3Lj8N3xrsoVQu2GU.png', name: 'archive-20.png' },
    { url: 'https://framerusercontent.com/images/KDe2HoaIjmecXwX8KCiTOuTe4iQ.png', name: 'archive-21.png' },
    { url: 'https://framerusercontent.com/images/cT3aTlcDuktVxCVdZQ19YGEisU.png', name: 'archive-22.png' },
    { url: 'https://framerusercontent.com/images/EonSSjD4piTKbd9aGkVtWSRehM.png', name: 'archive-23.png' },
  ],
  // SEO assets
  'public/seo': [
    { url: 'https://framerusercontent.com/images/KAbSMV2EVJiNbnAKLZaZqjVSuOc.png', name: 'favicon.png' },
    { url: 'https://framerusercontent.com/images/1jleRaoGtSxv1sYyW1GgI0dHs.png', name: 'og-image.png' },
    { url: 'https://framerusercontent.com/images/6OjDa5E9ZbtrIQKamVbEIYKv84.png', name: 'apple-touch-icon.png' },
  ],
  // Fonts (General Sans from fontshare via framerusercontent)
  'public/fonts': [
    { url: 'https://framerusercontent.com/third-party-assets/fontshare/wf/MFQT7HFGCR2L5ULQTW6YXYZXXHMPKLJ3/YWQ244D6TACUX5JBKATPOW5I5MGJ3G73/7YY3ZAAE3TRV2LANYOLXNHTPHLXVWTKH.woff2', name: 'GeneralSans-Regular.woff2' },
    { url: 'https://framerusercontent.com/third-party-assets/fontshare/wf/3RZHWSNONLLWJK3RLPEKUZOMM56GO4LJ/BPDRY7AHVI3MCDXXVXTQQ76H3UXA63S3/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2', name: 'GeneralSans-Medium.woff2' },
    { url: 'https://framerusercontent.com/third-party-assets/fontshare/wf/KWXO5X3YW4X7OLUMPO4X24HQJGJU7E2Q/VOWUQZS3YLP66ZHPTXAFSH6YACY4WJHT/NIQ54PVBBIWVK3PFSOIOUJSXIJ5WTNDP.woff2', name: 'GeneralSans-Bold.woff2' },
    { url: 'https://framerusercontent.com/third-party-assets/fontshare/wf/GQOITZI54NH6HDBP26XAMQYTXB4JQ3NQ/VY7SXNCPHYFLQTOFY72GM4OZTBH62U2D/AHPLTG2YASI4OYLGJV4CF3P25VBHPK5X.woff2', name: 'GeneralSans-RegularItalic.woff2' },
    { url: 'https://framerusercontent.com/third-party-assets/fontshare/wf/ST6AL2GVQRSWVDOXZNSHY2SMWYYSVFEK/WJ26NN5JS6IPLBXEKX7WHB7HACXDTAKH/H7W54QQR2V6KL5KMDA2PD2KSQRCZHPRE.woff2', name: 'GeneralSans-MediumItalic.woff2' },
    { url: 'https://framerusercontent.com/third-party-assets/fontshare/wf/LHQJ5KSAL7VGAEIDSTEXCCOIUKFLT2I6/GW57XUEG4ZBVMLZZTQZTGYPROITRRQ5W/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2', name: 'GeneralSans-Variable.woff2' },
  ],
};

async function downloadFile(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${url}`);
  await pipeline(res.body, createWriteStream(dest));
  return dest;
}

async function downloadBatch(items, dir, batchSize = 4) {
  mkdirSync(path.join(rootDir, dir), { recursive: true });
  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    await Promise.all(
      batch.map(async ({ url, name }) => {
        const dest = path.join(rootDir, dir, name);
        if (existsSync(dest)) { console.log(`SKIP ${name}`); return; }
        try {
          await downloadFile(url, dest);
          console.log(`OK   ${dir}/${name}`);
        } catch (e) {
          console.error(`FAIL ${name}: ${e.message}`);
        }
      })
    );
  }
}

console.log('Downloading assets...\n');
for (const [dir, items] of Object.entries(assets)) {
  console.log(`\n--- ${dir} (${items.length} files) ---`);
  await downloadBatch(items, dir);
}
console.log('\nDone!');
