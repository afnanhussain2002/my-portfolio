import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProfileCard from '@/components/ProfileCard'
import Projects from '@/components/Projects'
import React from 'react'

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
const MainPage = () => {
  return (
    <>
    
    <main className='flex flex-col md:flex-row'>
      <section className=' lg:w-72 lg:h-screen bg-heroImage bg-cover flex flex-col justify-between p-2 space-y-5'>
    
       <ProfileCard />
       <AboutMe/>
       <div className='mb-5'>
       <Footer/>
       </div>
      </section>
      <section className='mx-auto'>
       <HeroSection/>
       <Projects/>
      </section>

    </main>
    {/* This is the main page of the website. It contains two sections, the first one is the sidebar with the profile card, about me and the footer. The second section contains the hero section and the projects section. The width of the sections are set to 72 on large screens and the height is set to full screen. The background image is set to the hero image and it is set to cover the full screen. The padding is set to 2 and the space between the elements is set to 5. The margin bottom of the footer is set to 5. */}
    </>
  )
}

export default MainPage