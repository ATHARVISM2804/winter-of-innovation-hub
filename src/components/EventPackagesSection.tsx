import { useEffect, useRef, useState } from 'react';
import { Sparkles, Ticket, Users, GraduationCap, Crown, Check, ArrowRight, Calendar } from 'lucide-react';

const packages = [
  {
    id: 'oneday',
    title: 'One Day Pass',
    subtitle: 'Single Day Access',
    price: 149,
    originalPrice: 249,
    perText: 'per person',
    icon: Calendar,
    features: [
      'Single Day Access',
      'Keynote Sessions',
      'Networking Events',
      'Certificate',
    ],
    accentColor: 'teal',
    popular: false,
  },
  {
    id: 'group5',
    title: 'Group of 5+',
    subtitle: 'Best Value',
    price: 199,
    originalPrice: 349,
    perText: 'per person',
    icon: Crown,
    features: [
      'Full 3-Day Access',
      'All Keynote Sessions',
      'Networking Events',
      'Workshop Access',
      'Certificate',
      'Priority Seating',
    ],
    accentColor: 'amber',
    popular: true,
  },
  {
    id: 'group3',
    title: 'Group of 3-4',
    subtitle: 'Team Pass',
    price: 299,
    originalPrice: 399,
    perText: 'per person',
    icon: Users,
    features: [
      'Full 3-Day Access',
      'All Keynote Sessions',
      'Networking Events',
      'Workshop Access',
      'Certificate',
    ],
    accentColor: 'purple',
    popular: false,
  },
  {
    id: 'single',
    title: 'Single Student',
    subtitle: '3-Day Individual Pass',
    price: 349,
    originalPrice: 499,
    perText: 'per person',
    icon: Ticket,
    features: [
      'Full 3-Day Access',
      'All Keynote Sessions',
      'Networking Events',
      'Workshop Access',
      'Certificate',
    ],
    accentColor: 'winter-cyan',
    popular: false,
  },
];

const schoolPackage = {
  id: 'school',
  title: 'Schools & Colleges',
  subtitle: 'Institutional Pass',
  price: 99,
  originalPrice: 199,
  perText: 'per student',
  minStudents: 30,
  icon: GraduationCap,
  features: [
    'Full Event Access',
    'Educational Sessions',
    'Career Workshops',
    'Networking',
    'Bulk Certificates',
    'Dedicated Coordinator',
  ],
  accentColor: 'emerald',
};

const EventPackagesSection = () => {
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

  const getAccentClasses = (color: string, popular: boolean = false) => {
    if (popular) {
      return {
        border: 'border-amber-400/40 hover:border-amber-400/70',
        text: 'text-amber-400',
        bg: 'bg-amber-400/10',
        glow: 'bg-amber-400/30',
        iconBg: 'from-amber-400/20 to-yellow-500/20',
        iconBorder: 'border-amber-400/30',
      };
    }
    
    const colors: Record<string, { border: string; text: string; bg: string; glow: string; iconBg: string; iconBorder: string }> = {
      'winter-cyan': {
        border: 'border-winter-cyan/20 hover:border-winter-cyan/40',
        text: 'text-winter-cyan',
        bg: 'bg-winter-cyan/10',
        glow: 'bg-winter-cyan/30',
        iconBg: 'from-winter-cyan/20 to-winter-teal/20',
        iconBorder: 'border-winter-cyan/30',
      },
      'purple': {
        border: 'border-purple-400/20 hover:border-purple-400/40',
        text: 'text-purple-400',
        bg: 'bg-purple-400/10',
        glow: 'bg-purple-400/30',
        iconBg: 'from-purple-400/20 to-violet-500/20',
        iconBorder: 'border-purple-400/30',
      },
      'amber': {
        border: 'border-amber-400/20 hover:border-amber-400/40',
        text: 'text-amber-400',
        bg: 'bg-amber-400/10',
        glow: 'bg-amber-400/30',
        iconBg: 'from-amber-400/20 to-yellow-500/20',
        iconBorder: 'border-amber-400/30',
      },
      'emerald': {
        border: 'border-emerald-400/20 hover:border-emerald-400/40',
        text: 'text-emerald-400',
        bg: 'bg-emerald-400/10',
        glow: 'bg-emerald-400/30',
        iconBg: 'from-emerald-400/20 to-teal-500/20',
        iconBorder: 'border-emerald-400/30',
      },
      'teal': {
        border: 'border-teal-400/20 hover:border-teal-400/40',
        text: 'text-teal-400',
        bg: 'bg-teal-400/10',
        glow: 'bg-teal-400/30',
        iconBg: 'from-teal-400/20 to-cyan-500/20',
        iconBorder: 'border-teal-400/30',
      },
    };
    return colors[color] || colors['winter-cyan'];
  };

  return (
    <section
      id="event-packages"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-winter-cyan/5 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Ticket Icon */}
          <div
            className={`flex justify-center mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-amber-400/20 rounded-full blur-xl animate-pulse" />
              <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-amber-400/20 to-winter-cyan/20 border border-amber-400/30 flex items-center justify-center">
                <Ticket className="w-8 h-8 text-amber-400 animate-glow-pulse" />
              </div>
            </div>
          </div>

          {/* Decorative Line */}
          <div
            className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-400/50" />
            <Sparkles className="w-5 h-5 text-amber-400 animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-400/50" />
          </div>

          <h2
            className={`font-cinzel-decorative text-4xl md:text-6xl font-bold enchanted-text mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Event Packages
          </h2>
          <p
            className={`font-cormorant text-xl text-winter-silver/70 max-w-2xl mx-auto italic transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Choose the perfect package for your journey into innovation
          </p>
          
          {/* Access Badge */}
          <div className={`mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-winter-cyan/10 border border-winter-cyan/30 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Sparkles className="w-4 h-4 text-winter-cyan animate-pulse" />
            <span className="font-rajdhani text-sm font-semibold text-winter-frost tracking-wide">
              Choose 1-Day or Full 3-Day Access
            </span>
          </div>
        </div>

        {/* Individual Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {packages.map((pkg, index) => {
            const Icon = pkg.icon;
            const accent = getAccentClasses(pkg.accentColor, pkg.popular);
            
            return (
              <div
                key={pkg.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Card */}
                <div className={`relative h-full frosted-glass mystic-card rounded-2xl px-5 py-6 border-2 ${accent.border} transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_25px_70px_-15px_rgba(0,200,255,0.25)] flex flex-col overflow-hidden`}>
                  {/* Gradient Overlay on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.popular ? 'from-amber-400/5 via-yellow-500/5' : 'from-winter-cyan/5 via-purple-500/5'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />
                  
                  {/* Animated Glow Background */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute inset-0 ${accent.glow} blur-2xl opacity-20`} />
                  </div>

                  {/* Popular Badge */}
                  {pkg.popular && (
                    <div className="absolute -top-1 right-4 px-3 py-1.5 rounded-b-lg bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30 z-20">
                      <span className="font-rajdhani text-xs font-bold text-winter-deep uppercase tracking-wide flex items-center gap-1">
                        <Crown className="w-3 h-3" />
                        Best Value
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-4 relative z-10">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${accent.iconBg} border ${accent.iconBorder} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 ${accent.text}`} />
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-winter-frost mb-1 group-hover:text-glow transition-all duration-300">
                      {pkg.title}
                    </h3>
                    <p className="font-rajdhani text-xs text-winter-silver/60 uppercase tracking-wider">
                      {pkg.subtitle}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-4 relative z-10">
                    <div className="flex items-baseline justify-center gap-2 mb-1">
                      <span className="font-rajdhani text-sm text-winter-silver/50 line-through">
                        ₹{pkg.originalPrice}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="font-rajdhani text-lg font-medium text-winter-frost">₹</span>
                      <span className={`font-cinzel text-4xl font-bold ${accent.text}`}>
                        {pkg.price}
                      </span>
                    </div>
                    <p className="font-rajdhani text-xs text-winter-silver/60 mt-1 uppercase tracking-wider">
                      {pkg.perText}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-5 flex-grow relative z-10">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                        <Check className={`w-4 h-4 flex-shrink-0 ${accent.text}`} />
                        <span className="font-cormorant text-sm text-winter-silver/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a
                    href="https://forms.gle/Jn6ScP2PMWT6Nhg69"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-rajdhani text-sm font-bold transition-all duration-300 overflow-hidden z-10 ${
                      pkg.popular
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-winter-deep hover:from-amber-400 hover:to-amber-500 shadow-lg shadow-amber-500/20'
                        : `${accent.bg} border border-current ${accent.text} hover:bg-opacity-20`
                    }`}
                  >
                    <span>Register Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Decorative Corner Accents */}
                  <div className={`absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 ${pkg.popular ? 'border-amber-400/30' : 'border-winter-cyan/30'} rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />
                  <div className={`absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 ${pkg.popular ? 'border-amber-400/30' : 'border-winter-cyan/30'} rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                  {/* Decorative Stars */}
                  <div className={`absolute top-4 right-4 ${pkg.popular ? 'text-amber-400/30 group-hover:text-amber-400/60' : 'text-winter-cyan/30 group-hover:text-winter-cyan/60'} transition-all duration-500 ${pkg.popular ? '' : ''}`}>
                    <span className="text-lg animate-pulse" style={{ textShadow: pkg.popular ? '0 0 10px rgba(251, 191, 36, 0.3)' : '0 0 10px rgba(100, 255, 255, 0.3)' }}>✦</span>
                  </div>

                  {/* Bottom Glow Line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent ${pkg.popular ? 'via-amber-400/50' : 'via-winter-cyan/50'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  {/* Enhanced Hover Glow */}
                  <div
                    className={`absolute inset-0 rounded-2xl ${accent.glow} blur-2xl transition-all duration-500 ${
                      hoveredIndex === index ? 'opacity-20' : 'opacity-0'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* School & Colleges Special Package */}
        <div 
          className={`max-w-3xl mx-auto transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          {/* Section Label */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-emerald-400/50" />
            <span className="font-rajdhani text-sm text-emerald-400 tracking-wider uppercase">Special Institutional Package</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-emerald-400/50" />
          </div>

          <div 
            className="group relative frosted-glass mystic-card rounded-2xl p-6 border-2 border-emerald-400/20 hover:border-emerald-400/40 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_25px_70px_-15px_rgba(16,185,129,0.25)] overflow-hidden"
            onMouseEnter={() => setHoveredIndex(10)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-teal-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            
            <div className="grid md:grid-cols-2 gap-6 relative z-10">
              {/* Left Side - Info */}
              <div className="text-center md:text-left">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-400/20 to-teal-500/20 border border-emerald-400/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-7 h-7 text-emerald-400" />
                </div>
                
                <h3 className="font-cinzel text-2xl font-bold text-winter-frost mb-1 group-hover:text-glow transition-all duration-300">
                  {schoolPackage.title}
                </h3>
                <p className="font-rajdhani text-xs text-winter-silver/60 uppercase tracking-wider mb-4">
                  {schoolPackage.subtitle}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <div className="flex items-baseline justify-center md:justify-start gap-2 mb-1">
                    <span className="font-rajdhani text-sm text-winter-silver/50 line-through">
                      ₹{schoolPackage.originalPrice}
                    </span>
                  </div>
                  <div className="flex items-baseline justify-center md:justify-start">
                    <span className="font-rajdhani text-lg font-medium text-winter-frost">₹</span>
                    <span className="font-cinzel text-4xl font-bold text-emerald-400">
                      {schoolPackage.price}
                    </span>
                    <span className="font-rajdhani text-sm text-winter-silver/60 ml-2">
                      {schoolPackage.perText}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 mb-4">
                  <Users className="w-3 h-3 text-emerald-400" />
                  <span className="font-rajdhani text-xs font-semibold text-emerald-300">
                    Min. {schoolPackage.minStudents} students
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="tel:+919015011748"
                  className="group/btn flex items-center justify-center md:justify-start gap-2 py-3 px-6 rounded-xl font-rajdhani text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/20 transition-all duration-300 w-full md:w-auto"
                >
                  <span>Contact for Bulk Booking: +91 90150 11748</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Right Side - Features */}
              <div className="grid grid-cols-2 gap-2">
                {schoolPackage.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300">
                    <Check className="w-4 h-4 flex-shrink-0 text-emerald-400" />
                    <span className="font-cormorant text-sm text-winter-silver/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Corner Accents */}
            <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-emerald-400/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-emerald-400/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Decorative Stars */}
            <div className="absolute top-4 right-4 text-emerald-400/30 group-hover:text-emerald-400/60 transition-all duration-500">
              <span className="text-lg animate-pulse" style={{ textShadow: '0 0 10px rgba(16, 185, 129, 0.3)' }}>✦</span>
            </div>
            <div className="absolute bottom-4 left-4 text-teal-400/30 group-hover:text-teal-400/60 transition-all duration-500">
              <span className="text-sm animate-pulse" style={{ textShadow: '0 0 10px rgba(20, 184, 166, 0.3)' }}>✦</span>
            </div>

            {/* Bottom Glow Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Hover Glow */}
            <div
              className={`absolute inset-0 rounded-2xl bg-emerald-400/30 blur-2xl transition-all duration-500 ${
                hoveredIndex === 10 ? 'opacity-15' : 'opacity-0'
              }`}
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-12 text-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-cormorant text-lg text-winter-silver/60 italic mb-3">
            Have questions about our packages?
          </p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-winter-cyan/10 border border-winter-cyan/30 text-winter-cyan hover:bg-winter-cyan/20 hover:border-winter-cyan/50 transition-all duration-300 font-rajdhani group"
          >
            Contact us for custom packages
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventPackagesSection;
