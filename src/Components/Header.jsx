import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      setIsMenuOpen(true);
      setTimeout(() => setShowSidebar(true), 800);
    } else {
      setShowSidebar(false);
      setTimeout(() => setIsMenuOpen(false), 600);
    }
  };

  return (
    <header className="bg-[#2A364D] px-4 py-1 sticky top-0 z-5 mx-3 my-2 rounded-lg">
      <div className="max-w-7xl mx-auto">
        <nav className="flex flex-col sm:flex-row items-center justify-between">
          <div>
            <a href="#">
              <img
                src="/delivery-plus-logo.png"
                alt="Delivery-plus-logo Logo"
                className="h-15 w-25"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <div className="relative group flex justify-between">
              <a
                href="#"
                className="text-white flex justify-between items-center"
              >
                About Us
                <MdKeyboardArrowDown className="ml-1" />
              </a>
            </div>
            <div className="relative group flex justify-between">
              <a
                href="#"
                className="text-white flex justify-between items-center"
              >
                Our Services
                <MdKeyboardArrowDown className="ml-1" />
              </a>
            </div>
            <div className="relative group flex justify-between">
              <a
                href="#"
                className="text-white flex justify-between items-center"
              >
                Prices
                <MdKeyboardArrowDown className="ml-1" />
              </a>
            </div>
            <div className="relative group flex justify-between">
              <a
                href="#"
                className="text-white flex justify-between items-center"
              >
                Tools
                <MdKeyboardArrowDown className="ml-1" />
              </a>
            </div>
            <div className="relative group flex justify-between">
              <a
                href="#"
                className="text-white flex justify-between items-center"
              >
                FAQ's
              </a>
            </div>
            <button className="bg-black text-white px-4 py-1 rounded-md hover:bg-white hover:text-black transition duration-500">
              Book Now
            </button>
          </div>

          {isMenuOpen ? (
            <X className="h-6 w-6 text-slate-200" onClick={toggleMenu} />
          ) : (
            <RxHamburgerMenu
              className="h-6 w-6 text-slate-200 my-2 md:hidden"
              onClick={toggleMenu}
            />
          )}

          <div className="flex items-center justify-end space-x-10">
            <div className="flex items-center text-white hover:underline">
              <a href="#" className="flex items-center text-white">
                <Phone className="h-5 w-5 mr-2 hover:underline" />
                <span>1300490551</span>
              </a>
            </div>
            <button className="bg-black text-white px-6 py-1.5 rounded-md hover:underline transition duration-300">
              Get Free Quote
            </button>
          </div>
        </nav>
        {isMenuOpen && (
          <div
            className={`fixed inset-0 z-40 flex transition-opacity duration-1000 ${
              showSidebar ? "bg-gray-400 bg-opacity-70" : "bg-opacity-0"
            }`}
          >
            {/* Sidebar */}
            <div
              className={`bg-white w-3/4 max-w-md h-full p-2 rounded-lg overflow-y-auto transform transition-transform duration-1000 ${
                showSidebar ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-end">
                <button
                  onClick={toggleMenu}
                  className="text-black mb-4 focus:outline-none"
                >
                  X
                </button>
              </div>
              <ul className="space-y-4">
                <li className="flex justify-between">
                  <a href="#" className="block text-black text-lg">
                    About Us
                  </a>
                  <MdKeyboardArrowDown className="ml-1 text-gray-200 hover:text-black" />
                </li>

                <hr className="h-[1.5px] opacity-15 bg-orange-300"></hr>
                <li className="flex justify-between">
                  <a href="#" className="block text-black text-lg">
                    Our Services
                  </a>
                  <MdKeyboardArrowDown className="ml-1 text-gray-200 hover:text-black" />
                </li>
                <hr className="h-[1.5px] opacity-15 bg-orange-300"></hr>
                <li className="flex justify-between">
                  <a href="#" className="block text-black text-lg">
                    Prices
                  </a>
                  <MdKeyboardArrowDown className="ml-1  text-gray-200 hover:text-black" />
                </li>
                <hr className="h-[1.5px] opacity-15 bg-orange-300"></hr>
                <li className="flex justify-between">
                  <a href="#" className="block text-black text-lg">
                    Tools
                  </a>
                  <MdKeyboardArrowDown className="ml-1  text-gray-200 hover:text-black" />
                </li>
                <hr className="h-[1.5px] opacity-15 bg-orange-300"></hr>
                <li className="flex justify-between">
                  <a href="#" className="block text-black text-lg">
                    FAQ's
                  </a>
                </li>
                <hr className="h-[1.5px] opacity-15 bg-orange-300"></hr>
                <li>
                  <button className="bg-black text-white px-4 py-3 w-full rounded-md hover:bg-white hover:text-black transition duration-500">
                    Book Now
                  </button>
                </li>
              </ul>
            </div>
            {/* Transparent Overlay */}
            <div className="flex-1" onClick={toggleMenu}></div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
