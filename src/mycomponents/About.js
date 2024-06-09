import React from "react";

function About() {
  return (
    <div className="w-full bg-[#CDEA68] p-20 rounded-tr-3xl rounded-tl-3xl text-black ">
      <h1 className="font-['Neue_Montreal'] text-[3vw] leading-[3.5vw]">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] border-zinc-400 mt-20 pt-10">
        <div className="w-1/2">
          <h1 className="text-7xl">Our Approach</h1>
          <button className="px-10 py-6 uppercase bg-zinc-900 flex gap-10 items-center mt-10 rounded-full text-white">
            Read More <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg')] rounded-3xl">
        </div>
      </div>
    </div>
  );
}

export default About;
