export const Contact = () => {
  return (
    <div className="p-2 w-[80%] mx-auto h-[100vh] flex flex-col gap-5 items-center justify-center relative">
      <div className="absolute w-[50%] inset-0 gradient-05" />
      <h3 className="text-8xl font-bold py-5 font-Montserrat text-white z-[1000]">
        Let&apos;s Connect!
      </h3>
      <div className="z-[1000] flex gap-10">
        <button className="w-32 font-Montserrat tracking-[.5px] p-3 font-bold duration-150 rounded-[4px] text-slate-100 border border-violet-500 hover:bg-[#542e9f] ">
          Linkedin
        </button>
        <button className="w-32 font-Montserrat tracking-[.5px] p-3 font-bold duration-150 rounded-[4px] text-slate-100 border border-violet-500 hover:bg-[#542e9f] ">
          Github
        </button>
        <button className="w-32 font-Montserrat tracking-[.5px] p-3 font-bold duration-150 rounded-[4px] text-slate-100 border border-violet-500 hover:bg-[#542e9f] ">
          Gmail
        </button>
      </div>
    </div>
  );
};
