import { useEffect, useState, useCallback } from 'react';

interface PreloaderProps {
  onLoadComplete: () => void;
  minDuration?: number;
}

const Preloader = ({ onLoadComplete, minDuration = 4000 }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDissolving, setIsDissolving] = useState(false);
  const [sigilPhase, setSigilPhase] = useState<'forming' | 'glowing' | 'dissolving'>('forming');

  const triggerDissolve = useCallback(() => {
    setSigilPhase('dissolving');
    setIsDissolving(true);
    setTimeout(() => {
      setIsVisible(false);
      onLoadComplete();
    }, 1500);
  }, [onLoadComplete]);

  useEffect(() => {
    // Sigil animation phases
    const formingTimer = setTimeout(() => setSigilPhase('glowing'), 1500);
    const dissolveTimer = setTimeout(triggerDissolve, minDuration);

    return () => {
      clearTimeout(formingTimer);
      clearTimeout(dissolveTimer);
    };
  }, [minDuration, triggerDissolve]);

  // Generate snow particles for preloader
  const snowParticles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 5,
    opacity: Math.random() * 0.6 + 0.2,
  }));

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity duration-1500 ${
        isDissolving ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ 
        background: 'hsl(218 58% 5%)',
        transitionDuration: '1.5s'
      }}
    >
      {/* Deep Dark Background with Vignette */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at center, transparent 0%, hsl(218 58% 3%) 70%, hsl(218 58% 2%) 100%),
            linear-gradient(180deg, hsl(218 58% 6%) 0%, hsl(218 58% 4%) 50%, hsl(218 58% 3%) 100%)
          `
        }}
      />

      {/* Aurora Background - Slow Moving */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Aurora Wave */}
        <div 
          className="absolute w-[200%] h-[60%] top-0 left-1/2 -translate-x-1/2"
          style={{
            background: `
              radial-gradient(ellipse 80% 50% at 50% 0%, 
                hsl(187 100% 42% / 0.15) 0%, 
                hsl(200 80% 35% / 0.1) 30%,
                hsl(270 50% 40% / 0.08) 50%,
                transparent 70%
              )
            `,
            animation: 'auroraWave 12s ease-in-out infinite',
            filter: 'blur(40px)',
          }}
        />
        
        {/* Secondary Aurora Wave */}
        <div 
          className="absolute w-[180%] h-[50%] top-[10%] left-1/2 -translate-x-1/2"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 30% 20%, 
                hsl(180 60% 35% / 0.12) 0%, 
                hsl(270 50% 45% / 0.08) 40%,
                transparent 60%
              )
            `,
            animation: 'auroraWave 15s ease-in-out infinite reverse',
            animationDelay: '-3s',
            filter: 'blur(50px)',
          }}
        />

        {/* Tertiary Aurora Ribbon */}
        <div 
          className="absolute w-[160%] h-[40%] top-[5%] left-1/2 -translate-x-1/2"
          style={{
            background: `
              radial-gradient(ellipse 70% 30% at 70% 10%, 
                hsl(187 100% 50% / 0.1) 0%, 
                hsl(220 60% 40% / 0.06) 50%,
                transparent 70%
              )
            `,
            animation: 'auroraShift 18s ease-in-out infinite',
            animationDelay: '-6s',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Snow Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowParticles.map((particle) => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white"
            style={{
              left: particle.left,
              top: '-10px',
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animation: `preloaderSnowFall ${particle.duration}s linear infinite`,
              animationDelay: `${particle.delay}s`,
              filter: 'blur(0.5px)',
              boxShadow: `0 0 ${particle.size * 2}px hsl(200 30% 95% / 0.3)`,
            }}
          />
        ))}
      </div>

      {/* Central Arcane Sigil Container */}
      <div className="relative flex flex-col items-center justify-center">
        {/* Outer Mystical Ring */}
        <div 
          className={`absolute w-72 h-72 md:w-96 md:h-96 rounded-full transition-all duration-1000 ${
            sigilPhase === 'forming' ? 'opacity-0 scale-90' : 
            sigilPhase === 'glowing' ? 'opacity-100 scale-100' : 
            'opacity-0 scale-110'
          }`}
          style={{
            border: '1px solid hsl(187 100% 42% / 0.3)',
            boxShadow: `
              0 0 60px hsl(187 100% 50% / 0.15),
              inset 0 0 60px hsl(187 100% 50% / 0.05)
            `,
            animation: sigilPhase === 'glowing' ? 'sigilRotate 30s linear infinite' : 'none',
          }}
        >
          {/* Rune Markings on Ring */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-4 bg-gradient-to-t from-transparent via-winter-cyan/60 to-transparent"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
                transform: `rotate(${i * 30}deg) translateY(-${144}px) translateX(-4px)`,
                animation: sigilPhase === 'glowing' ? `runeGlow 2s ease-in-out infinite` : 'none',
                animationDelay: `${i * 0.15}s`,
              }}
            />
          ))}
        </div>

        {/* Inner Mystical Ring */}
        <div 
          className={`absolute w-52 h-52 md:w-72 md:h-72 rounded-full transition-all duration-1000 ${
            sigilPhase === 'forming' ? 'opacity-0 scale-90' : 
            sigilPhase === 'glowing' ? 'opacity-100 scale-100' : 
            'opacity-0 scale-105'
          }`}
          style={{
            border: '1px solid hsl(180 60% 35% / 0.4)',
            boxShadow: `
              0 0 40px hsl(180 60% 45% / 0.1),
              inset 0 0 40px hsl(180 60% 45% / 0.05)
            `,
            animation: sigilPhase === 'glowing' ? 'sigilRotate 25s linear infinite reverse' : 'none',
          }}
        />

        {/* Central Sigil SVG */}
        <svg 
          viewBox="0 0 200 200" 
          className={`w-40 h-40 md:w-56 md:h-56 transition-all duration-1500 ${
            sigilPhase === 'forming' ? 'opacity-0 scale-75' : 
            sigilPhase === 'glowing' ? 'opacity-100 scale-100' : 
            'opacity-0 scale-125'
          }`}
          style={{
            filter: sigilPhase === 'glowing' ? 'drop-shadow(0 0 20px hsl(187 100% 50% / 0.6))' : 'none',
            transitionDuration: '1.5s',
          }}
        >
          {/* Arcane Symbol - Geometric Sigil */}
          <defs>
            <linearGradient id="sigilGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(187 100% 60%)" />
              <stop offset="50%" stopColor="hsl(200 80% 50%)" />
              <stop offset="100%" stopColor="hsl(270 50% 55%)" />
            </linearGradient>
            <filter id="sigilGlow">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Outer Hexagon */}
          <polygon
            points="100,15 175,57.5 175,142.5 100,185 25,142.5 25,57.5"
            fill="none"
            stroke="url(#sigilGradient)"
            strokeWidth="1.5"
            filter="url(#sigilGlow)"
            className={sigilPhase === 'glowing' ? 'animate-pulse' : ''}
            style={{
              strokeDasharray: sigilPhase === 'forming' ? '600' : '0',
              strokeDashoffset: sigilPhase === 'forming' ? '600' : '0',
              transition: 'stroke-dashoffset 1.5s ease-out, stroke-dasharray 1.5s ease-out',
            }}
          />

          {/* Inner Triangle 1 */}
          <polygon
            points="100,40 145,115 55,115"
            fill="none"
            stroke="hsl(187 100% 50%)"
            strokeWidth="1"
            opacity="0.8"
            style={{
              strokeDasharray: sigilPhase === 'forming' ? '300' : '0',
              strokeDashoffset: sigilPhase === 'forming' ? '300' : '0',
              transition: 'stroke-dashoffset 1.2s ease-out 0.3s, stroke-dasharray 1.2s ease-out 0.3s',
            }}
          />

          {/* Inner Triangle 2 (Inverted) */}
          <polygon
            points="100,155 55,80 145,80"
            fill="none"
            stroke="hsl(180 60% 45%)"
            strokeWidth="1"
            opacity="0.8"
            style={{
              strokeDasharray: sigilPhase === 'forming' ? '300' : '0',
              strokeDashoffset: sigilPhase === 'forming' ? '300' : '0',
              transition: 'stroke-dashoffset 1.2s ease-out 0.5s, stroke-dasharray 1.2s ease-out 0.5s',
            }}
          />

          {/* Central Circle */}
          <circle
            cx="100"
            cy="100"
            r="25"
            fill="none"
            stroke="hsl(187 100% 55%)"
            strokeWidth="1.5"
            style={{
              strokeDasharray: sigilPhase === 'forming' ? '160' : '0',
              strokeDashoffset: sigilPhase === 'forming' ? '160' : '0',
              transition: 'stroke-dashoffset 1s ease-out 0.7s, stroke-dasharray 1s ease-out 0.7s',
            }}
          />

          {/* Inner Core Glow */}
          <circle
            cx="100"
            cy="100"
            r="8"
            fill="hsl(187 100% 60%)"
            className={sigilPhase === 'glowing' ? '' : 'opacity-0'}
            style={{
              filter: 'blur(2px)',
              transition: 'opacity 0.5s ease-out 1s',
              animation: sigilPhase === 'glowing' ? 'coreGlow 2s ease-in-out infinite' : 'none',
            }}
          />

          {/* Mystical Runes - Small Circles */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x = 100 + 60 * Math.cos(rad - Math.PI / 2);
            const y = 100 + 60 * Math.sin(rad - Math.PI / 2);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="4"
                fill="hsl(200 80% 55%)"
                className={sigilPhase === 'glowing' ? '' : 'opacity-0'}
                style={{
                  filter: 'blur(1px)',
                  transition: `opacity 0.3s ease-out ${0.8 + i * 0.1}s`,
                  animation: sigilPhase === 'glowing' ? `runeGlow 1.5s ease-in-out infinite` : 'none',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            );
          })}

          {/* Connecting Lines from Center */}
          {[0, 60, 120, 180, 240, 300].map((angle, i) => {
            const rad = (angle * Math.PI) / 180;
            const x2 = 100 + 55 * Math.cos(rad - Math.PI / 2);
            const y2 = 100 + 55 * Math.sin(rad - Math.PI / 2);
            return (
              <line
                key={i}
                x1="100"
                y1="100"
                x2={x2}
                y2={y2}
                stroke="hsl(187 100% 50% / 0.5)"
                strokeWidth="0.5"
                style={{
                  strokeDasharray: sigilPhase === 'forming' ? '60' : '0',
                  strokeDashoffset: sigilPhase === 'forming' ? '60' : '0',
                  transition: `stroke-dashoffset 0.8s ease-out ${0.9 + i * 0.05}s, stroke-dasharray 0.8s ease-out ${0.9 + i * 0.05}s`,
                }}
              />
            );
          })}
        </svg>

        {/* Floating Mystical Particles Around Sigil */}
        {sigilPhase !== 'dissolving' && [...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full bg-winter-cyan transition-opacity duration-1000 ${
              sigilPhase === 'forming' ? 'opacity-0' : 'opacity-70'
            }`}
            style={{
              animation: `floatParticle${i % 4} ${4 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.3}s`,
              boxShadow: '0 0 10px hsl(187 100% 60% / 0.8)',
            }}
          />
        ))}

        {/* Loading Text */}
        <div 
          className={`mt-16 md:mt-20 text-center transition-all duration-1000 ${
            sigilPhase === 'forming' ? 'opacity-0 translate-y-4' : 
            sigilPhase === 'glowing' ? 'opacity-100 translate-y-0' : 
            'opacity-0 translate-y-[-10px]'
          }`}
        >
          <h2 
            className="text-lg md:text-xl tracking-[0.4em] uppercase text-winter-silver/80"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Winter of Innovation
          </h2>
          <div className="mt-4 flex items-center justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-winter-cyan/60"
                style={{
                  animation: 'loadingDot 1.4s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Ambient Mist Effect */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none"
        style={{
          background: `
            linear-gradient(to top, 
              hsl(218 58% 8% / 0.9) 0%, 
              hsl(218 58% 6% / 0.5) 40%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Styles for Preloader Animations */}
      <style>{`
        @keyframes auroraWave {
          0%, 100% {
            transform: translateX(-50%) scaleX(1) translateY(0);
            opacity: 0.6;
          }
          33% {
            transform: translateX(-45%) scaleX(1.1) translateY(-10px);
            opacity: 0.8;
          }
          66% {
            transform: translateX(-55%) scaleX(0.95) translateY(5px);
            opacity: 0.5;
          }
        }

        @keyframes auroraShift {
          0%, 100% {
            transform: translateX(-50%) rotate(0deg);
            opacity: 0.5;
          }
          50% {
            transform: translateX(-50%) rotate(3deg);
            opacity: 0.7;
          }
        }

        @keyframes preloaderSnowFall {
          0% {
            transform: translateY(-10px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(30px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes sigilRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes runeGlow {
          0%, 100% {
            opacity: 0.4;
            filter: blur(0px);
          }
          50% {
            opacity: 1;
            filter: blur(1px);
          }
        }

        @keyframes coreGlow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.3);
            opacity: 1;
          }
        }

        @keyframes loadingDot {
          0%, 100% {
            transform: scale(1);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.5);
            opacity: 1;
          }
        }

        @keyframes floatParticle0 {
          0%, 100% {
            transform: translate(-80px, -40px);
          }
          50% {
            transform: translate(-90px, -60px);
          }
        }

        @keyframes floatParticle1 {
          0%, 100% {
            transform: translate(80px, -50px);
          }
          50% {
            transform: translate(95px, -35px);
          }
        }

        @keyframes floatParticle2 {
          0%, 100% {
            transform: translate(-70px, 60px);
          }
          50% {
            transform: translate(-85px, 45px);
          }
        }

        @keyframes floatParticle3 {
          0%, 100% {
            transform: translate(75px, 55px);
          }
          50% {
            transform: translate(60px, 70px);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
