import { ChevronDown, Check, X } from "lucide-react";
import MainLayout from "../components/layout/MainLayout";

const PricingHero = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Our Pricing Plans
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Transparent pricing for all your auto repair and maintenance needs.
          Choose the service package that best fits your requirements.
        </p>
      </div>
    </section>
  );
};

const PricingCard = ({ plan, isPopular }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg overflow-hidden ${
        isPopular ? "ring-2 ring-[#2596be]" : ""
      }`}
    >
      {isPopular && (
        <div className="bg-[#2596be] text-white text-center py-2 font-medium">
          Most Popular
        </div>
      )}
      <div className="p-8">
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-6">{plan.description}</p>
        <div className="mb-6">
          <span className="text-4xl font-bold">£{plan.price}</span>
          {plan.period && (
            <span className="text-gray-500 ml-2">{plan.period}</span>
          )}
        </div>
        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="text-[#2596be] mt-1 flex-shrink-0" size={18} />
              <span>{feature}</span>
            </li>
          ))}
          {plan.notIncluded &&
            plan.notIncluded.map((feature, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-400">
                <X className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                <span>{feature}</span>
              </li>
            ))}
        </ul>
        <button
          className={`w-full py-3 rounded-md font-medium ${
            isPopular
              ? "bg-[#2596be] text-white hover:bg-[#1a7a9d]"
              : "bg-gray-100 text-gray-800 hover:bg-gray-200"
          } transition-colors`}
        >
          Choose Plan
        </button>
      </div>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Basic Maintenance",
      description: "Essential maintenance services for your vehicle",
      price: "99",
      period: "per service",
      features: [
        "Oil Change (up to 5 litres)",
        "Tyre Rotation",
        "Multi-Point Inspection",
        "Fluid Top-Up",
        "Battery Test",
      ],
      notIncluded: [
        "Brake Inspection",
        "Filter Replacement",
        "Priority Scheduling",
      ],
    },
    {
      name: "Comprehensive Care",
      description: "Complete maintenance package for optimal performance",
      price: "199",
      period: "per service",
      features: [
        "Oil Change (synthetic)",
        "Tyre Rotation",
        "Multi-Point Inspection",
        "Fluid Top-Up",
        "Battery Test",
        "Brake Inspection",
        "Filter Replacement (air & cabin)",
        "Priority Scheduling",
      ],
    },
    {
      name: "Premium Protection",
      description: "Advanced maintenance with extended warranty coverage",
      price: "349",
      period: "per service",
      features: [
        "Oil Change (premium synthetic)",
        "Tyre Rotation",
        "Multi-Point Inspection",
        "Fluid Top-Up",
        "Battery Test",
        "Brake Inspection",
        "Filter Replacement (all filters)",
        "Priority Scheduling",
        "Alignment Check",
        "90-Day Warranty on Service",
        "Free Courtesy Vehicle",
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">SERVICE PACKAGES</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Service Plan
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a variety of service packages to meet your needs and
            budget. All packages include quality parts and expert service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PricingCard plan={plans[0]} isPopular={false} />
          <PricingCard plan={plans[1]} isPopular={true} />
          <PricingCard plan={plans[2]} isPopular={false} />
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  const services = [
    {
      category: "Engine Services",
      items: [
        { name: "Oil Change (Conventional)", price: "£39.99" },
        { name: "Oil Change (Synthetic)", price: "£69.99" },
        { name: "Engine Tune-Up", price: "£149.99" },
        { name: "Timing Belt Replacement", price: "£499.99+" },
      ],
    },
    {
      category: "Brake Services",
      items: [
        { name: "Brake Inspection", price: "£29.99" },
        { name: "Brake Pad Replacement (Front)", price: "£149.99" },
        { name: "Brake Pad Replacement (Rear)", price: "£159.99" },
        { name: "Rotor Replacement (Per Axle)", price: "£199.99+" },
      ],
    },
    {
      category: "Transmission Services",
      items: [
        { name: "Transmission Fluid Change", price: "£129.99" },
        { name: "Transmission Flush", price: "£189.99" },
        { name: "Transmission Inspection", price: "£89.99" },
        { name: "Clutch Replacement", price: "£799.99+" },
      ],
    },
    {
      category: "Electrical Services",
      items: [
        { name: "Battery Replacement", price: "£99.99+" },
        { name: "Alternator Replacement", price: "£349.99+" },
        { name: "Starter Replacement", price: "£299.99+" },
        { name: "Electrical System Diagnosis", price: "£89.99" },
      ],
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">SERVICE PRICING</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Individual Service Pricing
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Below is a breakdown of our most common services and their pricing.
            Please note that prices may vary depending on vehicle make and
            model.
          </p>
        </div>

        <div className="space-y-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h4 className="text-xl font-bold">{service.category}</h4>
              </div>
              <div className="divide-y divide-gray-200">
                {service.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="px-6 py-4 flex justify-between items-center"
                  >
                    <span>{item.name}</span>
                    <span className="font-bold">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <details className="group">
        <summary className="flex justify-between items-center cursor-pointer px-6 py-4">
          <h4 className="text-lg font-medium">{question}</h4>
          <ChevronDown className="transition-transform group-open:rotate-180" />
        </summary>
        <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
          <p className="text-gray-600">{answer}</p>
        </div>
      </details>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What types of payment do you accept?",
      answer:
        "We accept all major credit and debit cards, cash, and bank transfers. We also offer financing options for larger repairs.",
    },
    {
      question: "Do you offer a warranty on your services?",
      answer:
        "Yes, we provide a 12-month or 12,000-mile warranty (whichever comes first) on all parts and labour for most services. Our Premium Protection plan includes an extended 90-day warranty on all services.",
    },
    {
      question: "How long does a typical service take?",
      answer:
        "Service times vary depending on the type of service needed. Basic maintenance services typically take 1-2 hours, while more complex repairs may take longer. We always provide an estimated completion time when you book your service.",
    },
    {
      question: "Do you offer courtesy vehicles?",
      answer:
        "Yes, courtesy vehicles are available for customers who have booked our Premium Protection service. For other services, courtesy vehicles may be available upon request, subject to availability.",
    },
    {
      question: "How often should I service my vehicle?",
      answer:
        "We recommend following your vehicle manufacturer's service schedule, which is typically every 12 months or 12,000 miles, whichever comes first. However, this can vary based on your driving habits and vehicle condition.",
    },
    {
      question: "Can I book a service online?",
      answer:
        "Yes, you can book a service through our website or by calling our service centre directly. We offer flexible scheduling to accommodate your needs.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">FAQs</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, pricing, and
            policies.
          </p>
        </div>

        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default function PricingPage() {
  return (
    <MainLayout>
      <PricingHero />
      <PricingSection />
      <ComparisonTable />
      <FAQSection />
    </MainLayout>
  );
}
