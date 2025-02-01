import React from 'react'
import { CardSpotlight } from './ui/card-spotlight'

const AboutMe = () => {
  return (
    <CardSpotlight className="h-96 w-96">
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        Authentication steps
      </p>
      <div className="text-neutral-200 mt-4 relative z-20">
        Follow these steps to secure your account:
        <ul className="list-none  mt-2">
          <li>Set a strong password</li>
          <li>Use a unique username</li>
          <li>Change your password periodically</li>
          <li>Monitor your account activity</li>
        </ul>
      </div>
      <p className="text-neutral-300 mt-4 relative z-20 text-sm">
        Ensuring your account is properly secured helps protect your personal
        information and data.
      </p>
    </CardSpotlight>
  )
}

export default AboutMe