"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  const text = "We specialize in providing excellent lawn care and gardening services. Our skilled team is here to enhance the beauty of your outdoor environment.";
  const words = text.split(" ");

  return (
    <section id="about" className="py-32 px-6 md:px-24 min-h-screen flex items-center bg-mow-cream">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-mow-green/60 mb-12">
          About Us
        </p>
        <h2 className="font-syne text-4xl md:text-6xl lg:text-7xl leading-tight text-mow-green flex flex-wrap gap-x-4 gap-y-2">
          {words.map((word, i) => (
            <span key={i} className="overflow-hidden">
              <motion.span
                className="inline-block"
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : { y: "100%" }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.03,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          <div className="relative aspect-square rounded-3xl overflow-hidden border border-mow-green/20">
            <Image
              src="/inside_lawn.jpeg"
              alt="Mow Magic Team"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="flex flex-col justify-end pb-12">
            <p className="font-sans text-lg md:text-xl text-mow-green/80 font-light leading-relaxed">
              Our approach isn't just about maintenance; it's about elevation. We use state-of-the-art equipment and a meticulous eye for detail to ensure your property stands out.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
