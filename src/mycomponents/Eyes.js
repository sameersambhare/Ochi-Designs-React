import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(180 - angle);
    });
  }, []);
  return (
    <div className="overflow-hidden w-full h-screen">
      <div data-scroll data-scroll-speed="-.7" className="w-full h-screen bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]  bg-center bg-cover relative">
        <div className=" absolute flex items-center gap-10 w-1/3 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] ">
          <div className="w-[15vw] items-center justify-center flex h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-[10vw] h-[10vw] bg-zinc-900 rounded-full relative">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[3vw] h-[3vw] bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="w-[15vw] items-center justify-center flex h-[15vw] bg-zinc-100 rounded-full">
            <div className="w-[10vw] h-[10vw] bg-zinc-900 rounded-full relative">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-[3vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="w-[3vw] h-[3vw] bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
