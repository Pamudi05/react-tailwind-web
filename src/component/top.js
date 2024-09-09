function Top() {
  return (
    <div className="flex items-center justify-center min-h-[750px] border-b-2 border-black md:h-screen bg-antiquewhite">
      <div className="flex flex-col md:flex-row w-[80vw] min-h-[500px] ">
        <div className="flex-1 w-full pt-8 pr-10 mt-20 text-left m-7 md:pr-10 md:pt-8 md:w-9 md:m-7">
          <h1 className="font-extrabold text-[30px] md:text-[50px] leading-none">
            Become a better frontend developer.
          </h1>
          <br />
          <h1 className="font-normal text-[18px] md:text-[24px] ">
            Take your frontend skills to the next level by recreating{" "}
            <b>real websites</b> from <b>real companies</b>.
          </h1>
          <br />
          <h1 className="font-normal text-[18px] md:text-[24px]">
            The perfect type of practice for developers of all skill levels. Are
            you up for the challenge?
          </h1>
          <button className="w-full md:w-[150px] px-2 py-1 mt-4 font-bold bg-white border-2 border-black md:mr-5 hover:bg-black hover:text-white">
            View Projects
          </button>
          <button className="w-full md:w-[150px] px-2 py-1 mt-4 font-bold border-2 border-black bg-antiquewhite hover:bg-black hover:text-white">
            Learn more
          </button>
        </div>
        <div className="flex-1 mt-5">
          <img
            src="https://www.frontendpractice.com/_next/image?url=%2Fproject-collage.png&w=1200&q=100"
            alt=""
            className="object-cover w-[500px] md:w-full h-[350px] md:h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Top;
