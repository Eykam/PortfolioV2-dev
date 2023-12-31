const Background = () => {
  return (
    <div className="w-full h-full flex justify-center align-middle">
      <div className="w-3/4 md:w-3/4 lg:w-1/2 flex flex-col justify-center">
        <span className="font-bold text-3xl md:text-4xl  text-neutral-200">
          Background
        </span>

        <br />

        <div className=" bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] flex flex-col justify-between">
          I'm a Full Stack Developer, and University of Maryland Alumnus,
          specialized in creating Portable and Scalable systems. My interests
          include MLOps, DevOps and Web Scraping.
          <br />
          <br />
          I'm a Full Stack Developer, and University of Maryland Alumnus,
          specialized in creating Portable and Scalable systems. My interests
          include MLOps, DevOps and Web Scraping
        </div>
      </div>
    </div>
  );
};
export default Background;
