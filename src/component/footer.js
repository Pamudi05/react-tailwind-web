import React, { useState, useRef, useEffect } from "react";

function Footer() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

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

  const items = ["Home", "Projects", "Blogs", "FAQ", "Contacts", "Newsletter↗"];

  return (
    <>
      <div className="min-h-[150px] bg-black flex justify-start md:justify-center items-center md:items-center">
        <footer className="m-4 text-center text-white">
          <p className="text-sm">Frontend Practice - &copy; 2024 </p>
          <div className="md:w-[800px] cursor-pointer p-4" ref={containerRef}>
            <ul className="flex flex-col items-start flex-grow space-x-2 font-mono text-sm font-bold md:justify-center md:flex-row md:space-x-6">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`${
                    activeIndex === index
                      ? "border-2 border-dashed border-blue-700"
                      : "border-none"
                  } hover:underline cursor-pointer`}
                  onClick={() => handleClick(index)}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
