function Middle() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen px-4 bg-white">
        <div className="w-[900px] h-auto max-w-screen-lg">

          <div className="p-4 text-center">
            <h1 className="w-auto px-4 pt-10 text-2xl font-bold leading-tight border-black md:text-4xl md:px-20 md:mb-10">
              Frontend Practice provides you with the inspiration and resources
              to create beautiful websites.
            </h1>
            <h2 className="px-4 py-2 mx-4 text-lg font-normal leading-tight md:text-2xl md:mx-20 md:px-20">
              Here are some ways you can benefit from using our platform:
            </h2>
          </div>


          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex items-center p-4 border-2 border-black rounded-md">
              <img
                src="https://images.prismic.io/frontendpractice/f990db40-ba07-479c-b52c-3b2c6caabc89_domain.png?auto=compress,format"
                alt="Benefit 1"
                className="w-16 md:w-24"
              />
              <h1 className="px-3 text-base font-normal text-center md:text-lg">
                Enhance your skills by building real websites selected for their
                educational value.
              </h1>
            </div>

            <div className="flex items-center p-4 border-2 border-black rounded-md">
              <img
                src="https://images.prismic.io/frontendpractice/65eee214-bbfe-4f9e-ad0f-70f7785679be_layout.png?auto=compress,format"
                alt="Benefit 2"
                className="w-16 md:w-24"
              />
              <h1 className="px-3 text-base font-normal text-center md:text-lg">
                Test and improve your frontend knowledge through various
                challenges.
              </h1>
            </div>

            <div className="flex items-center p-4 border-2 border-black rounded-md">
              <img
                src="https://images.prismic.io/frontendpractice/8d3c1f70-6ff3-41f0-b9d6-3b46f2899359_pantone.png?auto=compress,format"
                alt="Benefit 3"
                className="w-16 md:w-24"
              />
              <h1 className="px-3 text-base font-normal text-center md:text-lg">
                Use the provided color palettes for each project to save time.
              </h1>
            </div>

            <div className="flex items-center p-4 border-2 border-black rounded-md">
              <img
                src="https://images.prismic.io/frontendpractice/d6e88860-7347-4d32-acf8-aa1f01db8685_idea.png?auto=compress,format"
                alt="Benefit 4"
                className="w-16 md:w-24"
              />
              <h1 className="px-3 text-base font-normal text-center md:text-lg">
                Find helpful, curated resources to tackle challenging elements.
              </h1>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h1 className="text-[25px] font-bold leading-tight md:text-[25px]">
              Ready to become a better <br/> frontend developer?
            </h1>
          </div>

          <div className="flex justify-center mt-5 mb-5">
            <button className="px-6 py-3 font-bold bg-white border-2 border-black rounded-md hover:bg-black hover:text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Middle;
