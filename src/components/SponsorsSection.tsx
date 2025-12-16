import { useEffect, useRef, useState } from 'react';

const sponsors = [
  { name: 'TechCorp', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'InnovateTech', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'StartupHub', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'VentureCap', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'EduTech', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
  { name: 'CloudBase', logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop' },
];

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
            Our Sponsors
          </h2>
          <p
            className={`text-winter-silver/70 text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Partnering with industry leaders to drive innovation
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.name}
              className={`glass-card glow-border p-6 flex items-center justify-center group cursor-pointer transition-all duration-500 hover:bg-winter-frost/5 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms',
              }}
            >
              <div className="text-center">
                <div className="w-24 h-12 mx-auto mb-3 bg-winter-frost/10 rounded-lg flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <span className="font-cinzel text-winter-frost/60 group-hover:text-winter-frost text-sm font-semibold">
                    {sponsor.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <button className="btn-secondary font-rajdhani text-lg animate-pulse-glow">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
