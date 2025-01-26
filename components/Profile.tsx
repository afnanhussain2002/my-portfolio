import React from "react";
import profile from "../public/images/profile.png";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="flex flex-col items-center space-y-2 mt-5">
      <Image
        src={profile}
        alt="profile"
        width={200}
        height={200}
        className="rounded-full w-40 h-40"
      />
      <h3 className="font-bold">Afnan Hussain</h3>
      <p>Full Stack Developer</p>

      <div className="font-bold flex gap-5 text-sm">
        <div className="mt-5">
          <p>Residence:</p>
          <p>City:</p>
          <p>Age:</p>
        </div>
        <div className="text-right mt-5">
          <p>Bangladesh</p>
          <p>Sylhet</p>
          <p>22</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
