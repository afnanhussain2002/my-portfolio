"use client";
import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProfileCard from '@/components/ProfileCard'
import Projects from '@/components/Projects'
import React, { useState } from 'react'


const MainPage = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
    
    <main className="flex flex-col md:flex-row">
      {/* Toggle Button (Only on Mobile) */}
      <button
        className="md:hidden p-2 bg-gray-800 text-white rounded-md mx-4 mt-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Sidebar Section */}
      <section
        className={`w-72 h-screen bg-[url("../public/images/mainBg.jpg")] bg-cover flex flex-col justify-between p-2 absolute md:relative ${
          isOpen ? "block" : "hidden"
        } md:block`}
      >
        <ProfileCard />
        <AboutMe />
        <div className="mb-5">
          <Footer />
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto">
        <HeroSection />
        <Projects />
      </section>
    </main>
    </>
  )
}

export default MainPage