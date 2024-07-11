import { githubBase, projectsDetails } from "@/utils";
import GlowCard from "@/app/components/common/GlowCard";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { skillsImage } from "../common/SkillsImage";

const Project = () => {
  return (
    <div id="projects" className="relative z-50  my-12 lg:my-24">
      <div className="sticky top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-3 gap-6">
          {projectsDetails.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <GlowCard
                key={project.id}
                identifier={`experience-${project.id}`}
              >
                <div className="p-4 ">
                  <Image
                    src="/svg/blur-23.svg"
                    alt="Hero"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 opacity-80"
                  />
                  <div className="flex flex-col gap-8 p-2">
                    <div className="flex flex-col gap-8">
                      <span className="text-xl">{project.name}</span>
                      <p className="h-[3rem]">{project.description}</p>
                    </div>
                    <p className="flex gap-4">
                      {project.tools.map((tool, index) => (
                        <Image
                          key={index}
                          src={skillsImage(tool)?.src}
                          alt={tool}
                          width={24}
                          height={24}
                        />
                      ))}
                    </p>
                    <div className="flex gap-6">
                      <Link
                        href={`${githubBase}${project.github}`}
                        className=" transition-all  hover:scale-150 duration-300 text-pink-500 z-[100] "
                      >
                        <BsGithub size={24} />
                      </Link>
                      <Link
                        className="z-[100] transition-all text-pink-500 hover:scale-150 duration-300"
                        href={project.live || ""}
                      >
                        <Globe color="#ec4899" />
                      </Link>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
