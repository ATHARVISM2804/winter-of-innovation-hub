import { useEffect, useRef, useState } from 'react';
import { Mic2, Quote, Sparkles, ExternalLink } from 'lucide-react';

const speakers = [
  {
    name: 'Dr. Rajesh Kumar',
    title: 'CEO, TechVentures India',
    topic: 'The Future of AI in Entrepreneurship',
    image: '',
    year: '2025',
  },
  {
    name: 'Priya Sharma',
    title: 'Founder, GreenTech Solutions',
    topic: 'Sustainable Innovation for Tomorrow',
    image: '',
    year: '2025',
  },
  {
    name: 'Amit Patel',
    title: 'Partner, Sequoia Capital',
    topic: 'Funding Your Dream Startup',
    image: '',
    year: '2024',
  },
  {
    name: 'Dr. Sunita Reddy',
    title: 'Director, IIT Delhi Innovation Hub',
    topic: 'From Campus to Unicorn',
    image: '',
    year: '2024',
  },
  {
    name: 'Vikram Singh',
    title: 'Co-founder, Razorpay',
    topic: 'Building Fintech Innovations',
    image: '',
    year: '2023',
  },
  {
    name: 'Neha Gupta',
    title: 'Head of Startups, Google India',
    topic: 'Scaling with Technology',
    image: '',
    year: '2023',
  },
];

const PastSpeakersSection = () => {
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
      id="speakers"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-winter-cyan/5 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Microphone Icon */}
          <div className={`flex justify-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-winter-cyan/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-winter-cyan/20 to-purple-500/20 border border-winter-cyan/30 flex items-center justify-center">
                <Mic2 className="w-8 h-8 text-winter-cyan animate-glow-pulse" />
              </div>
            </div>
          </div>

          {/* Decorative Line */}
          <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-winter-cyan/50" />
            <Sparkles className="w-5 h-5 text-winter-cyan animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-winter-cyan/50" />
          </div>

          <h2
            className={`font-cinzel-decorative text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="bg-gradient-to-r from-winter-frost via-winter-cyan to-purple-400 bg-clip-text text-transparent">
              Our Past Speakers
            </span>
          </h2>
          <p
            className={`font-cormorant text-xl text-winter-silver/70 max-w-2xl mx-auto italic transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Visionaries who have graced our stage and inspired thousands
          </p>
        </div>

        {/* Speakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card */}
              <div className="relative h-full frosted-glass mystic-card rounded-2xl p-6 border border-winter-cyan/10 hover:border-winter-cyan/30 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_20px_60px_-15px_rgba(0,200,255,0.15)]">
                
                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-winter-cyan/10 border border-winter-cyan/30">
                  <span className="font-rajdhani text-xs text-winter-cyan font-medium">{speaker.year}</span>
                </div>

                {/* Speaker Image Placeholder */}
                <div className="relative w-24 h-24 mx-auto mb-6">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-winter-cyan/20 to-purple-500/20 animate-pulse" />
                  <div className="relative w-full h-full rounded-full bg-winter-dark/80 border-2 border-winter-cyan/30 flex items-center justify-center overflow-hidden group-hover:border-winter-cyan/50 transition-all duration-300">
                    {speaker.image ? (
                      <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                    ) : (
                      <span className="font-cinzel text-3xl font-bold text-winter-cyan/60 group-hover:text-winter-cyan transition-colors">
                        {speaker.name.charAt(0)}
                      </span>
                    )}
                  </div>
                  {/* Glow effect on hover */}
                  <div className={`absolute inset-0 rounded-full bg-winter-cyan/20 blur-xl transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-100' : 'opacity-0'}`} />
                </div>

                {/* Speaker Info */}
                <div className="text-center">
                  <h3 className="font-cinzel text-xl font-semibold text-winter-frost mb-2 group-hover:text-winter-cyan transition-colors duration-300">
                    {speaker.name}
                  </h3>
                  <p className="font-rajdhani text-sm text-winter-cyan/80 mb-4">
                    {speaker.title}
                  </p>
                  
                  {/* Topic */}
                  <div className="relative mt-4 p-4 rounded-xl bg-winter-deep/50 border border-winter-cyan/10 group-hover:border-winter-cyan/20 transition-all duration-300">
                    <Quote className="absolute -top-2 -left-2 w-4 h-4 text-winter-cyan/40" />
                    <p className="font-cormorant text-base text-winter-silver/70 italic">
                      "{speaker.topic}"
                    </p>
                    <Quote className="absolute -bottom-2 -right-2 w-4 h-4 text-winter-cyan/40 rotate-180" />
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-winter-cyan/20 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-winter-cyan/20 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-cormorant text-lg text-winter-silver/60 italic mb-4">
            Want to be a speaker at E-Summit 2026?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-winter-cyan/10 border border-winter-cyan/30 text-winter-cyan hover:bg-winter-cyan/20 hover:border-winter-cyan/50 transition-all duration-300 font-rajdhani group"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PastSpeakersSection;
