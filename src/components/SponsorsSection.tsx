import { useEffect, useRef, useState } from 'react';
import { Sparkles, Star, Diamond, HandshakeIcon, ArrowRight } from 'lucide-react';

const sponsors = [
  { name: 'TechCorp', tier: 'platinum', logo: '' },
  { name: 'InnovateTech', tier: 'platinum', logo: '' },
  { name: 'StartupHub', tier: 'gold', logo: '' },
  { name: 'VentureCap', tier: 'gold', logo: '' },
  { name: 'EduTech', tier: 'silver', logo: '' },
  { name: 'CloudBase', tier: 'silver', logo: '' },
];

const tierConfig = {
  platinum: {
    icon: Diamond,
    gradient: 'from-slate-200 via-gray-100 to-slate-300',
    textColor: 'text-slate-200',
    borderColor: 'border-slate-300/40',
    glowColor: 'shadow-slate-200/20',
  },
  gold: {
    icon: Star,
    gradient: 'from-amber-300 via-yellow-200 to-amber-400',
    textColor: 'text-amber-300',
    borderColor: 'border-amber-400/40',
    glowColor: 'shadow-amber-300/20',
  },
  silver: {
    icon: Sparkles,
    gradient: 'from-gray-300 via-gray-200 to-gray-400',
    textColor: 'text-gray-300',
    borderColor: 'border-gray-400/40',
    glowColor: 'shadow-gray-300/20',
  },
};

const SponsorsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-winter-cyan/5 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Decorative Element */}
          <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
            <HandshakeIcon className="w-6 h-6 text-amber-400 animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>

          <h2
            className={`font-cinzel-decorative text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
              Our Sponsors
            </span>
          </h2>
          <p
            className={`font-cormorant text-xl text-winter-silver/70 max-w-2xl mx-auto italic transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Partnering with industry leaders to drive innovation
          </p>
        </div>

        {/* Sponsor Tiers */}
        {(['platinum', 'gold', 'silver'] as const).map((tier, tierIndex) => {
          const tierSponsors = sponsors.filter(s => s.tier === tier);
          const config = tierConfig[tier];
          const TierIcon = config.icon;

          if (tierSponsors.length === 0) return null;

          // Set grid-cols-2 for all tiers for alignment, and center the grid
          return (
            <div key={tier} className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${200 + tierIndex * 150}ms` }}>
              {/* Tier Label */}
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className={`h-px w-12 bg-gradient-to-r from-transparent to-current ${config.textColor} opacity-40`} />
                <TierIcon className={`w-5 h-5 ${config.textColor} animate-pulse`} />
                <span className={`font-rajdhani text-sm uppercase tracking-widest ${config.textColor}`}>
                  {tier} Partners
                </span>
                <TierIcon className={`w-5 h-5 ${config.textColor} animate-pulse`} />
                <div className={`h-px w-12 bg-gradient-to-l from-transparent to-current ${config.textColor} opacity-40`} />
              </div>

              {/* Sponsors Grid */}
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-6 w-full max-w-2xl">
                  {tierSponsors.map((sponsor, index) => (
                    <div
                      key={sponsor.name}
                      className={`group frosted-glass mystic-card rounded-xl p-8 ${config.borderColor} border transition-all duration-500 hover:translate-y-[-6px] hover:${config.glowColor} hover:shadow-lg cursor-pointer`}
                      style={{ transitionDelay: `${300 + tierIndex * 150 + index * 100}ms` }}
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        {/* Logo Placeholder */}
                        <div className={`w-full h-20 rounded-lg bg-gradient-to-br ${config.gradient} opacity-10 group-hover:opacity-20 flex items-center justify-center mb-4 transition-all duration-300`}>
                          <span className={`font-cinzel text-2xl font-bold ${config.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                            {sponsor.name.charAt(0)}
                          </span>
                        </div>
                        
                        {/* Sponsor Name */}
                        <span className={`font-cinzel text-lg font-semibold text-winter-frost/80 group-hover:text-winter-frost transition-colors duration-300 text-center`}>
                          {sponsor.name}
                        </span>
                        
                        {/* Tier Badge */}
                        <div className={`mt-3 flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r ${config.gradient} bg-opacity-10 border ${config.borderColor}`}>
                          <TierIcon className={`w-3 h-3 ${config.textColor}`} />
                          <span className={`text-xs font-rajdhani uppercase tracking-wider ${config.textColor}`}>
                            {tier}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group relative inline-flex items-center gap-3 px-10 py-4 font-rajdhani text-lg bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-400/40 rounded-full text-amber-200 hover:from-amber-500/30 hover:to-amber-600/20 hover:border-amber-400/60 transition-all duration-300 animate-pulse-glow">
            <Sparkles className="w-5 h-5" />
            <span>Become a Sponsor</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
