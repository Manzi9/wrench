"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Expert Auto Repair Services",
      description:
        "Professional mechanics dedicated to keeping your vehicle running at its best.",
      image: "/img/beamer.jpg",
      alt: "Mechanic working on car engine",
    },
    {
      id: 2,
      title: "Quality Parts & Service",
      description:
        "We use only the highest quality parts for all repairs and maintenance.",
      image: "/img/golfr.jpg",
      alt: "Car parts and tools",
    },
    {
      id: 3,
      title: "Fast & Reliable Service",
      description: "Quick turnaround times without compromising on quality.",
      image: "/img/ramp.jpg",
      alt: "Car in repair shop",
    },
    {
      id: 4,
      title: "Customer Satisfaction Guaranteed",
      description:
        "Our priority is your satisfaction and the safety of your vehicle.",
      image: "/img/beamer.jpg",
      alt: "Customer receiving car keys",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 10000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map(
          (slide, index) =>
            index === currentSlide && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div className="absolute inset-0 bg-black/50 z-10" />
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>

                {/* Content */}
                <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
                  <div className="max-w-3xl">
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="text-[#2596be] font-medium mb-2"
                    >
                      WELCOME TO Wrench Customs AUTO REPAIR
                    </motion.h2>

                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                    >
                      {slide.title}
                    </motion.h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1 }}
                      className="text-gray-300 text-lg mb-8 max-w-xl"
                    >
                      {slide.description}
                    </motion.p>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#2596be] text-white px-8 py-3 rounded flex items-center gap-2 hover:bg-[#1a7a9d] transition-colors"
                    >
                      Our Services
                      <ChevronRight size={18} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )
        )}
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-[#2596be]" : "bg-white/50"
            } transition-all duration-300`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
