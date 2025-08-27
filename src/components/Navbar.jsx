import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Search, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [showSearch, setShowSearch] = useState(false); // search toggle
  const [activeLink, setActiveLink] = useState("HOME"); // active link

const navLinks = [
  { name: "HOME", path: "/inferno" },
  { name: "SHOP", path: "/shop" },
  { name: "SERVICES", path: "/services" },
];


  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-lg border-b border-gray-800 text-white">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        
        {/* Left Links (Desktop) */}
        <div className="hidden md:flex space-x-8">
        {navLinks.slice(0, 2).map((link) => (
  <Link
    key={link.name}
    to={link.path}
    onClick={() => setActiveLink(link.name)}
    className={`relative font-medium tracking-wide transition-colors duration-300
      ${activeLink === link.name ? "text-red-400" : "hover:text-red-400"}
      after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full 
      after:scale-x-0 hover:after:scale-x-100 
      ${activeLink === link.name ? "after:scale-x-100 after:bg-red-500" : "after:bg-red-500"}
      after:origin-left after:transition-transform after:duration-300`}
  >
    {link.name}
  </Link>
))}

        </div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold tracking-widest"
        >
          INFERNO
        </motion.div>

        {/* Right Section (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
       <Link
  to="/services"
  onClick={() => setActiveLink("SERVICES")}
  className={`relative font-medium tracking-wide transition-colors duration-300
    ${activeLink === "SERVICES" ? "text-red-400" : "hover:text-red-400"}
    after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full 
    after:scale-x-0 hover:after:scale-x-100 
    ${activeLink === "SERVICES" ? "after:scale-x-100 after:bg-red-500" : "after:bg-red-500"}
    after:origin-left after:transition-transform after:duration-300`}
>
  SERVICES
</Link>
          {/* Icons */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="hover:text-red-400 transition"
            >
              <Search size={22} />
            </button>
            <ShoppingCart
              size={22}
              className="cursor-pointer hover:text-red-400 transition"
            />
            <User
              size={22}
              className="cursor-pointer hover:text-red-400 transition"
            />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Search Overlay */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-gray-800"
          >
            <div className="max-w-3xl mx-auto px-6 py-4">
              <input
                type="text"
                placeholder="Search products, categories..."
                autoFocus
                className="w-full bg-gray-900/70 text-white px-5 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-gray-400"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black md:hidden"
              onClick={() => setIsOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 w-full h-full bg-black/95 backdrop-blur-md shadow-xl md:hidden flex flex-col items-center justify-center space-y-10 text-2xl font-semibold tracking-wide"
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  onClick={() => {
                    setActiveLink(link);
                    setIsOpen(false);
                  }}
                  className={`transition ${
                    activeLink === link ? "text-red-400" : "hover:text-red-400"
                  }`}
                >
                  {link}
                </a>
              ))}
              <div className="flex space-x-8 mt-6">
                <Search
                  size={28}
                  className="cursor-pointer hover:text-red-400"
                  onClick={() => {
                    setShowSearch(true);
                    setIsOpen(false);
                  }}
                />
                <ShoppingCart size={28} className="cursor-pointer hover:text-red-400" />
                <User size={28} className="cursor-pointer hover:text-red-400" />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
