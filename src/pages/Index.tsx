import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import TeamSection from '@/components/TeamSection';
import SponsorsSection from '@/components/SponsorsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SnowParticles from '@/components/SnowParticles';
import Preloader from '@/components/Preloader';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse for subtle parallax effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Cinematic Preloader */}
      {isLoading && (
        <Preloader 
          onLoadComplete={() => setIsLoading(false)} 
          minDuration={4500}
        />
      )}

      <Helmet>
        <title>E-Summit 2026 | Winter of Innovation - NIT Hamirpur</title>
        <meta
          name="description"
          content="E-Summit 2026 - Winter of Innovation. The flagship entrepreneurship summit by E-Cell NIT Hamirpur bringing together entrepreneurs, investors, and innovators."
        />
        <meta
          name="keywords"
          content="E-Summit, NIT Hamirpur, entrepreneurship, startup, innovation, E-Cell, 2026"
        />
        <meta property="og:title" content="E-Summit 2026 | Winter of Innovation" />
        <meta
          property="og:description"
          content="Where ideas rise from the cold to ignite change. Join us at NIT Hamirpur for the biggest entrepreneurship summit."
        />
        <link rel="canonical" href="https://esummit.nith.ac.in" />
      </Helmet>

      <div 
        className={`min-h-screen bg-background overflow-x-hidden transition-all duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {/* Fixed Background with Parallax */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/castle-bg.jpg')`,
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px) scale(1.05)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          {/* Multi-layer gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-winter-deep/70 via-winter-deep/40 to-winter-deep/80" />
          <div className="absolute inset-0 bg-gradient-to-t from-winter-deep/90 via-transparent to-transparent" />
          
          {/* Vignette effect */}
          <div 
            className="absolute inset-0" 
            style={{
              background: 'radial-gradient(ellipse at center, transparent 40%, hsl(218 58% 5% / 0.6) 100%)'
            }}
          />
        </div>

        {/* Animated Aurora Background Layer */}
        <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
          {/* Top aurora wave */}
          <div 
            className="absolute w-[200%] h-[40%] -top-10 left-1/2 -translate-x-1/2 opacity-30"
            style={{
              background: 'radial-gradient(ellipse 80% 50% at 50% 0%, hsl(187 100% 50% / 0.2) 0%, hsl(270 50% 50% / 0.1) 40%, transparent 70%)',
              transform: `translateX(calc(-50% + ${mousePosition.x * 2}px))`,
              transition: 'transform 0.5s ease-out',
              filter: 'blur(40px)',
            }}
          />
          
          {/* Side glow effects */}
          <div 
            className="absolute left-0 top-1/3 w-1/3 h-1/3 opacity-20"
            style={{
              background: 'radial-gradient(ellipse at left, hsl(180 60% 50% / 0.3), transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div 
            className="absolute right-0 top-2/3 w-1/3 h-1/3 opacity-20"
            style={{
              background: 'radial-gradient(ellipse at right, hsl(270 50% 50% / 0.3), transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </div>

        {/* Snow Effect */}
        <SnowParticles />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <HeroSection />
          
          {/* Section Divider */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-winter-cyan/30 to-transparent" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-winter-cyan/50 rotate-45 animate-pulse" />
          </div>
          
          <AboutSection />
          
          {/* Section Divider */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-winter-cyan/30 to-transparent" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-winter-cyan/30 text-xl">❄</div>
          </div>
          
          <EventsSection />
          
          {/* Section Divider */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-winter-cyan/30 to-transparent" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-winter-cyan/50 rotate-45 animate-pulse" />
          </div>
          
          <TeamSection />
          
          {/* Section Divider */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-winter-cyan/30 to-transparent" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-winter-cyan/30 text-xl">✦</div>
          </div>
          
          <SponsorsSection />
          
          {/* Section Divider */}
          <div className="relative h-32 overflow-hidden">
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-winter-cyan/30 to-transparent" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-winter-cyan/50 rotate-45 animate-pulse" />
          </div>
          
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Cursor glow effect (subtle) */}
        <div 
          className="fixed w-64 h-64 rounded-full pointer-events-none z-[60] opacity-10 hidden lg:block"
          style={{
            background: 'radial-gradient(circle, hsl(187 100% 50% / 0.3), transparent 60%)',
            left: mousePosition.x * 10 + window.innerWidth / 2 - 128,
            top: mousePosition.y * 10 + window.innerHeight / 2 - 128,
            transition: 'left 0.1s, top 0.1s',
            filter: 'blur(20px)',
          }}
        />
      </div>
    </>
  );
};

export default Index;
