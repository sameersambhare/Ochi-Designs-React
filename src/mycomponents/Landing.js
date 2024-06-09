import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";
function Landing() {
  const masker = ["We create", "Eye-Opening", "Presentations"];
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-2">
      <div className="text-structure mt-52 px-20">
        {masker.map((item,index) => (
          <div className="masker ">
            <div className="w-fit flex ">
                {index===1&&(<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.45, 0, 0.55, 1],duration:0.6}}   className="mr-[2px] h-[6vw] relative top-[12px] ">
                  <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" style={{objectFit:"cover",width:"100%"}} alt="" />
                </motion.div>)}
            <h1 className="text-[9vw] uppercase leading-[6vw] font-['Test_Founders_Grotesk_X']">
              {item}
            </h1>
            </div>
          </div>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-28 flex justify-between py-5 px-20 items-center">
        {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p className="text-md leading-none tracking-tighter ">{item}</p>
        ))}
        <div className="start flex items-center gap-5">
            <div className=" text-sm uppercase font-light px-5 py-2 border-[1px] border-zinc-400 rounded-full">start the project</div>
            <div className="w-10 h-10 rounded-full flex items-center justify-center border-[1px] border-zinc-400">
            <span className="rotate-[45deg]">
            <FaArrowUpLong />
            </span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
