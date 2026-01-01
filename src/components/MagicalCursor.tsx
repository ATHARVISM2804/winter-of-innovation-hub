import { useEffect, useState, useRef } from 'react';

interface CursorPosition {
  x: number;
  y: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  life: number;
  maxLife: number;
  hue: number;
}

const MagicalCursor = () => {
  const [cursorPos, setCursorPos] = useState<CursorPosition>({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [trail, setTrail] = useState<CursorPosition[]>([]);
  const [particles, setParticles] = useState<Particle[]>([]);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailLength = 15;
  const particleInterval = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setCursorPos(newPos);

      // Update trail
      setTrail((prev) => {
        const newTrail = [newPos, ...prev.slice(0, trailLength - 1)];
        return newTrail;
      });

      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.onclick !== null ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };

    const handleMouseLeave = () => {
      setCursorPos({ x: -100, y: -100 });
      setTrail([]);
    };

    // Create particles periodically
    particleInterval.current = setInterval(() => {
      if (cursorPos.x !== -100 && cursorPos.y !== -100) {
        const newParticles: Particle[] = [];
        for (let i = 0; i < 2; i++) {
          newParticles.push({
            x: cursorPos.x,
            y: cursorPos.y,
            size: Math.random() * 3 + 1,
            speedX: (Math.random() - 0.5) * 2,
            speedY: (Math.random() - 0.5) * 2,
            life: 1,
            maxLife: Math.random() * 60 + 40,
            hue: Math.random() * 60 + 180, // Cyan to blue range
          });
        }
        setParticles((prev) => [...prev, ...newParticles].slice(-50)); // Keep max 50 particles
      }
    }, 50);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (particleInterval.current) {
        clearInterval(particleInterval.current);
      }
    };
  }, [cursorPos.x, cursorPos.y]);

  // Animate particles
  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.speedX,
            y: particle.y + particle.speedY,
            life: particle.life + 1,
            speedY: particle.speedY + 0.05, // Gravity effect
          }))
          .filter((particle) => particle.life < particle.maxLife)
      );
    };

    const animationFrame = setInterval(animateParticles, 16); // ~60fps

    return () => clearInterval(animationFrame);
  }, []);

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
        
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.5;
          }
          100% {
            transform: scale(0.8);
            opacity: 1;
          }
        }
        
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 0;
            transform: scale(0);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999] mix-blend-screen transition-transform duration-100"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
        }}
      >
        {/* Outer glow ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-winter-cyan/40"
          style={{
            width: '32px',
            height: '32px',
            marginLeft: '-16px',
            marginTop: '-16px',
            animation: 'pulse-ring 2s ease-in-out infinite',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
          }}
        />
        
        {/* Middle rotating ring */}
        <div
          className="absolute inset-0"
          style={{
            width: '24px',
            height: '24px',
            marginLeft: '-12px',
            marginTop: '-12px',
            animation: 'rotate 3s linear infinite',
          }}
        >
          <div className="absolute w-1 h-1 bg-winter-cyan rounded-full" style={{ top: 0, left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 8px rgba(0, 255, 255, 0.8)' }} />
          <div className="absolute w-1 h-1 bg-purple-400 rounded-full" style={{ bottom: 0, left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)' }} />
          <div className="absolute w-1 h-1 bg-winter-cyan rounded-full" style={{ left: 0, top: '50%', transform: 'translateY(-50%)', boxShadow: '0 0 8px rgba(0, 255, 255, 0.8)' }} />
          <div className="absolute w-1 h-1 bg-purple-400 rounded-full" style={{ right: 0, top: '50%', transform: 'translateY(-50%)', boxShadow: '0 0 8px rgba(168, 85, 247, 0.8)' }} />
        </div>

        {/* Inner core */}
        <div
          className="absolute rounded-full bg-gradient-to-br from-winter-cyan to-purple-500"
          style={{
            width: '8px',
            height: '8px',
            marginLeft: '-4px',
            marginTop: '-4px',
            boxShadow: '0 0 15px rgba(0, 255, 255, 0.6), 0 0 30px rgba(168, 85, 247, 0.4)',
          }}
        />

        {/* Sparkles around cursor */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.cos((i * Math.PI) / 2 + Date.now() / 1000) * 20}px`,
              top: `${Math.sin((i * Math.PI) / 2 + Date.now() / 1000) * 20}px`,
              animation: `sparkle ${1 + i * 0.2}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
              boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
            }}
          />
        ))}
      </div>

      {/* Trail Effect */}
      {trail.map((pos, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9998] rounded-full bg-gradient-to-br from-winter-cyan/30 to-purple-500/30 mix-blend-screen"
          style={{
            left: `${pos.x}px`,
            top: `${pos.y}px`,
            width: `${20 - index * 1}px`,
            height: `${20 - index * 1}px`,
            transform: 'translate(-50%, -50%)',
            opacity: 1 - index / trailLength,
            transition: 'all 0.1s ease-out',
            boxShadow: `0 0 ${10 - index * 0.5}px rgba(0, 255, 255, ${0.3 - index * 0.02})`,
          }}
        />
      ))}

      {/* Particle System */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9997] rounded-full mix-blend-screen"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: 'translate(-50%, -50%)',
            opacity: 1 - particle.life / particle.maxLife,
            background: `hsl(${particle.hue}, 100%, 70%)`,
            boxShadow: `0 0 ${particle.size * 2}px hsl(${particle.hue}, 100%, 70%)`,
          }}
        />
      ))}
    </>
  );
};

export default MagicalCursor;
