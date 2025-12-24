import { X, Snowflake } from 'lucide-react';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-winter-deep/80 backdrop-blur-md animate-fade-in"
        onClick={onClose}
      />

      {/* Floating Snowflakes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <Snowflake
            key={i}
            className="absolute text-winter-cyan/5 animate-float"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
              fontSize: `${16 + i * 3}px`,
              animationDelay: `${i * 0.7}s`,
              animationDuration: `${5 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Modal Content */}
      <div className="relative w-full max-w-3xl max-h-[85vh] mx-auto my-auto bg-gradient-to-b from-winter-dark/95 to-winter-deep/95 backdrop-blur-xl border border-winter-cyan/30 rounded-2xl shadow-2xl shadow-winter-cyan/10 animate-scale-in overflow-hidden">
        
        {/* Aurora Background Effect */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-64 h-64 bg-winter-cyan/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-500" />
        </div>

        {/* Header */}
        <div className="relative z-10 flex items-center justify-between p-6 border-b border-winter-cyan/20">
          <h2 className="font-cinzel-decorative text-2xl md:text-3xl font-bold">
            <span className="bg-gradient-to-r from-winter-frost via-winter-cyan to-winter-frost bg-clip-text text-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}>
              {title}
            </span>
          </h2>
          <button
            onClick={onClose}
            className="group w-10 h-10 rounded-full bg-winter-cyan/10 border border-winter-cyan/30 flex items-center justify-center hover:bg-winter-cyan/20 hover:border-winter-cyan/50 transition-all duration-300"
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-winter-cyan group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 overflow-y-auto max-h-[calc(85vh-120px)] custom-scrollbar">
          {children}
        </div>

        {/* Bottom Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-winter-cyan/50 to-transparent" />
      </div>
    </div>
  );
};

export default Modal;
