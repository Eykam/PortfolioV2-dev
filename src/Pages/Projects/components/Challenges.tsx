const Challenges = ({ description }: { description: JSX.Element }) => {
  return (
    <div className="w-full h-full flex justify-center align-middle">
      <div className="w-3/4 md:w-3/4 lg:w-1/2 flex flex-col justify-center">
        <span className="font-bold text-3xl md:text-4xl text-neutral-200">
          Challenges
        </span>

        <br />

        <div className=" bg-neutral-900 bg-opacity-60 rounded-xl p-[5%] flex flex-col justify-between text-xs xl:text-lg max-h-2/3 overflow-y-auto">
          {description}
        </div>
      </div>
    </div>
  );
};
export default Challenges;
