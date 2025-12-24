import { useEffect, useRef, useState } from "react";
import {
  Lightbulb,
  Users,
  Wrench,
  Sparkles,
  ArrowRight,
  Star,
  Rocket,
  Code,
  Trophy,
  Flag,
  TrendingUp,
  Mic,
  AlertTriangle,
  Gamepad2,
  MessageCircle,
  Hammer,
  Camera,
  Award,
} from "lucide-react";

const day1Events = [
  {
    icon: Lightbulb,
    title: "Inauguration",
    description:
      "The first spark ignites. Amidst the frost, ambition meets destiny as the forge awakens and the winter of innovation begins.",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "text-amber-400",
  },
  {
    icon: Users,
    title: "Logic Frost",
    description:
      "Systems freeze, but the code never sleeps. Architects of logic brave the digital chill to forge flawless solutions under pressure.",
    gradient: "from-winter-cyan/20 via-teal-500/10 to-transparent",
    accentColor: "text-winter-cyan",
  },
  {
    icon: Wrench,
    title: "Bull’s Clash",
    description:
      "Fortune favors the cold-blooded. In this high-stakes arena, titans navigate the glacial shifts of the market to seize absolute dominance.",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accentColor: "text-purple-400",
  },
  {
    icon: Mic,
    title: "The Talk Show",
    description:
      "One vision. One journey. A leader breaks the ice to share the raw truth of building in an unforgiving climate.",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accentColor: "text-green-400",
  },
];

const day2Events = [
  {
    icon: AlertTriangle,
    title: "Black Ice Brief",
    description:
      "The storm hits without warning. Strategic minds must navigate the black ice of disaster to salvage reputation and forge recovery.",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "text-amber-400",
  },
  {
    icon: Gamepad2,
    title: "Glacial Games",
    description:
      "Pixelated blades clash in the cold. Digital gladiators enter the arena to outmaneuver the storm and claim cyber-supremacy.",
    gradient: "from-winter-cyan/20 via-teal-500/10 to-transparent",
    accentColor: "text-winter-cyan",
  },
  {
    icon: Rocket,
    title: "Venturo",
    description:
      "Beneath the ice, a fire ignites. Visionaries face the glacial scrutiny of titans to temper their ideas into ironclad empires.",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accentColor: "text-purple-400",
  },
  {
    icon: MessageCircle,
    title: "Panel Discussion",
    description:
      "Titans of industry gather in the frost. Wisdom meets fire as experts dissect the shifting frontiers of a frozen landscape.",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accentColor: "text-green-400",
  },
];

const day3Events = [
  {
    icon: Trophy,
    title: "IPL Auction",
    description:
      "The gavel falls in the deep freeze. Strategists brave the bidding storm to draft a legacy and claim cricketing glory.",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentColor: "text-amber-400",
  },
  {
    icon: Hammer,
    title: "ProtoForze",
    description:
      "Raw metal meets the winter’s edge. Engineers breathe life into cold steel, sculpting tangible solutions from the depths of the forge.",
    gradient: "from-winter-cyan/20 via-teal-500/10 to-transparent",
    accentColor: "text-winter-cyan",
  },
  {
    icon: Camera,
    title: "Creator’s Summit",
    description:
      "Art shatters the ice. Visionaries weave stories and capture light, painting the frozen canvas with the vibrant colors of digital influence.",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accentColor: "text-purple-400",
  },
  {
    icon: Award,
    title: "Closing Ceremony",
    description:
      "Art shatters the ice. Visionaries weave stories and capture light, painting the frozen canvas with the vibrant colors of digital influence.",
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accentColor: "text-green-400",
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
          <div
            className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-winter-cyan/50" />
            <Star className="w-5 h-5 text-winter-cyan animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-winter-cyan/50" />
          </div>

          <h2
            className={`font-cinzel-decorative text-4xl md:text-6xl font-bold enchanted-text mb-6 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Our Events
          </h2>
          <p
            className={`font-cormorant text-xl text-winter-silver/70 max-w-2xl mx-auto italic transition-all duration-1000 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Three days of innovation, inspiration, and transformation
          </p>
        </div>

        {/* Day 1 Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-winter-frost mb-2">
              Day 1
            </h3>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-winter-cyan/50 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {day1Events.map((event, index) => (
              <div
                key={event.title}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: isVisible ? `${200 + index * 150}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div
                  className={`frosted-glass mystic-card rounded-2xl p-8 h-full cursor-pointer transition-all duration-500 
                  ${
                    hoveredIndex === index
                      ? "translate-y-[-12px] scale-[1.02]"
                      : ""
                  }
                  ${
                    hoveredIndex !== null && hoveredIndex !== index
                      ? "opacity-60 scale-[0.98]"
                      : ""
                  }`}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${event.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Corner Decorations */}
                  <div className="absolute top-3 right-3 text-winter-cyan/20 text-lg">
                    ✦
                  </div>
                  <div className="absolute bottom-3 left-3 text-winter-cyan/20 text-lg">
                    ✦
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-winter-cyan/10 to-winter-purple/10 border border-winter-cyan/30 flex items-center justify-center mb-8 group-hover:border-winter-cyan/60 transition-all duration-500 group-hover:animate-border-glow">
                      <event.icon
                        className={`w-10 h-10 ${event.accentColor} transition-all duration-300 group-hover:scale-110`}
                      />
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Day 2 Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-winter-frost mb-2">
              Day 2
            </h3>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-winter-cyan/50 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {day2Events.map((event, index) => (
              <div
                key={event.title + "-day2"}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: isVisible ? `${400 + index * 150}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredIndex(index + 3)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div
                  className={`frosted-glass mystic-card rounded-2xl p-8 h-full cursor-pointer transition-all duration-500 
                  ${
                    hoveredIndex === index + 3
                      ? "translate-y-[-12px] scale-[1.02]"
                      : ""
                  }
                  ${
                    hoveredIndex !== null && hoveredIndex !== index + 3
                      ? "opacity-60 scale-[0.98]"
                      : ""
                  }`}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${event.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Corner Decorations */}
                  <div className="absolute top-3 right-3 text-winter-cyan/20 text-lg">
                    ✦
                  </div>
                  <div className="absolute bottom-3 left-3 text-winter-cyan/20 text-lg">
                    ✦
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-winter-cyan/10 to-winter-purple/10 border border-winter-cyan/30 flex items-center justify-center mb-8 group-hover:border-winter-cyan/60 transition-all duration-500 group-hover:animate-border-glow">
                      <event.icon
                        className={`w-10 h-10 ${event.accentColor} transition-all duration-300 group-hover:scale-110`}
                      />
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Day 3 Section */}
        <div
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center mb-10">
            <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-winter-frost mb-2">
              Day 3
            </h3>
            <div className="h-px w-24 mx-auto bg-gradient-to-r from-transparent via-winter-cyan/50 to-transparent" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {day3Events.map((event, index) => (
              <div
                key={event.title + "-day3"}
                className={`group relative transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{
                  transitionDelay: isVisible ? `${600 + index * 150}ms` : "0ms",
                }}
                onMouseEnter={() => setHoveredIndex(index + 6)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div
                  className={`frosted-glass mystic-card rounded-2xl p-8 h-full cursor-pointer transition-all duration-500 
                  ${
                    hoveredIndex === index + 6
                      ? "translate-y-[-12px] scale-[1.02]"
                      : ""
                  }
                  ${
                    hoveredIndex !== null && hoveredIndex !== index + 6
                      ? "opacity-60 scale-[0.98]"
                      : ""
                  }`}
                >
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${event.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  {/* Corner Decorations */}
                  <div className="absolute top-3 right-3 text-winter-cyan/20 text-lg">
                    ✦
                  </div>
                  <div className="absolute bottom-3 left-3 text-winter-cyan/20 text-lg">
                    ✦
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-winter-cyan/10 to-winter-purple/10 border border-winter-cyan/30 flex items-center justify-center mb-8 group-hover:border-winter-cyan/60 transition-all duration-500 group-hover:animate-border-glow">
                      <event.icon
                        className={`w-10 h-10 ${event.accentColor} transition-all duration-300 group-hover:scale-110`}
                      />
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Events Button
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <button className="group relative inline-flex items-center gap-3 px-8 py-4 font-rajdhani text-lg border border-winter-cyan/40 rounded-full text-winter-frost hover:bg-winter-cyan/10 hover:border-winter-cyan transition-all duration-300">
            <span>View All Events</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            <div className="absolute inset-0 rounded-full bg-winter-cyan/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default EventsSection;
