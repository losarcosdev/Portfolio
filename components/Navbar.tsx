import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const tabs = [
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
  {
    name: "Technologies",
    href: "#technologies",
  },
];

export const Navbar = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].href);
  const { pathname } = useRouter();

  return (
    <nav className="flex justify-center items-center p-5">
      <div className="flex items-center gap-10">
        {tabs.map(({ href, name }) => (
          <Link
            key={name}
            className="text-[16px] font-Montserrat tracking-[2px] text-slate-300 hover:text-white duration-150"
            href={href}
          >
            {name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
