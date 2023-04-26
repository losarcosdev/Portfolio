import { projects } from "@/data";
import Image from "next/image";

export const Projects = () => {
  return (
    <div className="p-2 w-[80%] mx-auto">
      <h3 className="text-center text-[50px] mt-[100px] text-slate-200">
        | Projects
      </h3>
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col items-center justify-center p-5 my-[100px]"
        >
          <div className="bg-[#2b0f44] rounded-lg w-[1200px] h-[600px] flex items-center justify-center">
            <Image
              alt="Project image"
              src={project.image}
              width={650}
              height={750}
              className="h-[800px] w-[1000px]"
            />
          </div>
          <div className="flex justify-center pt-5 gap-3">
            {/* Technologies */}
            <div className="w-[50%] flex gap-3 flex-wrap h-fit">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-Montserrat text-[12px] font-bold tracking-[.5px] p-3 rounded-full h-fit text-slate-300 border border-slate-500"
                >
                  {tool}
                </span>
              ))}
            </div>
            {/* Project info */}
            <div className="w-[50%] flex flex-col gap-3">
              <h3 className="text-2xl text-slate-100 font-bold font-Montserrat">
                {project.title}
              </h3>
              <p className="text-gray-400 text-left">{project.description}</p>
              <hr className="my-5 opacity-50" />
              <div className="flex gap-5">
                <a
                  href="#"
                  className="hover:underline hover:text-white duration-150 text-gray-300"
                >
                  View code
                </a>
                <a
                  href="#"
                  className="hover:underline hover:text-white duration-150 text-gray-300"
                >
                  View site
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
