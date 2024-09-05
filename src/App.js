import './App.css';
import React, { useState , useRef, useEffect} from 'react';

function App() {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);

  const handleClickOutside = (event) => {
    if (containerRef.current && !containerRef.current.contains(event.target)) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const items = ['Home', 'Projects', 'Blogs', 'FAQ', 'Contacts', 'Newsletter↗'];
  
  return (
    <div className="flex h-[55px] border-b-2 border-black 
      items-center  ">
      <div className="w-[550px] cursor-pointer p-4 text-center text-[25px] hover:underline">
        <h1 className='font-mono font-extrabold'>Frontend Practice</h1>
      </div>
      <div className="w-[800px] cursor-pointer p-4" ref={containerRef}>
        <ul className='flex space-x-6 justify-end font-mono font-bold text-[20px]'>
        {items.map((item, index) => (
            <li
              key={index}
              className={`${
                activeIndex === index ? 'border-2 border-dashed border-black' : 'border-none'
              } hover:underline cursor-pointer`}
              onClick={() => handleClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
