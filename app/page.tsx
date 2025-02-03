import AboutMe from '@/components/AboutMe'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import ProfileCard from '@/components/ProfileCard'
import Projects from '@/components/Projects'
import React from 'react'


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
    </>
  )
}

export default MainPage