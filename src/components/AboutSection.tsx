import { useEffect, useRef, useState } from "react";
import { Snowflake, Sparkles, Star } from "lucide-react";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    attendees: 0,
    speakers: 0,
    prize: 0,
    days: 0,
  });

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

  // Animated counter effect
  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic

        setCounters({
          attendees: Math.floor(4000 * eased),
          speakers: Math.floor(50 * eased),
          prize: Math.floor(10 * eased),
          days: Math.floor(3 * eased),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="about" ref={sectionRef} className="relative py-32 md:py-40">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-winter-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header with Enhanced Decorations */}
          <div
            className={`flex flex-col items-center gap-6 mb-12 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Decorative Top Element */}
            <div className="flex items-center gap-4">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-winter-cyan/50" />
              <Sparkles className="w-5 h-5 text-winter-cyan animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-winter-cyan/50" />
            </div>

            {/* Title with Enhanced Styling */}
            <div className="flex items-center justify-center gap-6">
              <Snowflake className="w-8 h-8 text-winter-cyan/60 animate-[spin_10s_linear_infinite]" />
              <h2 className="font-cinzel-decorative text-4xl md:text-6xl font-bold enchanted-text text-center">
                About E-Summit 2026
              </h2>
              <Snowflake className="w-8 h-8 text-winter-cyan/60 animate-[spin_10s_linear_infinite_reverse]" />
            </div>

            {/* Subtitle */}
            <p className="font-cormorant text-center text-xl text-winter-silver/60 italic">
              The Flagship Entrepreneurship Summit: <br /> E-Summit 2k26: winter
              of innovation
            </p>
          </div>

          {/* Main Card with Enhanced Glass Effect */}
          <div
            className={`frosted-glass mystic-card rounded-2xl p-10 md:p-14 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-winter-cyan/30 rounded-tl-lg" />
            <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-winter-cyan/30 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-winter-cyan/30 rounded-bl-lg" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-winter-cyan/30 rounded-br-lg" />

            <div className="space-y-8 text-winter-silver/90 text-lg md:text-xl leading-relaxed font-cormorant relative z-10">
              <p className="first-letter:text-5xl first-letter:font-cinzel-decorative first-letter:text-winter-cyan first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                <span className="text-winter-frost font-semibold">
                  E-Summit 2026
                </span>{" "}
                is the flagship annual entrepreneurship event organized by{" "}
                <span className="text-winter-cyan font-medium">
                  E-Cell NIT Hamirpur
                </span>
                . As one of the most anticipated events in the North Indian
                startup ecosystem, it brings together visionaries, innovators,
                and future leaders under one roof.
              </p>

              <p>
                In the frostbitten silence where ambition meets destiny,&nbsp;
                <span className="text-winter-cyan font-semibold italic">
                  E-Summit: Winter of Innovation&nbsp;
                </span>
                rises as a battlefield of ideas and a forge for the fearless.
                It’s where visionaries, innovators, and changemakers gather to
                evolve before the cold claims the unprepared. In this realm,
                innovation is survival, and only those who adapt endure. The
                Purpose of the E-Summit: To ignite the fire of entrepreneurship,
                unite the great houses of innovators, investors, and mentors,
                and test the brave through trials of strategy, intellect, and
                creation, where only the bold emerge victorious.
              </p>

              <p>
                Winter is not the end—it’s the beginning. As ideas lie beneath
                the frost, waiting for their moment,&nbsp;
                <span className="text-winter-frost">
                  E-Summit: Winter of Innovation
                </span>{" "}
                becomes the spark. A gathering of creators, learners, and
                mentors, united to transform cold beginnings into powerful
                outcomes. Together, we turn stillness into motion and ideas into
                impact. <br />
                Let's brave the cold together and ignite the fire of change.
              </p>
            </div>

            {/* Enhanced Stats Section */}
            <div className="royal-divider my-12" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                {
                  value: counters.attendees,
                  suffix: "+",
                  label: "Attendees",
                  icon: "❄",
                },
                {
                  value: counters.speakers,
                  suffix: "+",
                  label: "Speakers",
                  icon: "✦",
                },
                {
                  value: counters.prize,
                  prefix: "₹",
                  suffix: "L+",
                  label: "Prize Pool",
                  icon: "◈",
                },
                { value: counters.days, suffix: "", label: "Days", icon: "❈" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className={`text-center group transition-all duration-500 hover:scale-110 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="relative inline-block">
                    <span className="absolute -top-3 -left-3 text-winter-cyan/30 text-sm">
                      {stat.icon}
                    </span>
                    <div className="font-cinzel-decorative text-3xl md:text-4xl font-bold text-winter-cyan group-hover:text-glow transition-all duration-300">
                      {stat.prefix}
                      {stat.value}
                      {stat.suffix}
                    </div>
                    <span className="absolute -bottom-1 -right-3 text-winter-cyan/30 text-sm">
                      {stat.icon}
                    </span>
                  </div>
                  <div className="text-sm text-winter-silver/70 mt-2 font-rajdhani tracking-wider uppercase">
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
