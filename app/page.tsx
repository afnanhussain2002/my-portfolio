import Profile from '@/components/Profile'
import React from 'react'


const MainPage = () => {
  return (
    <main className='flex'>
      <section className='w-72 h-screen bg-[url("../public/images/mainBg.jpg")] bg-cover'>
       <Profile />
      </section>
      <section className='mx-auto'>

        <div className=' w-[700px] h-80 bg-[url("../public/images/mainBg.jpg")] bg-cover mt-5'>
          Main section
        </div>

      </section>
    </main>
  )
}

export default MainPage