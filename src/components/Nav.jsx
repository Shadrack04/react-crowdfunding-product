import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    if (openNav) {
      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [openNav]);

  function handleFocusOut(e) {
    console.log(e.target);
    if (!e.target.classList.contains("mobile-nav")) {
      setOpenNav(false);
    }
  }

  return (
    <nav className=" sticky top-0 flex items-center justify-between z-50">
      <Logo />
      {openNav && (
        <div
          onClick={handleFocusOut}
          className=" md:hidden  fixed inset-0 bg-black/50"
        ></div>
      )}
      <ul
        className={`${
          openNav ? "left-4 right-4" : "-left-100"
        } mobile-nav flex flex-col absolute top-10  transition-all duration-300  md:static md:flex-row bg-white md:bg-transparent px-4 md:p-0 rounded-md z-50`}
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

      <div className="md:hidden z-50" onClick={() => setOpenNav((N) => !N)}>
        <img src={openNav ? closeIcon : menuIcon} alt="Hamburger menu icon" />
      </div>
    </nav>
  );
}

export default Nav;
