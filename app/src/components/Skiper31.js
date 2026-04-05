import { motion, useScroll, useTransform } from "framer-motion";
import { ReactLenis } from "lenis/react";
import React, { useRef } from "react";

// Helper for classes instead of tailwind-merge/clsx
const cn = (...classes) => classes.filter(Boolean).join(" ");

const TextCharacterV1 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 30, 0]
  );
  const rotateX = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 30, 0]
  );

  return (
    <motion.span
      className={cn("inline-block text-orange-500", isSpace && "w-4")}
      style={{ x, rotateX }}
    >
      {char}
    </motion.span>
  );
};

const TextCharacterV2 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 30, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [Math.abs(distanceFromCenter) * 30, 0]
  );

  return (
    <motion.span
      className={cn("inline-block text-red-500", isSpace && "w-4")}
      style={{
        x,
        scale,
        y,
        transformOrigin: "center",
      }}
    >
      {char}
    </motion.span>
  );
};

const TextCharacterV3 = ({
  char,
  index,
  centerIndex,
  scrollYProgress,
}) => {
  const isSpace = char === " ";
  const distanceFromCenter = index - centerIndex;

  const x = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 45, 0]
  );
  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5],
    [distanceFromCenter * 50, 0]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    [-Math.abs(distanceFromCenter) * 20, 0]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.75, 1]);

  return (
    <motion.span
      className={cn("inline-block text-orange-500", isSpace && "w-4")}
      style={{
        x,
        rotate,
        y,
        scale,
        transformOrigin: "center",
      }}
    >
      {char}
    </motion.span>
  );
};

const Skiper31 = () => {
  const targetRef = useRef(null);
  const targetRef2 = useRef(null);
  const targetRef3 = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: targetRef2 });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: targetRef3 });

  const exam1 = "JEE MAINS".split("");
  const exam2 = "NEET-UG".split("");
  const exam3 = "MHT-CET".split("");

  return (
    <ReactLenis root>
      <main className="w-full bg-[#0a0a0a]"> 
        <div className="pt-24 absolute left-1/2 z-10 grid -translate-x-1/2 content-start justify-items-center gap-6 text-center text-white">
          <span className="relative max-w-[12ch] text-xs uppercase leading-tight opacity-40 after:absolute after:left-1/2 after:top-full after:h-16 after:w-px after:bg-gradient-to-b after:from-zinc-800 after:to-transparent after:content-[''] text-orange-400 tracking-[3px]">
            Scroll to explore portals
          </span>
        </div>

        {/* Section 1: JEE MAINS */}
        <div
          ref={targetRef}
          className="relative box-border flex h-[120vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#0a0a0a] p-[2vw]"
        >
          <div className="text-zinc-400 text-sm tracking-[2px] uppercase mb-4">Portal 01 • Engineering</div>
          <div
            className="w-full max-w-4xl flex flex-wrap justify-center text-6xl md:text-8xl font-bold uppercase tracking-tighter"
            style={{ perspective: "500px" }}
          >
            {exam1.map((char, index) => (
              <TextCharacterV1
                key={index}
                char={char}
                index={index}
                centerIndex={Math.floor(exam1.length / 2)}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>

        {/* Section 2: NEET-UG */}
        <div
          ref={targetRef2}
          className="relative -mt-[40vh] box-border flex h-[120vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#0a0a0a] p-[2vw]"
        >
          <p className="flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-white mb-4">
            <Bracket className="h-12 text-zinc-600" />
            <span className="font-medium text-zinc-400 text-sm tracking-[2px] uppercase">
              Portal 02 • Medical
            </span>
            <Bracket className="h-12 scale-x-[-1] text-zinc-600" />
          </p>
          <div className="w-full max-w-4xl flex flex-wrap justify-center text-6xl md:text-8xl font-bold uppercase tracking-tighter">
            {exam2.map((char, index) => (
              <TextCharacterV2
                key={index}
                char={char}
                index={index}
                centerIndex={Math.floor(exam2.length / 2)}
                scrollYProgress={scrollYProgress2}
              />
            ))}
          </div>
        </div>

        {/* Section 3: MHT-CET */}
        <div
          ref={targetRef3}
          className="relative -mt-[40vh] box-border flex h-[120vh] flex-col items-center justify-center gap-[2vw] overflow-hidden bg-[#0a0a0a] p-[2vw]"
        >
          <p className="flex items-center justify-center gap-3 text-2xl font-medium tracking-tight text-white mb-4">
            <Bracket className="h-12 text-zinc-600" />
            <span className="font-medium text-zinc-400 text-sm tracking-[2px] uppercase">
              Portal 03 • State Level
            </span>
            <Bracket className="h-12 scale-x-[-1] text-zinc-600" />
          </p>
          <div
            className="w-full max-w-4xl flex flex-wrap justify-center text-6xl md:text-8xl font-bold uppercase tracking-tighter"
            style={{ perspective: "500px" }}
          >
            {exam3.map((char, index) => (
              <TextCharacterV3
                key={index}
                char={char}
                index={index}
                centerIndex={Math.floor(exam3.length / 2)}
                scrollYProgress={scrollYProgress3}
              />
            ))}
          </div>
        </div>
      </main>
    </ReactLenis>
  );
};

export default Skiper31;

const Bracket = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 27 78"
      className={className}
    >
      <path
        fill="currentColor"
        d="M26.52 77.21h-5.75c-6.83 0-12.38-5.56-12.38-12.38V48.38C8.39 43.76 4.63 40 .01 40v-4c4.62 0 8.38-3.76 8.38-8.38V12.4C8.38 5.56 13.94 0 20.77 0h5.75v4h-5.75c-4.62 0-8.38 3.76-8.38 8.38V27.6c0 4.34-2.25 8.17-5.64 10.38 3.39 2.21 5.64 6.04 5.64 10.38v16.45c0 4.62 3.76 8.38 8.38 8.38h5.75v4.02Z"
      ></path>
    </svg>
  );
};
