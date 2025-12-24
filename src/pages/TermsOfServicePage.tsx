import { FileText, UserCheck, AlertCircle, Award, Scale, MessageSquare, ArrowLeft, Snowflake } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';
import SnowParticles from '@/components/SnowParticles';

const TermsOfServicePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const sections = [
    {
      icon: UserCheck,
      title: 'Acceptance of Terms',
      content: 'By accessing and participating in Winter of Innovation events, you agree to be bound by these terms and conditions. If you disagree with any part, please do not participate.',
    },
    {
      icon: Award,
      title: 'Event Participation',
      content: 'Participants must register with accurate information. Teams are responsible for their projects and must adhere to competition guidelines. Prizes and recognitions are awarded at organizer discretion.',
    },
    {
      icon: Scale,
      title: 'Intellectual Property',
      content: 'Participants retain ownership of their projects. By participating, you grant E-Cell NIT Hamirpur rights to showcase and promote your work for educational and promotional purposes.',
    },
    {
      icon: AlertCircle,
      title: 'Code of Conduct',
      content: 'We maintain a respectful, inclusive environment. Harassment, plagiarism, or unethical behavior will result in immediate disqualification and potential ban from future events.',
    },
    {
      icon: MessageSquare,
      title: 'Communication & Updates',
      content: 'Important event updates will be sent via email and official channels. Participants are responsible for checking communications regularly and staying informed about schedule changes.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Terms of Service | E-Summit 2026 - Winter of Innovation</title>
        <meta name="description" content="Terms of Service for Winter of Innovation - E-Summit 2026 by E-Cell NIT Hamirpur" />
      </Helmet>

      <div className="min-h-screen bg-winter-deep relative overflow-hidden">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/castle-bg.jpg')` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-winter-deep/80 via-winter-deep/60 to-winter-deep/95" />
          </div>
        </div>

        {/* Aurora Effects */}
        <div className="fixed inset-0 z-[1] pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-winter-cyan/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-500" />
        </div>

        {/* Floating Snowflakes */}
        <div className="fixed inset-0 z-[2] pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <Snowflake
              key={i}
              className="absolute text-winter-cyan/10 animate-float"
              style={{
                left: `${5 + i * 8}%`,
                top: `${10 + (i % 5) * 18}%`,
                fontSize: `${10 + i * 2}px`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: `${5 + i}s`,
              }}
            />
          ))}
        </div>

        <SnowParticles />

        {/* Content */}
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <header className="sticky top-0 z-50 backdrop-blur-xl bg-winter-dark/80 border-b border-winter-cyan/20">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
              <Link 
                to="/" 
                className="group flex items-center gap-3 text-winter-silver hover:text-winter-cyan transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center group-hover:bg-winter-cyan/20 group-hover:border-winter-cyan/50 transition-all">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </div>
                <span className="font-rajdhani text-sm hidden sm:block">Back to Home</span>
              </Link>
              
              <div className="font-cinzel-decorative text-lg sm:text-xl">
                <span className="bg-gradient-to-r from-winter-frost via-winter-cyan to-winter-frost bg-clip-text text-transparent">
                  E-Summit'26
                </span>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-12 md:py-20">
            <div className="max-w-4xl mx-auto">
              {/* Title Section */}
              <div className="text-center mb-12 md:mb-16">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-winter-cyan/10 border border-winter-cyan/30 mb-6">
                  <FileText className="w-10 h-10 text-winter-cyan" />
                </div>
                <h1 className="font-cinzel-decorative text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-winter-frost via-winter-cyan to-winter-frost bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}>
                    Terms of Service
                  </span>
                </h1>
                <p className="font-rajdhani text-winter-silver/60 text-sm">
                  Effective: January 2026
                </p>
              </div>

              {/* Introduction Card */}
              <div className="mb-12 p-6 md:p-8 bg-gradient-to-br from-winter-dark/80 to-winter-deep/80 backdrop-blur-xl border border-winter-cyan/20 rounded-2xl shadow-2xl shadow-winter-cyan/5">
                <p className="font-cormorant text-winter-silver/90 text-lg md:text-xl leading-relaxed">
                  Welcome to Winter of Innovation! These terms govern your participation in our events and use of our platform. 
                  Please read them carefully to ensure a smooth and rewarding experience.
                </p>
              </div>

              {/* Sections */}
              <div className="space-y-8">
                {sections.map((section, index) => (
                  <div 
                    key={index} 
                    className="group p-6 md:p-8 bg-gradient-to-br from-winter-dark/60 to-winter-deep/60 backdrop-blur-xl border border-winter-cyan/10 rounded-2xl hover:border-winter-cyan/30 transition-all duration-500"
                  >
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center flex-shrink-0 group-hover:bg-winter-cyan/20 group-hover:border-winter-cyan/50 transition-all duration-300">
                        <section.icon className="w-6 h-6 md:w-7 md:h-7 text-winter-cyan" />
                      </div>
                      <div className="flex-1">
                        <h2 className="font-cinzel text-xl md:text-2xl font-semibold text-winter-frost mb-3">
                          {section.title}
                        </h2>
                        <p className="font-cormorant text-winter-silver/70 text-base md:text-lg leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Liability Section */}
              <div className="mt-8 p-6 md:p-8 bg-winter-deep/50 backdrop-blur-xl border border-winter-cyan/20 rounded-2xl">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                    <AlertCircle className="w-6 h-6 md:w-7 md:h-7 text-amber-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-cinzel text-xl md:text-2xl font-semibold text-winter-frost mb-3">
                      Limitation of Liability
                    </h2>
                    <p className="font-cormorant text-winter-silver/70 text-base md:text-lg leading-relaxed">
                      E-Cell NIT Hamirpur is not liable for any damages arising from participation in events, 
                      technical issues, or third-party services. We reserve the right to modify or cancel events with reasonable notice.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Section */}
              <div className="mt-12 p-6 md:p-8 bg-gradient-to-r from-winter-cyan/5 to-purple-500/5 backdrop-blur-xl border border-winter-cyan/20 rounded-2xl">
                <div className="text-center">
                  <h3 className="font-cinzel text-xl font-semibold text-winter-frost mb-4">
                    Questions About These Terms?
                  </h3>
                  <p className="font-cormorant text-winter-silver/80 text-lg leading-relaxed mb-4">
                    For questions regarding these terms of service, reach out to us at
                  </p>
                  <a 
                    href="mailto:legal@ecellnith.in" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-winter-cyan/10 border border-winter-cyan/40 rounded-full text-winter-cyan hover:bg-winter-cyan/20 hover:border-winter-cyan transition-all font-rajdhani"
                  >
                    legal@ecellnith.in
                  </a>
                </div>
              </div>

              {/* Footer Links */}
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm">
                <Link 
                  to="/" 
                  className="text-winter-silver/60 hover:text-winter-cyan transition-colors font-rajdhani"
                >
                  ← Back to Home
                </Link>
                <span className="hidden sm:block text-winter-cyan/30">✦</span>
                <Link 
                  to="/privacy" 
                  className="text-winter-silver/60 hover:text-winter-cyan transition-colors font-rajdhani"
                >
                  Privacy Policy →
                </Link>
              </div>
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-winter-cyan/10 py-8 mt-12">
            <div className="container mx-auto px-4 text-center">
              <p className="font-cormorant text-winter-silver/50 text-sm">
                © 2026 E-Cell NIT Hamirpur. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;
