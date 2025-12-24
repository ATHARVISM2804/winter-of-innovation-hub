import { Calendar, MapPin, Sparkles, Crown } from 'lucide-react';
import { useEffect, useState } from 'react';

// Social media links
const socialLinks = [
  {
    name: 'Discord',
    href: 'https://discord.gg/your-server',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://instagram.com/ecell_nith',
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
    href: 'https://linkedin.com/company/ecell-nith',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/ecell_nith',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/ecellnith',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
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
              <a
                key={social.name}
                href={social.href}
                target="_blank"
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
              <span className="text-base md:text-lg font-rajdhani">30 Jan - 1 Feb</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-gradient-to-b from-transparent via-winter-cyan/50 to-transparent" />
            <div className="flex items-center gap-3 text-winter-silver group">
              <div className="p-2 rounded-lg bg-winter-cyan/10 border border-winter-cyan/30 group-hover:bg-winter-cyan/20 group-hover:border-winter-cyan/50 transition-all duration-300">
                <MapPin className="w-5 h-5 text-winter-cyan" />
              </div>
              <span className="text-base md:text-lg font-rajdhani">National Institue of Technology, Hamirpur</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button className="group relative btn-primary font-rajdhani text-lg px-10 py-4 animate-pulse-glow overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Get Tickets
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-winter-cyan via-white/20 to-winter-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </button>
            <button className="group btn-secondary font-rajdhani text-lg px-10 py-4 hover:scale-105 transition-all duration-300">
              <span className="flex items-center gap-2">
                Ignite Now
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col items-center gap-2">
          <span className="text-winter-silver/50 text-xs font-rajdhani tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-winter-cyan/50 flex items-start justify-center p-2 animate-border-glow">
            <div className="w-1.5 h-3 bg-winter-cyan rounded-full animate-bounce" />
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
