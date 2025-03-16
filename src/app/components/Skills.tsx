"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  BiLogoFlask,
  BiLogoPostgresql,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa"; // Import icons from react-icons
import { RiFileExcel2Fill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiAzuredevops,
  SiFastapi,
  SiKubernetes,
  SiLangchain,
  SiMongodb,
  SiNeo4J,
  SiNumpy,
  SiPandas,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
  SiTerraform,
} from "react-icons/si";
import { TbBrandMysql } from "react-icons/tb";

const Skill = ({
  name,
  icon: Icon,
}: {
  name: string;
  icon: React.ElementType;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative skill-container lg:w-[100px] lg:h-[50px] w-[70px] h-[35px] rounded-md   border-black dark:border-white dark:text-white text-base overflow-hidden"
    >
      {/* Text */}
      <span
        className={`absolute inset-0 flex items-center justify-center lg:text-xs text-[10px] font-light transform transition-transform duration-300 ${
          isHovered ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {name}
      </span>

      {/* Icon */}
      <span
        className={`absolute inset-0 flex items-center justify-center lg:text-xs text-[10px] font-light transform transition-transform duration-300 ${
          isHovered ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Icon size={25} />
      </span>
    </div>
  );
};

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Duration of the animation
      easing: "ease", // Easing function for the animation
      once: false, // Whether animation should happen only once
    });
  }, []);
  return (
    <div>
      <div className="lg:text-6xl text-4xl pl-30 m-5 ml-8 lg:mb-10  font-bold">My <span className="text-orange-600">Skills</span></div>
    <div className="dark:bg-[#2e2e2e49] bg-zinc-100 py-12 mb-10 lg:mx-32 mx-6 rounded-2xl">

      {/*data science  */}
      <div data-aos="zoom-out-up" className="dark:bg-[#2e2e2e49] bg-zinc-200 dark:shadow-none shadow-lg md:px-2 p-1  lg:mx-20 mx-7 md:mx-2  h-400px rounded-xl">
      <h1 className="lg:text-3xl text-xl lg:ml-5 p-2 dark:text-slate-300">Data Science</h1>
      <div className="grid gap-4 lg:grid-cols-5 py-4 grid-cols-3 lg:px-7 px-4 mx-auto">
        <Skill name="Python" icon={FaPython} />
        <Skill name="Pandas" icon={SiPandas} />
        <Skill name="Numpy" icon={SiNumpy} />
        <Skill name="Neo4j" icon={SiNeo4J} />
        <Skill name="Flask" icon={BiLogoFlask} />
        <Skill name="Excel" icon={RiFileExcel2Fill} />
        <Skill name="MySQL" icon={TbBrandMysql} />
        <Skill name="Fast API" icon={SiFastapi} />
        <Skill name="Postgresql" icon={BiLogoPostgresql} />
        <Skill name="Mongodb" icon={SiMongodb} />
      </div>
      </div>

  {/* Cloud & devops */}
      <div data-aos="zoom-out-up" className="dark:bg-[#2e2e2e49] bg-zinc-200 dark:shadow-none shadow-lg lg:mt-20 mt-6 md:px-2 p-1  lg:mx-20 mx-7 md:mx-2  h-400px rounded-xl">
      <h1 className="lg:text-3xl text-xl lg:ml-5 p-2 dark:text-slate-300">Cloud & DevOps</h1>
      <div className="grid gap-4 lg:grid-cols-5 py-4 grid-cols-3 lg:px-7 px-4 mx-auto">
        <Skill name="Docker" icon={FaDocker} />
        <Skill name="Kubernetes" icon={SiKubernetes} />
        <Skill name="AWS" icon={FaAws} />
        <Skill name="Terraform" icon={SiTerraform} />
        <Skill name="DevOps" icon={SiAzuredevops} />
      </div>
      </div>

      {/* fintech */}
      <div data-aos="zoom-out-up" className="dark:bg-[#2e2e2e49] bg-zinc-200 dark:shadow-none shadow-lg lg:mt-20 mt-6 md:px-2 p-1  lg:mx-20 mx-7 md:mx-2   rounded-xl">
      <h1 className="lg:text-3xl text-xl lg:ml-5 p-2 dark:text-slate-300">Fin-Tech</h1>
      <div className="grid gap-4 lg:grid-cols-5 py-4 grid-cols-3 lg:px-7 px-4 mx-auto">
        <Skill name="Tenserflow" icon={SiTensorflow} />
        <Skill name="Scikitlearn" icon={SiScikitlearn} />
        <Skill name="Langchain" icon={SiLangchain} />
        <Skill name="Pytorch" icon={SiPytorch} />
      </div>
      </div>
    </div>
    </div>
  );
};

export default Skills;
