import React from "react";

const Navbar = () => {
  const handleScroll = (event) => {
    const element = document.getElementById(event);
    const offset = 80; // adjust this value (e.g. height of a fixed navbar)

    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.scrollY - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav className="place-items-center z-50  backdrop-blur-md bg-transparent fixed w-full top-0 left-0">
      <ul className="flex h-16 items-center gap-8 px-8 text-white">
        <li>
          <button
            onClick={() => handleScroll("home")}
            className="hover:text-yellow-400 transition"
          >
            Home
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("about")}
            href="#about"
            className="hover:text-yellow-400 transition"
          >
            About
          </button>
        </li>
        <li>
          <button
            onClick={() => handleScroll("Contact")}
            className="hover:text-yellow-400 transition"
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
