import logo from "../assets/Logo.png";

export default function Navbar() {
  return (
    <>
      <nav class="bg-white border-gray-200 flex justify-between items-center max-w-screen-2xl mx-auto md:px-5 py-2">
        <div class=" flex flex-wrap items-center justify-between p-4">
          <a href="https://flowbite.com/" class="flex items-center">
            <img src={logo} class="h-8 mr-2" alt=" Logo" />
            <span class=" text-lg self-center md:text-xl font-bold text-[#0B132A]">
              Supreme Wash
            </span>
          </a>
        </div>
        <ul class="hidden font-medium md:flex flex-col   md:flex-row md:space-x-8  ">
          <li>
            <a
              href="#"
              class=" py-2 pl-3 pr-4 text-[#4F5665]   md:p-0  "
              aria-current="page"
            >
              Home
            </a>
          </li>
          <li>
            <a href="#" class=" py-2 pl-3 pr-4 text-[#4F5665]   md:p-0  ">
              About
            </a>
          </li>

          <li className="">
            <a
              href="#"
              class=" py-2 px-4 text-[#4F5665]    border border-[#1246FF] rounded-3xl"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
