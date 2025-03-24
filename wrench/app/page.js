"use client";

import Hero from "./components/layout/Hero";
import ServiceCards from "./components/features/ServiceCards";
import AboutSection from "./components/features/AboutSection";
import TestimonialSection from "./components/features/TestimonialSection";
import ContactSection from "./components/features/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <AboutSection />
      <TestimonialSection />
      <ContactSection />
    </>
  );
}
