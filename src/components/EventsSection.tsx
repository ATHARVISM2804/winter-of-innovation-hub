import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Users, Wrench, Sparkles, ArrowRight, Star } from 'lucide-react';

const events = [
  {
    icon: Lightbulb,
    title: 'Startup Pitch Competition',
    description:
      'Present your innovative ideas to a panel of investors and industry experts. Compete for funding, mentorship, and the chance to turn your vision into reality.',
    highlight: '₹5L Prize Pool',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: 'text-amber-400',
  },
  {
    icon: Users,
    title: 'Leadership Summit',
    description:
      'Interactive sessions with successful entrepreneurs and business leaders. Gain insights from those who have walked the path and learn the secrets of building successful ventures.',
    highlight: '20+ Speakers',
    gradient: 'from-winter-cyan/20 via-teal-500/10 to-transparent',
    accentColor: 'text-winter-cyan',
  },
  {
    icon: Wrench,
    title: 'Innovation Workshops',
    description:
      'Hands-on workshops covering emerging technologies, business strategies, and entrepreneurial skills. From AI to blockchain, from marketing to fundraising.',
    highlight: '15+ Workshops',
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    accentColor: 'text-purple-400',
  },
];

const EventsSection = () => {
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
      id="events"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-winter-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Decorative Element */}
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
            Our Events
          </h2>
          <p
            className={`font-cormorant text-xl text-winter-silver/70 max-w-2xl mx-auto italic transition-all duration-1000 delay-100 ${
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
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 150}ms` : '0ms' }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className={`frosted-glass mystic-card rounded-2xl p-8 h-full cursor-pointer transition-all duration-500 
                ${hoveredIndex === index ? 'translate-y-[-12px] scale-[1.02]' : ''}
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-60 scale-[0.98]' : ''}`}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${event.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Corner Decorations */}
                <div className="absolute top-3 right-3 text-winter-cyan/20 text-lg">✦</div>
                <div className="absolute bottom-3 left-3 text-winter-cyan/20 text-lg">✦</div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-winter-cyan/10 to-winter-purple/10 border border-winter-cyan/30 flex items-center justify-center mb-8 group-hover:border-winter-cyan/60 transition-all duration-500 group-hover:animate-border-glow">
                    <event.icon className={`w-10 h-10 ${event.accentColor} transition-all duration-300 group-hover:scale-110`} />
                    {/* Icon Glow */}
                    <div className="absolute inset-0 bg-winter-cyan/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="font-cinzel text-xl font-semibold text-winter-frost mb-4 group-hover:text-glow transition-all duration-300">
                    {event.title}
                  </h3>

                  {/* Description */}
                  <p className="font-cormorant text-winter-silver/80 text-base leading-relaxed mb-6">
                    {event.description}
                  </p>

                  {/* Highlight Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-winter-cyan/10 to-winter-purple/10 border border-winter-cyan/30 ${event.accentColor} text-sm font-rajdhani font-medium group-hover:border-winter-cyan/50 transition-all duration-300`}>
                      <Sparkles className="w-4 h-4" />
                      {event.highlight}
                    </div>
                    
                    {/* Arrow indicator */}
                    <div className="w-10 h-10 rounded-full border border-winter-cyan/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-winter-cyan/10">
                      <ArrowRight className="w-5 h-5 text-winter-cyan group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Events Button */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 font-rajdhani text-lg border border-winter-cyan/40 rounded-full text-winter-frost hover:bg-winter-cyan/10 hover:border-winter-cyan transition-all duration-300">
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-winter-cyan/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
