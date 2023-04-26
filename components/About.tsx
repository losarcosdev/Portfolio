export const About = () => {
  return (
    <section className="p-5 shadow-sm rounded-md h-[85vh] flex flex-col items-center mt-[80px] gap-6 relative">
      <div className="absolute w-[50%] inset-0 gradient-04" />
      <h1 className="text-8xl font-bold py-5 font-Montserrat text-white z-[1000]">
        Lucas Los Arcos
      </h1>
      <p className="w-[700px] leading-8 text-[20px] text-slate-200 p-3 rounded-[4px] tracking-[5px] bg-[#704bba] opacity-80 font-extralight font-[monospace]">
        software developer
      </p>
      <div className="flex gap-12 justify-center z-[1000]">
        <button className="w-32 font-Montserrat tracking-[.5px] p-3 font-bold duration-150 rounded-[4px] hover:bg-[#924bee] text-slate-200 bg-[#a766fb]">
          Contact
        </button>
        <button className="w-32 font-Montserrat tracking-[.5px] p-3 font-bold duration-150 rounded-[4px] text-slate-300 border border-slate-500 hover:opacity-50">
          Projects
        </button>
      </div>
    </section>
  );
};
