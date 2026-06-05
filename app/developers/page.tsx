import type { Metadata } from 'next';
import { DEVELOPERS, LEAD_DEVELOPER } from '@/lib/data/developers';
import DeveloperCard from '@/components/developers/DeveloperCard';

export const metadata: Metadata = {
  title: 'Developers',
  description: 'Meet the talented developers behind the Web & Coding Club NIT Patna website.',
  alternates: {
    canonical: '/developers',
  },
};

export default function DevelopersPage() {
  return (
    <main className="pt-24 min-h-screen relative overflow-hidden bg-[#050505]">
      {/* Subtle Dark Abstract Art Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
        {/* Background Image */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'url("/images/bg/dark_grunge_bg.png")',
            backgroundRepeat: 'repeat',
          }}
        />

        {/* Extremely subtle glowing orbs matching card accents */}
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] rounded-full bg-[#ff5e13] opacity-[0.03] blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] rounded-full bg-[#fccc0a] opacity-[0.02] blur-[150px]" />
        <div className="absolute top-[40%] left-[60%] w-[400px] h-[400px] rounded-full bg-[#ff3300] opacity-[0.02] blur-[100px]" />

        {/* Very faint structural grid */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <section className="section-padding relative z-10 py-16">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-mono text-xs mb-4 tracking-[0.2em] text-[#ff5e13] font-bold uppercase">// THE BUILDERS</p>
            <h1 className="text-display text-[#51C4F9] mb-4 text-5xl md:text-7xl font-black tracking-tight">Developers</h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Meet the talented individuals who designed, developed, and deployed this website.
              Every pixel, every animation, every line of code — crafted with passion.
            </p>
          </div>

          {/* Lead Developer Section */}
          <div className="flex flex-col items-center w-full mb-16">
            <div className="flex flex-col lg:flex-row gap-8 items-center justify-center w-full max-w-4xl">
              <div className="w-full max-w-[200px] sm:max-w-[325px] flex-shrink-0">
                <DeveloperCard developer={LEAD_DEVELOPER} />
              </div>
              {LEAD_DEVELOPER.quote && (
                <div className="relative flex-grow mt-6 lg:mt-0 bg-yellow-300 text-[#0e1713] p-6 rounded-2xl border-[3px] border-[#0e1713] shadow-[6px_6px_0px_#0e1713] max-w-md select-none group">
                  {/* Comic bubble pointing top (mobile) or left (desktop) */}
                  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 lg:top-1/2 lg:left-[-10px] lg:-translate-y-1/2 lg:translate-x-0 w-5 h-5 bg-yellow-300 border-l-[3px] border-t-[3px] lg:border-t-0 lg:border-b-[3px] border-[#0e1713] rotate-45" />
                  
                  <span className="font-display font-[900] text-base uppercase tracking-tight block mb-2 text-[#0e1713] drop-shadow-[0.5px_0.5px_0px_rgba(255,255,255,0.6)] text-center">
                    &ldquo; Lead's Directive &rdquo;
                  </span>
                  <p className="font-sans text-sm font-semibold leading-relaxed italic text-[#0e1713] opacity-95 text-center">
                    &ldquo;{LEAD_DEVELOPER.quote}&rdquo;
                  </p>
                  
                  {/* Retro decorative sparkles in the speech bubble */}
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-white border-2 border-[#0e1713] rounded-full flex items-center justify-center shadow-[2.5px_2.5px_0px_#0e1713] group-hover:rotate-12 transition-transform duration-200">
                    <svg className="w-4 h-4 fill-yellow-400 text-[#0e1713]" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="w-24 h-[1px] bg-white/10 mx-auto mb-16" />

          {/* Main Developers Grid */}
          <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-8 md:gap-10">
            {DEVELOPERS.map((dev) => (
              <DeveloperCard key={dev.id} developer={dev} />
            ))}
          </div>

          {/* Credit */}
          <div className="mt-24 text-center p-8 bg-[#09090b]/80 border border-white/10 rounded-2xl max-w-3xl mx-auto relative overflow-hidden shadow-2xl backdrop-blur-md group">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" />
            <p className="text-mono text-xs tracking-[0.2em] mb-6 text-[#ff5e13] font-bold uppercase">// TECH STACK</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'Next.js 16', color: '#FFFFFF', bg: 'rgba(255,255,255,0.03)' },
                { name: 'React 19', color: '#00D4FF', bg: 'rgba(0,212,255,0.05)' },
                { name: 'TypeScript', color: '#3178C6', bg: 'rgba(49,120,198,0.05)' },
                { name: 'Tailwind CSS 4', color: '#38BDF8', bg: 'rgba(56,189,248,0.05)' },
                { name: 'GSAP', color: '#88CE02', bg: 'rgba(136,206,2,0.05)' },
                { name: 'Lenis', color: '#E5E7EB', bg: 'rgba(229,231,235,0.03)' },
                { name: 'Three.js', color: '#F3F4F6', bg: 'rgba(243,244,246,0.03)' },
                { name: 'React Three Fiber', color: '#FF003C', bg: 'rgba(255,0,60,0.05)' }
              ].map((tech) => (
                <span 
                  key={tech.name} 
                  style={{
                    '--tech-color': tech.color,
                    '--tech-bg': tech.bg,
                    '--tech-glow': `${tech.color}44`,
                  } as React.CSSProperties}
                  className="px-4 py-1.5 text-xs sm:text-sm border border-white/10 hover:border-[var(--tech-color)] rounded-full text-[#A1A6B4] hover:text-white bg-[var(--tech-bg)] hover:shadow-[0_0_15px_var(--tech-glow)] transition-all duration-300 backdrop-blur-sm select-none cursor-default font-mono font-semibold"
                >
                  {tech.name}
                </span>
              ))}
            </div>
            <p className="text-xs text-white/40 mt-8 relative z-10">
              Open source on{' '}
              <a href="https://github.com/wncc-nitp" target="_blank" rel="noopener noreferrer" className="text-[#ff5e13] hover:text-[#e3a020] transition-colors hover:underline">
                GitHub
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
