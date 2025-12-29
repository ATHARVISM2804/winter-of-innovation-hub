import { useEffect, useRef, useState } from 'react';
import { Sparkles, Star, Diamond, HandshakeIcon, ArrowRight, Crown } from 'lucide-react';

// 7 platinum, 6 gold sponsors with real names and logos (if available)
const sponsors = [
  // Platinum (7)
  { name: 'Alchemy', tier: 'platinum', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766766912/alchemy_pu9cls.png' },
  { name: 'StockGro', tier: 'platinum', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766766912/stockgro_dsxyn4.png' },
  { name: 'Top One Percent', tier: 'platinum', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766766913/top_one_percent_y3mzpf.png' },
  { name: 'Oculosense', tier: 'platinum', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766766913/oculuscene_ypvn2j.png' },
  { name: 'SJVN', tier: 'platinum', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766766912/sjvn_cdkrfa.png' },
  { name: 'Bull', tier: 'platinum', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766766913/cow_hm9lzl.png' },
  { name: 'Unstop', tier: 'platinum', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766766912/unstop_a740fh.png' },
  // Gold (6)
  { name: 'Devfolio', tier: 'gold', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766768034/devfolio_lzoth0.png' },
  { name: "Domino's", tier: 'gold', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766768034/dominos_i5fbjn.webp' },
  { name: 'abhibus', tier: 'gold', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766768035/abhi_bus_hvgjuf.png' },
  { name: 'Aspire IIT & Medical', tier: 'gold', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766768034/Aspire_rqutku.png' },
  { name: 'PVR', tier: 'gold', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766768034/PVR-Logo_viaufr.jpg' },
  { name: 'MakeMyTrip', tier: 'gold', logo: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766768033/make_my_trip_gec20q.png' },
];

const tierConfig = {
  platinum: {
    icon: Crown,
    gradient: 'from-slate-100 via-gray-50 to-slate-200',
    textColor: 'text-slate-100',
    borderColor: 'border-slate-200/30',
    glowColor: 'shadow-slate-200/30',
    bgGlow: 'bg-slate-200/5',
    animation: 'marquee-left',
    label: 'Platinum Partners',
  },
  gold: {
    icon: Star,
    gradient: 'from-amber-200 via-yellow-100 to-amber-300',
    textColor: 'text-amber-200',
    borderColor: 'border-amber-300/30',
    glowColor: 'shadow-amber-300/30',
    bgGlow: 'bg-amber-300/5',
    animation: 'marquee-right',
    label: 'Gold Partners',
  },
};

const SponsorsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [pausedTier, setPausedTier] = useState<string | null>(null);

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

  // Marquee animation CSS (inject once)
  useEffect(() => {
    const styleId = 'sponsor-marquee-style';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
        }
        .marquee-left {
          animation: marquee-left 25s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 25s linear infinite;
          flex-direction: row-reverse;
        }
        .marquee-paused {
          animation-play-state: paused !important;
        }
        @media (max-width: 768px) {
          .marquee-left, .marquee-right {
            animation-duration: 15s;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section
      id="sponsors"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-400/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-slate-200/8 rounded-full blur-3xl animate-pulse animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-winter-cyan/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24">
          {/* Decorative Element */}
          <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-amber-300/50 to-transparent" />
            <HandshakeIcon className="w-7 h-7 text-amber-300 animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-amber-300/50 to-transparent" />
          </div>

          <h2
            className={`font-cinzel-decorative text-5xl md:text-7xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
              Our Sponsors
            </span>
          </h2>
          <p
            className={`font-cormorant text-xl md:text-2xl text-winter-silver/70 max-w-3xl mx-auto italic transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Partnering with industry leaders to drive innovation and excellence
          </p>
          
          {/* Decorative Sparkles */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <Sparkles className="w-4 h-4 text-amber-300/60 animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-winter-cyan/30 to-transparent" />
            <Sparkles className="w-4 h-4 text-winter-cyan/60 animate-pulse animation-delay-300" />
          </div>
        </div>

        {/* Sponsor Tiers */}
        {(['platinum', 'gold'] as const).map((tier, tierIndex) => {
          const tierSponsors = sponsors.filter(s => s.tier === tier);
          const config = tierConfig[tier];
          const TierIcon = config.icon;

          if (tierSponsors.length === 0) return null;

          // Duplicate sponsors for seamless loop
          const sponsorsLoop = [...tierSponsors, ...tierSponsors];

          // Pause marquee if hovered
          const marqueeClass = `${config.animation} marquee-track${pausedTier === tier ? ' marquee-paused' : ''}`;

          return (
            <div key={tier} className={`mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${200 + tierIndex * 150}ms` }}>
              {/* Enhanced Tier Label */}
              <div className="flex items-center justify-center gap-4 mb-12">
                <div className={`h-px w-16 bg-gradient-to-r from-transparent to-current ${config.textColor} opacity-50`} />
                <div className={`flex items-center gap-3 px-6 py-3 rounded-full ${config.bgGlow} border ${config.borderColor} backdrop-blur-sm`}>
                  <TierIcon className={`w-6 h-6 ${config.textColor} animate-pulse`} />
                  <span className={`font-cinzel text-lg font-semibold tracking-wider ${config.textColor}`}>
                    {config.label}
                  </span>
                  <TierIcon className={`w-6 h-6 ${config.textColor} animate-pulse animation-delay-200`} />
                </div>
                <div className={`h-px w-16 bg-gradient-to-l from-transparent to-current ${config.textColor} opacity-50`} />
              </div>

              {/* Sponsors Marquee */}
              <div className="overflow-x-hidden w-full">
                <div
                  className={marqueeClass}
                  style={{
                    width: 'max-content',
                  }}
                  onMouseEnter={() => setPausedTier(tier)}
                  onMouseLeave={() => setPausedTier(null)}
                >
                  {sponsorsLoop.map((sponsor, index) => (
                    <div
                      key={sponsor.name + index}
                      className={`group relative frosted-glass mystic-card rounded-2xl p-6 ${config.borderColor} border-2 transition-all duration-500 hover:scale-105 hover:border-opacity-60 cursor-pointer mx-5 min-w-[240px] max-w-[240px] flex-shrink-0 overflow-hidden`}
                      style={{
                        boxShadow: `0 8px 32px rgba(0, 0, 0, 0.1), 0 0 0 1px ${tier === 'platinum' ? 'rgba(226, 232, 240, 0.1)' : 'rgba(251, 191, 36, 0.1)'}`,
                      }}
                    >
                      {/* Animated Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                      
                      {/* Glow Effect on Hover */}
                      <div className={`absolute inset-0 ${config.glowColor} shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                      
                      <div className="relative flex flex-col items-center justify-center h-full">
                        {/* Logo Container */}
                        {sponsor.logo ? (
                          <div className="w-full flex items-center justify-center mb-5 p-3 bg-white/95 rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                            <img
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className="max-h-24 max-w-[180px] object-contain"
                            />
                          </div>
                        ) : (
                          <div className={`w-full h-24 rounded-xl bg-gradient-to-br ${config.gradient} opacity-10 group-hover:opacity-20 flex items-center justify-center mb-5 transition-all duration-300`}>
                            <span className={`font-cinzel text-3xl font-bold ${config.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                              {sponsor.name.charAt(0)}
                            </span>
                          </div>
                        )}
                        
                        {/* Sponsor Name */}
                        <h3 className="font-cinzel text-lg font-semibold text-winter-frost mb-3 text-center group-hover:text-glow transition-all duration-300">
                          {sponsor.name}
                        </h3>
                        
                        {/* Tier Badge */}
                        <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${config.borderColor} ${config.bgGlow} backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                          <TierIcon className={`w-4 h-4 ${config.textColor}`} />
                          <span className={`text-xs font-rajdhani uppercase tracking-widest ${config.textColor} font-bold`}>
                            {tier}
                          </span>
                        </div>
                      </div>
                      
                      {/* Corner Decorations */}
                      <div className={`absolute top-3 right-3 w-6 h-6 border-r-2 border-t-2 ${config.borderColor} rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className={`absolute bottom-3 left-3 w-6 h-6 border-l-2 border-b-2 ${config.borderColor} rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Enhanced CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="#contact"
            className="group relative inline-flex items-center gap-4 px-12 py-5 font-rajdhani text-xl font-semibold bg-gradient-to-r from-amber-500/20 via-amber-400/15 to-amber-600/20 border-2 border-amber-400/40 rounded-full text-amber-100 hover:from-amber-500/30 hover:via-amber-400/25 hover:to-amber-600/30 hover:border-amber-300/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-amber-400/20 overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            <Sparkles className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Become a Sponsor</span>
            <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
          
          <p className="mt-6 font-cormorant text-winter-silver/60 italic">
            Join us in shaping the future of innovation
          </p>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
