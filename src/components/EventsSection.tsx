import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Users, Wrench } from 'lucide-react';

const events = [
  {
    icon: Lightbulb,
    title: 'Startup Pitch Competition',
    description:
      'Present your innovative ideas to a panel of investors and industry experts. Compete for funding, mentorship, and the chance to turn your vision into reality.',
    highlight: '₹5L Prize Pool',
  },
  {
    icon: Users,
    title: 'Leadership Summit',
    description:
      'Interactive sessions with successful entrepreneurs and business leaders. Gain insights from those who have walked the path and learn the secrets of building successful ventures.',
    highlight: '20+ Speakers',
  },
  {
    icon: Wrench,
    title: 'Innovation Workshops',
    description:
      'Hands-on workshops covering emerging technologies, business strategies, and entrepreneurial skills. From AI to blockchain, from marketing to fundraising.',
    highlight: '15+ Workshops',
  },
];

const EventsSection = () => {
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
      id="events"
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
            Our Events
          </h2>
          <p
            className={`text-winter-silver/70 text-lg max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Three days of innovation, inspiration, and transformation
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`glass-card glow-border p-8 group cursor-pointer transition-all duration-500 hover:translate-y-[-8px] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms',
              }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center mb-6 group-hover:bg-winter-cyan/20 group-hover:border-winter-cyan/50 transition-all duration-300">
                <event.icon className="w-8 h-8 text-winter-cyan" />
              </div>

              {/* Content */}
              <h3 className="font-cinzel text-xl font-semibold text-winter-frost mb-3">
                {event.title}
              </h3>
              <p className="text-winter-silver/80 text-sm leading-relaxed mb-4">
                {event.description}
              </p>

              {/* Highlight Badge */}
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-winter-cyan/10 border border-winter-cyan/30 text-winter-cyan text-sm font-medium">
                {event.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
