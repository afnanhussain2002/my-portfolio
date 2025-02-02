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
    
    <main className='flex flex-col md:flex-row'>
      <section className='w-72 h-screen bg-[url("../public/images/mainBg.jpg")] bg-cover flex flex-col justify-between p-2'>
    
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
    </>
  )
}

export default MainPage