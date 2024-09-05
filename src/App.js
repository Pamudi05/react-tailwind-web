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
    <>
      <div className="flex h-[55px] bg-white border-b-2 border-black items-center fixed top-0 left-0 right-0">
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
      <div className='h-screen bg-antiquewhite border-b-2 border-black flex items-center justify-center'>
            <div className='flex w-[80vw] h-[500px]'>
              <div className='flex-1 w-9 m-7 pt-8 pr-10 text-left'>
                <h1 className='font-extrabold text-[50px] leading-none'>Become a better frontend developer.</h1>
                <br/>
                <h1 className='font-normal text-[24px] '>Take your frontend skills to the next level by recreating <b>real websites</b> from <b>real companies</b>.</h1>
                <br/>
                <h1 className='font-normal text-[24px]'>The perfect type of practice for developers of all skill levels. Are you up for the challenge?</h1>
                <button className='mt-5 py-2 px-3 border-2 border-black font-bold bg-white hover:bg-black hover:text-white'>View Projects</button>  
                <button className='m-5 py-2 px-3 border-2 border-black font-bold bg-antiquewhite hover:bg-black hover:text-white'>Learn more</button>  
              </div>
              <div className='flex-1'>
                  <img src='https://www.frontendpractice.com/_next/image?url=%2Fproject-collage.png&w=1200&q=100' alt=''/>
              </div>
            </div>
      </div>
      <div className='h-screen bg-white flex items-center justify-center'>
        <div className='w-[50vw] h-[700px]'>
            <div className='h-[250px] text-center'>
              <h1 className='font-extrabold text-[30px] leading-none px-20 pt-10'>Frontend Practice provides you with the inspiration and resources to create beautiful websites.</h1>
              <br/>
              <h1 className='font-normal text-[25px] leading-none mx-20 px-20'>Here are some ways you can benefit from using our platform:</h1>
            </div>
            <div className='h-[250px] grid grid-cols-2 gap-2'>
            <div className='w-[400px] h-[120px] flex items-center px-3 border-2 border-black'>
              <img src='https://images.prismic.io/frontendpractice/f990db40-ba07-479c-b52c-3b2c6caabc89_domain.png?auto=compress,format' alt='' className='w-[90px]'/>
              <h1 className='text-center font-normal px-3'>Enhance your skills by building real websites selected for their educational value.</h1>
            </div>
            <div className='w-[400px] h-[120px] flex items-center px-7 border-2 border-black'>
              <img src='https://images.prismic.io/frontendpractice/65eee214-bbfe-4f9e-ad0f-70f7785679be_layout.png?auto=compress,format' alt='' className='w-[90px]'/>
              <h1 className='text-center font-normal px-3'>Test and improve your frontend knowledge through various challenges.</h1>
            </div>
            <div className='w-[400px] h-[120px] flex items-center px-3 border-2 border-black'>
              <img src='https://images.prismic.io/frontendpractice/8d3c1f70-6ff3-41f0-b9d6-3b46f2899359_pantone.png?auto=compress,format' alt='' className='w-[90px]'/>
              <h1 className='text-center font-normal px-3'>Use the provided color palettes for each project to save time.</h1>
            </div>
            <div className='w-[400px] h-[120px] flex items-center px-7 border-2 border-black'>
              <img src='https://images.prismic.io/frontendpractice/d6e88860-7347-4d32-acf8-aa1f01db8685_idea.png?auto=compress,format' alt='' className='w-[90px]'/>
              <h1 className='text-center font-normal px-3'>Find helpful, curated resources to tackle challenging elements.</h1>
            </div>
          </div>  
          <div className='h-[100px] px-40 py-10 borderflex justify-center'>
            <h1 className='font-extrabold text-[30px] text-center leading-none'>Ready to become a better frontend developer?</h1>
          </div>
            <div className='flex justify-center mt-5'>
              <button className='py-2 px-3 border-2 border-black font-bold bg-white hover:bg-black hover:text-white'>Get Started</button>
            </div>
        </div>
      </div>
      <div className='h-[150px] bg-black flex justify-center items-center'>
        <footer className="text-center  text-white">
          <p className="text-sm">Frontend Practice - &copy; 2024 </p>
          <div className="w-[800px] cursor-pointer p-4" ref={containerRef}>
            <ul className='flex space-x-6 justify-center font-mono font-bold text-sm'>
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
        </footer>
      </div>
    </> 
  );
}

export default App;
