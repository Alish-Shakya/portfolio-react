import { RiReactjsLine } from "react-icons/ri";
import {
  SiMongodb,
  SiExpress,
  SiPostman,
  SiCisco,
  SiTailwindcss,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";

const Technologies = () => {
  return (
    <>
      <div className="pb-1"></div>
      <h2 className="my-8 text-4xl text-center text-amber-400">Technologies</h2>

      {/* upper tech  */}
      <div className="flex md:flex-wrap items-center justify-center gap-4 md:gap-30  text-3xl md:text-4xl">
        <div>
          <FaHtml5 className=" text-orange-500" />
        </div>

        <div>
          <FaCss3Alt className=" text-blue-500" />
        </div>

        <div>
          <FaJs className=" text-yellow-400" />
        </div>

        <div>
          <RiReactjsLine className=" text-cyan-400" />
        </div>

        <div>
          <FaNodeJs className=" text-green-600" />
        </div>

        <div>
          <SiMongodb className=" text-green-400" />
        </div>
      </div>

      {/* lower tech  */}
      <div className=" md:ml-20 flex md:flex-wrap items-center justify-center gap-4 md:gap-30 p-10 text-3xl md:text-4xl">
        <div>
          <SiTailwindcss className=" text-sky-400" />
        </div>

        <div>
          <FaGithub className=" text-white" />
        </div>

        <div>
          <FaGitAlt className=" text-red-500" />
        </div>

        <div>
          <SiExpress className=" text-gray-300" />
        </div>

        <div>
          <SiPostman className=" text-orange-600" />
        </div>

        <div>
          <SiCisco className=" text-blue-600" />
        </div>
      </div>
    </>
  );
};

export default Technologies;
