import logo from "../../assets/food-logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Navbar = () => {
  return (
    <>
      <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200">
        <div className="container p-3  sm:py-0">
          <div className="flex justify-between items-center">
            {/* the logo */}
            <div>
              <a
                href="#"
                className="flex items-center gap-2 text-2xl sm:text-3xl font-bold"
              >
                <img src={logo} alt="Foodie Zone" className="w-10" />
                Foodie
              </a>
            </div>

            {/* the links */}
            <div className="flex items-center gap-4">
                <div>
                    <DarkMode/>
                </div>
              <ul className="hidden sm:flex gap-4">
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary duration-150"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary duration-150"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="inline-block py-4 px-4 hover:text-primary duration-150"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <button className="bg-gradient-to-r from-primary
               to-secondary text-white px-4 py-1 
               rounded-full hover:scale-105 duration-300 flex items-center gap-3">
                Order
                <FaCartShopping  className='text-xl text-white drop-shadow-sm cursor-pointer'/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
