"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "Certified Professional Mechanics",
    "State-of-the-Art Equipment",
    "Genuine OEM Parts",
    "Comprehensive Warranty",
    "Transparent Pricing",
    "Customer Satisfaction Guarantee",
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/img/golfr.jpg"
            alt="Auto mechanic working on car"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-[#2596be] text-white py-4 px-6 rounded-tr-lg">
            <p className="text-lg font-bold">15+ Years Experience</p>
          </div>
        </div>

        <div>
          <h2 className="text-[#2596be] font-medium mb-2">ABOUT US</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            We Provide Quality Auto Repair Services
          </h3>
          <p className="text-gray-600 mb-8">
            Wrench Customs Auto Repair has been serving the community with
            reliable and professional auto repair services for over 15 years.
            Our team of certified mechanics is dedicated to providing
            exceptional service and ensuring your vehicle is running at its
            best.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="text-[#2596be]" size={20} />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          <button className="bg-[#2596be] text-white px-8 py-3 rounded hover:bg-[#1a7a9d] transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
