import type { Config } from "tailwindcss";


export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        shimmer: {
          from: {
            backgroundPosition: "0 0",
            backgroundColor: "#319795", // Tailwind's `bg-teal-600` equivalent
          },
          to: {
            backgroundPosition: "-200% 0",
            backgroundColor: "#319795", // Keeps the shimmer color consistent
          },
        },
      },
      
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        'heroImage': "url('/images/mainBg.jpg')",
      },
    },
  },
  plugins: [],
} satisfies Config;