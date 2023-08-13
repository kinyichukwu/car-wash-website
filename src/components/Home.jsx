import homeImage from "../assets/HomeImage.png";

export default function Home() {
  return (
    <div className="flex items-center max-w-screen-2xl mx-auto px-5 min-h-[87vh] flex-col-reverse md:flex-row">
      {/**content */}
      <div className=" flex-1 text-center md:text-start">
        <h1 className="text-[2.125rem] text-[#0B132A] md:text-[3.125rem] font-bold ">
          Revive your Ride <br /> Shine with Pride
        </h1>
        <p className=" text-[#4F5665] pt-2 w-[89%]   mx-auto md:mx-0">
          Introducing our premium car wash soap, the secret to a showroom shine
          at your fingertips. With its advanced formula, our soap effortlessly
          cleans and revives your ride.
        </p>
        <button className="py-3 px-6 mt-7 text-white bg-blue-500 rounded-2xl text-base font-medium  hover:bg-blue-600   active:bg-blue-500 animate-bounce ">
          Buy Now
        </button>
      </div>
      {/**image */}
      <div className=" flex-1">
        <img src={homeImage} alt="" />
      </div>
    </div>
  );
}
