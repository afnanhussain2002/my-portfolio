import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Vortex from "@/components/ui/vortex";
// import DynamicVortex from "@/components/DaynamicVortex";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Afnan Hussain",
  description: "Its my own portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#076871]`}
      >
        <Vortex
         rangeY={800}
         particleCount={500}
         baseHue={120}
         particleColor="#fff"
        >
        {children}

        </Vortex>
      </body>
    </html>
  );
}
