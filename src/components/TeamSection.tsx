import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Instagram } from 'lucide-react';

const team = [
  {
    name: 'Rajesh Kumar',
    position: 'President',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Priya Sharma',
    position: 'Vice President',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Amit Patel',
    position: 'Technical Head',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  },
  {
    name: 'Sneha Verma',
    position: 'Marketing Head',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
  },
];

const TeamSection = () => {
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
      id="team"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className={`font-cinzel text-3xl md:text-5xl font-bold frost-text mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Team
          </h2>
          <p
            className={`text-winter-silver/70 text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            The passionate minds behind E-Summit 2026
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`group transition-all duration-500 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
              }}
            >
              <div className="glass-card glow-border overflow-hidden">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-winter-deep via-winter-deep/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  {/* Social Links - Show on Hover */}
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-winter-cyan/20 border border-winter-cyan/40 flex items-center justify-center hover:bg-winter-cyan/30 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4 text-winter-cyan" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-winter-cyan/20 border border-winter-cyan/40 flex items-center justify-center hover:bg-winter-cyan/30 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-4 h-4 text-winter-cyan" />
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 rounded-full bg-winter-cyan/20 border border-winter-cyan/40 flex items-center justify-center hover:bg-winter-cyan/30 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4 text-winter-cyan" />
                    </a>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4 text-center">
                  <h3 className="font-cinzel text-lg font-semibold text-winter-frost mb-1">
                    {member.name}
                  </h3>
                  <p className="text-winter-cyan text-sm">
                    {member.position}
                  </p>
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
