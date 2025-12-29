import { Mail, MapPin, Phone, ExternalLink, Snowflake, Sparkles, Heart, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Events', href: '#events' },
    { name: 'Team', href: '#team' },
    { name: 'Sponsors', href: '#sponsors' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    
    { name: 'Instagram', href: 'https://www.instagram.com/ecell_nith?igsh=MWZsaDAxcmc4cmZvcg==' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/entrepreneurshipcellnith/' },
    
    { name: 'Gmail', href: 'https://facebook.com/ecellnith' },
  ];

  const contactInfo = [
    { icon: Mail, text: 'ecell@nith.ac.in' },
    { icon: Phone, text: '+91 91359-81893' },
    { icon: MapPin, text: 'NIT Hamirpur, HP 177005' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-winter-dark/50 to-winter-deep/90 backdrop-blur-xl border-t border-winter-cyan/20 overflow-hidden">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-winter-cyan/20 border border-winter-cyan/40 flex items-center justify-center backdrop-blur-sm hover:bg-winter-cyan/30 hover:border-winter-cyan transition-all duration-500 group ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-winter-cyan group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Aurora Background Effect */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-winter-cyan/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      {/* Magical Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-winter-cyan to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-winter-cyan to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
      </div>
      
      {/* Floating Snowflakes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <Snowflake
            key={i}
            className="absolute text-winter-cyan/10 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              fontSize: `${12 + i * 4}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-16">
          
          {/* About Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              {/* E-Summit Logo */}
              <div className="flex-shrink-0">
                <img 
                  src="https://res.cloudinary.com/dinhcaf2c/image/upload/v1767028622/e_summi_logo_t75m9e_zzhyoa.png"
                  alt="E-Summit Logo"
                  className="w-12 h-12 md:w-14 md:h-14 object-contain filter drop-shadow-lg hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Title */}
              <h3 className="font-cinzel-decorative text-2xl font-bold">
                <span className="bg-gradient-to-r from-winter-frost via-winter-cyan to-winter-frost bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}>
                  Winter of Innovation
                </span>
              </h3>
            </div>
            
            <p className="font-cormorant text-winter-silver/70 text-lg leading-relaxed italic">
              Where ideas rise from the cold to ignite change. Join us for an extraordinary journey of innovation and inspiration.
            </p>
            <div className="pt-4">
              <a 
                href="https://www.instagram.com/ecell_nith?igsh=MWZsaDAxcmc4cmZvcg==" 
                className="group inline-flex items-center gap-2 text-sm text-winter-cyan hover:text-winter-frost transition-colors font-rajdhani"
              >
                <Sparkles className="w-4 h-4" />
                Follow us for more updates
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-cinzel text-lg font-semibold text-winter-frost mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-gradient-to-r from-winter-cyan to-transparent" />
              Quick Links
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-winter-silver/70 hover:text-winter-cyan text-base transition-all duration-300 font-rajdhani"
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <span className="w-0 h-px bg-winter-cyan group-hover:w-4 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-cinzel text-lg font-semibold text-winter-frost mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-gradient-to-r from-winter-cyan to-transparent" />
              Contact Us
            </h4>
            <ul className="space-y-5">
              {contactInfo.map((item, index) => (
                <li key={index} className="group flex items-start gap-4 text-winter-silver/70">
                  <div className="w-10 h-10 rounded-lg bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center flex-shrink-0 group-hover:border-winter-cyan/50 group-hover:bg-winter-cyan/20 transition-all duration-300">
                    <item.icon className="w-4 h-4 text-winter-cyan" />
                  </div>
                  <span className="text-base font-cormorant pt-2">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h4 className="font-cinzel text-lg font-semibold text-winter-frost mb-6 flex items-center gap-2">
              <span className="w-6 h-px bg-gradient-to-r from-winter-cyan to-transparent" />
              Connect With Us
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative px-4 py-2 bg-winter-dark/50 border border-winter-cyan/20 rounded-lg hover:border-winter-cyan/50 hover:bg-winter-cyan/10 transition-all duration-300 hover:scale-105"
                >
                  <span className="text-sm text-winter-silver/70 group-hover:text-winter-cyan transition-colors font-rajdhani">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
            
            {/* Additional Info */}
            <div className="pt-6 mt-6 border-t border-winter-cyan/10">
              <p className="text-sm text-winter-silver/50 font-cormorant italic leading-relaxed">
                Organized by E-Cell NIT Hamirpur — Empowering the next generation of entrepreneurs
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Divider */}
        <div className="royal-divider mb-10" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          <p className="text-winter-silver/60 font-cormorant flex items-center gap-2">
            © 2026 E-Cell NIT Hamirpur. Crafted with 
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            All rights reserved.
          </p>
          
          <div className="flex items-center gap-8">
            <Link 
              to="/privacy"
              className="text-winter-silver/60 hover:text-winter-cyan transition-colors font-rajdhani hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <span className="text-winter-cyan/30">✦</span>
            <Link 
              to="/terms"
              className="text-winter-silver/60 hover:text-winter-cyan transition-colors font-rajdhani hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-winter-cyan/50 to-transparent" />
    </footer>
  );
};

export default Footer;
