"use client"; // Ensures it runs only on the client side

import { useRef, useEffect } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = "Hey, I’m Afnan Hussain from Bangladesh! I’ve been exploring full-stack web development for the past year. I love learning new things and turning ideas into projects. Check out my LinkedIn posts to see what I’m up to! 🚀"

const AboutMe = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    const content = contentRef.current;

    if (!card || !glow || !content) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = -((y - centerY) / centerY);

      card.style.transform = `perspective(1000px) rotateY(${percentX * 10}deg) rotateX(${percentY * 10}deg)`;
      content.style.transform = `translateZ(50px)`;
      glow.style.opacity = "1";
      glow.style.backgroundImage = `
        radial-gradient(
          circle at ${x}px ${y}px,
          #076871,
          #4B9197
        )
      `;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg)";
      content.style.transform = "translateZ(0px)";
      glow.style.opacity = "0";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex items-center justify-center overflow-hidden">
      <div
        ref={cardRef}
        className="tilt-card bg-gradient-to-br from-[#076871] to-[#4B9197] rounded-2xl shadow-2xl relative cursor-pointer transition-all duration-300 ease-out hover:scale-105"
      >
        <div ref={glowRef} className="glow opacity-0 transition-opacity duration-300 absolute inset-0 rounded-2xl"></div>
        <div ref={contentRef} className=" p-6 flex flex-col h-full justify-between relative z-10">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2"><TextGenerateEffect duration={2} filter={false} words={"About Me"} /></h2>
            <TextGenerateEffect duration={2} filter={false} words={words} className="text-sm"/>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
