import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useCarts } from "../../Contexts/CartContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";

const Header = () => {
  const { carts } = useCarts();
  const [show, setShow] = useState(false);
  const navlinks = [
    { name: "Home", to: "/home" },
    { name: "Buy", to: "/buy" },
    { name: "Sell", to: "/sell" },
  ];

  const toggleMenu = () => {
    setShow(!show);
  };

  return (
    <>
      <nav className="bg-blue-800 px-4 py-2 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/home" className="text-white font-bold text-xl">
                BUY AND SELL
              </Link>
            </div>
            {/* Navigation Links */}
            <div className="flex items-center">
              {navlinks.map((nav, i) => (
                <NavLink
                  key={i}
                  to={nav.to}
                  className="max-sm:hidden text-white font-bold hover:text-white px-3 py-2"
                >
                  {nav.name}
                </NavLink>
              ))}
              <div className="flex">
                <NavLink
                  to="/cart"
                  className="max-sm:hidden text-white font-bold hover:text-white px-3 py-2"
                >
                  Cart
                </NavLink>
                <div
                  className=" max-sm:hidden flex items-center justify-center text-blue-800  
              w-5 h-5 bg-white rounded-full font-bold relative right-3"
                >
                  {carts?.length}
                </div>

                <div className="sm:hidden">
                  <button
                    className="text-white focus:outline-none"
                    onClick={toggleMenu}
                  >
                    {!show ? (
                      <GiHamburgerMenu className="text-xl" />
                    ) : (
                      <IoCloseSharp className="text-xl" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Navigation Links */}
      {show && (
        <div
          className="hidden max-sm:block w-1/2 h-screen bg-[#1d4fd8e2]
      z-50 shadow-2xl fixed right-0 py-5 px-10"
        >
          {navlinks.map((nav, i) => (
            <NavLink
              key={i}
              to={nav.to}
              className="hidden max-sm:block text-white font-bold hover:text-white px-3 py-2"
            >
              {nav.name}
            </NavLink>
          ))}
          <div className="hidden max-sm:block">
            <div className="flex items-center justify-between">
              <NavLink
                to="/cart"
                className=" text-white font-bold hover:text-white px-3 py-2"
              >
                Cart
              </NavLink>
              <div
                className="flex items-center justify-center text-blue-800  
              w-5 h-5 bg-white rounded-full font-bold"
              >
                {carts?.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
