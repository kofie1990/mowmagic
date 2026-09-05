"use client";

import { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowUp } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsAtBottom(latest > 0.95);
  });

  const toggleMenu = () => setIsOpen(!isOpen);

  const mainLinks = [
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  const subLinks = [
    { name: "Facebook", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "jakenanitome45@gmail.com", href: "mailto:jakenanitome45@gmail.com" },
    { name: "+233 (0) 55 147 8643", href: "tel:+233551478643"}
  ];

  return (
    <>
      {/* Top Elements */}
      <motion.div 
        animate={{ opacity: isScrolled ? 0 : 1, y: isScrolled ? -20 : 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 w-full p-6 flex justify-between items-start z-[60] mix-blend-difference text-mow-cream ${isScrolled ? 'pointer-events-none' : ''}`}
      >
        <div className="hidden md:block">
          <Link
            href="#quote"
            className="text-sm font-sans uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            Get a Quote
          </Link>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link
            href="/"
            className="text-xl font-syne font-bold uppercase tracking-[0.2em]"
          >
            Mow Magic
          </Link>
        </div>
      </motion.div>

      {/* Full Screen Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[50] bg-mow-green text-mow-cream flex flex-col md:flex-row justify-between p-8 md:p-16 md:pt-32"
          >
            <div className="flex flex-col justify-between h-full w-full md:w-2/3">
              <span className="font-sans text-sm uppercase tracking-widest opacity-0">Menu</span>
              
              <ul className="flex flex-col space-y-4 md:space-y-6 mt-12 md:mt-0">
                {mainLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "100%", opacity: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="group relative flex flex-col font-syne text-5xl md:text-7xl lg:text-8xl hover:italic transition-all"
                    >
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col justify-end md:justify-between h-full md:w-1/3 mt-12 md:mt-0 pb-24 md:pb-0">
              <ul className="flex flex-col space-y-4 font-sans text-lg md:text-xl font-light mb-12">
                {subLinks.map((link, i) => (
                  <motion.li
                    key={link.name}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                    transition={{ delay: 0.3 + i * 0.05, duration: 0.4 }}
                  >
                    <Link href={link.href} className="hover:opacity-60 transition-opacity">
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="#quote"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-4 border border-mow-cream/30 px-6 py-4 rounded-none hover:bg-mow-cream hover:text-mow-green transition-colors font-sans uppercase tracking-widest text-sm"
                >
                  <ArrowUpRight size={18} />
                  <span>Get a Quote</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Floating Header (fluid.glass style) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] w-[90vw] md:w-[28rem] h-14 bg-mow-cream text-mow-green flex items-center justify-between px-6 shadow-2xl rounded-none">
        {/* Left: Logo/Brandmark */}
        <div className="flex items-center">
          <Link href="/" className="relative w-8 h-8 md:w-10 md:h-10">
            <Image
              src="/logo.jpeg"
              alt="Mow Magic Logo"
              fill
              className="object-contain mix-blend-multiply"
            />
          </Link>
        </div>

        {/* Center: Title / Scroll to Top */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center overflow-hidden h-full w-32">
          <AnimatePresence mode="wait">
            {isAtBottom && !isOpen ? (
              <motion.button
                key="scroll-top"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="font-sans text-xs uppercase tracking-[0.2em] flex items-center gap-2 hover:opacity-70 transition-opacity"
              >
                <span>Top</span>
                <ArrowUp size={14} />
              </motion.button>
            ) : (
              <motion.div
                key="home"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 0.5 }}
                exit={{ y: -20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="font-sans text-xs uppercase tracking-[0.2em]"
              >
                Home
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: Burger / Close */}
        <button
          onClick={toggleMenu}
          className="relative w-6 h-6 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label="Menu"
        >
          <motion.div
            animate={{ 
              y: isOpen ? 7 : 0, 
              rotate: isOpen ? 45 : 0 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-[1px] bg-mow-green origin-center"
          />
          <motion.div
            animate={{ 
              opacity: isOpen ? 0 : 1 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-[1px] bg-mow-green"
          />
          <motion.div
            animate={{ 
              y: isOpen ? -7 : 0, 
              rotate: isOpen ? -45 : 0 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="w-full h-[1px] bg-mow-green origin-center"
          />
        </button>
      </div>
    </>
  );
}
