import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Instagram, Sparkles, Crown, Star } from 'lucide-react';

const team = [
  {
    name: 'Atharv',
    position: 'President',
    image: '',
    quote: 'Leading innovation',
  },
  {
    name: 'Atharv',
    position: 'Vice President',
    image: '',
    quote: 'Driving excellence',
  },
  {
    name: 'Atharv',
    position: 'Technical Head',
    image: '',
    quote: 'Building the future',
  },
  {
    name: 'Atharv',
    position: 'Marketing Head',
    image: '',
    quote: 'Creating impact',
  },
];

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
      id="team"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-winter-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Crown Icon */}
          <div className={`flex justify-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="relative">
              <Crown className="w-10 h-10 text-winter-cyan/60 animate-glow-pulse" />
            </div>
          </div>

          {/* Decorative Line */}
          <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-winter-cyan/50" />
            <Star className="w-5 h-5 text-winter-cyan animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-winter-cyan/50" />
          </div>

          <h2
            className={`font-cinzel-decorative text-4xl md:text-6xl font-bold enchanted-text mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Team
          </h2>
          <p
            className={`font-cormorant text-xl text-winter-silver/70 max-w-2xl mx-auto italic transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            The passionate minds behind E-Summit 2026
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <div
              key={`${member.name}-${index}`}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`frosted-glass mystic-card rounded-2xl overflow-hidden transition-all duration-500 
                ${hoveredIndex === index ? 'translate-y-[-8px] scale-[1.03]' : ''}
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-70 scale-[0.97]' : ''}`}
              >
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  {/* Placeholder gradient for no image */}
                  <div className="absolute inset-0 bg-gradient-to-br from-winter-dark via-winter-deep to-winter-purple/20" />
                  
                  {member.image && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Decorative Pattern when no image */}
                  {!member.image && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl text-winter-cyan/20 font-cinzel-decorative">
                        {member.name.charAt(0)}
                      </div>
                      {/* Decorative circles */}
                      <div className="absolute w-24 h-24 border border-winter-cyan/10 rounded-full animate-pulse" />
                      <div className="absolute w-32 h-32 border border-winter-cyan/5 rounded-full animate-pulse animation-delay-200" />
                    </div>
                  )}

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-winter-deep via-winter-deep/60 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Magical glow on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-winter-cyan/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Social Links - Show on Hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {[
                      { Icon: Linkedin, label: 'LinkedIn' },
                      { Icon: Twitter, label: 'Twitter' },
                      { Icon: Instagram, label: 'Instagram' },
                    ].map(({ Icon, label }) => (
                      <a
                        key={label}
                        href="#"
                        className="w-10 h-10 rounded-full bg-winter-dark/80 backdrop-blur-sm border border-winter-cyan/40 flex items-center justify-center hover:bg-winter-cyan/20 hover:border-winter-cyan transition-all duration-300 hover:scale-110"
                        aria-label={label}
                      >
                        <Icon className="w-4 h-4 text-winter-cyan" />
                      </a>
                    ))}
                  </div>

                  {/* Quote on hover */}
                  <div className="absolute top-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <p className="font-cormorant text-sm text-winter-frost/80 italic">
                      "{member.quote}"
                    </p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6 text-center relative">
                  {/* Decorative element */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-px bg-gradient-to-r from-transparent via-winter-cyan/50 to-transparent" />
                  
                  <h3 className="font-cinzel text-lg font-semibold text-winter-frost mb-1 group-hover:text-glow transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-winter-cyan text-sm font-rajdhani tracking-wider uppercase">
                    {member.position}
                  </p>
                  
                  {/* Sparkle decoration */}
                  <Sparkles className="absolute bottom-2 right-2 w-4 h-4 text-winter-cyan/20 group-hover:text-winter-cyan/50 transition-colors duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
