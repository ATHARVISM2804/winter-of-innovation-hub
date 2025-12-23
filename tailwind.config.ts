import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        'cinzel-decorative': ['Cinzel Decorative', 'Cinzel', 'serif'],
        rajdhani: ['Rajdhani', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        uncial: ['Uncial Antiqua', 'cursive'],
        medieval: ['MedievalSharp', 'cursive'],
        fantasy: ['Cinzel Decorative', 'MedievalSharp', 'fantasy'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        winter: {
          deep: "hsl(var(--winter-deep))",
          dark: "hsl(var(--winter-dark))",
          cyan: "hsl(var(--winter-cyan))",
          "cyan-glow": "hsl(var(--winter-cyan-glow))",
          teal: "hsl(var(--winter-teal))",
          purple: "hsl(var(--winter-purple))",
          silver: "hsl(var(--winter-silver))",
          frost: "hsl(var(--winter-frost))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsl(187 100% 42% / 0.4)" },
          "50%": { boxShadow: "0 0 40px hsl(187 100% 42% / 0.6)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            filter: "drop-shadow(0 0 15px hsl(187 100% 50% / 0.5))",
          },
          "50%": { 
            filter: "drop-shadow(0 0 30px hsl(187 100% 50% / 0.8))",
          },
        },
        "magical-float": {
          "0%, 100%": { 
            transform: "translateY(0) rotate(0deg)",
          },
          "33%": { 
            transform: "translateY(-8px) rotate(1deg)",
          },
          "66%": { 
            transform: "translateY(-4px) rotate(-0.5deg)",
          },
        },
        "border-glow": {
          "0%, 100%": { 
            borderColor: "hsl(187 100% 42% / 0.3)",
            boxShadow: "0 0 20px hsl(187 100% 50% / 0.1), inset 0 0 20px hsl(187 100% 50% / 0.05)",
          },
          "50%": { 
            borderColor: "hsl(187 100% 50% / 0.6)",
            boxShadow: "0 0 40px hsl(187 100% 50% / 0.2), inset 0 0 30px hsl(187 100% 50% / 0.1)",
          },
        },
        "text-glow": {
          "0%, 100%": { 
            textShadow: "0 0 10px hsl(187 100% 50% / 0.5), 0 0 20px hsl(187 100% 50% / 0.3)",
          },
          "50%": { 
            textShadow: "0 0 20px hsl(187 100% 50% / 0.8), 0 0 40px hsl(187 100% 50% / 0.5), 0 0 60px hsl(270 50% 50% / 0.3)",
          },
        },
        "ice-reveal": {
          "0%": { 
            clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
            opacity: "0",
          },
          "100%": { 
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
            opacity: "1",
          },
        },
        "aurora-wave": {
          "0%, 100%": { 
            backgroundPosition: "0% 50%",
            opacity: "0.5",
          },
          "50%": { 
            backgroundPosition: "100% 50%",
            opacity: "0.8",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 3s linear infinite",
        float: "float 4s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "magical-float": "magical-float 6s ease-in-out infinite",
        "border-glow": "border-glow 4s ease-in-out infinite",
        "text-glow": "text-glow 3s ease-in-out infinite",
        "ice-reveal": "ice-reveal 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
        "aurora-wave": "aurora-wave 8s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
