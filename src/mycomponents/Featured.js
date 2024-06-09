import { motion, useAnimation } from "framer-motion";
function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-10 bg-zinc-900">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className=" relative cardcontainer w-1/2 h-[70vh]"
          >
            <h1 className="absolute -translate-y-1/2 top-1/2 -translate-x-1/2 flex overflow-hidden font-light text-[#CDEA68] z-[9] text-8xl left-full">
              {"FYDE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.07 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full relative h-full rounded-xl   overflow-hidden hover:scale-[0.9] duration-[3s]">
              <img
                style={{ objectFit: "cover" }}
                className="hover:scale-[1.2] duration-[1s]"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className=" relative cardcontainer w-1/2 h-[70vh]"
          >
            <h1 className="absolute flex overflow-hidden -translate-y-1/2 top-1/2 translate-x-1/2 font-light text-[#CDEA68] z-[9] text-8xl right-full">
              {"VISE".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index *  0.07 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden hover:scale-[0.9] duration-[3s]">
              <img
                style={{ objectFit: "conver" }}
                className="hover:scale-[1.2] duration-[1s]"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
