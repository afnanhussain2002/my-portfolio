import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Profile from '@/components/Profile'
import TechStack from '@/components/TechStack'
import React from 'react'


const MainPage = () => {
  return (
    <main className='flex flex-col md:flex-row'>
      <section className='w-72 h-screen bg-[url("../public/images/mainBg.jpg")] bg-cover flex flex-col justify-between'>
       <Profile />
       <div className='mb-5'>
       <Footer/>
       </div>
      </section>
      <section className='mx-auto'>

       <HeroSection/>
       <TechStack/>

      </section>
    </main>
  )
}

export default MainPage