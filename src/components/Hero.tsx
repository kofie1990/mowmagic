"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-mow-green"
    >
      {/* Full Screen Image */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]) }}
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      >
        <Image
          src="/hero.jpeg"
          alt="Mow Magic Hero Image"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-mow-green/80 via-transparent to-transparent" />
      </motion.div>

      {/* Text above menu box */}
      <motion.div
        style={{ y, opacity }}
        className="absolute bottom-32 left-0 w-full z-10 flex flex-col items-center pointer-events-none"
      >
        <p className="font-syne text-6xl md:text-5xl lg:text-6xl text-mow-cream max-w-3xl text-center px-6 leading-tight">
          Precision lawn care. <br className="hidden md:block" />
          <span className="italic">Atelier standards.</span>
        </p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute right-6 md:right-12 bottom-28 md:bottom-12 z-10 flex items-center gap-4 pointer-events-none"
      >
        <span className="font-sans text-xs uppercase tracking-[0.2em] text-mow-cream/70">
          Scroll to explore
        </span>
        <div className="w-16 h-[1px] bg-mow-cream/20 relative overflow-hidden">
          <motion.div
            className="w-full h-full bg-mow-cream"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
