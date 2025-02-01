import Image from "next/image";
import profile from "../public/images/profile.png";
/**
 * A card component for displaying a user's profile information
 *
 * @returns A JSX element representing the card
 */
const ProfileCard = () => {
    return (
      <div className="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16  shadow-xl rounded-lg text-white border-white">
       
        {/* Profile picture with a circular border */}
        <div className="mx-auto w-32 h-32 relative -mt-16 border-4 border-[#076871] rounded-full overflow-hidden">
          <Image
            className="object-cover object-center h-32"
            src={profile}
            alt="Afnan Hussain"
            width={200}
            height={200}
          />
        </div>
        {/* Profile information */}
        <div className="text-center mt-2">
          <h2 className="font-semibold text-white">Afnan Hussain</h2>
          <p className="text-white">Full Stack Developer</p>
        </div>
        <div className="font-bold flex gap-5 text-sm border-b-2 p-5 text-white">
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
  
  export default ProfileCard;
  