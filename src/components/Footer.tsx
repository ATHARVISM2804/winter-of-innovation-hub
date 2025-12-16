const Footer = () => {
  return (
    <footer className="relative py-8 border-t border-winter-cyan/20">
      {/* Glow Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-winter-cyan to-transparent" />
      
      <div className="container mx-auto px-4 text-center">
        <p className="text-winter-silver/60 text-sm">
          © 2026 E-Cell NIT Hamirpur. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
