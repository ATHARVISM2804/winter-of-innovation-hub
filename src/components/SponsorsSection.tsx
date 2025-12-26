import { useEffect, useRef, useState } from 'react';
import { Sparkles, Star, Diamond, HandshakeIcon, ArrowRight } from 'lucide-react';

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
    icon: Diamond,
    gradient: 'from-slate-200 via-gray-100 to-slate-300',
    textColor: 'text-slate-200',
    borderColor: 'border-slate-300/40',
    glowColor: 'shadow-slate-200/20',
    animation: 'marquee-left',
  },
  gold: {
    icon: Star,
    gradient: 'from-amber-300 via-yellow-200 to-amber-400',
    textColor: 'text-amber-300',
    borderColor: 'border-amber-400/40',
    glowColor: 'shadow-amber-300/20',
    animation: 'marquee-right',
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
          animation: marquee-left 18s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 18s linear infinite;
          flex-direction: row-reverse;
        }
        .marquee-paused {
          animation-play-state: paused !important;
        }
        @media (max-width: 768px) {
          .marquee-left, .marquee-right {
            animation-duration: 10s;
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
                      className={`group frosted-glass mystic-card rounded-xl p-8 ${config.borderColor} border transition-all duration-500 hover:translate-y-[-6px] hover:${config.glowColor} hover:shadow-lg cursor-pointer mx-4 min-w-[220px] max-w-[220px] flex-shrink-0`}
                    >
                      <div className="flex flex-col items-center justify-center h-full">
                        {/* Logo Placeholder or Real Logo */}
                        {sponsor.logo ? (
                          <div className="w-full flex items-center justify-center mb-6">
                            <img
                              src={sponsor.logo}
                              alt={sponsor.name}
                              className="max-h-24 max-w-[180px] object-contain drop-shadow-lg"
                              style={{ background: 'white', borderRadius: 12, padding: 8 }}
                            />
                          </div>
                        ) : (
                          <div className={`w-full h-24 rounded-lg bg-gradient-to-br ${config.gradient} opacity-10 group-hover:opacity-20 flex items-center justify-center mb-6 transition-all duration-300`}>
                            <span className={`font-cinzel text-3xl font-bold ${config.textColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                              {sponsor.name.charAt(0)}
                            </span>
                          </div>
                        )}
                        {/* Sponsor Name */}
                        <span className={`font-cinzel text-lg font-semibold text-winter-frost/80 group-hover:text-winter-frost transition-colors duration-300 text-center mb-2`}>
                          {sponsor.name}
                        </span>
                        {/* Custom Badge */}
                        <div className={`mt-1 flex items-center gap-2 px-4 py-1 rounded-full bg-opacity-20 border-0 shadow-md
                          ${tier === 'platinum'
                            ? 'bg-gradient-to-r from-slate-200/20 to-slate-400/10'
                            : 'bg-gradient-to-r from-amber-300/20 to-yellow-400/10'}
                        `}>
                          <TierIcon className={`w-4 h-4 ${config.textColor}`} />
                          <span className={`text-xs font-rajdhani uppercase tracking-wider ${config.textColor} font-bold`}>
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
