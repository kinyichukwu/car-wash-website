import homeImage from "../assets/HomeImage.png";

export default function Home() {
  const phoneNumber = "+2348082886416";
  const message = "";

  // Generate the WhatsApp URL
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;
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
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-3 w-fit px-6  mt-7 no-underline text-white block bg-blue-500 rounded-2xl text-base font-medium  hover:bg-blue-600   active:bg-blue-500 animate-bounce mx-auto md:mx-0"
        >
          Buy Now
        </a>
      </div>
      {/**image */}
      <div className=" flex-1">
        <img src={homeImage} alt="" />
      </div>
    </div>
  );
}
