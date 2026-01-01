import { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Instagram, Sparkles, Crown, Star, Users } from 'lucide-react';

interface TeamMember {
  name: string;
  position: string;
  image: string;
  quote: string;
  instagram?: string;
  linkedin?: string;
}

// Final Year Team - 9 members
const finalYearTeam: TeamMember[] = [
  { name: 'Prashant Kumar', position: 'Overall Coordinator', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767079998/IMG_20251229_130010_izrmau.jpg', quote: 'Leading innovation', instagram: 'https://www.instagram.com/itss._.prashant/', linkedin: 'https://www.linkedin.com/in/prashantkumar003/' },
  { name: 'Krish Bhutani', position: 'Manager', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767079695/IMG_4662_a7hrrv.png', quote: 'Driving excellence', instagram: 'https://www.instagram.com/krish_bhutani_/', linkedin: 'https://www.linkedin.com/in/krishbhutani/' },
  { name: 'Khushi', position: 'Assistant Manager', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767079638/1766144112597_sbitxk.png', quote: 'Supporting success', instagram: 'https://www.instagram.com/khushi._.singh_.1106', linkedin: 'https://www.linkedin.com/in/khushi-singh-230a97253/' },
  { name: 'Gyan', position: 'PR Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767293247/gyan_dw8bir.jpg', quote: 'Building connections', instagram: 'https://www.instagram.com/i.gyanprakashsah.fbb0001t/', linkedin: 'https://www.linkedin.com/in/gyanprakash001t/' },
  { name: 'Kartik Gadade', position: 'Design Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767293247/Kartik_fkjvjb.jpg', quote: 'Visualizing dreams', instagram: 'https://www.instagram.com/kartik_506/', linkedin: 'https://www.linkedin.com/in/kartik506/' },
  { name: 'Srujan', position: 'CPR Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767293246/srujan_pix4oz.png', quote: 'Creating impact', instagram: 'https://www.instagram.com/srujan_1109/', linkedin: 'https://www.linkedin.com/in/srujan-sontakke-72750b257/' },
  { name: 'Vaishnav', position: 'Finance Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767293248/vaishnav_dj7ceo.jpg', quote: 'Managing resources', instagram: 'https://www.instagram.com/vaishnav145876/', linkedin: 'https://www.linkedin.com/in/vaishnav-baravkar-aa9337259/' },
  { name: 'Harshit', position: 'Event Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767293247/harshit_vul0x4.png', quote: 'Crafting experiences', instagram: 'https://www.instagram.com/_harshit.parti_/', linkedin: 'https://www.linkedin.com/in/harshit-parti/' },
  { name: 'Abhinav Dhiman', position: 'Event Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767176156/DSC_8943_3_udwsnl.jpg', quote: 'Making it happen', instagram: 'https://www.instagram.com/dhimanabhi8069/', linkedin: 'https://www.linkedin.com/in/abhinav-dhiman-ba7b1328a/' },
];

// 3rd Year Team - 23 members
const thirdYearTeam: TeamMember[] = [
   { name: 'Kushagra Srivastava', position: 'Finance Coordinator', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767183867/1767101466459_fitfw7.png', quote: 'Managing finances', instagram: 'https://www.instagram.com/__kushagra.___/', linkedin: 'https://www.linkedin.com/in/kushagra-srivastava-1b342a291/' },
  { name: 'Rajvil', position: 'PR and Marketing Coordinator', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767076519/Rajvil_Website_Image_wt1d8e.jpg', quote: 'Spreading the word', instagram: 'https://www.instagram.com/rajvilchoudhary/', linkedin: 'https://www.linkedin.com/in/rajvil-choudhary/' },
  { name: 'Anshul', position: 'CPR Coordinator', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767294115/anshul_aawzec.jpg', quote: 'Creating partnerships', instagram: 'https://www.instagram.com/77ucent/', linkedin: 'https://www.linkedin.com/in/anshul-anji-82b500285/' },
  { name: 'Atharv', position: 'Web Coordinator', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767076457/atharv_lpkcnw.jpg', quote: 'Building the web', instagram: 'https://www.instagram.com/_atharv.vv__/', linkedin: 'https://www.linkedin.com/in/atharv-golait-9048772ab' },
  
  { name: 'Ujjwal', position: 'Media Coordinator', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767075945/WhatsApp_Image_2025-12-29_at_11.55.12_AM_lcyb9u.jpg', quote: 'Capturing moments', instagram: 'https://www.instagram.com/ujjwal.kumar12/', linkedin: 'https://www.linkedin.com/in/ujjwal-kumar2004/' },
  { name: 'Riya', position: 'Media Coordinator', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767076610/IMG20251225123934_zwl0km.jpg', quote: 'Visual storytelling', instagram: 'https://www.instagram.com/reyy_anand/', linkedin: 'https://www.linkedin.com/in/riya-anand-18671825a/' },
  { name: 'Ayush', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767294115/Ayush_l7z0fp.png', quote: 'Innovation first', instagram: 'https://www.instagram.com/_ayush1729_/', linkedin: 'https://www.linkedin.com/in/ayush-abhyudaya-262909281/' },
  { name: 'Divya', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767176155/IMG_20240302_145430_787_gbiz8v.jpg', quote: 'Driving change', instagram: 'https://www.instagram.com/jaisdivya432/', linkedin: 'https://www.linkedin.com/in/divya-jaiswal-930550282/' },
  { name: 'Hardik Anand', position: 'Junior Head', image: '', quote: 'Leading teams', linkedin: 'https://www.linkedin.com/in/hardik-anand-84b6382a2/' },
  { name: 'Kanish', position: 'I&T Coordinator', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767077252/IMG_20251229_211620_jmrmf1.jpg', quote: 'Innovation and Technology', instagram: 'https://www.instagram.com/kanishdhiman02/', linkedin: 'https://www.linkedin.com/in/kanish-dhiman/' },
  { name: 'Kushagra Bhartia', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767294115/kushagra_ni2ccj.jpg', quote: 'Building future', instagram: 'https://www.instagram.com/kushagra_bhartia/', linkedin: 'https://www.linkedin.com/in/kushagra-bhartia-8670291b2/' },
  { name: 'Lokesh', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767294115/Lokesh_jmbdru.png', quote: 'Executing excellence', instagram: 'https://www.instagram.com/lokesh.28_/' },
  { name: 'Madhav', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767294114/madhav_goyal_mpdwcl.png', quote: 'Inspiring teams', instagram: 'https://www.instagram.com/_madhav_63/', linkedin: 'https://www.linkedin.com/in/madhav-goyal-748a9a230/' },
  { name: 'Madhaw Bagadia', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767077473/1766346910587_akizqv.jpg', quote: 'Creating value', instagram: 'https://www.instagram.com/madhawbagadia/', linkedin: 'https://www.linkedin.com/in/madhaw-kumar-bagadia-79038a28a/' },
  { name: 'Mudavat Kashi', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767294114/mudavat_oejvaa.png', quote: 'Delivering results', instagram: 'https://www.instagram.com/kashiii_067/' },
  { name: 'Nikhil Panthi', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767294116/Nikhil_yk99hc.jpg', quote: 'Strategic thinking', instagram: 'https://www.instagram.com/nikkkhiil.__/', linkedin: 'https://www.linkedin.com/in/nikhilpanthi/' },
  { name: 'Nimish', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767077191/df2c2b48-9b6f-4c01-8614-4a1fe336c1b5_mkuq1b.jpg', quote: 'Problem solving', instagram: 'https://www.instagram.com/nimishh.music/', linkedin: 'https://www.linkedin.com/in/nimish-saxena-3433a52b5/' },
  { name: 'Seema', position: 'Junior Head', image: '', quote: 'Team building', instagram: 'https://www.instagram.com/seema.__.singh_/', linkedin: 'https://www.linkedin.com/in/seema-singh-b097a0287/' },
  { name: 'Shagun', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767076737/IMG_20251229_212522_udgavb.jpg', quote: 'Driving growth', instagram: 'https://www.instagram.com/rana_shagun04/', linkedin: 'https://www.linkedin.com/in/shagun-rana-0093a2341/' },
  { name: 'Yash Pandey', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767294114/yash_r0rrxb.png', quote: 'Innovation leader', instagram: 'https://www.instagram.com/yash._.pandey/', linkedin: 'https://www.linkedin.com/in/yash-pandey-b02579288/' },
  { name: 'Yashi', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767076688/IMG_20251230_000501_ni73bm.jpg', quote: 'Excellence driven', instagram: 'https://www.instagram.com/_ya.she_/', linkedin: 'https://www.linkedin.com/in/yashi-sharma-5244ab2b1/' },
  { name: 'Samiksha', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767077147/WhatsApp_Image_2025-12-29_at_21.58.02_jnfg9r.jpg', quote: 'Passionate leader', instagram: 'https://www.instagram.com/samikshagupta_1804/', linkedin: 'https://www.linkedin.com/in/samiksha-gupta-2119b52b0/' },
  { name: 'Suneha', position: 'Junior Head', image: 'https://res.cloudinary.com/dinhcaf2c/image/upload/v1767076794/4864fa2e-d79f-40c0-869a-a06d345747f5_coetsb.jpg', quote: 'Committed to success', instagram: 'https://www.instagram.com/suneha_0_0_', linkedin: 'https://www.linkedin.com/in/suneha-choudhary-1667b22a6/' },
];

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard = ({ member, index }: TeamMemberCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-shrink-0 w-56 mx-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="flex flex-col items-center">
        {/* Circular Image Container - Responsive sizing */}
        <div className={`relative w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full overflow-hidden transition-all duration-300 ${isHovered ? 'translate-y-[-8px] scale-105 shadow-2xl shadow-winter-cyan/30' : ''}`} style={{ aspectRatio: '1/1' }}>
          {/* Frosted glass border effect */}
          <div className="absolute inset-0 rounded-full frosted-glass mystic-card p-1">
            <div className="w-full h-full rounded-full overflow-hidden relative" style={{ aspectRatio: '1/1' }}>
              {/* Placeholder gradient for no image */}
              <div className="absolute inset-0 bg-gradient-to-br from-winter-dark via-winter-deep to-winter-purple/20" />
              
              {member.image && (
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 hover:scale-110 relative z-[1]"
                    style={{ 
                      objectFit: 'cover',
                      objectPosition: 'center',
                      width: '100%',
                      height: '100%'
                    }}
                  />
                </div>
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

              {/* Reduced Gradient Overlay for better image visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-winter-deep/50 via-transparent to-transparent opacity-40 transition-opacity duration-300 z-[2]" />
              
              {/* Magical glow on hover - only at bottom */}
              <div className={`absolute inset-0 bg-gradient-to-t from-winter-cyan/20 via-transparent to-transparent transition-opacity duration-300 z-[3] ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

              {/* Quote on hover - positioned at center with dark background */}
              <div className={`absolute inset-0 flex items-center justify-center px-4 transition-opacity duration-300 z-[4] ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                <div className="bg-winter-deep/80 backdrop-blur-sm rounded-lg px-3 py-2">
                  <p className="font-cormorant text-xs text-winter-frost/95 italic text-center">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Below Circle - Responsive text */}
        <div className="mt-3 sm:mt-4 text-center relative">
          <h3 className={`font-cinzel text-sm sm:text-base font-semibold text-winter-frost mb-1 transition-all duration-300 ${isHovered ? 'text-glow' : ''}`}>
            {member.name}
          </h3>
          <p className="text-winter-cyan text-[10px] sm:text-xs font-rajdhani tracking-wider uppercase mb-2 sm:mb-3">
            {member.position}
          </p>
          
          {/* Social Links Below Profile - Responsive sizing */}
          <div className="flex items-center justify-center gap-2 sm:gap-3">
            {member.instagram && (
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-winter-dark/50 border border-winter-cyan/30 flex items-center justify-center hover:bg-winter-cyan/20 hover:border-winter-cyan transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-3 h-3 sm:w-4 sm:h-4 text-winter-cyan" />
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-winter-dark/50 border border-winter-cyan/30 flex items-center justify-center hover:bg-winter-cyan/20 hover:border-winter-cyan transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 text-winter-cyan" />
              </a>
            )}
          </div>
          
          {/* Sparkle decoration */}
          <Sparkles className={`absolute -top-2 right-0 w-3 h-3 transition-all duration-300 ${isHovered ? 'text-winter-cyan/60 scale-125' : 'text-winter-cyan/20'}`} />
        </div>
      </div>
    </div>
  );
};

interface SlidingTeamRowProps {
  team: TeamMember[];
  title: string;
  yearBadge: string;
  direction?: 'left' | 'right';
}

const SlidingTeamRow = ({ team, title, yearBadge, direction = 'left' }: SlidingTeamRowProps) => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (scrollDirection: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      const newScrollLeft = scrollDirection === 'left' 
        ? scrollContainerRef.current.scrollLeft - scrollAmount
        : scrollContainerRef.current.scrollLeft + scrollAmount;
      
      scrollContainerRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

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

      {/* Sliding Container with Navigation */}
      <div className="relative group">
        {/* Left Arrow - Always visible on mobile */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-winter-dark/80 border-2 border-winter-cyan/40 flex items-center justify-center text-winter-cyan hover:bg-winter-cyan/20 hover:border-winter-cyan/60 transition-all duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 backdrop-blur-sm shadow-lg"
          aria-label="Scroll left"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow - Always visible on mobile */}
        <button
          onClick={() => scroll('right')}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-winter-dark/80 border-2 border-winter-cyan/40 flex items-center justify-center text-winter-cyan hover:bg-winter-cyan/20 hover:border-winter-cyan/60 transition-all duration-300 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 backdrop-blur-sm shadow-lg"
          aria-label="Scroll right"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Gradient Overlays for fade effect - Responsive width */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-r from-winter-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 md:w-32 bg-gradient-to-l from-winter-dark to-transparent z-10 pointer-events-none" />
        
        {/* Sliding Track - Duplicate content for seamless loop */}
        <div 
          ref={scrollContainerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className={`flex ${direction === 'left' ? 'animate-slide-left-fast' : 'animate-slide-right-fast'} ${isPaused ? 'pause-animation' : ''}`}>
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
