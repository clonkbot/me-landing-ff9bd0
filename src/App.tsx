import { useState, useEffect } from 'react';

const links = [
  { name: 'Twitter / X', url: '#', icon: 'X' },
  { name: 'GitHub', url: '#', icon: 'GH' },
  { name: 'LinkedIn', url: '#', icon: 'in' },
  { name: 'Portfolio', url: '#', icon: 'PF' },
  { name: 'Email Me', url: '#', icon: '@' },
];

function App() {
  const [loaded, setLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setLoaded(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Animated gradient orb that follows mouse on desktop */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none opacity-30 blur-[120px] transition-all duration-1000 ease-out hidden md:block"
        style={{
          background: 'radial-gradient(circle, #ff3d00 0%, #ff6d00 50%, transparent 70%)',
          left: mousePos.x - 300,
          top: mousePos.y - 300,
        }}
      />

      {/* Grid texture overlay */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Noise texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <main className="relative z-10 min-h-screen flex flex-col">
        {/* Header accent line */}
        <div
          className={`h-1 bg-gradient-to-r from-[#ff3d00] via-[#ff6d00] to-transparent transition-all duration-1000 ${loaded ? 'w-full' : 'w-0'}`}
        />

        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Left section - Identity */}
          <div className="lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center relative">
            {/* Decorative element */}
            <div
              className={`absolute top-8 md:top-16 right-6 md:right-12 lg:right-auto lg:left-16 text-[120px] md:text-[200px] font-black text-white/[0.03] select-none transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
              style={{ fontFamily: 'Bebas Neue, sans-serif' }}
            >
              ME
            </div>

            <div className="relative">
              {/* Status indicator */}
              <div
                className={`flex items-center gap-3 mb-6 md:mb-8 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
              >
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-[#00ff88]" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#00ff88] animate-ping" />
                </div>
                <span className="text-xs md:text-sm tracking-[0.3em] uppercase text-white/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  Available for work
                </span>
              </div>

              {/* Name */}
              <h1
                className={`text-5xl md:text-7xl lg:text-8xl font-black leading-[0.85] mb-4 md:mb-6 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ fontFamily: 'Bebas Neue, sans-serif' }}
              >
                <span className="text-white">YOUR</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3d00] to-[#ff6d00]">
                  NAME
                </span>
              </h1>

              {/* Role */}
              <p
                className={`text-lg md:text-xl lg:text-2xl text-white/40 mb-6 md:mb-8 max-w-md transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ fontFamily: 'Instrument Serif, serif' }}
              >
                Designer, developer, and creator of things that matter.
              </p>

              {/* Location */}
              <div
                className={`flex items-center gap-2 text-white/30 text-xs md:text-sm transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Right section - Links */}
          <div className="lg:w-1/2 p-6 md:p-12 lg:p-16 flex flex-col justify-center lg:border-l border-white/5">
            <div className="space-y-3 md:space-y-4">
              {links.map((link, index) => (
                <a
                  key={link.name}
                  href={link.url}
                  className={`group relative block transition-all duration-700 ${loaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div
                    className={`relative flex items-center gap-4 md:gap-6 p-4 md:p-6 border border-white/10 transition-all duration-300 ${
                      hoveredIndex === index
                        ? 'bg-white/5 border-[#ff3d00]/50 translate-x-2'
                        : 'bg-transparent'
                    }`}
                  >
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-base md:text-lg font-bold transition-all duration-300 ${
                        hoveredIndex === index ? 'bg-[#ff3d00] text-white' : 'bg-white/5 text-white/60'
                      }`}
                      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                      {link.icon}
                    </div>

                    {/* Text */}
                    <span
                      className="text-lg md:text-xl lg:text-2xl tracking-wide flex-1"
                      style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                    >
                      {link.name}
                    </span>

                    {/* Arrow */}
                    <svg
                      className={`w-5 h-5 md:w-6 md:h-6 transition-all duration-300 ${
                        hoveredIndex === index ? 'translate-x-2 text-[#ff3d00]' : 'text-white/30'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>

                    {/* Hover line accent */}
                    <div
                      className={`absolute left-0 top-0 w-1 h-full bg-[#ff3d00] transition-all duration-300 ${
                        hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  </div>
                </a>
              ))}
            </div>

            {/* Stats row */}
            <div
              className={`grid grid-cols-3 gap-4 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-white/5 transition-all duration-700 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              {[
                { value: '5+', label: 'Years' },
                { value: '50+', label: 'Projects' },
                { value: '∞', label: 'Ideas' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div
                    className="text-2xl md:text-3xl lg:text-4xl font-black text-[#ff3d00]"
                    style={{ fontFamily: 'Bebas Neue, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 mt-1"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 py-6 px-6 md:px-12 lg:px-16 border-t border-white/5">
          <p
            className="text-center text-[10px] md:text-xs text-white/25 tracking-wide"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            Requested by <a href="https://twitter.com/nicoismade" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">@nicoismade</a> · Built by <a href="https://twitter.com/clonkbot" target="_blank" rel="noopener noreferrer" className="hover:text-white/40 transition-colors">@clonkbot</a>
          </p>
        </footer>
      </main>

      {/* Corner decorations */}
      <div className="fixed bottom-6 left-6 md:bottom-12 md:left-12 flex flex-col gap-2 z-20">
        <div className="w-8 md:w-12 h-[1px] bg-white/20" />
        <div className="w-4 md:w-6 h-[1px] bg-white/10" />
      </div>
      <div className="fixed top-6 right-6 md:top-12 md:right-12 flex flex-col items-end gap-2 z-20">
        <div className="w-8 md:w-12 h-[1px] bg-white/20" />
        <div className="w-4 md:w-6 h-[1px] bg-white/10" />
      </div>

      {/* Floating year */}
      <div
        className="fixed bottom-6 right-6 md:bottom-12 md:right-12 text-white/10 text-4xl md:text-6xl font-black z-20 select-none"
        style={{ fontFamily: 'Bebas Neue, sans-serif', writingMode: 'vertical-rl' }}
      >
        2024
      </div>
    </div>
  );
}

export default App;
