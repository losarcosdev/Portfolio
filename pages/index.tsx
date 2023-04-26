import { Navbar, About, Projects, Technologies, Contact } from "@/components";

const Home = () => {
  return (
    <div className="fadeIn">
      <div className="bg-[#2b0f44] text-center">
        <Navbar />
        <About />
      </div>
      <div className="bg-[#250b3c]">
        <Projects />
        <Technologies />
      </div>
      <div className="bg-[#290e40]">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
