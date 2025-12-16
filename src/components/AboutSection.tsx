import { useEffect, useRef, useState } from 'react';
import { Snowflake } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Decorative Elements */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <Snowflake className="w-6 h-6 text-winter-cyan opacity-60" />
            <h2
              className={`font-cinzel text-3xl md:text-5xl font-bold frost-text text-center transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              About E-Summit 2026
            </h2>
            <Snowflake className="w-6 h-6 text-winter-cyan opacity-60" />
          </div>

          {/* Main Card */}
          <div
            className={`glass-card glow-border p-8 md:p-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="space-y-6 text-winter-silver/90 text-base md:text-lg leading-relaxed">
              <p>
                <span className="text-winter-frost font-semibold">E-Summit 2026</span> is the flagship annual entrepreneurship event organized by{' '}
                <span className="text-winter-cyan">E-Cell NIT Hamirpur</span>. As one of the most anticipated events in the North Indian startup ecosystem, it brings together visionaries, innovators, and future leaders under one roof.
              </p>
              
              <p>
                This year's theme, <span className="text-winter-cyan font-semibold">"Winter of Innovation"</span>, symbolizes the resilience and brilliance that emerges from challenging times. Just as nature transforms during winter, we believe the most groundbreaking ideas often arise from periods of introspection and determination. Join us as we bring together entrepreneurs, industry leaders, and investors to spark the next wave of innovation.
              </p>
              
              <p>
                Whether you're a budding entrepreneur with a revolutionary idea, a student eager to learn from the best, or an industry veteran looking to mentor the next generation — E-Summit 2026 is your platform to connect, learn, and grow. Let's brave the cold together and ignite the fire of change.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 pt-8 border-t border-winter-cyan/20">
              {[
                { value: '5000+', label: 'Attendees' },
                { value: '50+', label: 'Speakers' },
                { value: '₹10L+', label: 'Prize Pool' },
                { value: '3', label: 'Days' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-cinzel text-2xl md:text-3xl font-bold text-winter-cyan">
                    {stat.value}
                  </div>
                  <div className="text-sm text-winter-silver/70 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
