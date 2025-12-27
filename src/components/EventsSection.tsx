import { useEffect, useRef, useState } from 'react';
import { Lightbulb, Users, Wrench, Sparkles, ArrowRight, Star } from 'lucide-react';

// New events array with actual images
const events = [
  {
    title: 'Find the Bug',
    description:
      'Test your debugging skills and spot the bugs in challenging code snippets. Compete with the best to claim the title of Bug Hunter!',
    highlight: 'Coding Challenge',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766855853/Find_the_bug_n8ewtk.png',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    accentColor: 'text-amber-400',
  },
  {
    title: 'Virtual Stock Market',
    description:
      'Experience the thrill of trading in a simulated stock market. Make smart investments and climb the leaderboard!',
    highlight: 'Simulated Trading',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766855853/virtual_stock_market_anf15m.png',
    gradient: 'from-winter-cyan/20 via-teal-500/10 to-transparent',
    accentColor: 'text-winter-cyan',
  },
  {
    title: 'Reverse Pitch',
    description:
      'Flip the script! Investors pitch their problems and participants propose innovative solutions.',
    highlight: 'Investor Meets',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766855853/reverse_pitch_qso2k2.png',
    gradient: 'from-purple-500/20 via-violet-500/10 to-transparent',
    accentColor: 'text-purple-400',
  },
  {
    title: 'Sell Your Idea',
    description:
      'Pitch your creative ideas to a panel and get instant feedback. Convince the judges and win exciting prizes!',
    highlight: 'Pitch Event',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766855855/sell_your_idea_w05wbs.png',
    gradient: 'from-pink-500/20 via-red-500/10 to-transparent',
    accentColor: 'text-pink-400',
  },
  {
    title: "Creator's Summit",
    description:
      'A gathering of top creators sharing their journeys, tips, and insights. Network and learn from the best in the business.',
    highlight: 'Influencer Talks',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766855854/Creator_Summit_truewk.png',
    gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
    accentColor: 'text-green-400',
  },
  {
    title: 'Venturo',
    description:
      'Showcase your entrepreneurial spirit and compete in a series of startup challenges.',
    highlight: 'Startup Challenge',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766855854/Venturo_bwwipc.png',
    gradient: 'from-blue-500/20 via-sky-500/10 to-transparent',
    accentColor: 'text-blue-400',
  },
  {
    title: 'Pannel Discussion',
    description:
      'Engage with industry leaders in thought-provoking discussions on trending topics.',
    highlight: 'Expert Panel',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766855853/pannel_discussion_bqv6id.png',
    gradient: 'from-yellow-500/20 via-amber-500/10 to-transparent',
    accentColor: 'text-yellow-400',
  },
  {
    title: 'IPL Auction',
    description:
      'Experience the excitement of an IPL-style auction. Build your dream team and strategize to win!',
    highlight: 'Team Auction',
    image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1766855853/ipl_auction_fsqx24.png',
    gradient: 'from-indigo-500/20 via-blue-500/10 to-transparent',
    accentColor: 'text-indigo-400',
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
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <div
              key={event.title}
              className={`group relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: isVisible ? `${200 + index * 100}ms` : '0ms' }}
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
                  {/* Event Image */}
                  <div className="w-full h-44 mb-6 rounded-xl overflow-hidden bg-winter-cyan/10 flex items-center justify-center">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="object-cover w-full h-full"
                    />
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
