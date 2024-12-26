import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="shadow-lg">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg">
        <div className="flex justify-between items-center h-36">
          <div className="hidden md:flex space-x-8 h-24 items-center justify-center w-screen text-base font-custom tracking-widest">
            <a href="/about" className="text-gray-700 hover:text-teal-500">
              About
            </a>
            <a href="/" className="text-gray-700 hover:text-teal-500">
              Menu
            </a>
          <div className="flex items-center md:mx-auto md:w-auto w-full justify-between">
            <a href="/" className="flex items-center text-[#077045] md:mx-auto">
              <img src="/Logoo.png" className="h-24 sm:px-6" />
            </a>
          </div>
            <a href="/findus" className="text-gray-700 hover:text-teal-500">
              Location
            </a>
            <a href="/" className="text-gray-700 hover:text-teal-500">
              Contact
            </a>
          </div>

          {/* Logo on mobile left, center for larger screens */}

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              className="text-gray-500 hover:text-teal-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <a
              href="/about"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </a>
            <a
              href="/"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Menu
            </a>
            <a
              href="/findus"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Location
            </a>
            <a
              href="/"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
