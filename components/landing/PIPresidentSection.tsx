'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '@/hooks/useGSAPAnimation';

function LeadershipHeader() {
  return (
    <div className="leadership-header text-center mb-8 md:mb-14">
      {/* Decorative line */}
      <div className="flex items-center justify-center gap-4 mb-5">
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00D4FF]/40" />
        <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#00D4FF]/50">
          WnCC NIT Patna
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00D4FF]/40" />
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
        <span className="text-white">Our </span>
        <span
          style={{
            background: 'linear-gradient(135deg, #00D4FF, #0099CC, #00D4FF)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Leadership
        </span>
      </h2>

      <p className="mt-4 text-[#A1A6B4] text-sm md:text-base max-w-md mx-auto leading-relaxed">
        Visionaries driving innovation, collaboration, and technical excellence
      </p>
    </div>
  );
}

function PICard() {
  const tags = [
    'Research',
    'Guidance',
    'Innovation',
    'Mentorship',
    'Technology',
    'Academia',
  ];

  return (
    <div
      className="leader-card group relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[32px] border border-white/[0.06] w-full"
      style={{
        background: 'linear-gradient(155deg, #111315 0%, #0c0d0f 50%, #101214 100%)',
        minHeight: 'clamp(420px, 60vw, 680px)',
      }}
    >
      {/* SVG Filter for crisp outline */}
      <svg className="hidden" width="0" height="0">
        <filter id="white-stroke" x="-20%" y="-20%" width="140%" height="140%">
          <feMorphology in="SourceAlpha" operator="dilate" radius="2" result="expanded" />
          <feFlood floodColor="white" result="color" />
          <feComposite in="color" in2="expanded" operator="in" result="stroke" />
          <feMerge>
            <feMergeNode in="stroke" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </svg>

      {/* ═══════ TOP TAG STRIP ═══════ */}
      <div className="relative z-30 px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8">
        <div className="flex items-center gap-2 md:gap-3 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#A1A6B4]/60 overflow-hidden whitespace-nowrap">
          {tags.map((tag, i) => (
            <span key={i} className="flex items-center gap-2 md:gap-3 shrink-0">
              <span className="hover:text-[#00D4FF]/70 transition-colors duration-300 cursor-default">{tag}</span>
              {i !== tags.length - 1 && (
                <span className="text-[#00D4FF]/30">•</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════ NAME + INFO ROW ═══════ */}
      <div className="relative z-30 px-4 sm:px-6 md:px-10 mt-5 sm:mt-6 md:mt-10 flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[#F1F3F5] tracking-tight leading-tight">
            Dr. Mukesh Kumar
          </h3>
          <p className="text-[#A1A6B4] text-xs sm:text-sm md:text-[15px] mt-1">
            PI, Web & Coding Club
          </p>
        </div>

        <div className="text-left md:text-right max-w-[220px]">
          <p className="text-[#A1A6B4]/80 text-xs sm:text-sm leading-relaxed">
            Department of Computer Science & Engineering
          </p>
        </div>
      </div>

      {/* ═══════ GIANT BACKGROUND WORD ═══════ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[70px] sm:text-[100px] md:text-[170px] lg:text-[210px] font-black tracking-tight leading-none uppercase"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(255,255,255,0.04)',
          }}
        >
          MENTOR
        </span>
      </div>

      {/* ═══════ CENTER IMAGE ═══════ */}
      <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dq1fhihvx/image/upload/v1780597822/WhatsApp_Image_2026-06-04_at_15.54.19_vm3jzc.png"
          alt="Dr. Mukesh Kumar"
          width={1080}
          height={1440}
          className="relative z-10 h-[380px] sm:h-[500px] md:h-[700px] lg:h-[820px] w-auto object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          style={{
            scale: 2,
            translate: '-2% 30%',
            transformOrigin: 'bottom center',
            filter: 'url(#white-stroke)',
          }}
          priority
        />
      </div>

      {/* ═══════ BOTTOM GRADIENT OVERLAY ═══════ */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] sm:h-[250px] md:h-[300px] z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0c0d0f 0%, rgba(12,13,15,0.97) 25%, rgba(12,13,15,0.7) 55%, transparent 100%)',
        }}
      />

      {/* ═══════ BOTTOM CONTENT ═══════ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-4 sm:px-6 md:px-10 pb-4 sm:pb-6 md:pb-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 md:gap-4 mb-3 md:mb-5">
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-[#A1A6B4]/60">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-[#00D4FF]/50" />
              <span>WnCC NIT Patna</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-[#00D4FF]/30" />
              <span>@wncc_nitp</span>
            </div>
          </div>

          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-none text-[#F1F3F5]/90">
            Professor In-Charge
          </h4>
        </div>

        <div className="relative border-t border-white/[0.08] pt-3 md:pt-4">
          <p className="text-[#A1A6B4] text-[11px] sm:text-xs md:text-[13px] leading-relaxed max-w-3xl">
            <span className="text-[#00D4FF]/50 mr-1">&ldquo;</span>
            Technology is the bridge between imagination and reality. WnCC empowers students to cross that bridge every day.
            <span className="text-[#00D4FF]/50 ml-1">&rdquo;</span>
          </p>
        </div>
      </div>

      {/* ═══════ HOVER BORDER ═══════ */}
      <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] md:rounded-[32px] pointer-events-none z-40 transition-all duration-500 border border-transparent" />
      <div
        className="absolute inset-0 rounded-[20px] sm:rounded-[24px] md:rounded-[32px] pointer-events-none z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          border: '1px solid rgba(0,212,255,0.12)',
          boxShadow: 'inset 0 0 60px rgba(0,212,255,0.02)',
        }}
      />
    </div>
  );
}

function PresidentCard() {
  const tags = [
    'Innovation',
    'Leadership',
    'Web Development',
    'Open Source',
    'Community',
    'Tech',
  ];

  return (
    <div
      className="leader-card group relative overflow-hidden rounded-[20px] sm:rounded-[24px] md:rounded-[32px] border border-white/[0.06] w-full"
      style={{
        background: 'linear-gradient(155deg, #111315 0%, #0c0d0f 50%, #101214 100%)',
        minHeight: 'clamp(420px, 60vw, 680px)',
      }}
    >
      {/* ═══════ TOP TAG STRIP ═══════ */}
      <div className="relative z-30 px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8">
        <div className="flex items-center gap-2 md:gap-3 text-[8px] sm:text-[9px] md:text-[10px] uppercase tracking-[0.25em] text-[#A1A6B4]/60 overflow-hidden whitespace-nowrap">
          {tags.map((tag, i) => (
            <span key={i} className="flex items-center gap-2 md:gap-3 shrink-0">
              <span className="hover:text-[#00D4FF]/70 transition-colors duration-300 cursor-default">{tag}</span>
              {i !== tags.length - 1 && (
                <span className="text-[#00D4FF]/30">•</span>
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ═══════ NAME + INFO ROW ═══════ */}
      <div className="relative z-30 px-4 sm:px-6 md:px-10 mt-5 sm:mt-6 md:mt-10 flex flex-col md:flex-row justify-between items-start gap-2 md:gap-4">
        <div>
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[2.2rem] font-bold text-[#F1F3F5] tracking-tight leading-tight">
            Anurag Sharma
          </h3>
          <p className="text-[#A1A6B4] text-xs sm:text-sm md:text-[15px] mt-1">
            President, WnCC NIT Patna
          </p>
        </div>

        <div className="text-left md:text-right max-w-[220px]">
          <p className="text-[#A1A6B4]/80 text-xs sm:text-sm leading-relaxed">
            B.Tech CSE, 3rd Year
          </p>
        </div>
      </div>

      {/* ═══════ GIANT BACKGROUND WORD ═══════ */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="text-[70px] sm:text-[100px] md:text-[170px] lg:text-[210px] font-black tracking-tight leading-none uppercase"
          style={{
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(255,255,255,0.04)',
          }}
        >
          LEADER
        </span>
      </div>

      {/* ═══════ CENTER IMAGE ═══════ */}
      <div className="absolute inset-0 flex items-end justify-center z-10 pointer-events-none">
        <Image
          src="https://res.cloudinary.com/dq1fhihvx/image/upload/v1780598014/Remove_background_project_-_June_05_2026_at_00.02.11_bkobue.png"
          alt="Anurag Sharma"
          width={1080}
          height={1440}
          className="relative z-10 h-[380px] sm:h-[500px] md:h-[700px] lg:h-[820px] w-auto object-contain object-bottom transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          style={{
            scale: 1.6,
            translate: '0px 0px',
            transformOrigin: 'bottom center',
          }}
          priority
        />
      </div>

      {/* ═══════ BOTTOM GRADIENT OVERLAY ═══════ */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[200px] sm:h-[250px] md:h-[300px] z-20 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #0c0d0f 0%, rgba(12,13,15,0.97) 25%, rgba(12,13,15,0.7) 55%, transparent 100%)',
        }}
      />

      {/* ═══════ BOTTOM CONTENT ═══════ */}
      <div className="absolute bottom-0 left-0 right-0 z-30 px-4 sm:px-6 md:px-10 pb-4 sm:pb-6 md:pb-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-3 md:gap-4 mb-3 md:mb-5">
          <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-xs text-[#A1A6B4]/60">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-[#00D4FF]/50" />
              <span>WnCC NIT Patna</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <div className="w-[5px] h-[5px] sm:w-[6px] sm:h-[6px] rounded-full bg-[#00D4FF]/30" />
              <span>@wncc_nitp</span>
            </div>
          </div>

          <h4 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight leading-none text-[#F1F3F5]/90">
            Club President
          </h4>
        </div>

        <div className="relative border-t border-white/[0.08] pt-3 md:pt-4">
          <p className="text-[#A1A6B4] text-[11px] sm:text-xs md:text-[13px] leading-relaxed max-w-3xl">
            <span className="text-[#00D4FF]/50 mr-1">&ldquo;</span>
            Building together is not just about code — it&apos;s about community, growth, and pushing boundaries as one.
            <span className="text-[#00D4FF]/50 ml-1">&rdquo;</span>
          </p>
        </div>
      </div>

      {/* ═══════ HOVER BORDER ═══════ */}
      <div className="absolute inset-0 rounded-[20px] sm:rounded-[24px] md:rounded-[32px] pointer-events-none z-40 transition-all duration-500 border border-transparent" />
      <div
        className="absolute inset-0 rounded-[20px] sm:rounded-[24px] md:rounded-[32px] pointer-events-none z-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          border: '1px solid rgba(0,212,255,0.12)',
          boxShadow: 'inset 0 0 60px rgba(0,212,255,0.02)',
        }}
      />
    </div>
  );
}

export default function PIPresidentSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from('.leader-card', {
      opacity: 0,
      y: 80,
      duration: 1.2,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 75%',
      },
    });

    gsap.from('.leadership-header', {
      opacity: 0,
      y: 30,
      duration: 0.9,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="leadership"
      className="px-4 sm:px-6 lg:px-10 py-14 sm:py-20 md:py-28 bg-[#09090b]"
    >
      <div className="max-w-7xl mx-auto">
        <LeadershipHeader />

        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
          <PICard />
          <PresidentCard />
        </div>
      </div>
    </section>
  );
}