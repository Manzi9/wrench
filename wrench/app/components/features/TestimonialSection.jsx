"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < testimonial.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }
          />
        ))}
      </div>
      <p className="text-gray-600 mb-6 italic">"{testimonial.text}"</p>
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold">{testimonial.name}</h4>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      location: "Local Customer",
      rating: 5,
      text: "Wrench Customs Auto Repair provided exceptional service for my car. They were thorough, professional, and completed the work faster than expected. Highly recommend!",
      avatar: "/img/beamer.jpg",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      location: "Regular Customer",
      rating: 5,
      text: "I've been bringing my vehicles to Wrench Customs for years. Their attention to detail and honest pricing keeps me coming back. The team is knowledgeable and always explains everything clearly.",
      avatar: "/img/beamer.jpg",
    },
    {
      id: 3,
      name: "Michael Davis",
      location: "New Customer",
      rating: 4,
      text: "First time using Wrench Customs and I was impressed with their professionalism. They diagnosed the issue quickly and had my car back on the road the same day. Fair pricing too!",
      avatar: "/img/beamer.jpg",
    },
    {
      id: 4,
      name: "Emily Wilson",
      location: "Local Business Owner",
      rating: 5,
      text: "As a business owner with a fleet of vehicles, I rely on Wrench Customs to keep everything running smoothly. Their service is consistently excellent and they always work with our schedule.",
      avatar: "/img/beamer.jpg",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 2 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">TESTIMONIALS</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about our services.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 50}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full md:w-1/2 flex-shrink-0 p-4"
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#2596be] hover:text-white hover:border-[#2596be] transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#2596be] hover:text-white hover:border-[#2596be] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
