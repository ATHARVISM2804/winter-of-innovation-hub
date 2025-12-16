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

const Index = () => {
  return (
    <>
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

      <div className="min-h-screen bg-background overflow-x-hidden">
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
