import React, { useState } from "react";
import Logo from "./Logo";
import menuIcon from "../../public/images/icon-hamburger.svg";
import closeIcon from "../../public/images/icon-close-menu.svg";

const links = [
  { name: "About", link: "/about" },
  { name: "Discover", link: "/discover" },
  { name: "Get Started", link: "/start" },
];

function Nav() {
  const [openNav, setOpenNav] = useState(false);
  return (
    <nav className=" flex items-center justify-between">
      <Logo />
      <ul
        className={`${
          openNav ? "left-4 right-4" : "-left-100"
        } flex flex-col absolute top-10  transition-all duration-300  md:static md:flex-row bg-white md:bg-transparent px-4 md:p-0 rounded-md`}
      >
        {links.map((link, index) => (
          <li
            key={link.name}
            className="text-lg mb-2 border-b-1 md:border-none border-stone-300 py-2 md:text-xl text-black md:text-white font-medium md:ml-3"
          >
            <a href="#">{link.name}</a>
          </li>
        ))}
      </ul>

      <div className="md:hidden" onClick={() => setOpenNav((N) => !N)}>
        <img src={openNav ? closeIcon : menuIcon} alt="Hamburger menu icon" />
      </div>
    </nav>
  );
}

export default Nav;
