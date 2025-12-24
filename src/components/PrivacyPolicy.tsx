import { Shield, Eye, Lock, Users, Database, Bell } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: 'We collect information you provide directly, including name, email, and registration details for Winter of Innovation events. We also gather usage data to enhance your experience.',
    },
    {
      icon: Lock,
      title: 'How We Use Your Data',
      content: 'Your information is used to manage event registrations, send important updates, improve our services, and communicate about future E-Cell NIT Hamirpur initiatives.',
    },
    {
      icon: Database,
      title: 'Data Storage & Security',
      content: 'We implement industry-standard security measures to protect your data. Information is stored securely and accessed only by authorized personnel for legitimate purposes.',
    },
    {
      icon: Users,
      title: 'Third-Party Sharing',
      content: 'We do not sell your personal information. Data may be shared with event sponsors and partners only with your explicit consent, and strictly for event-related purposes.',
    },
    {
      icon: Bell,
      title: 'Your Rights',
      content: 'You have the right to access, modify, or delete your personal data. You can opt-out of marketing communications at any time while still receiving essential event updates.',
    },
  ];

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="flex items-start gap-4 p-5 bg-winter-cyan/5 border border-winter-cyan/20 rounded-xl">
        <Shield className="w-6 h-6 text-winter-cyan flex-shrink-0 mt-1" />
        <div className="space-y-2">
          <p className="font-cormorant text-winter-silver/80 text-lg leading-relaxed">
            At Winter of Innovation, we prioritize your privacy and are committed to protecting your personal information. 
            This policy outlines how we collect, use, and safeguard your data.
          </p>
          <p className="font-rajdhani text-winter-silver/60 text-sm">
            Last updated: January 2026
          </p>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, index) => (
        <div key={index} className="group space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center group-hover:border-winter-cyan/50 group-hover:bg-winter-cyan/20 transition-all duration-300">
              <section.icon className="w-5 h-5 text-winter-cyan" />
            </div>
            <h3 className="font-cinzel text-xl font-semibold text-winter-frost">
              {section.title}
            </h3>
          </div>
          <p className="font-cormorant text-winter-silver/70 text-base leading-relaxed pl-13">
            {section.content}
          </p>
        </div>
      ))}

      {/* Contact */}
      <div className="mt-8 p-5 bg-gradient-to-r from-winter-cyan/5 to-purple-500/5 border border-winter-cyan/20 rounded-xl">
        <p className="font-cormorant text-winter-silver/80 text-base leading-relaxed">
          For privacy-related questions or to exercise your rights, contact us at{' '}
          <a href="mailto:privacy@ecellnith.in" className="text-winter-cyan hover:text-winter-frost transition-colors underline underline-offset-4">
            privacy@ecellnith.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
