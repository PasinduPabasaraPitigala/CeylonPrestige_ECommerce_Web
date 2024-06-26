import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/ceylonLogo.png";
import user from "../assets/images/icons8-login-67.png";
import Navbar from "./Navbar";
import { useContext, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { IoMdCart } from "react-icons/io";
import { ShopContext } from "../Context/ShopContext";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);
  const { getTotalCartItems } = useContext(ShopContext);
  return (
    <header
      className={
        "fixed top-0 m-auto max_padd_container w-full bg-white ring-1 ring-slate-900/5 z-10 "
      }
    >
      <div className={" px-4 flexBetween py-3 max-xs:px-2"}>
        {/*logo*/}
        <div>
          <Link>
            <img src={logo} alt={""} height={120} width={120} />
          </Link>
        </div>

        {/*Nav bar Desktop*/}
        <Navbar
          containerStyles={"hidden md:flex gap-x-5 xl:gap-x-10 medium-15"}
        />

        {/*Nav bar Mobile*/}
        <Navbar
          containerStyles={`${
            menuOpened
              ? "flex item-start flex-col gap-y-12 fixed top-20 right-8 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300"
              : "flex item-start flex-col gap-y-12 fixed top-20 p-12 bg-white rounded-3xl shadow-md w-64 medium-16 ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]"
          }`}
        />
        {/*Button*/}
        <div className={"flexBetween sm:gap-x-2 bold-16"}>
          {!menuOpened ? (
            <MdMenu
              className={
                "md:hidden cursor-pointer hover:text-secondary mr-2 p-1 h-8 w-8 "
              }
              onClick={toggleMenu}
            />
          ) : (
            <MdClose
              className={
                "md:hidden cursor-pointer hover:text-secondary mr-2 ring-1 p-1 h-8 w-8 rounded-full "
              }
              onClick={toggleMenu}
            />
          )}
          <div className={"flexBetween sm:gap-x-6"}>
            <NavLink to={"cart-page"} className={"flex"}>
              <IoMdCart className={"p-1 h-8 w-8 ring-slate-900/30"} />
              <span
                className={
                  "relative flexCenter w-5 h-5 rounded-full bg-orange-600 text-white medium-14 -top-2 font-sans"
                }
              >
                {getTotalCartItems()}
              </span>
            </NavLink>

            <NavLink to={"login"} className={
              "btn_secondary_rounded flexCenter hover:text-black gap-x-2 medium-16 hidden"
            }>
             Login
            </NavLink>

            <NavLink
              to={"logout"}
              className={
                "btn_secondary_rounded flexCenter hover:text-black gap-x-2 medium-16 hidden"
              }
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
