"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <footer
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-mow-green rounded-t-[3rem] -mt-10 z-30"
    >
      {/* Full Screen Background Image */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      >
        <Image
          src="/curb.jpeg"
          alt="Mow Magic Footer Image"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
      </motion.div>

      {/* Top: Logo instead of text */}
      <div className="absolute top-16 left-0 w-full z-10 flex justify-center pointer-events-none">
        <div className="relative w-24 h-24 md:w-32 md:h-32">
          <Image
            src="/logo.jpeg"
            alt="Mow Magic Logo"
            fill
            className="object-contain mix-blend-multiply"
          />
        </div>
      </div>

      {/* Bottom: Links & Info */}
      <div className="absolute bottom-28 md:bottom-12 w-full px-6 md:px-24 z-10 flex flex-col md:flex-row justify-between items-center md:items-end text-mow-cream font-sans text-sm uppercase tracking-widest gap-8 md:gap-0">
        <div className="flex gap-8 md:gap-12">
          <Link href="#" className="hover:opacity-60 transition-opacity">Instagram</Link>
          <Link href="#" className="hover:opacity-60 transition-opacity">Facebook</Link>
        </div>
        <div>
          <a href="mailto:jakenanitome45@gmail.com" className="hover:opacity-60 transition-opacity">
            jakenanitome45@gmail.com
          </a>
          
        </div>
      </div>
    </footer>
  );
}
