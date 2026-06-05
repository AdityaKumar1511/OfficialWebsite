'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { ClubEvent } from '@/lib/types';

interface EventCardProps {
  event: ClubEvent & { images?: string[] }; 
  index: number;
}

export default function EventCard({ event, index }: EventCardProps) {
  const isEven = index % 2 === 0;
  const variation = index % 4;

  // Track the active image index for the interactive slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Extract images array or fall back to default fallback single image inside an array
  const imagesArray = event.images && event.images.length > 0 ? event.images : [event.image];

  // Handler to cycle to the next image manually
  const handleNextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); // Prevents layout card triggers
    setCurrentImageIndex((prev) => (prev + 1) % imagesArray.length);
  };

  // Automated 2-second interval sliding
  useEffect(() => {
    if (imagesArray.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagesArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [imagesArray.length]);

  // SMOOTH SLIDING MECHANISM: No black flash, elements slide over each other
  const ImageSliderFrame = () => (
    <div 
      onClick={handleNextImage}
      className="absolute w-full h-full bg-[#030303] overflow-hidden cursor-pointer select-none group/slider"
    >
      {/* Horizontally Moving Image Tracks */}
      {imagesArray.map((imgSrc, idx) => {
        // Calculate states for smooth carousel sliding layer logic
        const isActive = idx === currentImageIndex;
        
        return (
          <div 
            key={idx}
            className={`absolute inset-0 w-full h-full transition-transform duration-1000 ease-in-out ${
              isActive 
                ? 'translate-x-0 z-10' 
                : 'translate-x-full z-0'
            }`}
            style={{
              // Pre-loading optimization to prevent any layout shifts
              visibility: isActive || idx === (currentImageIndex - 1 + imagesArray.length) % imagesArray.length ? 'visible' : 'hidden'
            }}
          >
            <Image
              src={imgSrc || '/images/placeholder.png'}
              alt={`${event.title} slide view ${idx + 1}`}
              fill
              className="object-cover brightness-105"
              sizes="(max-width-768px) 100vw, 480px"
              priority={idx === 0 || isActive}
            />
          </div>
        );
      })}

      {/* Cyber Tech HUD Overlay Indicator */}
      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md border border-[#51C4F9]/40 px-2 py-1 font-mono text-[9px] text-[#51C4F9] tracking-widest z-30 pointer-events-none uppercase">
        SLIDE // {String(currentImageIndex + 1).padStart(2, '0')}•{String(imagesArray.length).padStart(2, '0')}
      </div>

      {/* Subtle click interaction hint UI */}
      <div className="absolute bottom-3 right-3 bg-black/60 opacity-0 group-hover/slider:opacity-100 transition-opacity duration-300 px-2 py-0.5 border border-zinc-800 font-mono text-[8px] text-zinc-400 z-30 pointer-events-none uppercase tracking-wider">
        Tap to Skip ▸
      </div>
    </div>
  );

  return (
    <div className="relative w-full py-16 md:py-24 border-b border-zinc-900 bg-zinc-950 group">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* GRAPHIC COLLAGE SECTION */}
        <div 
          className={`lg:col-span-6 relative ${isEven ? 'lg:order-first' : 'lg:order-last'}`}
        >
          <div className="relative w-full aspect-[4/3] max-w-[480px] mx-auto select-none">
            
            {/* VARIATION 0 */}
            {variation === 0 && (
              <>
                <div className="absolute top-0 right-0 w-[78%] h-[78%] border-2 border-[#51C4F9] shadow-2xl overflow-hidden bg-zinc-950 z-20 transition-transform duration-500 ease-out group-hover:scale-105">
                  <ImageSliderFrame />
                </div>
                <div className="absolute bottom-0 left-0 w-[45%] h-[55%] shadow-2xl overflow-hidden bg-zinc-900 z-10 transition-transform duration-500 group-hover:-translate-y-1">
                  <Image
                    src={event.image}
                    alt={`${event.title} sketch`}
                    fill
                    className="object-cover filter grayscale contrast-125 brightness-90 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                    sizes="(max-width-768px) 50vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 text-[9px] font-mono text-white/60 tracking-wider">
                    // VOL_01
                  </div>
                </div>
              </>
            )}

            {/* VARIATION 1 */}
            {variation === 1 && (
              <>
                <div className="absolute top-0 left-0 w-[78%] h-[78%] border-2 border-[#51C4F9] shadow-2xl overflow-hidden bg-zinc-950 z-20 transition-transform duration-500 ease-out group-hover:scale-105">
                  <ImageSliderFrame />
                </div>
                <div className="absolute bottom-0 right-0 w-[45%] h-[52%] shadow-2xl overflow-hidden bg-zinc-900 z-10 transition-transform duration-500 group-hover:translate-y-1">
                  <Image
                    src={event.image}
                    alt={`${event.title} sketch`}
                    fill
                    className="object-cover filter grayscale contrast-125 brightness-90 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                    sizes="(max-width-768px) 50vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/60 tracking-wider">
                    // SEC_02
                  </div>
                </div>
                
              </>
            )}

            {/* VARIATION 2 */}
            {variation === 2 && (
              <>
                <div className="absolute bottom-0 right-0 w-[78%] h-[78%] border-2 border-[#51C4F9] shadow-2xl overflow-hidden bg-zinc-950 z-20 transition-transform duration-500 ease-out group-hover:scale-105">
                  <ImageSliderFrame />
                </div>
                <div className="absolute top-0 left-0 w-[48%] h-[50%] shadow-2xl overflow-hidden bg-zinc-900 z-10 transition-transform duration-500 group-hover:scale-105">
                  <Image
                    src={event.image}
                    alt={`${event.title} sketch`}
                    fill
                    className="object-cover filter grayscale contrast-125 brightness-90 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                    sizes="(max-width-768px) 50vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 left-2 text-[9px] font-mono text-white/60 tracking-wider">
                    // NUM_03
                  </div>
                </div>
                
              </>
            )}

            {/* VARIATION 3 */}
            {variation === 3 && (
              <>
                <div className="absolute bottom-0 left-0 w-[78%] h-[78%] border-2 border-[#51C4F9] shadow-2xl overflow-hidden bg-zinc-950 z-20 transition-transform duration-500 ease-out group-hover:scale-105">
                  <ImageSliderFrame />
                </div>
                <div className="absolute top-0 right-0 w-[45%] h-[55%] shadow-2xl overflow-hidden bg-zinc-900 z-10 transition-transform duration-500 group-hover:translate-x-1">
                  <Image
                    src={event.image}
                    alt={`${event.title} sketch`}
                    fill
                    className="object-cover filter grayscale contrast-125 brightness-90 transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:grayscale-0 group-hover:contrast-100 group-hover:brightness-100"
                    sizes="(max-width-768px) 50vw, 200px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                  <div className="absolute bottom-2 right-2 text-[9px] font-mono text-white/60 tracking-wider">
                    // ACT_04
                  </div>
                </div>
                <div className="absolute top-[18%] left-[28%] w-[24%] h-[30%] bg-[#51C4F9] border border-[#51C4F9] text-black flex flex-col justify-between p-3 font-mono z-30 shadow-xl select-none transition-transform duration-500 group-hover:scale-105">
                  <div className="flex flex-col justify-between h-full">
                    <span className="text-[8px] font-black leading-none tracking-tight">INIT //</span>
                    <span className="text-base font-black leading-none tracking-widest text-center">OVER</span>
                    <span className="text-[8px] font-black leading-none text-right">ハック</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* TEXT DETAILS SECTION */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
          <div className="flex items-center gap-3 text-[10px] font-mono font-bold tracking-[0.2em] text-[#51C4F9]">
            <span>// EVENT_{String(index + 1).padStart(2, '0')}</span>
            <span className="h-[1px] w-8 bg-[#51C4F9]/40" />
            <span className="bg-zinc-900 border border-zinc-800 px-2 py-0.5 uppercase tracking-wider text-zinc-400">
              {event.status}
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight font-display border-b border-zinc-800 pb-4 group-hover:border-[#51C4F9] transition-colors duration-300">
            {event.title}
          </h2>

          <div className="grid grid-cols-2 gap-4 font-mono text-xs text-zinc-500 py-1">
            <div className="space-y-1">
              <span className="text-[#51C4F9] font-extrabold uppercase tracking-widest text-[10px] block">// DATE:</span>
              <span className="text-zinc-300 font-semibold uppercase">
                {new Date(event.date).toLocaleDateString('en-IN', {
                  day: '2-digit',
                  month: 'short',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="space-y-1">
              <span className="text-[#51C4F9] font-extrabold uppercase tracking-widest text-[10px] block">// LOCATION:</span>
              <span className="text-zinc-300 font-semibold uppercase truncate block">
                {event.location}
              </span>
            </div>
          </div>

          <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans max-w-xl">
            {event.description}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {event.tags.map((tag) => (
              <span 
                key={tag} 
                className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider border border-zinc-800 bg-zinc-900/40 text-zinc-500 hover:border-[#51C4F9] hover:text-[#51C4F9] transition-colors duration-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4">
            {event.registrationLink || event.status === 'upcoming' ? (
              <a
                href={event.registrationLink || '#'}
                className="inline-block px-7 py-3 text-xs font-mono font-black uppercase tracking-[0.2em] border-2 border-white text-white hover:bg-[#51C4F9]  hover:text-black transition-all duration-300 active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none select-none"
              >
                COMING SOON
              </a>
            ) : (
              <a
                href={`/events/${event.id}`}
                className="inline-block px-7 py-3 text-xs font-mono font-black uppercase tracking-[0.2em] border-2 border-white text-white hover:bg-[#51C4F9] hover:text-black transition-all duration-300 active:scale-95 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.15)] hover:shadow-none select-none"
              >
                VIEW EVENT
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}