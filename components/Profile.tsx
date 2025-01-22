import React from 'react'
import profile from '../public/images/profile.png'
import Image from 'next/image'

const Profile = () => {
  return (
    <div>
      <Image src={profile} alt="profile" width={96} height={96} className='rounded-full w-40 h-40'/>
    </div>
  )
}

export default Profile