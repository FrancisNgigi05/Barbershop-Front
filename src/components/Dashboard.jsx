import { useState } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import Button from "../layouts/Logout";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import Hero from "./Hero";
import DashServices from "./dashboardlayout/DashServices";

const Dashboard = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };

  
  return (
    <>
      <header className="fixed w-full z-10 py-4 bg-tertiary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-slate-100">
        {/* desktop navigation section */}
        <nav className="container flex flex-row justify-between items-center">
          <div>
            <Link to="home" spy={true} smooth={true} duration={500}>
              <h1 className="font-bold text-2xl text-secondary">KingsCutz</h1>
            </Link>
          </div>
          <nav className="hidden lg:flex gap-10 text-secondary font-semibold text-xl">
            <Link
              to="Hero"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Home
            </Link>
            <Link
              to="Services"
              spy={true}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            >
              Services
            </Link>
          </nav>

          {/* <div className="flex p-2">
            <div className="w-full text-center">
                <button
                onClick={(event) => {
                    onClickHandler(event);
                }}
                className="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none"
                >
                Log out
                </button>
            </div>
          </div> */}

          <RouterLink to="/" className="text-secondary">
            <Button title="Logout" />
          </RouterLink>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </nav>

        {/* responsive navigation */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-16 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="speciality"
            spy={true}
            smooth={true}
            duration={500}
            className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out"
            onClick={closeMenu}
          >
            Services
          </Link>
          {/* <div className="flex p-2">
          <div className="w-full text-center">
            <button
              onClick={(event) => {
                onClickHandler(event);
              }}
               className="py-3 w-64 text-xl text-white bg-yellow-400 rounded-2xl hover:bg-yellow-300 active:bg-yellow-500 outline-none"
            >
              Log out
            </button>
          </div>
          </div> */}
          <RouterLink to="/" className="text-secondary">
            <Button title="Logout" />
          </RouterLink>
        </div>
      </header>
      <Hero />
      <DashServices />
    </>
  );
};

export default Dashboard;
