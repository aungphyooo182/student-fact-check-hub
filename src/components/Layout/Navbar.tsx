import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "လုပ်ငန်းစဥ်", href: "#what-we-do" },
    { name: "ဗဟုသုတ", href: "#knowledge" },
    { name: "ကျွန်ုပ်တို့အကြောင်း", href: "#about" },
  ];

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href) as HTMLElement | null;
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false);
      // update hash without jumping
      history.pushState(null, "", href);
    }
  };
  // Temporary toggle to hide the Call To Action button across layouts
  const showCTA = false;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-midnight/80 backdrop-blur-xl border-b border-white/5"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 flex items-center justify-between">
        <Link to="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <div className="w-4 h-4 bg-white rounded-sm" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tighter text-white">
            TRUTH<span className="text-accent">HUB.</span>
          </span>
        </Link>

        <div className="flex md:hidden items-center gap-10">
          <div className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={(e) => handleNavClick(e as any, link.href)}
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>
          {showCTA && (
            <Link
              to="/methodology"
              className="flex items-center gap-2 bg-white text-midnight px-5 md:px-6 py-2.5 rounded-full font-bold text-sm hover:bg-accent hover:text-white transition-all transform active:scale-95"
            >
              <span>Take Action</span>
              <ArrowRight size={16} />
            </Link>
          )}
        </div>

        <button
          className="hidden md:flex text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-white py-3 block"
                    onClick={(e) => handleNavClick(e as any, link.href)}
                  >
                    {link.name}
                  </Link>
                ))}
                {showCTA && (
                  <Link
                    to="/methodology"
                    className="mt-2 inline-flex items-center gap-2 bg-white text-midnight px-6 py-2.5 rounded-full font-bold text-sm hover:bg-accent hover:text-white transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>Take Action</span>
                    <ArrowRight size={16} />
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
