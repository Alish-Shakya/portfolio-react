import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiCisco,
  SiTailwindcss,
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaGitAlt } from "react-icons/fa";
import GithubIcon from "./ui/icons/GithubIcon";

import { animate, motion } from "framer-motion";

const iconvariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <>
      <div className="pb-1"></div>
      <h2 className="my-8 mx-8 text-2xl md:text-4xl md:text-center text-amber-400">
        Tools & Technologies
      </h2>

      {/* upper tech  */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex md:flex-wrap items-center justify-center gap-5 md:gap-30  text-2xl md:text-4xl"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <FaHtml5 className=" text-orange-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <FaCss3Alt className=" text-blue-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <FaJs className=" text-yellow-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <RiReactjsLine className=" text-cyan-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <FaNodeJs className=" text-green-600" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <SiMongodb className=" text-green-400" />
        </motion.div>
      </motion.div>

      {/* lower tech  */}
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="md:ml-20 flex md:flex-wrap items-center justify-center gap-5 md:gap-30 p-10 text-2xl md:text-4xl"
      >
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <SiTailwindcss className="text-sky-400" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <GithubIcon />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <FaGitAlt className="text-red-500" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <SiExpress className="text-gray-300" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <SiPostman className="text-orange-600" />
        </motion.div>

        <motion.div
          initial="initial"
          animate="animate"
          variants={iconvariants(2.5)}
        >
          <SiCisco className="text-blue-600" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default Technologies;
