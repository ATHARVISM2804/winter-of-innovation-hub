import { useEffect, useRef, useState } from 'react';
import { Sparkles, Hexagon, ArrowRight, Users2 } from 'lucide-react';

const eventPartners = [
  { name: 'Fueler', logo: null },
  { name: 'Westraty Ventures', logo: null },
  { name: 'GfG', logo: null },
  { name: 'Unstop', logo: null },
  { name: 'Alchemyst AI', logo: null },
  { name: 'SJVN', logo: null },
];

const EventPartnersSection = () => {
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

  // Inject hexagon styles
  useEffect(() => {
    const styleId = 'hexagon-card-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .hexagon-container {
          position: relative;
          width: 200px;
          height: 230px;
          margin: 0 auto;
        }
        
        .hexagon-card {
          position: relative;
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, 
            rgba(30, 58, 95, 0.8) 0%, 
            rgba(15, 30, 50, 0.9) 50%,
            rgba(30, 58, 95, 0.8) 100%
          );
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
        }

        .hexagon-card::before {
          content: '';
          position: absolute;
          inset: -3px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, 
            hsl(187 100% 50% / 0.4) 0%, 
            hsl(270 50% 50% / 0.3) 50%,
            hsl(187 100% 42% / 0.4) 100%
          );
          z-index: -1;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hexagon-container:hover .hexagon-card::before {
          inset: -4px;
          background: linear-gradient(135deg, 
            hsl(187 100% 50% / 0.8) 0%, 
            hsl(270 50% 50% / 0.6) 50%,
            hsl(187 100% 42% / 0.8) 100%
          );
          filter: blur(4px);
        }

        .hexagon-container:hover .hexagon-card {
          transform: translateY(-8px) scale(1.02);
          background: linear-gradient(135deg, 
            rgba(40, 80, 120, 0.9) 0%, 
            rgba(20, 40, 70, 0.95) 50%,
            rgba(40, 80, 120, 0.9) 100%
          );
        }

        .hexagon-glow {
          position: absolute;
          inset: -15px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          background: linear-gradient(135deg, 
            hsl(187 100% 50% / 0.2) 0%, 
            hsl(270 50% 50% / 0.15) 50%,
            hsl(187 100% 42% / 0.2) 100%
          );
          filter: blur(20px);
          z-index: -2;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .hexagon-container:hover .hexagon-glow {
          opacity: 1;
        }

        .hexagon-inner-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80%;
          height: 80%;
          background: radial-gradient(circle, 
            hsl(187 100% 50% / 0.1) 0%, 
            transparent 70%
          );
          z-index: 0;
        }

        .partner-name {
          font-family: 'Cinzel', serif;
          font-weight: 600;
          font-size: 1.1rem;
          text-align: center;
          background: linear-gradient(135deg, 
            hsl(187 100% 80%) 0%, 
            hsl(200 100% 90%) 50%,
            hsl(187 100% 70%) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.4s ease;
          padding: 0 16px;
          line-height: 1.3;
        }

        .hexagon-container:hover .partner-name {
          text-shadow: 0 0 20px hsl(187 100% 50% / 0.5);
        }

        .partner-initial {
          font-family: 'Cinzel Decorative', 'Cinzel', serif;
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, 
            hsl(187 100% 50%) 0%, 
            hsl(270 50% 60%) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
          opacity: 0.9;
          transition: all 0.4s ease;
        }

        .hexagon-container:hover .partner-initial {
          opacity: 1;
          transform: scale(1.1);
        }

        .partner-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 12px;
          padding: 6px 14px;
          background: linear-gradient(135deg, 
            rgba(14, 165, 233, 0.15) 0%, 
            rgba(139, 92, 246, 0.1) 100%
          );
          border: 1px solid rgba(14, 165, 233, 0.3);
          border-radius: 9999px;
          transition: all 0.4s ease;
        }

        .hexagon-container:hover .partner-badge {
          background: linear-gradient(135deg, 
            rgba(14, 165, 233, 0.25) 0%, 
            rgba(139, 92, 246, 0.2) 100%
          );
          border-color: rgba(14, 165, 233, 0.5);
          transform: scale(1.05);
        }

        .partner-badge span {
          font-family: 'Rajdhani', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: hsl(187 100% 80%);
        }

        @media (max-width: 768px) {
          .hexagon-container {
            width: 160px;
            height: 184px;
          }
          
          .partner-name {
            font-size: 0.9rem;
            padding: 0 12px;
          }
          
          .partner-initial {
            font-size: 2rem;
          }
          
          .partner-badge {
            padding: 4px 10px;
          }
          
          .partner-badge span {
            font-size: 0.6rem;
          }
        }

        @keyframes hexagon-float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .hexagon-animate {
          animation: hexagon-float 4s ease-in-out infinite;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <section
      id="event-partners"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-winter-cyan/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-winter-purple/8 rounded-full blur-3xl animate-pulse animation-delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-winter-teal/5 rounded-full blur-3xl" />
        
        {/* Decorative hexagon patterns */}
        <div className="absolute top-20 left-10 opacity-10">
          <Hexagon className="w-24 h-24 text-winter-cyan" strokeWidth={0.5} />
        </div>
        <div className="absolute top-40 right-20 opacity-10">
          <Hexagon className="w-16 h-16 text-winter-purple" strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-32 left-1/4 opacity-10">
          <Hexagon className="w-20 h-20 text-winter-teal" strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <Hexagon className="w-28 h-28 text-winter-cyan" strokeWidth={0.5} />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Decorative Element */}
          <div className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-20 bg-gradient-to-r from-transparent via-winter-cyan/50 to-transparent" />
            <Users2 className="w-7 h-7 text-winter-cyan animate-pulse" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent via-winter-cyan/50 to-transparent" />
          </div>

          <h2
            className={`font-cinzel-decorative text-4xl md:text-6xl font-bold enchanted-text mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Event Partners
          </h2>
          <p
            className={`font-cormorant text-xl text-winter-silver/70 max-w-2xl mx-auto italic transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Collaborating with visionary organizations to create extraordinary experiences
          </p>
          
          {/* Decorative Sparkles */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <Sparkles className="w-4 h-4 text-winter-cyan/60 animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-winter-purple/30 to-transparent" />
            <Hexagon className="w-5 h-5 text-winter-purple/60 animate-pulse animation-delay-300" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-winter-cyan/30 to-transparent" />
            <Sparkles className="w-4 h-4 text-winter-cyan/60 animate-pulse" />
          </div>
        </div>

        {/* Hexagonal Partners Grid */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {eventPartners.map((partner, index) => (
            <div 
              key={partner.name}
              className="flex justify-center hexagon-animate"
              style={{ 
                animationDelay: `${index * 0.3}s`,
              }}
            >
              <div className="hexagon-container">
                <div className="hexagon-glow" />
                <div className="hexagon-card">
                  <div className="hexagon-inner-glow" />
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    {partner.logo ? (
                      <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center mb-3 shadow-lg">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-[80%] max-h-[80%] object-contain"
                        />
                      </div>
                    ) : (
                      <span className="partner-initial">
                        {partner.name.charAt(0)}
                      </span>
                    )}
                    <span className="partner-name">{partner.name}</span>
                    <div className="partner-badge">
                      <Hexagon className="w-3 h-3 text-winter-cyan" />
                      <span>Partner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA */}
        <div className={`text-center mt-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a 
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 font-rajdhani text-lg border border-winter-cyan/40 rounded-full text-winter-frost hover:bg-winter-cyan/10 hover:border-winter-cyan transition-all duration-300"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 rounded-full bg-winter-cyan/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <Hexagon className="w-5 h-5 relative z-10 group-hover:rotate-90 transition-transform duration-500" />
            <span className="relative z-10">Become an Event Partner</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
          
          <p className="mt-6 font-cormorant text-lg text-winter-silver/60 italic">
            Partner with us to make this event unforgettable
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventPartnersSection;
