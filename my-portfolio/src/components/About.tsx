import { MdArrowOutward } from "react-icons/md";
import AboutImage from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b pb-4 border-neutral-900">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:p-8 lg:w-1/2"
        >
          <div className="flex items-center justify-center">
            <img src={AboutImage} alt="" className="rounded-2xl" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-[16px]">{ABOUT_TEXT}</p>
            <a
              target="_blank"
              className="flex items-center text-xl text-bold"
              href="https://drive.google.com/file/d/1xHX2simcRE-wzS6SsaUAy8KFi1btTGRh/view?usp=drive_link"
            >
              View Full Resume{" "}
              <span className="pl-2">
                <MdArrowOutward></MdArrowOutward>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
