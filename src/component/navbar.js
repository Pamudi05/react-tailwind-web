import React, { useState, useRef, useEffect } from "react";

function Header() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const items = ["Home", "Projects", "Blogs", "FAQ", "Contacts", "Newsletter↗"];

  return (
    <>
      <div className="w-screen border-b-2 bg-white border-black h-[70px] flex items-center sm:items-center md:items-center lg:items-center sm:justify-between md:justify-between fixed top-0 left-0 right-0 z-10">
        <div className="text-[20px] md:text-[25px] cursor-pointer ml-5 p-5 md:ml-20 md:p-10 hover:underline">
          <h1 className="font-mono font-extrabold">Frontend Practice</h1>
        </div>

        <div className="z-10 flex items-center justify-end pr-4 m-8 ml-auto md:hidden">
          <button onClick={toggleMenu} className= "text-[40px]">
            {isOpen ? "x" : "☰"}
          </button>
        </div>

        <div
          className={`${
            isOpen ? "flex" : "hidden"
          } absolute top-0 right-0 w-[300px] h-screen md:h-[100%] flex-col md:flex md:flex-row md:items-center md:justify-end p-4 pt-14 md:pt-3 md:relative md:top-auto md:w-auto md:mr-20 bg-white ${isOpen ? "border-l-2 border-black" : ""}`}
          ref={containerRef}
        >
          <ul className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-6 justify-end md:justify-end font-mono font-bold text-[16px] md:text-[20px] ">
            {items.map((item, index) => (
              <li
                key={index}
                className={`${
                  activeIndex === index
                    ? "border-2 border-dashed border-black"
                    : "border-none"
                } hover:underline cursor-pointer`}
                onClick={() => handleClick(index)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
