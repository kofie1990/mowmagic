"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    "Mowing And Edging",
    "Lawn Irrigation",
    "Fertilization",
    "Weed Control",
    "Landscape Design",
    "Maintenance",
  ];

  return (
    <section id="services" className="py-32 px-6 md:px-24 bg-mow-green text-mow-cream min-h-screen flex flex-col justify-center rounded-t-[3rem] -mt-10 relative z-20">
      <div className="max-w-5xl mx-auto w-full">
        <p className="font-sans text-sm uppercase tracking-[0.3em] text-mow-cream/60 mb-16">
          Our Services
        </p>
        
        <div className="flex flex-col border-t border-mow-cream/20">
          {services.map((service, index) => (
            <motion.div
              key={service}
              initial="initial"
              whileHover="hover"
              className="group border-b border-mow-cream/20 py-8 md:py-12 flex justify-between items-center cursor-pointer"
            >
              <motion.h3
                variants={{
                  initial: { x: 0 },
                  hover: { x: 20 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-syne text-4xl md:text-6xl lg:text-7xl group-hover:italic transition-all duration-500"
              >
                {service}
              </motion.h3>
              <motion.div
                variants={{
                  initial: { opacity: 0, scale: 0.5, rotate: -45 },
                  hover: { opacity: 1, scale: 1, rotate: 0 },
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="hidden md:flex bg-mow-cream text-mow-green p-4 rounded-full"
              >
                <ArrowUpRight size={32} strokeWidth={1.5} />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
