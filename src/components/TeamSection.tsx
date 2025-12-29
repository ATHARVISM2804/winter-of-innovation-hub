import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Instagram, Sparkles, Crown, Star, Users } from 'lucide-react';

// Final Year Team - 9 members
const finalYearTeam = [
  { name: 'Prashant Kumar', position: 'Overall Coordinator', image: '', quote: 'Leading innovation' },
  { name: 'Krish Butani', position: 'Manager', image: '', quote: 'Driving excellence' },
  { name: 'Khushi', position: 'Assistant Manager', image: '', quote: 'Supporting success' },
  { name: 'Gyan', position: 'PR Head', image: '', quote: 'Building connections' },
  { name: 'Kartik Gadade', position: 'Design Head', image: '', quote: 'Visualizing dreams' },
  { name: 'Srujan', position: 'CPR Head', image: '', quote: 'Creating impact' },
  { name: 'Vaishnav', position: 'Finance Head', image: '', quote: 'Managing resources' },
  { name: 'Harshit', position: 'Event Head', image: '', quote: 'Crafting experiences' },
  { name: 'Abhinav Dhiman', position: 'Event Head', image: '', quote: 'Making it happen' },
];

// 3rd Year Team - 23 members
const thirdYearTeam = [
  { name: 'Atharv', position: 'Web Coordinator', image: '', quote: 'Building the web' },
  { name: 'Rajvil', position: 'PR and Marketing Coordinator', image: '', quote: 'Spreading the word' },
  { name: 'Anshul', position: 'CPR Coordinator', image: '', quote: 'Creating partnerships' },
  { name: 'Kushagra Srivastava', position: 'Finance Coordinator', image: '', quote: 'Managing finances' },
  { name: 'Ujjwal', position: 'Media Coordinator', image: '', quote: 'Capturing moments' },
  { name: 'Riya', position: 'Media Coordinator', image: '', quote: 'Visual storytelling' },
  { name: 'Ayush', position: 'Junior Head', image: '', quote: 'Innovation first' },
  { name: 'Divya', position: 'Junior Head', image: '', quote: 'Driving change' },
  { name: 'Hardik Anand', position: 'Junior Head', image: '', quote: 'Leading teams' },
  { name: 'Kartik Tomar', position: 'Junior Head', image: '', quote: 'Making impact' },
  { name: 'Kushagra Bhartia', position: 'Junior Head', image: '', quote: 'Building future' },
  { name: 'Lokesh', position: 'Junior Head', image: '', quote: 'Executing excellence' },
  { name: 'Madhav', position: 'Junior Head', image: '', quote: 'Inspiring teams' },
  { name: 'Madhaw Bagadia', position: 'Junior Head', image: '', quote: 'Creating value' },
  { name: 'Mudavat Kashi', position: 'Junior Head', image: '', quote: 'Delivering results' },
  { name: 'Nikhil Panthi', position: 'Junior Head', image: '', quote: 'Strategic thinking' },
  { name: 'Nimish', position: 'Junior Head', image: '', quote: 'Problem solving' },
  { name: 'Seema', position: 'Junior Head', image: '', quote: 'Team building' },
  { name: 'Shagun', position: 'Junior Head', image: '', quote: 'Driving growth' },
  { name: 'Yash Pandey', position: 'Junior Head', image: '', quote: 'Innovation leader' },
  { name: 'Yashi', position: 'Junior Head', image: '', quote: 'Excellence driven' },
  { name: 'Samiksha', position: 'Junior Head', image: '', quote: 'Passionate leader' },
  { name: 'Suneha', position: 'Junior Head', image: '', quote: 'Committed to success' },
];

interface TeamMemberCardProps {
  member: typeof finalYearTeam[0];
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-56 mx-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        {/* Circular Image Container */}
        <div className={`relative w-44 h-44 rounded-full overflow-hidden transition-all duration-300 ${isHovered ? 'translate-y-[-8px] scale-105 shadow-2xl shadow-winter-cyan/30' : ''}`}>
          {/* Frosted glass border effect */}
          <div className="absolute inset-0 rounded-full frosted-glass mystic-card p-1">
            <div className="w-full h-full rounded-full overflow-hidden relative">
              {/* Placeholder gradient for no image */}
              <div className="absolute inset-0 bg-gradient-to-br from-winter-dark via-winter-deep to-winter-purple/20" />
              
              {member.image && (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              )}

              {/* Decorative Pattern when no image */}
              {!member.image && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-5xl text-winter-cyan/30 font-cinzel-decorative">
                    {member.name.charAt(0)}
                  </div>
                  {/* Decorative circles */}
                  <div className="absolute w-20 h-20 border border-winter-cyan/10 rounded-full animate-pulse" />
                  <div className="absolute w-28 h-28 border border-winter-cyan/5 rounded-full animate-pulse animation-delay-200" />
                </div>
              )}

              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-winter-deep via-winter-deep/40 to-transparent opacity-60 transition-opacity duration-300" />
              
              {/* Magical glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-t from-winter-cyan/30 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

              {/* Quote on hover - positioned at center */}
              <div className={`absolute inset-0 flex items-center justify-center px-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <p className="font-cormorant text-xs text-winter-frost/90 italic text-center">
                  "{member.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Below Circle */}
        <div className="mt-4 text-center relative">
          <h3 className={`font-cinzel text-base font-semibold text-winter-frost mb-1 transition-all duration-300 ${isHovered ? 'text-glow' : ''}`}>
            {member.name}
          </h3>
          <p className="text-winter-cyan text-xs font-rajdhani tracking-wider uppercase mb-3">
            {member.position}
          </p>
          
          {/* Social Links Below Profile */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-winter-dark/50 border border-winter-cyan/30 flex items-center justify-center hover:bg-winter-cyan/20 hover:border-winter-cyan transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-winter-cyan" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-winter-dark/50 border border-winter-cyan/30 flex items-center justify-center hover:bg-winter-cyan/20 hover:border-winter-cyan transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-winter-cyan" />
            </a>
          </div>
          
          {/* Sparkle decoration */}
          <Sparkles className={`absolute -top-2 right-0 w-3 h-3 transition-all duration-300 ${isHovered ? 'text-winter-cyan/60 scale-125' : 'text-winter-cyan/20'}`} />
        </div>
      </div>
    </div>
  );
};

interface SlidingTeamRowProps {
  team: typeof finalYearTeam;
  title: string;
  yearBadge: string;
  direction?: 'left' | 'right';
}

const SlidingTeamRow = ({ team, title, yearBadge, direction = 'left' }: SlidingTeamRowProps) => {
  return (
    <div className="mb-20">
      {/* Row Header */}
      <div className="flex items-center justify-center gap-4 mb-8">
        <div className="h-px w-16 bg-gradient-to-r from-transparent to-winter-cyan/50" />
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-winter-cyan" />
          <h3 className="font-cinzel-decorative text-2xl md:text-3xl font-bold text-winter-frost">
            {title}
          </h3>
          <span className="px-3 py-1 rounded-full bg-winter-cyan/10 border border-winter-cyan/30 text-winter-cyan text-sm font-rajdhani">
            {yearBadge}
          </span>
        </div>
        <div className="h-px w-16 bg-gradient-to-l from-transparent to-winter-cyan/50" />
      </div>

      {/* Sliding Container */}
      <div className="relative overflow-hidden">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-winter-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-winter-dark to-transparent z-10 pointer-events-none" />
        
        {/* Sliding Track - Duplicate content for seamless loop */}
        <div className={`flex ${direction === 'left' ? 'animate-slide-left-fast' : 'animate-slide-right-fast'}`}>
          {/* First set */}
          {team.map((member, index) => (
            <TeamMemberCard key={`${member.name}-${index}`} member={member} index={index} />
          ))}
          {/* Duplicate set for seamless loop */}
          {team.map((member, index) => (
            <TeamMemberCard key={`${member.name}-duplicate-${index}`} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TeamSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-32 md:py-40 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-winter-cyan/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse animation-delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          {/* Crown Icon */}
          <div className={`flex justify-center mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <div className="relative">
              <Crown className="w-10 h-10 text-winter-cyan/60 animate-glow-pulse" />
            </div>
          </div>

          {/* Decorative Line */}
          <div className={`flex items-center justify-center gap-4 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-winter-cyan/50" />
            <Star className="w-5 h-5 text-winter-cyan animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-winter-cyan/50" />
          </div>

          <h2
            className={`font-cinzel-decorative text-4xl md:text-6xl font-bold enchanted-text mb-6 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Our Team
          </h2>
          <p
            className={`font-cormorant text-xl text-winter-silver/70 max-w-2xl mx-auto italic transition-all duration-1000 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            The passionate minds behind E-Summit 2026
          </p>
        </div>

        {/* Sliding Team Rows */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Final Year Row - Slides Left */}
          <SlidingTeamRow 
            team={finalYearTeam} 
            title="Final Year" 
            yearBadge="10 Members"
            direction="left"
          />

          {/* 3rd Year Row - Slides Right */}
          <SlidingTeamRow 
            team={thirdYearTeam} 
            title="3rd Year" 
            yearBadge="24 Members"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
