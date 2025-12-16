import { Calendar, MapPin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Aurora Effect */}
      <div className="absolute top-0 left-1/2 w-[200%] h-[40%] -translate-x-1/2 animate-aurora opacity-30">
        <div
          className="w-full h-full"
          style={{
            background:
              'radial-gradient(ellipse at center, hsl(187 100% 50% / 0.3), hsl(270 50% 40% / 0.2), transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main Title */}
          <h1 className="font-cinzel text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in-up">
            <span className="shimmer-text">WINTER OF</span>
            <br />
            <span className="frost-text">INNOVATION</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-winter-silver/90 mb-10 font-light tracking-wide opacity-0 animate-fade-in-up animation-delay-200">
            Where ideas rise from the cold to ignite change
          </p>

          {/* Event Details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 opacity-0 animate-fade-in-up animation-delay-300">
            <div className="flex items-center gap-2 text-winter-silver">
              <Calendar className="w-5 h-5 text-winter-cyan" />
              <span className="text-sm md:text-base">Coming February 2026</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-winter-cyan/30" />
            <div className="flex items-center gap-2 text-winter-silver">
              <MapPin className="w-5 h-5 text-winter-cyan" />
              <span className="text-sm md:text-base">NIT Hamirpur</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up animation-delay-400">
            <button className="btn-primary font-rajdhani text-lg animate-pulse-glow">
              Get Tickets
            </button>
            <button className="btn-secondary font-rajdhani text-lg">
              Know More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up animation-delay-600">
        <div className="w-6 h-10 rounded-full border-2 border-winter-cyan/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-winter-cyan rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
