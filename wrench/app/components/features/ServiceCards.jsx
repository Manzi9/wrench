"use client";

import { Car, Settings, Battery, Gauge, Wrench, Droplet } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow group">
      <div className="w-14 h-14 bg-[#2596be]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#2596be] transition-colors">
        <Icon
          className="text-[#2596be] group-hover:text-white transition-colors"
          size={24}
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      icon: Car,
      title: "Engine Repair",
      description:
        "Complete diagnostics and repair for all engine types, ensuring optimal performance.",
    },
    {
      icon: Settings,
      title: "Transmission Service",
      description:
        "Expert transmission repair and maintenance to keep your vehicle shifting smoothly.",
    },
    {
      icon: Battery,
      title: "Electrical Systems",
      description:
        "Comprehensive electrical system diagnostics and repair for all vehicle makes and models.",
    },
    {
      icon: Gauge,
      title: "Brake Service",
      description:
        "Professional brake inspection, repair, and replacement for your safety on the road.",
    },
    {
      icon: Wrench,
      title: "General Maintenance",
      description:
        "Regular maintenance services to keep your vehicle running efficiently for years to come.",
    },
    {
      icon: Droplet,
      title: "Fluid Services",
      description:
        "Complete fluid checks and replacements including oil, coolant, transmission, and brake fluid.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">OUR SERVICES</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Auto Repair Services
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of automotive repair and maintenance
            services to keep your vehicle running at its best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
