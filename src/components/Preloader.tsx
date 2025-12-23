import { useEffect, useState, useCallback } from 'react';

interface PreloaderProps {
  onLoadComplete: () => void;
  minDuration?: number;
}

const Preloader = ({ onLoadComplete, minDuration = 4500 }: PreloaderProps) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isDissolving, setIsDissolving] = useState(false);
  const [phase, setPhase] = useState<'awakening' | 'revealing' | 'complete'>('awakening');

  const triggerDissolve = useCallback(() => {
    setIsDissolving(true);
    setTimeout(() => {
      setIsVisible(false);
      onLoadComplete();
    }, 1500);
  }, [onLoadComplete]);

  useEffect(() => {
    const revealTimer = setTimeout(() => setPhase('revealing'), 800);
    const completeTimer = setTimeout(() => setPhase('complete'), 2000);
    const dissolveTimer = setTimeout(triggerDissolve, minDuration);

    return () => {
      clearTimeout(revealTimer);
      clearTimeout(completeTimer);
      clearTimeout(dissolveTimer);
    };
  }, [minDuration, triggerDissolve]);

  // Beautiful snowflakes with variety
  const snowflakes = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 14 + 8,
    duration: Math.random() * 8 + 12,
    delay: Math.random() * 10,
    opacity: Math.random() * 0.5 + 0.3,
    drift: Math.random() * 100 - 50,
    symbol: ['❄', '❅', '❆', '✦', '✧', '*'][Math.floor(Math.random() * 6)],
    rotate: Math.random() * 360,
  }));

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden transition-opacity ${
        isDissolving ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ 
        background: 'linear-gradient(180deg, hsl(220 50% 5%) 0%, hsl(218 58% 8%) 50%, hsl(220 45% 6%) 100%)',
        transitionDuration: '1.5s',
      }}
    >
      {/* Subtle Radial Gradient Overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, hsl(200 60% 15% / 0.15) 0%, transparent 60%)',
        }}
      />

      {/* Gentle Aurora Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[40%]"
        style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% 0%, hsl(187 80% 40% / 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'subtleAurora 8s ease-in-out infinite',
        }}
      />

      {/* Beautiful Falling Snowflakes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute text-white/80"
            style={{
              left: flake.left,
              top: '-30px',
              fontSize: `${flake.size}px`,
              opacity: 0,
              animation: `beautifulSnowfall ${flake.duration}s linear infinite`,
              animationDelay: `${flake.delay}s`,
              ['--drift' as string]: `${flake.drift}px`,
              ['--rotate' as string]: `${flake.rotate}deg`,
              filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.5))',
            }}
          >
            {flake.symbol}
          </div>
        ))}
      </div>

      {/* Central Content */}
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Outer Breathing Ring */}
        <div 
          className={`absolute w-72 h-72 md:w-80 md:h-80 rounded-full transition-all duration-1000 ${
            phase === 'awakening' ? 'opacity-0 scale-95' : 
            isDissolving ? 'opacity-0 scale-110' : 
            'opacity-100 scale-100'
          }`}
          style={{
            border: '1px solid hsl(187 60% 50% / 0.2)',
            boxShadow: '0 0 60px hsl(187 80% 50% / 0.08), inset 0 0 60px hsl(187 80% 50% / 0.03)',
            animation: phase !== 'awakening' && !isDissolving ? 'breathe 4s ease-in-out infinite' : 'none',
          }}
        />

        {/* Inner Dashed Ring */}
        <div 
          className={`absolute w-56 h-56 md:w-64 md:h-64 rounded-full transition-all duration-1000 delay-200 ${
            phase === 'awakening' ? 'opacity-0 scale-90' : 
            isDissolving ? 'opacity-0 scale-105' : 
            'opacity-100 scale-100'
          }`}
          style={{
            border: '1px dashed hsl(200 50% 45% / 0.25)',
            animation: phase !== 'awakening' && !isDissolving ? 'slowRotate 60s linear infinite' : 'none',
          }}
        />

        {/* Central Ice Crystal / Snowflake SVG */}
        <svg 
          viewBox="0 0 200 200" 
          className={`w-32 h-32 md:w-40 md:h-40 transition-all duration-1500 ${
            phase === 'awakening' ? 'opacity-0 scale-50' : 
            isDissolving ? 'opacity-0 scale-125' : 
            'opacity-100 scale-100'
          }`}
          style={{
            filter: phase !== 'awakening' ? 'drop-shadow(0 0 20px hsl(187 80% 55% / 0.4))' : 'none',
          }}
        >
          <defs>
            <linearGradient id="iceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(187 80% 70%)" />
              <stop offset="50%" stopColor="hsl(200 60% 60%)" />
              <stop offset="100%" stopColor="hsl(210 50% 70%)" />
            </linearGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Main Snowflake Arms - 6 pointed */}
          <g filter="url(#softGlow)" style={{ animation: phase === 'complete' ? 'gentleSpin 30s linear infinite' : 'none' }}>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <g key={i} transform={`rotate(${angle} 100 100)`}>
                {/* Main arm */}
                <line
                  x1="100" y1="100" x2="100" y2="30"
                  stroke="url(#iceGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 70,
                    strokeDashoffset: phase === 'awakening' ? 70 : 0,
                    transition: `stroke-dashoffset 1s ease-out ${i * 0.1}s`,
                  }}
                />
                {/* Small branches */}
                <line
                  x1="100" y1="55" x2="88" y2="45"
                  stroke="hsl(195 60% 65%)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 20,
                    strokeDashoffset: phase === 'awakening' ? 20 : 0,
                    transition: `stroke-dashoffset 0.8s ease-out ${0.5 + i * 0.08}s`,
                  }}
                />
                <line
                  x1="100" y1="55" x2="112" y2="45"
                  stroke="hsl(195 60% 65%)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 20,
                    strokeDashoffset: phase === 'awakening' ? 20 : 0,
                    transition: `stroke-dashoffset 0.8s ease-out ${0.5 + i * 0.08}s`,
                  }}
                />
                {/* Smaller inner branches */}
                <line
                  x1="100" y1="70" x2="92" y2="64"
                  stroke="hsl(200 50% 60%)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 12,
                    strokeDashoffset: phase === 'awakening' ? 12 : 0,
                    transition: `stroke-dashoffset 0.6s ease-out ${0.7 + i * 0.06}s`,
                  }}
                />
                <line
                  x1="100" y1="70" x2="108" y2="64"
                  stroke="hsl(200 50% 60%)"
                  strokeWidth="1"
                  strokeLinecap="round"
                  style={{
                    strokeDasharray: 12,
                    strokeDashoffset: phase === 'awakening' ? 12 : 0,
                    transition: `stroke-dashoffset 0.6s ease-out ${0.7 + i * 0.06}s`,
                  }}
                />
              </g>
            ))}
          </g>

          {/* Center hexagon */}
          <polygon
            points="100,85 113,92.5 113,107.5 100,115 87,107.5 87,92.5"
            fill="none"
            stroke="hsl(187 70% 60%)"
            strokeWidth="1.5"
            filter="url(#softGlow)"
            style={{
              strokeDasharray: 80,
              strokeDashoffset: phase === 'awakening' ? 80 : 0,
              transition: 'stroke-dashoffset 1s ease-out 0.3s',
            }}
          />

          {/* Center dot */}
          <circle
            cx="100" cy="100" r="4"
            fill="hsl(187 80% 70%)"
            className={phase === 'awakening' ? 'opacity-0' : 'opacity-100'}
            style={{
              transition: 'opacity 0.5s ease-out 0.8s',
              animation: phase === 'complete' ? 'corePulse 3s ease-in-out infinite' : 'none',
            }}
          />
        </svg>

        {/* Text Section */}
        <div 
          className={`mt-16 text-center transition-all duration-1000 ${
            phase === 'awakening' ? 'opacity-0 translate-y-6' : 
            isDissolving ? 'opacity-0 -translate-y-4' : 
            'opacity-100 translate-y-0'
          }`}
          style={{ transitionDelay: phase === 'revealing' ? '0.6s' : '0s' }}
        >
          {/* Main Title */}
          <h1 
            className="font-cinzel-decorative text-xl md:text-2xl lg:text-3xl tracking-[0.25em] uppercase text-winter-silver/90"
            style={{
              textShadow: '0 0 30px hsl(187 80% 50% / 0.3)',
            }}
          >
            Winter of Innovation
          </h1>

          {/* Subtle divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-winter-cyan/40" />
            <div className="w-1 h-1 rotate-45 bg-winter-cyan/50" />
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-winter-cyan/40" />
          </div>

          {/* Subtitle */}
          <p className="font-cormorant text-sm md:text-base tracking-[0.4em] text-winter-silver/50 uppercase">
            E-Summit 2026
          </p>

          {/* Loading dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-winter-cyan/50"
                style={{
                  animation: 'loadingPulse 1.6s ease-in-out infinite',
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1/4 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, hsl(220 50% 4%) 0%, transparent 100%)',
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, hsl(220 50% 3% / 0.6) 100%)',
        }}
      />

      <style>{`
        @keyframes subtleAurora {
          0%, 100% { opacity: 0.8; transform: translateX(-50%) scaleX(1); }
          50% { opacity: 1; transform: translateX(-50%) scaleX(1.1); }
        }

        @keyframes beautifulSnowfall {
          0% {
            transform: translateY(-30px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          5% {
            opacity: 0.8;
          }
          25% {
            transform: translateY(25vh) translateX(calc(var(--drift) * 0.3)) rotate(90deg);
          }
          50% {
            transform: translateY(50vh) translateX(calc(var(--drift) * -0.2)) rotate(180deg);
          }
          75% {
            transform: translateY(75vh) translateX(calc(var(--drift) * 0.4)) rotate(270deg);
          }
          95% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(105vh) translateX(var(--drift)) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes breathe {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.02); opacity: 0.8; }
        }

        @keyframes slowRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes gentleSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes corePulse {
          0%, 100% { opacity: 0.7; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }

        @keyframes loadingPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.3); }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
