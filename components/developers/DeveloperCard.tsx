'use client';

import { useState, useEffect } from 'react';
import type { Developer } from '@/lib/types';

export default function DeveloperCard({ developer }: { developer: Developer }) {
  const nameParts = developer.name.trim().split(/\s+/);
  const firstName = nameParts[0] || 'DEV';
  const lastName = nameParts.slice(1).join(' ') || 'MEMBER';

  const [scaleFactor, setScaleFactor] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setScaleFactor(0.46);
      } else if (window.innerWidth < 640) {
        setScaleFactor(0.58);
      } else {
        setScaleFactor(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const x = (developer.imageTransform?.x || 0) * scaleFactor;
  // Apply a 0.6x translation dampening factor on mobile to fit the shorter frame
  const yMultiplier = scaleFactor < 1 ? 0.6 : 1;
  const y = (developer.imageTransform?.y || 0) * scaleFactor * yMultiplier;
  const scale = 1 + ((developer.imageTransform?.scale || 1) - 1) * scaleFactor;

  return (
    <div className="relative group w-full max-w-[360px] mx-auto p-1 sm:p-4 flex justify-center mt-2 sm:mt-8 perspective-1000">


      {/* Card Body - EXACTLY matching the white ID card */}
      <div className="w-full bg-[#f4f4f4] rounded-xl sm:rounded-[2rem] shadow-2xl relative flex flex-col transition-all duration-500 ease-out group-hover:scale-105 border-2 sm:border-[3px] border-[#222] overflow-visible"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")',
          boxShadow: '0 20px 40px -10px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,0,0,0.05)'
        }}>

        {/* Top Header Row */}
        <div className="flex justify-between items-start px-2 sm:px-6 pt-4 sm:pt-10 pb-1 sm:pb-2">
          {/* Orange Blocks */}
          <div className="flex flex-col gap-0.5 sm:gap-1 z-10">
            <span className="bg-[#ff5e13] text-black font-impact text-[6px] xs:text-[8px] sm:text-[14px] px-1 sm:px-2 py-0.2 sm:py-0.5 uppercase tracking-wide leading-none w-max shadow-sm border border-black/10">WNCC</span>
            <span className="bg-[#ff5e13] text-black font-impact text-[6px] xs:text-[8px] sm:text-[14px] px-1 sm:px-2 py-0.2 sm:py-0.5 uppercase tracking-wide leading-none w-max shadow-sm border border-black/10">PUBLIC DEV CLASS</span>
          </div>

          {/* 17.08 Text */}
          <div className="text-right z-10">
            <span className="font-impact text-2xl sm:text-5xl text-black leading-none tracking-tighter">17.08</span>
          </div>
        </div>

        {/* Portrait Container */}
        <div className="mx-2 sm:mx-6 mt-1 relative border-2 sm:border-[4px] border-[#222] h-[135px] xs:h-[160px] sm:h-[260px] flex items-end justify-center rounded-sm overflow-visible"
          style={{ 
            backgroundImage: `url(${developer.cardBgImage || "https://res.cloudinary.com/dq1fhihvx/image/upload/v1780581524/original-images/wsyju8apliasuzstyguw.png"})`, 
            backgroundSize: 'cover', 
            backgroundPosition: 'center' 
          }}>
          {/* Background Overlay (Optional) to make developer pop */}
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-0" />

          {/* Developer Image */}
          <div className="absolute inset-0 flex items-end justify-center z-10 overflow-visible rounded-sm"
            style={{ clipPath: 'polygon(0% -100%, 100% -100%, 100% 100%, 0% 100%)' }}>
            <img
              src={developer.image}
              alt={developer.name}
              className={developer.id === 'lead-dev'
                ? "w-full h-full object-contain object-bottom transition-transform duration-500 ease-out group-hover:scale-110"
                : "w-[90%] h-[95%] object-cover object-bottom transition-transform duration-500 ease-out group-hover:scale-110"
              }
              style={{
                objectPosition: developer.id === 'lead-dev'
                  ? 'bottom center'
                  : `${developer.imagePosition?.x ?? 50}% ${developer.imagePosition?.y ?? 30}%`,
                transform: `translate(${x}px, ${y}px) scale(${scale})`,
                filter: 'drop-shadow(2px 2px 0 white) drop-shadow(-2px -2px 0 white) drop-shadow(-2px 2px 0 white) drop-shadow(2px -2px 0 white) drop-shadow(0 25px 25px rgba(0,0,0,0.5)) contrast(1.25)'
              }}
            />
          </div>

          {/* GET! Text */}
          <div className="absolute left-2 bottom-2 sm:left-auto sm:right-4 sm:bottom-16 z-20 transform rotate-[-15deg] pointer-events-none drop-shadow-md">
            <span className="font-script text-[#ff3300] font-black text-[11px] xs:text-[13px] sm:text-5xl tracking-tighter" style={{ textShadow: '1px 1px 0px rgba(0,0,0,0.1)' }}>DEV!!</span>
          </div>

          {/* Black Circular Sticker (overlapping border) */}
          <div className="absolute -right-2 -bottom-2 sm:-right-5 sm:-bottom-5 w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] sm:w-[85px] sm:h-[85px] bg-[#111] rounded-full border-2 sm:border-[3px] border-[#f4f4f4] flex flex-col items-center justify-center z-30 transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-12 shadow-xl"
            style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.3)' }}>
            <div className="absolute inset-0.5 sm:inset-1 rounded-full border border-dashed border-white/50" />
            <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0">
              <path id="curve" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
              <text fontSize="10" fill="white" fontWeight="bold" letterSpacing="1.5" className="uppercase font-sans">
                <textPath href="#curve" startOffset="0%">BE ADDICTED TO BUILD • WNCC •</textPath>
              </text>
            </svg>
            <div className="flex flex-col items-center justify-center translate-y-0.5 sm:translate-y-1 scale-[0.5] sm:scale-100">
              <span className="text-white font-impact text-lg leading-none mt-1">WNCC</span>
              <span className="text-[#ff5e13] font-impact text-[8px] tracking-wider mt-0.5">2026</span>
            </div>
          </div>
        </div>

        {/* Bottom Section (Name, Role, Socials, Emblem) */}
        <div className="px-2 sm:px-6 pt-2 sm:pt-5 pb-3 sm:pb-8 flex flex-col gap-2 sm:gap-4">

          {/* Name & Role Row */}
          <div className="flex justify-between items-end overflow-hidden">
            <div className="flex flex-col text-[#111] min-w-0 mr-2">
              <span className="font-stencil text-sm xs:text-base sm:text-4xl lg:text-[42px] uppercase leading-[0.85] tracking-tight">{firstName}</span>
              <span className="font-stencil text-sm xs:text-base sm:text-4xl lg:text-[42px] uppercase leading-[0.85] tracking-tight">{lastName}</span>
            </div>
            <div className="text-right flex flex-col text-[#111] shrink-0 max-w-[60px] xs:max-w-[70px] sm:max-w-[140px]">
              <span className="text-[5px] xs:text-[6px] sm:text-[10px] font-impact uppercase text-black tracking-widest mb-0.5">ROLE</span>
              <span className="text-[7px] xs:text-[9px] sm:text-xl font-stencil text-black leading-[1] tracking-tight uppercase">{developer.role}</span>
            </div>
          </div>

          {/* Social Strips & Emblem Row */}
          <div className="flex justify-between items-end mt-1 sm:mt-2">

            {/* Social Strips */}
            <div className="flex flex-col gap-0.5 sm:gap-1.5 w-[60%] sm:w-[65%]">

              {/* Github Strip */}
              <a href={developer.socials.github || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#111] w-full h-[14px] xs:h-[16px] sm:h-[24px] hover:translate-x-2 transition-transform duration-300">
                <div className="bg-[#ff5e13] h-full w-[14px] xs:w-[16px] sm:w-[24px] flex items-center justify-center shrink-0 border-r-2 border-[#111]">
                  <svg className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3.5 sm:h-3.5 fill-current text-[#111]" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                </div>
                <span className="text-white font-impact text-[5px] xs:text-[6px] sm:text-[10px] px-0.5 xs:px-1 sm:px-2 uppercase tracking-widest truncate">
                  {developer.socials.github?.replace('https://github.com/', '') || 'GITHUB'}
                </span>
              </a>

              {/* LinkedIn Strip */}
              <a href={developer.socials.linkedin || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center bg-[#111] w-full h-[14px] xs:h-[16px] sm:h-[24px] hover:translate-x-2 transition-transform duration-300">
                <div className="bg-[#ff5e13] h-full w-[14px] xs:w-[16px] sm:w-[24px] flex items-center justify-center shrink-0 border-r-2 border-[#111]">
                  <svg className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3.5 sm:h-3.5 fill-current text-[#111]" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </div>
                <span className="text-white font-impact text-[5px] xs:text-[6px] sm:text-[10px] px-0.5 xs:px-1 sm:px-2 uppercase tracking-widest truncate">
                  {firstName} {lastName}
                </span>
              </a>

              {/* Email Strip */}
              <a href={`mailto:${developer.socials.email || ''}`} className="flex items-center bg-[#111] w-full h-[14px] xs:h-[16px] sm:h-[24px] hover:translate-x-2 transition-transform duration-300 relative z-10">
                <div className="bg-[#ff5e13] h-full w-[14px] xs:w-[16px] sm:w-[24px] flex items-center justify-center shrink-0 border-r-2 border-[#111]">
                  <svg className="w-2 h-2 xs:w-2.5 xs:h-2.5 sm:w-3.5 sm:h-3.5 fill-current text-[#111]" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 4.456v-8.914l4.623 4.458zm1.402 1.353l3.975 3.832 3.975-3.832 4.961 4.789h-17.872l4.961-4.789zm9.352-1.353l4.623-4.458v8.914l-4.623-4.456zm-7.377-2.929l-8-7.722h16l-8 7.722z" /></svg>
                </div>
                <span className="text-white font-impact text-[5px] xs:text-[6px] sm:text-[10px] px-0.5 xs:px-1 sm:px-2 uppercase tracking-widest truncate">
                  {developer.socials.email || 'EMAIL'}
                </span>
              </a>
            </div>

            {/* Emblem Box */}
            <div className="flex flex-col w-[35%] sm:w-[30%] border-2 sm:border-[3px] border-[#111] bg-white h-[45px] xs:h-[55px] sm:h-[90px]">
              <div className="flex-1 bg-[#111] flex items-center justify-center p-0.5 sm:p-2 relative overflow-hidden">
                <img
                  src="/images/logo1.png"
                  alt="WNCC Logo"
                  className="w-full h-full object-contain scale-[1.2] sm:scale-[1.5]"
                />
              </div>
              <div className="h-[12px] xs:h-[15px] sm:h-[25px] flex flex-col items-center justify-center bg-white">
                <span className="font-impact text-[5px] sm:text-[9px] text-black leading-none">WNCC</span>
                <span className="text-black text-[3px] sm:text-[6px] font-bold tracking-wider leading-none">Coding Club</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style jsx global>{`
        .font-impact { font-family: 'Impact', 'Arial Black', sans-serif; }
        .font-script { font-family: 'Segoe Script', 'Comic Sans MS', cursive; }
        .font-stencil { 
          font-family: 'Stencil', 'Impact', sans-serif; 
          font-weight: 900;
        }
      `}</style>
    </div>
  );
}
