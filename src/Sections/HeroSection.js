import image from "../Assets/image.svg";

export const HeroSection = () => {
  return (
    <div className="max-w-[85%] mx-auto lg:max-w-[1200px] md:mx-12 xl:mx-auto p-2 mt-12 lg:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/*Column 1*/}
        <div className="grid grid-cols-1 gap-y-6 sm:gap-y-4 lg:gap-y-auto md:mt-16 lg:mt-10">
          {/*Column 1-1*/}
          <div className="">
            <h1 className="font-[900] text-center md:text-start text-2xl md:text-4xl lg:text-6xl">
              <span className="text-blue-400 underline">Instant</span> Payment
              Gateway
            </h1>
          </div>
          {/*Column 1-2*/}
          <div className="">
            <h1 className="text-center mx-auto md:text-start md:mx-0 max-w-[350px] lg:max-w-full font-[200] text-lg md:text-xl lg:text-2xl">
              We understand that time is valuable and that's why we have created
              a platform that allows you to make payments quickly and easily.
            </h1>
          </div>
          {/*Column 1-3*/}
          <div className="flex flex-wrap gap-x-2 gap-y-2 sm:gap-y-0 mx-auto md:mx-0">
            <input
              placeholder="Enter Email Address"
              type="text"
              className="text-sm border rounded px-2"
            ></input>
            <button className="font-[600] rounded text-sm px-2 bg-blue-400">
              Get Access
            </button>
          </div>
        </div>
        {/*Column 2*/}
        <div className="row-start-1 md:row-start-auto mx-auto md:mx-0 md:mt-12 lg:mt-0">
          <img src={image} className="lg:min-w-[550px]" />
        </div>
      </div>
    </div>
  );
};
