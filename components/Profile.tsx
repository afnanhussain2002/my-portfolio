import React from 'react'
import profile from '../public/images/profile.png'
import Image from 'next/image'

const Profile = () => {
  return (
    <div className='flex flex-col items-center space-y-2 mt-3'>
      <Image src={profile} alt="profile" width={200} height={200} className='rounded-full w-40 h-40'/>
      <h3 className='font-bold'>Afnan Hussain</h3>
      <p>Full Stack Developer</p>
    </div>
  )
}

export default Profile