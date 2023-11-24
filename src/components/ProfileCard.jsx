import React from "react";
import pro_img from "../../public/pro_img.png";
import { motion } from 'framer-motion';

// tailwind CSS
const ipCss = "p-2 rounded-lg border-2 border-black focus:outline-none";

const ProfileCard = () => {
  return (
    <section className="relative h-screen flexCenter flex-col sm:p-20 px-10">
      <main className="border-2 border-black rounded-xl py-4 p-3 flex-wrap flexCenter">
        
        {/* --- profile img --- */}
        <div className="w-[220px] sm:w-[240px] h-[220px] sm:h-[240px] flexCenter rounded-full overflow-hidden sm:m-6 mb-5">
          <img
            src={pro_img}
            alt="error"
            className="object-cover w-full h-full"
          />
        </div>

        {/* --- profile info --- */}
        <div className="flex flex-col gap-y-6 md:pr-3 ">
          <div className="flex sm:flex-row flex-col gap-x-4 gap-y-4">
            <input
              className={`${ipCss}`}
              type="text"
              placeholder="First Name"
            />
            <input
              className={`${ipCss}`}
              type="text"
              placeholder="Last Name"
            />
          </div>

          <input
            className={`${ipCss}`}
            type="number"
            placeholder="Phone No."
            maxLength="10"
          />

          {/* --- Gender --- */}
          <div className=" flex items-center">
            <h2 className="pr-4">Gender</h2>
            <input type="radio" name="gen" value="male" />
            <label htmlFor="male" className="px-2">
              Male
            </label>
            <input
              className="p-2 focus:outline-none bg-pink-300"
              type="radio"
              name="gen"
              value="female"
            />
            <label htmlFor="male" className="px-2">
              Female
            </label>
          </div>

        </div>

      </main>

        
      <motion.i 
      animate={{
          y: '20px',
          transition: {
            duration: 0.6, 
            repeat: Infinity,
            repeatType: 'mirror', 
            ease: 'linear',
          },
        }}
        className="text-3xl absolute bottom-[10vh]  ri-arrow-down-line" 
        />

    </section>
  );
};

export default ProfileCard;
