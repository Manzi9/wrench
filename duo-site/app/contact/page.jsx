"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import MainLayout from "../components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

const ContactHero = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-[#0A0A0A] text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Contact Us
        </h1>
        <p className="text-xl max-w-2xl mx-auto text-gray-300">
          Have questions or need to schedule a service? Get in touch with our
          team today.
        </p>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Your Email</Label>
              <Input
                type="email"
                id="email"
                placeholder="john@example.com"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input type="tel" id="phone" placeholder="020 8542 0098" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              placeholder="Service Enquiry"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              rows={6}
              placeholder="How can we help you?"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-[#2596be] hover:bg-[#1a7a9d]"
          >
            Send Message
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

const ContactInfo = ({ icon: Icon, title, content }) => {
  return (
    <div className="flex items-start gap-4 mb-8">
      <div className="w-12 h-12 bg-[#2596be]/10 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="text-[#2596be]" size={20} />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-lg font-bold mb-1">{title}</h4>
        <p className="text-gray-600 whitespace-pre-line break-all overflow-wrap-anywhere hyphens-auto">
          {content}
        </p>
      </div>
    </div>
  );
};

const SocialLink = ({ icon: Icon, href, label, color }) => {
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="rounded-full text-white hover:scale-110 border-none"
      style={{ backgroundColor: color }}
    >
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon size={18} />
      </a>
    </Button>
  );
};

const ContactDetails = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "#1877F2" },
    { icon: Twitter, href: "#", label: "Twitter", color: "#1DA1F2" },
    { icon: Instagram, href: "#", label: "Instagram", color: "#E4405F" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "#0A66C2" },
  ];

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Contact Information
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ContactInfo
          icon={MapPin}
          title="Our Location"
          content="33 Kingston Rd, New Malden KT3 5AG"
        />

        <ContactInfo
          icon={Phone}
          title="Phone Number"
          content="020 8542 0098"
        />

        <ContactInfo
          icon={Mail}
          title="Email Address"
          content="info@WrenchCustoms.co.uk"
        />

        <ContactInfo
          icon={Clock}
          title="Working Hours"
          content="Monday - Friday: 8:00 AM - 6:00 PM
Saturday: 9:00 AM - 3:00 PM
Sunday: Closed"
        />

        <div className="mt-8">
          <h4 className="text-lg font-bold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <SocialLink
                key={index}
                icon={social.icon}
                href={social.href}
                label={social.label}
                color={social.color}
              />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const MapSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">FIND US</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Location</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Visit our auto repair shop at the address below. We're conveniently
            located with easy access from major roads.
          </p>
        </div>

        <div className="h-[400px] bg-gray-200 rounded-lg relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-gray-500">Google Map will be embedded here</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const OfficeLocations = () => {
  const locations = [
    {
      id: 1,
      name: "Main Service Centre",
      address: "33 Kingston Rd, New Malden KT3 5AG",
      phone: "020 8542 0098",
      email: "info@WrenchCustoms.co.uk",
    },
    {
      id: 2,
      name: "Streatham Branch",
      address: "456 Auto Avenue, London SW2 2BB",
      phone: "020 9876 5432",
      email: "streatham@WrenchCustoms.co.uk",
    },
    {
      id: 3,
      name: "North London Location",
      address: "789 Mechanic Drive, North London, N1 3CC",
      phone: "020 4567 8901",
      email: "north@WrenchCustoms.co.uk",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">OUR LOCATIONS</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Visit One of Our Service Centres
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We have multiple locations throughout the city to better serve you.
            Each location offers the same high-quality service and expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <Card key={location.id} className="shadow-md overflow-hidden">
              <CardHeader>
                <CardTitle className="text-xl">{location.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-6">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="text-[#2596be] mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-600 flex-1 min-w-0">
                    {location.address}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    className="text-[#2596be] mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-600 flex-1 min-w-0">
                    {location.phone}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Mail
                    className="text-[#2596be] mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-600 break-all overflow-wrap-anywhere hyphens-auto flex-1 min-w-0">
                    {location.email}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactCTA = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#2596be]">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Experience Quality Auto Repair?
        </h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Contact us today to schedule a service or speak with one of our
          experts about your vehicle needs.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            asChild
            variant="default"
            className="bg-white text-[#2596be] hover:bg-white/90"
          >
            <a href="tel:02031499687">Call Us Now</a>
          </Button>
          <Button
            variant="outline"
            className="border-2 border-white text-white hover:bg-white/10"
          >
            Book Online
          </Button>
        </div>
      </div>
    </section>
  );
};

export default function ContactPage() {
  return (
    <MainLayout>
      <ContactHero />
      <section className="py-20 px-6 md:px-12 lg:px-24 -mt-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactForm />
          <ContactDetails />
        </div>
      </section>
      <MapSection />
      <OfficeLocations />
      <ContactCTA />
    </MainLayout>
  );
}
