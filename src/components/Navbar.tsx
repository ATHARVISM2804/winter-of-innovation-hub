import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Calendar, Users, Handshake, Mail, Trophy, MessageCircleQuestion } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Events', href: '#events', icon: Calendar },
  { name: 'Team', href: '#team', icon: Users },
  { name: 'Sponsors', href: '#sponsors', icon: Handshake },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1));
      const scrollPosition = window.scrollY + 150;

      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Desktop Floating Vertical Navbar */}
      <nav className="fixed left-0 top-0 h-screen z-50 hidden md:flex flex-col items-center py-6 px-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="mb-12 group relative"
        >
          {/* Logo - You can replace this with your actual logo */}
          <div className="relative w-12 h-12 flex items-center justify-center">
            <svg viewBox="0 0 48 48" className="w-full h-full text-winter-frost group-hover:text-winter-cyan transition-colors duration-300">
              {/* Circuit-style logo */}
              <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
              <circle cx="24" cy="24" r="4" fill="currentColor" />
              {/* Circuit lines */}
              <line x1="24" y1="6" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5" />
              <line x1="24" y1="36" x2="24" y2="42" stroke="currentColor" strokeWidth="1.5" />
              <line x1="6" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5" />
              <line x1="36" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1.5" />
              {/* Dots at ends */}
              <circle cx="24" cy="6" r="2" fill="currentColor" />
              <circle cx="24" cy="42" r="2" fill="currentColor" />
              <circle cx="6" cy="24" r="2" fill="currentColor" />
              <circle cx="42" cy="24" r="2" fill="currentColor" />
            </svg>
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-winter-cyan/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          {/* Logo text on hover */}
          <div className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 ${
            hoveredItem === 'logo' ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
          }`}>
            <span className="font-cinzel text-sm font-bold text-winter-frost">E-SUMMIT</span>
          </div>
        </a>

        {/* Navigation Items */}
        <div className="flex flex-col items-center space-y-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            const isHovered = hoveredItem === item.name;
            
            return (
              <div key={item.name} className="relative flex items-center">
                {/* Decorative dot */}
                <div 
                  className={`absolute -left-3 w-1 h-1 rounded-full transition-all duration-300 ${
                    isActive ? 'bg-winter-cyan shadow-[0_0_6px_hsl(187,100%,50%)]' : 'bg-winter-silver/30'
                  }`}
                />
                
                {/* Icon Button */}
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative p-3 rounded-xl transition-all duration-300 group ${
                    isActive 
                      ? 'text-winter-cyan' 
                      : 'text-winter-silver/70 hover:text-winter-frost'
                  }`}
                >
                  {/* Icon */}
                  <Icon className={`w-6 h-6 transition-all duration-300 ${
                    isActive ? 'drop-shadow-[0_0_8px_hsl(187,100%,50%)]' : ''
                  }`} />
                  
                  {/* Subtle glow on active/hover */}
                  {(isActive || isHovered) && (
                    <div className="absolute inset-0 bg-winter-cyan/10 rounded-xl blur-sm -z-10" />
                  )}
                </a>

                {/* Tooltip Label */}
                <div 
                  className={`absolute left-full ml-4 flex items-center transition-all duration-300 ${
                    isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
                  }`}
                >
                  <span className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap backdrop-blur-sm ${
                    isActive 
                      ? 'bg-winter-cyan/20 text-winter-cyan border border-winter-cyan/30' 
                      : 'bg-winter-dark/80 text-winter-frost border border-winter-silver/20'
                  }`}>
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="mt-auto flex flex-col items-center space-y-2">
          <div className="w-[1px] h-16 bg-gradient-to-b from-winter-cyan/40 to-transparent" />
        </div>
      </nav>

      {/* Mobile Top Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-winter-deep/80 backdrop-blur-xl border-b border-winter-cyan/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-14">
              {/* Logo */}
              <a
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#home');
                }}
                className="flex items-center gap-2"
              >
                <svg viewBox="0 0 48 48" className="w-8 h-8 text-winter-frost">
                  <circle cx="24" cy="24" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="24" cy="24" r="12" fill="none" stroke="currentColor" strokeWidth="1" />
                  <circle cx="24" cy="24" r="4" fill="currentColor" />
                  <line x1="24" y1="6" x2="24" y2="12" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="24" y1="36" x2="24" y2="42" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="6" y1="24" x2="12" y2="24" stroke="currentColor" strokeWidth="1.5" />
                  <line x1="36" y1="24" x2="42" y2="24" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="24" cy="6" r="2" fill="currentColor" />
                  <circle cx="24" cy="42" r="2" fill="currentColor" />
                  <circle cx="6" cy="24" r="2" fill="currentColor" />
                  <circle cx="42" cy="24" r="2" fill="currentColor" />
                </svg>
                <span className="font-cinzel text-sm font-bold frost-text">E-SUMMIT</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                className="p-2 text-winter-silver hover:text-winter-frost transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-winter-deep/60 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-14 left-0 right-0 bg-winter-deep/95 backdrop-blur-xl border-b border-winter-cyan/10 transition-all duration-400 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-[70vh] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center gap-4 px-6 py-3.5 transition-all duration-300 ${
                    isActive 
                      ? 'text-winter-cyan' 
                      : 'text-winter-silver hover:text-winter-frost'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'drop-shadow-[0_0_6px_hsl(187,100%,50%)]' : ''}`} />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-winter-cyan shadow-[0_0_6px_hsl(187,100%,50%)]" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
