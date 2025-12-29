import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Instagram, Sparkles, Crown, Star, Users } from 'lucide-react';

// Final Year Team - 10 members
const finalYearTeam = [
  { name: 'Atharv Sharma', position: 'President', image: '', quote: 'Leading innovation' },
  { name: 'Priya Patel', position: 'Vice President', image: '', quote: 'Driving excellence' },
  { name: 'Rahul Kumar', position: 'Technical Head', image: '', quote: 'Building the future' },
  { name: 'Sneha Reddy', position: 'Marketing Head', image: '', quote: 'Creating impact' },
  { name: 'Arjun Mehta', position: 'Finance Head', image: '', quote: 'Managing resources' },
  { name: 'Ananya Singh', position: 'Events Head', image: '', quote: 'Crafting experiences' },
  { name: 'Vikram Joshi', position: 'Design Head', image: '', quote: 'Visualizing dreams' },
  { name: 'Kavya Nair', position: 'PR Head', image: '', quote: 'Building connections' },
  { name: 'Aditya Gupta', position: 'Content Head', image: '', quote: 'Telling stories' },
  { name: 'Riya Desai', position: 'Operations Head', image: '', quote: 'Ensuring excellence' },
];

// 3rd Year Team - 24 members
const thirdYearTeam = [
  { name: 'Rohan Verma', position: 'Tech Team', image: '', quote: 'Coding the future' },
  { name: 'Ishita Kapoor', position: 'Tech Team', image: '', quote: 'Innovation first' },
  { name: 'Karan Malhotra', position: 'Tech Team', image: '', quote: 'Debug & deploy' },
  { name: 'Pooja Sharma', position: 'Marketing Team', image: '', quote: 'Spreading the word' },
  { name: 'Siddharth Rao', position: 'Marketing Team', image: '', quote: 'Brand builders' },
  { name: 'Neha Agarwal', position: 'Marketing Team', image: '', quote: 'Creative campaigns' },
  { name: 'Amit Bansal', position: 'Design Team', image: '', quote: 'Pixel perfect' },
  { name: 'Divya Iyer', position: 'Design Team', image: '', quote: 'Art meets tech' },
  { name: 'Harsh Pandey', position: 'Design Team', image: '', quote: 'Visual storytelling' },
  { name: 'Sakshi Jain', position: 'Content Team', image: '', quote: 'Words that inspire' },
  { name: 'Varun Khanna', position: 'Content Team', image: '', quote: 'Crafting narratives' },
  { name: 'Tanvi Mishra', position: 'Content Team', image: '', quote: 'Story weavers' },
  { name: 'Nikhil Saxena', position: 'Events Team', image: '', quote: 'Making it happen' },
  { name: 'Shreya Bhatt', position: 'Events Team', image: '', quote: 'Experience creators' },
  { name: 'Akash Tiwari', position: 'Events Team', image: '', quote: 'Flawless execution' },
  { name: 'Meera Chopra', position: 'PR Team', image: '', quote: 'Relationship builders' },
  { name: 'Yash Sinha', position: 'PR Team', image: '', quote: 'Network ninjas' },
  { name: 'Ritika Dubey', position: 'PR Team', image: '', quote: 'Connect & grow' },
  { name: 'Gaurav Pillai', position: 'Finance Team', image: '', quote: 'Number crunchers' },
  { name: 'Anjali Menon', position: 'Finance Team', image: '', quote: 'Budget masters' },
  { name: 'Kunal Shah', position: 'Operations Team', image: '', quote: 'Behind the scenes' },
  { name: 'Nidhi Arora', position: 'Operations Team', image: '', quote: 'Smooth operators' },
  { name: 'Pranav Kulkarni', position: 'Logistics Team', image: '', quote: 'Planning perfection' },
  { name: 'Simran Bhatia', position: 'Logistics Team', image: '', quote: 'Detail oriented' },
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
              
              {/* Social Links - Show on Hover */}
              <div className={`absolute inset-0 flex items-center justify-center gap-3 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                {[
                  { Icon: Linkedin, label: 'LinkedIn' },
                  { Icon: Twitter, label: 'Twitter' },
                  { Icon: Instagram, label: 'Instagram' },
                ].map(({ Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    className="w-9 h-9 rounded-full bg-winter-dark/90 backdrop-blur-sm border border-winter-cyan/40 flex items-center justify-center hover:bg-winter-cyan/20 hover:border-winter-cyan transition-all duration-200 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 text-winter-cyan" />
                  </a>
                ))}
              </div>

              {/* Quote on hover - positioned at top */}
              <div className={`absolute top-3 left-3 right-3 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
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
          <p className="text-winter-cyan text-xs font-rajdhani tracking-wider uppercase">
            {member.position}
          </p>
          
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
