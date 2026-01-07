import { FileText, UserCheck, AlertCircle, Award, Scale, MessageSquare } from 'lucide-react';

const TermsOfService = () => {
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
    <div className="space-y-8">
      {/* Introduction */}
      <div className="flex items-start gap-4 p-5 bg-winter-cyan/5 border border-winter-cyan/20 rounded-xl">
        <FileText className="w-6 h-6 text-winter-cyan flex-shrink-0 mt-1" />
        <div className="space-y-2">
          <p className="font-cormorant text-winter-silver/80 text-lg leading-relaxed">
            Welcome to Winter of Innovation! These terms govern your participation in our events and use of our platform. 
            Please read them carefully to ensure a smooth and rewarding experience.
          </p>
          <p className="font-rajdhani text-winter-silver/60 text-sm">
            Effective: January 2026
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

      {/* Liability */}
      <div className="p-5 bg-winter-deep/50 border border-winter-cyan/20 rounded-xl space-y-3">
        <h3 className="font-cinzel text-lg font-semibold text-winter-frost">Limitation of Liability</h3>
        <p className="font-cormorant text-winter-silver/70 text-base leading-relaxed">
          E-Cell NIT Hamirpur is not liable for any damages arising from participation in events, 
          technical issues, or third-party services. We reserve the right to modify or cancel events with reasonable notice.
        </p>
      </div>

      {/* Contact */}
      <div className="mt-8 p-5 bg-gradient-to-r from-winter-cyan/5 to-purple-500/5 border border-winter-cyan/20 rounded-xl">
        <p className="font-cormorant text-winter-silver/80 text-base leading-relaxed">
          Questions about these terms? Reach out to us at{' '}
          <a href="mailto:ecell@nith.ac.in" className="text-winter-cyan hover:text-winter-frost transition-colors underline underline-offset-4">
            ecell@nith.ac.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default TermsOfService;
