import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        poppins: ["var(--font-poppins)", "Poppins", "sans-serif"]
      },
      colors: {
        navy: {
          900: "#06213f"
        },
        brandBlue: "#002D62",
        brandGold: "#FFC107",
        brandGreen: "#22c55e",
        soft: "#f6f7fb"
      },
      boxShadow: {
        header: "0 2px 12px rgba(0,0,0,0.06)",
        glass: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.15)",
        card: "0 18px 50px rgba(3, 21, 43, 0.08)"
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        slideIn: "slideIn .28s ease-out"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        slideIn: {
          "0%": { transform: "translateX(100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};

export default config;
