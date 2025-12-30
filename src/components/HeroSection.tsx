import { Calendar, MapPin, Sparkles, Crown, Snowflake, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

// Social media links with snowflakes
const socialLinks = [
  {
    name: 'Snowflake',
    href: '#',
    isDecorative: true,
    icon: (
      <Snowflake className="w-5 h-5 animate-spin" style={{ animationDuration: '20s' }} />
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/ecell_nith?igsh=MWZsaDAxcmc4cmZvcg==',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/entrepreneurshipcellnith/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Gmail',
    href: 'mailto:ecell@nith.ac.in',
    icon: (
      <Mail className="w-6 h-6" />
    ),
  },
  {
    name: 'Snowflake',
    href: '#',
    isDecorative: true,
    icon: (
      <Snowflake className="w-5 h-5 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
    ),
  },
];

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => {
      // Check if footer is visible
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Hide when footer is more than 50% visible
        setIsFooterVisible(footerRect.top < windowHeight * 0.6);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* E-Summit Logo - Top Left (Desktop Only) */}
      <div className="hidden md:flex absolute top-6 left-6 z-50 items-center gap-3">
        <img 
          src="https://res.cloudinary.com/dmhabztbf/image/upload/v1766555144/e_summi_logo_t75m9e.png" 
          alt="E-Summit Logo" 
          className="h-14 lg:h-16 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,200,255,0.3)]"
        />
        <span className="font-cinzel-decorative text-2xl lg:text-3xl font-bold tracking-wider text-winter-frost drop-shadow-[0_0_10px_rgba(0,200,255,0.4)]">
          ESUMMIT<span className="text-winter-cyan">'26</span>
        </span>
      </div>

      {/* Social Links - Right Side */}
      <div className={`hidden md:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${isFooterVisible ? 'opacity-0 translate-x-full pointer-events-none' : 'opacity-100 translate-x-0'}`}>
        {/* Glass container */}
        <div className="relative bg-winter-deep/40 backdrop-blur-xl border border-winter-cyan/20 rounded-2xl py-5 px-3 shadow-[0_0_30px_rgba(0,200,255,0.1)]">
          {/* Decorative glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-winter-cyan/5 via-transparent to-winter-purple/5 pointer-events-none" />
          
          {/* Social links */}
          <div className="relative flex flex-col items-center gap-4">
            {socialLinks.map((social, index) => (
              social.isDecorative ? (
                // Decorative snowflakes
                <div
                  key={`${social.name}-${index}`}
                  className="relative p-2.5 text-winter-cyan/40"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="relative z-10">
                    {social.icon}
                  </div>
                  
                  {/* Subtle glow */}
                  <div className="absolute inset-0 bg-winter-cyan/5 rounded-full blur-md" />
                </div>
              ) : (
                // Clickable social links
                <a
                  key={social.name}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="group relative p-2.5 rounded-xl text-winter-silver/70 hover:text-winter-frost hover:bg-white/5 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Icon */}
                  <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                    {social.icon}
                  </div>
                  
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-winter-cyan/10 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Tooltip */}
                  <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-winter-deep/90 backdrop-blur-xl rounded-lg border border-winter-cyan/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-[0_0_15px_rgba(0,200,255,0.1)]">
                    <span className="text-sm text-winter-frost font-medium">{social.name}</span>
                  </div>
                </a>
              )
            ))}
          </div>
        </div>
      </div>

      {/* Aurora Effect */}
      <div className="absolute top-0 left-1/2 w-[200%] h-[40%] -translate-x-1/2 animate-aurora opacity-30">
        <div
          className="w-full h-full"
          style={{
            background:
              'radial-gradient(ellipse at center, hsl(187 100% 50% / 0.3), hsl(270 50% 40% / 0.2), transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Crown Icon */}
          <div className={`flex justify-center mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="relative">
              <Crown className="w-12 h-12 text-winter-cyan animate-glow-pulse" />
              <div className="absolute inset-0 blur-xl bg-winter-cyan/30 animate-pulse" />
            </div>
          </div>

          {/* Decorative Line */}
          <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-winter-cyan to-winter-cyan/50" />
            <Sparkles className="w-5 h-5 text-winter-cyan animate-pulse" />
            <div className="h-px w-24 bg-gradient-to-l from-transparent via-winter-cyan to-winter-cyan/50" />
          </div>

          {/* Main Title */}
          <h1 className={`font-cinzel-decorative text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="block shimmer-text animate-text-glow tracking-wider">WINTER OF</span>
            <span className="block frost-text mt-2 animate-magical-float" style={{ textShadow: '0 0 60px hsl(187 100% 50% / 0.5), 0 0 120px hsl(270 50% 50% / 0.3)' }}>
              INNOVATION
            </span>
          </h1>

          {/* Decorative Divider */}
          <div className={`flex items-center justify-center gap-3 mb-8 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-winter-cyan/50" />
            <div className="w-2 h-2 rotate-45 bg-winter-cyan/60 animate-pulse" />
            <div className="text-winter-cyan/80 font-cormorant italic text-lg">Anno MMXXVI</div>
            <div className="w-2 h-2 rotate-45 bg-winter-cyan/60 animate-pulse" />
            <div className="w-16 h-0.5 bg-gradient-to-l from-transparent to-winter-cyan/50" />
          </div>

          {/* Subtitle */}
          <p className={`font-cormorant text-xl sm:text-2xl md:text-3xl text-winter-silver/90 mb-12 font-light tracking-wide italic transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Where ideas rise from the cold to ignite change
          </p>

          {/* Event Details */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-8 mb-14 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-center gap-3 text-winter-silver group">
              <div className="p-2 rounded-lg bg-winter-cyan/10 border border-winter-cyan/30 group-hover:bg-winter-cyan/20 group-hover:border-winter-cyan/50 transition-all duration-300">
                <Calendar className="w-5 h-5 text-winter-cyan" />
              </div>
              <span className="text-base md:text-lg font-rajdhani">Coming January 2026</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-winter-cyan/50 to-transparent" />
            <div className="flex items-center gap-3 text-winter-silver group">
              <div className="p-2 rounded-lg bg-winter-cyan/10 border border-winter-cyan/30 group-hover:bg-winter-cyan/20 group-hover:border-winter-cyan/50 transition-all duration-300">
                <MapPin className="w-5 h-5 text-winter-cyan" />
              </div>
              <span className="text-base md:text-lg font-rajdhani">NIT Hamirpur</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a href="#contact" className="group relative btn-primary font-rajdhani text-lg px-10 py-4 animate-pulse-glow overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Get Tickets
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-winter-cyan via-white/20 to-winter-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>
            <a href="#events" className="group btn-secondary font-rajdhani text-lg px-10 py-4 hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-2">
                Explore Events
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-winter-silver/50 text-xs font-rajdhani tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-winter-cyan/50 flex items-start justify-center p-2 animate-border-glow">
            <div className="w-1.5 h-3 bg-winter-cyan rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
