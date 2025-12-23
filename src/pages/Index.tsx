import { useState } from 'react';
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
        {/* Fixed Background */}
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{
            backgroundImage: `url('/castle-bg.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-winter-deep/60 via-winter-deep/40 to-winter-deep/80" />
        </div>
        {/* Snow Effect */}
        <SnowParticles />

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main>
          <HeroSection />
          <AboutSection />
          <EventsSection />
          <TeamSection />
          <SponsorsSection />
          <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
