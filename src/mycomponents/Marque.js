import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-10 rounded-tr-3xl rounded-tl-3xl bg-[#004D43]'>
        <div className="text uppercase border-b-2 whitespace-nowrap flex overflow-hidden  border-t-2 border-zinc-100 items-center">
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:2}}  className="font-['Test_Founders_Grotesk_X'] pr-20 text-[22vw] leading-none">We are Ochi</motion.h1>
            <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{repeat:Infinity,ease:"linear",duration:2}}  className="font-['Test_Founders_Grotesk_X'] text-[22vw] leading-none">We are Ochi</motion.h1>
        </div>
    </div>
  )
}

export default Marque