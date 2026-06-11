import { writeFileSync, mkdirSync } from 'fs';
import { join } from 'path';

const outDir = './public/images/noise-jr';
mkdirSync(outDir, { recursive: true });

const assets = [
  { url: 'https://framerusercontent.com/images/tW2ixNJbHZ7o7BA27xQunxWdqOM.webp?width=1520&height=715', name: 'hero-champ3-watch.webp' },
  { url: 'https://framerusercontent.com/images/d5l8zo2ZLHgA5utYjzjEdd0Vz8.jpg?width=6250&height=3909', name: 'social-media-01.jpg' },
  { url: 'https://framerusercontent.com/images/32Gz5GkQtjs40pJJp8440iF85s.jpg?width=6250&height=3909', name: 'social-media-02.jpg' },
  { url: 'https://framerusercontent.com/images/8WoRiQ9YfGB7rbMNUZcGzrMdbVA.jpg?width=6250&height=3909', name: 'identity-assets-01.jpg' },
  { url: 'https://framerusercontent.com/images/apqBilKWPngSV6gXk5j2Ama86g.webp?width=1520&height=715', name: 'explorer2-watch.webp' },
  { url: 'https://framerusercontent.com/images/yd2cpkUsk9IR6OeiZvjrHGth78I.jpg?width=6250&height=3909', name: '3d-assets.jpg' },
  { url: 'https://framerusercontent.com/images/DPvhFKcY9CP0EubPEVfhXUQJlPI.jpg?width=4104&height=3174', name: 'app-icon.jpg' },
  { url: 'https://framerusercontent.com/images/VlZbeUCTQoC16o5aC3EDmv5yVE.jpg?width=4000&height=3000', name: 'browser-favicon.jpg' },
  { url: 'https://framerusercontent.com/images/tbp510cV0LP6I9nLjhjCvHDiDo0.jpg?width=6250&height=3909', name: 'website-mockup.jpg' },
  { url: 'https://framerusercontent.com/images/xCxAnltWCCEeRz2xN9RBS9kcorc.jpg?width=6250&height=3909', name: 'identity-assets-02.jpg' },
  { url: 'https://framerusercontent.com/images/Q5EY9EyHeopH48N97Nj9OKOrEuI.jpg?width=6250&height=3520', name: 'colour-palette.jpg' },
];

async function download(url, name) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const buf = await res.arrayBuffer();
    writeFileSync(join(outDir, name), Buffer.from(buf));
    console.log(`✓ ${name}`);
  } catch (e) {
    console.error(`✗ ${name}: ${e.message}`);
  }
}

// batch 4 at a time
for (let i = 0; i < assets.length; i += 4) {
  await Promise.all(assets.slice(i, i + 4).map(a => download(a.url, a.name)));
}
console.log('Done.');
