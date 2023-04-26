import Image from "next/image";
interface Technology {
  name: string;
  image: string;
}

const technologies: Technology[] = [
  { image: "/technologies-images/docker.svg", name: "Docker" },
  { image: "/technologies-images/material-ui.svg", name: "Material UI" },
  { image: "/technologies-images/mongodb.svg", name: "Mongo DB" },
  { image: "/technologies-images/nestjs.png", name: "Nest Js" },
  { image: "/technologies-images/next-js.svg", name: "Next Js" },
  { image: "/technologies-images/postgresql.svg", name: "PostgreSQL" },
  { image: "/technologies-images/react.svg", name: "React" },
  { image: "/technologies-images/redux.svg", name: "Redux" },
  { image: "/technologies-images/tailwind-css.svg", name: "TailwindCSS" },
  { image: "/technologies-images/typescript.svg", name: "Typescript" },
  { image: "/technologies-images/lerna.png", name: "Lerna" },
];

export const Technologies = () => {
  return (
    <div className="p-2 w-[80%] mx-auto h-[90vh]">
      <h3 className="text-center text-[50px] my-[50px] text-slate-200">
        | Technologies
      </h3>
      <div className="flex flex-wrap gap-7 items-center">
        {technologies.map(({ image, name }) => (
          <div
            key={name}
            className="text-center flex items-center justify-center gap-2 w-[200px] h-[70px] font-Montserrat tracking-[.5px] p-3 font-bold rounded-md text-slate-200 border border-violet-700  bg-[#351d66]"
          >
            <Image src={image} alt={"Image of: "} width={50} height={50} />
            <span>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
