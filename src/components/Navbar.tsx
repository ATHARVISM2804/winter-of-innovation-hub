import { useState, useEffect } from 'react';
import { Menu, X, Home, Info, Calendar, Users, Handshake, Mail, Trophy, MessageCircleQuestion, Mic2 } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home', icon: Home },
  { name: 'About', href: '#about', icon: Info },
  { name: 'Events', href: '#events', icon: Calendar },
  { name: 'Team', href: '#team', icon: Users },
  { name: 'Speakers', href: '#speakers', icon: Mic2 },
  { name: 'Sponsors', href: '#sponsors', icon: Handshake },
  { name: 'Contact', href: '#contact', icon: Mail },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

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

      // Check if footer is visible
      const footer = document.querySelector('footer');
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Hide when footer is more than 50% visible
        setIsFooterVisible(footerRect.top < windowHeight * 0.6);
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
      <nav className={`fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center transition-all duration-500 ${isFooterVisible ? 'opacity-0 -translate-x-full pointer-events-none' : 'opacity-100 translate-x-0'}`}>
        {/* Glass container for nav items */}
        <div className="relative bg-winter-deep/40 backdrop-blur-xl border border-winter-cyan/20 rounded-2xl py-6 px-3 shadow-[0_0_30px_rgba(0,200,255,0.1)]">
          {/* Decorative glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-winter-cyan/5 via-transparent to-winter-purple/5 pointer-events-none" />
          
          {/* Navigation Items */}
          <div className="relative flex flex-col items-center space-y-4">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.href.slice(1);
            const isHovered = hoveredItem === item.name;
            
            return (
              <div key={item.name} className="relative flex items-center">
                {/* Icon Button */}
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative p-2.5 rounded-xl transition-all duration-300 group ${
                    isActive 
                      ? 'text-winter-cyan bg-winter-cyan/10' 
                      : 'text-winter-silver/70 hover:text-winter-frost hover:bg-white/5'
                  }`}
                >
                  {/* Icon */}
                  <Icon className={`w-5 h-5 transition-all duration-300 ${
                    isActive ? 'drop-shadow-[0_0_8px_hsl(187,100%,50%)]' : ''
                  }`} />
                  
                  {/* Active indicator dot */}
                  {isActive && (
                    <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-winter-cyan shadow-[0_0_8px_hsl(187,100%,50%)]" />
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
                <img 
                  src="https://res.cloudinary.com/dmhabztbf/image/upload/v1766555144/e_summi_logo_t75m9e.png" 
                  alt="E-Summit Logo" 
                  className="h-9 w-auto object-contain"
                />
                <span className="font-cinzel-decorative text-base font-bold tracking-wide text-winter-frost">
                  ESUMMIT<span className="text-winter-cyan">'26</span>
                </span>
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
