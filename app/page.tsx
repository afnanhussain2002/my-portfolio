import Footer from '@/components/Footer'
import Profile from '@/components/Profile'
import React from 'react'


const MainPage = () => {
  return (
    <main className='flex flex-col md:flex-row'>
      <section className='w-72 h-screen bg-[url("../public/images/mainBg.jpg")] bg-cover'>
       <Profile />
       <Footer/>
      </section>
      <section className='mx-auto'>

        <div className=' w-[1280px] h-96 bg-[url("../public/images/mainBg.jpg")] bg-cover mt-5'>
          Main section
        </div>

      </section>
    </main>
  )
}

export default MainPage