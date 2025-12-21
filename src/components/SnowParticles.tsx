import { useEffect, useState } from "react";

interface Snowflake {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  swayAmount: number;
  rotationSpeed: number;
}

const SnowParticles = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const flakes: Snowflake[] = Array.from({ length: 75 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: Math.random() * 12 + 8,
      duration: Math.random() * 8 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.4 + 0.5,
      swayAmount: Math.random() * 60 + 30,
      rotationSpeed: Math.random() * 8 + 6,
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <style>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-10vh) translateX(0);
          }
          50% {
            transform: translateY(50vh) translateX(var(--sway-amount));
          }
          100% {
            transform: translateY(110vh) translateX(0);
          }
        }
        
        @keyframes snowflake-spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes snowflake-shimmer {
          0%, 100% {
            filter: brightness(1) drop-shadow(0 0 2px rgba(255, 255, 255, 0.8));
          }
          50% {
            filter: brightness(1.5) drop-shadow(0 0 6px rgba(255, 255, 255, 1));
          }
        }
        
        .snowflake {
          animation: snowfall var(--fall-duration) linear infinite;
          animation-delay: var(--fall-delay);
        }
        
        .snowflake-inner {
          animation: snowflake-spin var(--rotation-speed) linear infinite, snowflake-shimmer 3s ease-in-out infinite;
        }
      `}</style>
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute snowflake"
          style={
            {
              left: `${flake.left}%`,
              opacity: flake.opacity,
              "--fall-duration": `${flake.duration}s`,
              "--fall-delay": `${flake.delay}s`,
              "--sway-amount": `${flake.swayAmount}px`,
            } as React.CSSProperties
          }
        >
          <div
            className="snowflake-inner"
            style={
              {
                "--rotation-speed": `${flake.rotationSpeed}s`,
                fontSize: `${flake.size}px`,
                color: "#ffffff",
                textShadow: "0 0 2px rgba(255, 255, 255, 0.8)",
              } as React.CSSProperties
            }
          >
            ❄
          </div>
        </div>
      ))}
    </div>
  );
};

export default SnowParticles;
