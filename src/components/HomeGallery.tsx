'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Gravity, { MatterBody } from './fancy/physics/gravity';

const BASE_PRODUCTS = [
  { src: '/images/home/DalstonCoffee.svg', w: 766, h: 834, imgStyle: { width: '22vw', height: 'auto' }, bodyW: '20vw', bodyH: '18vw' },
  { src: '/images/home/HavabanHarde.svg', w: 483, h: 658, imgStyle: { width: '13vw', height: 'auto' }, bodyW: '13vw', bodyH: '14vw' },
  { src: '/images/home/FellowKettle.svg', w: 639, h: 496, imgStyle: { width: '22vw', height: 'auto' }, bodyW: '20vw', bodyH: '13vw' },
  { src: '/images/home/OliveOil.svg', w: 602, h: 1637, imgStyle: { height: '65vh', width: 'auto' }, bodyW: '22vh', bodyH: '50vh' },
  { src: '/images/home/Guinness.svg', w: 366, h: 733, imgStyle: { height: '48vh', width: 'auto' }, bodyW: '22vh', bodyH: '36vh' },
  { src: '/images/home/SoySauce.svg', w: 766, h: 2095, imgStyle: { height: '68vh', width: 'auto' }, bodyW: '24vh', bodyH: '52vh' },
  { src: '/images/home/StrangeBuildings.svg', w: 477, h: 727, imgStyle: { height: '50vh', width: 'auto' }, bodyW: '18vh', bodyH: '38vh' },
  { src: '/images/home/Casio.svg', w: 346, h: 286, imgStyle: { width: '16vw', height: 'auto' }, bodyW: '14vw', bodyH: '11vw' },
];

// Mobile-scaled sizes — all vw-based since portrait screens are narrow
const MOBILE_PRODUCTS = [
  { src: '/images/home/DalstonCoffee.svg', w: 766, h: 834, imgStyle: { width: '36vw', height: 'auto' }, bodyW: '34vw', bodyH: '37vw' },
  { src: '/images/home/HavabanHarde.svg', w: 483, h: 658, imgStyle: { width: '24vw', height: 'auto' }, bodyW: '22vw', bodyH: '30vw' },
  { src: '/images/home/FellowKettle.svg', w: 639, h: 496, imgStyle: { width: '38vw', height: 'auto' }, bodyW: '36vw', bodyH: '28vw' },
  { src: '/images/home/OliveOil.svg', w: 602, h: 1637, imgStyle: { width: '18vw', height: 'auto' }, bodyW: '16vw', bodyH: '44vw' },
  { src: '/images/home/Guinness.svg', w: 366, h: 733, imgStyle: { width: '20vw', height: 'auto' }, bodyW: '18vw', bodyH: '36vw' },
  { src: '/images/home/SoySauce.svg', w: 766, h: 2095, imgStyle: { width: '20vw', height: 'auto' }, bodyW: '18vw', bodyH: '50vw' },
  { src: '/images/home/StrangeBuildings.svg', w: 477, h: 727, imgStyle: { width: '26vw', height: 'auto' }, bodyW: '24vw', bodyH: '36vw' },
  { src: '/images/home/Casio.svg', w: 346, h: 286, imgStyle: { width: '30vw', height: 'auto' }, bodyW: '28vw', bodyH: '23vw' },
];

// X slots spread across screen — each item gets its slot ± random offset
const X_SLOTS = [8, 19, 30, 41, 52, 63, 74, 85];

type Product = typeof BASE_PRODUCTS[0] & {
  x: string;
  y: string;
  angle: number;
  matterBodyOptions: { restitution: number; friction: number; density: number; angularVelocity: number };
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomizeProducts(source: typeof BASE_PRODUCTS): Product[] {
  const shuffled = shuffle(source);
  return shuffled.map((p, i) => ({
    ...p,
    x: `${X_SLOTS[i] + (Math.random() - 0.5) * 8}%`,
    y: `${-8 + Math.random() * 16}%`,
    angle: (Math.random() - 0.5) * 44,
    matterBodyOptions: {
      restitution: 0.28 + Math.random() * 0.18,
      friction: 0.5,
      density: 0.002,
      angularVelocity: (Math.random() - 0.5) * 0.14,
    },
  }));
}

export function HomeGallery() {
  const [isMobile, setIsMobile] = useState(false);
  const [viewportH, setViewportH] = useState(0);
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    const init = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setViewportH(window.innerHeight);
      setProducts(randomizeProducts(mobile ? MOBILE_PRODUCTS : BASE_PRODUCTS));
    };
    init();
    window.addEventListener('resize', init);
    return () => window.removeEventListener('resize', init);
  }, []);

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: isMobile && viewportH ? `${viewportH}px` : '100vh',
        backgroundColor: '#FFFFFF',
        overflow: 'hidden',
      }}
    >
      {/* Large logo mark in background */}
      <Image
        src={isMobile ? '/images/LogoHomePhone.svg' : '/images/LogoHome.svg'}
        alt=""
        width={isMobile ? 143.52 : 325.75}
        height={isMobile ? 336.68 : 161.78}
        unoptimized
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: isMobile ? '50%' : '34%',
          left: '50%',
          transform: isMobile ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
          width: isMobile ? '80vw' : '70vw',
          height: 'auto',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 1,
        }}
      />

      {/* Physics gravity field — images fall and stack at bottom */}
      {products && <Gravity
        gravity={{ x: 0, y: 1 }}
        className="w-full h-full z-[2]"
        addTopWall={false}
        grabCursor={true}
      >
        {products.map((p, i) => (
          <MatterBody
            key={i}
            x={p.x}
            y={p.y}
            angle={p.angle}
            matterBodyOptions={p.matterBodyOptions}
          >
            <div style={{ width: p.bodyW, height: p.bodyH, overflow: 'visible', position: 'relative' }}>
              <Image
                src={p.src}
                alt=""
                width={p.w}
                height={p.h}
                unoptimized
                loading={i === 0 ? 'eager' : 'lazy'}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  ...p.imgStyle,
                  maxWidth: 'none',
                }}
              />
            </div>
          </MatterBody>
        ))}
      </Gravity>}
    </div>
  );
}
