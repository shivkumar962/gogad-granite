'use client'
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const submenuRef = useRef(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        submenuRef.current &&
        !submenuRef.current.contains(event.target) &&
        !menuRef.current.contains(event.target)
      ) {
        setIsSubMenuOpen(false); // Close submenu if click is outside
      }
    };

    document.addEventListener("click", handleClickOutside);
 
    // Cleanup the event listener when the component is unmounted
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const toggleSubMenu = (event) => {
    event.preventDefault(); // Prevent the default behavior (page reload)
    setIsSubMenuOpen((prevState) => !prevState); // Toggle submenu on click
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center ml-16">
            <img
              src="/gogad-granite-logo1.png"
              alt="Gogad Granite"
              className="h-12 w-auto"
            />
            <h1 className="text-3xl ml-4">Gogad Granite</h1>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 mr-16 relative">
            {["HOME", "ABOUT", "PRODUCTS", "INFRASTRUCTURE", "CONTACT"].map((item) =>
              item === "PRODUCTS" ? (
                <div
                  key={item}
                  className="relative"
                  ref={menuRef} // Assign ref to Products menu item
                >
                  <button
                    className="hover:text-red-500 transition-colors duration-300 px-4"
                    onClick={toggleSubMenu} // Open submenu on click
                  >
                    {item}
                  </button>
                  {/* Dropdown Menu */}
                  {isSubMenuOpen && (
                    <div
                      ref={submenuRef} // Assign ref to submenu
                      className="absolute left-0 mt-2 flex flex-col bg-white text-black rounded shadow-lg"
                    >
                      <Link
                        href="/marble"
                        className="px-4 py-2 hover:bg-gray-100 transition"
                      >
                        MARBLE
                      </Link>
                      <Link
                        href="/granite"
                        className="px-4 py-2 hover:bg-gray-100 transition"
                      >
                        GRANITE
                      </Link>
                      <Link
                        href="/products/category3"
                        className="px-4 py-2 hover:bg-gray-100 transition"
                      >
                        IMPORTED
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item}
                  href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                  className="hover:text-red-500 transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </Link>
              )
            )}
            <Link
              href="/login"
              className="hover:text-red-500 transition-colors duration-300"
            >
              LOGIN
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="p-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <IoMdMenu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 w-3/6 h-screen bg-red-700 bg-opacity-90 text-white flex flex-col space-y-4 py-4 px-9 z-50 transition-all duration-300 ease-in-out transform ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Icon */}
          <button
            className="absolute top-4 right-4 p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            <IoMdClose className="h-6 w-6 text-white" />
          </button>
          {["HOME", "ABOUT", "PRODUCTS", "INFRASTRUCTURE", "CONTACT"].map((item) => (
            <Link
              key={item}
              href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-red-500 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/login"
            className="hover:text-red-500 transition-colors duration-300"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
