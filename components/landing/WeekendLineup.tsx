'use client';

import React, { useMemo, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import { LINEUP_MEMBERS } from '@/lib/data/lineup';

// SVG Paper Tear Turbulence Filter
const RippedPaperFilter = () => (
  <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }} aria-hidden="true">
    <defs>
      <filter id="paper-tear-filter">
        {/* High-frequency noise for paper fibers */}
        <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="4" result="noise" />
        {/* Displace the edges of the shape based on the noise */}
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="12" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </defs>
  </svg>
);

// Deterministic Ripped Paper Ribbon/Tape
const RippedRibbon = ({ initialSeed, className }: { initialSeed: number; className?: string }) => {
  const path = useMemo(() => {
    let seed = initialSeed;
    const rand = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
    
    const width = 1440;
    const segments = 120; // High-detail segments
    const step = width / segments;
    
    let topPoints: string[] = [];
    let bottomPoints: string[] = [];
    
    // Top edge: fluctuates around Y = 6px
    for (let i = 0; i <= segments; i++) {
      const x = i * step;
      const y = 6 + (rand() - 0.5) * 8; // variation between 2px and 10px
      topPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    
    // Bottom edge: fluctuates around Y = 22px
    for (let i = segments; i >= 0; i--) {
      const x = i * step;
      const y = 22 + (rand() - 0.5) * 8; // variation between 18px and 26px
      bottomPoints.push(`${x.toFixed(1)},${y.toFixed(1)}`);
    }
    
    return `M ${topPoints.join(' L ')} L ${bottomPoints.join(' L ')} Z`;
  }, [initialSeed]);

  return (
    <div className={`w-full overflow-hidden leading-none z-20 select-none pointer-events-none ${className}`}>
      <svg 
        viewBox="0 0 1440 28" 
        preserveAspectRatio="none" 
        className="w-full h-[22px] sm:h-[32px] relative block"
      >
        {/* Drop shadow layer */}
        <path 
          d={path} 
          fill="rgba(0, 0, 0, 0.5)" 
          transform="translate(0, 2)"
          style={{ filter: 'url(#paper-tear-filter)' }} 
        />
        {/* White torn paper strip */}
        <path 
          d={path} 
          fill="#fbfbf9" // Warm textured white
          style={{ filter: 'url(#paper-tear-filter)' }} 
        />
      </svg>
    </div>
  );
};

// Staggered Y offsets on desktop (lg and up) for exactly 8 cards
const desktopOffsets = [
  'lg:translate-y-8',   // Card 1
  'lg:-translate-y-6',  // Card 2
  'lg:translate-y-4',   // Card 3
  'lg:-translate-y-8',  // Card 4
  'lg:translate-y-6',   // Card 5
  'lg:-translate-y-4',  // Card 6
  'lg:translate-y-8',   // Card 7
  'lg:-translate-y-6',  // Card 8
];

export default function WeekendLineup() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll handler for mobile navigation
  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.65; // Scroll by 65% of screen width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative w-full bg-[#050505] overflow-hidden select-none">
      {/* SVG Filters */}
      <RippedPaperFilter />

      {/* Scoped CSS Styles to resolve Mobile vs Desktop image scaling & transforms */}
      <style dangerouslySetInnerHTML={{ __html: `
        .lineup-portrait-img {
          transform: translate(var(--tx-mobile, 0px), var(--ty-mobile, 0px)) scale(var(--scale-mobile, 1));
          transform-origin: bottom center;
        }
        @media (min-width: 1024px) {
          .lineup-portrait-img {
            transform: translate(var(--tx-desktop, 0px), var(--ty-desktop, 0px)) scale(var(--scale-desktop, 1));
            transform-origin: bottom center;
          }
        }
      `}} />

      {/* 1. TITLE SECTION (Above top ripped tape) */}
      <div className="relative w-full pt-16 pb-12 bg-[#09090b]">
        {/* Grunge Overlay for Title Section */}
        <div 
          className="absolute inset-0 pointer-events-none z-[1] opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: "url('/images/bg/bg_grunge_2_1779981294962.png')",
            backgroundRepeat: 'repeat',
          }}
        />
        
        <div className="container-wide relative z-10 px-4 sm:px-6 mx-auto">
          <SectionHeader 
            title="Core Team" 
            subtitle="Meet the builders leading WnCC NIT Patna forward" 
            accent="primary" 
          />
        </div>
      </div>

      {/* TOP TORN PAPER DIVIDER */}
      <RippedRibbon initialSeed={12345} className="relative z-20" />

      {/* 2. CARDS SECTION (Between torn tapes with Graffiti Backdrop) */}
      <div className="relative w-full py-20 sm:py-28 bg-[#040810]">
        
        {/* Blue Cyber Graffiti Background Image */}
        <div 
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{
            backgroundImage: "url('/images/graffiti/blue_graffiti_lineup.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        {/* Grunge Overlay for extra grit */}
        <div 
          className="absolute inset-0 pointer-events-none z-[1] opacity-25 mix-blend-overlay"
          style={{
            backgroundImage: "url('/images/bg/bg_grunge_3_1779981313259.png')",
            backgroundRepeat: 'repeat',
          }}
        />

        <div className="container-wide relative z-10 px-4 sm:px-6 mx-auto">
          {/* Cards Grid: Mobile swipeable track; Desktop 8-column row */}
          <div 
            ref={scrollContainerRef}
            className="flex lg:grid lg:grid-cols-8 gap-4 xl:gap-5 overflow-x-auto lg:overflow-visible pb-8 lg:pb-12 px-4 lg:px-0 snap-x snap-mandatory no-scrollbar scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {LINEUP_MEMBERS.map((member, index) => {
              const desktopOffset = desktopOffsets[index] || '';
              return (
                <Link 
                  key={member.id}
                  href={member.link}
                  className={`flex-shrink-0 w-[56vw] sm:w-[36vw] md:w-[26vw] lg:w-full snap-center relative group block transition-all duration-500 ease-out cursor-pointer ${desktopOffset}`}
                >
                  {/* Outer Skew Wrapper (Card height aspect-3/5.6, roundness reduced to 8px) */}
                  <div 
                    className="relative w-full aspect-[3/5.6] overflow-hidden rounded-[8px] bg-gradient-to-b from-[#00D4FF] via-[#005580] to-[#001a33] border border-white/10 shadow-2xl group-hover:border-[#00D4FF]/60 group-hover:shadow-[0_0_40px_rgba(0,212,255,0.35)] transition-all duration-500 transform skew-x-[-7deg] sm:skew-x-[-10deg]"
                    style={{
                      WebkitMaskImage: '-webkit-radial-gradient(white, black)',
                      maskImage: 'radial-gradient(white, black)'
                    }}
                  >
                    
                    {/* Background Large Text - Member Name in Bold White (rotated) */}
                    <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none opacity-[0.28] group-hover:opacity-[0.42] transition-opacity duration-500 z-0">
                      <span 
                        className="text-[3.2rem] sm:text-[4rem] font-black tracking-widest text-white uppercase rotate-90 select-none whitespace-nowrap block text-center"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {member.name}
                      </span>
                    </div>

                    {/* Neon red linear gradient overlay - placed in skewed context to prevent border bleed */}
                    <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#FF003C]/80 via-[#FF003C]/15 to-transparent opacity-95 z-20 pointer-events-none" />

                    {/* Inner Content Wrapper - Unskewed to keep portrait straight */}
                    <div className="absolute inset-0 w-full h-full transform skew-x-[7deg] sm:skew-x-[10deg] scale-[1.08] origin-center z-10 flex flex-col justify-end">
                      
                      {/* Portrait Image Container - Skewed alignment with scale/translate support */}
                      <div 
                        className="absolute inset-0 w-full h-full overflow-hidden lineup-portrait-img"
                        style={{
                          '--tx-desktop': `${member.imageTransform?.x || 0}px`,
                          '--ty-desktop': `${member.imageTransform?.y || 0}px`,
                          '--scale-desktop': `${member.imageTransform?.scale || 1}`,
                          '--tx-mobile': `${member.mobileTransform?.x || 0}px`,
                          '--ty-mobile': `${member.mobileTransform?.y || 0}px`,
                          '--scale-mobile': `${member.mobileTransform?.scale || 1}`,
                        } as React.CSSProperties}
                      >
                        <Image 
                          src={member.image}
                          alt={member.name}
                          fill
                          sizes="(max-width: 640px) 56vw, (max-width: 1024px) 26vw, 12vw"
                          className="object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                      </div>

                    </div>

                    {/* Card Content Overlay - Placed in skewed context to center perfectly, z-30 to stack on top of red gradient */}
                    <div className="absolute inset-x-0 bottom-0 p-5 z-30 flex flex-col items-center justify-end text-center pb-6">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] transform skew-x-[7deg] sm:skew-x-[10deg]">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* 3. MOBILE SLIDE BUTTONS (Visible only on mobile/tablet screens below lg) */}
          <div className="flex lg:hidden justify-center gap-4 mt-8 relative z-30">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-[#00D4FF]/30 bg-black/60 text-[#00D4FF] hover:border-[#00D4FF] hover:text-white flex items-center justify-center transition-all active:scale-95 shadow-[0_0_15px_rgba(0,212,255,0.15)] cursor-pointer"
              aria-label="Slide Left"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-[#00D4FF]/30 bg-black/60 text-[#00D4FF] hover:border-[#00D4FF] hover:text-white flex items-center justify-center transition-all active:scale-95 shadow-[0_0_15px_rgba(0,212,255,0.15)] cursor-pointer"
              aria-label="Slide Right"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* BOTTOM TORN PAPER DIVIDER */}
      <RippedRibbon initialSeed={67890} className="relative z-20" />

      {/* 4. LOGO FOOTER SECTION (Below bottom ripped tape) */}
      <div className="relative w-full py-8 bg-[#09090b]">
        <div className="container-wide relative z-10 mx-auto flex flex-col items-center justify-center select-none">
          <Image 
            src="/images/logo1.png" 
            alt="WnCC NIT Patna" 
            width={88} 
            height={88} 
            className="opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
          <span className="text-[10px] tracking-[0.25em] text-[var(--text-muted)] font-bold uppercase mt-2">
            Web & Coding Club NIT Patna
          </span>
        </div>
      </div>
    </section>
  );
}
