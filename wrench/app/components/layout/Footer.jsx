"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Engine Repair" },
    { name: "Transmission Service" },
    { name: "Brake Service" },
    { name: "Electrical Systems" },
    { name: "General Maintenance" },
    { name: "Fluid Services" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-[#0A0A0A] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <Card className="bg-[#111] border-none shadow-none">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-6 text-white">
                Wrench Customs
              </h3>
              <p className="text-gray-400 mb-6">
                Professional auto repair services with over 15 years of
                experience. We are dedicated to providing quality service and
                customer satisfaction.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="icon"
                      asChild
                      className="rounded-full bg-[#2596be]/20 border-none hover:bg-[#2596be] hover:text-white"
                    >
                      <a href={social.href} aria-label={social.label}>
                        <social.icon size={18} />
                      </a>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <Card className="bg-[#111] border-none shadow-none">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#2596be] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Services */}
          <Card className="bg-[#111] border-none shadow-none">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-6 text-white">
                Our Services
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <span className="text-gray-400">{service.name}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="bg-[#111] border-none shadow-none">
            <CardContent className="p-0">
              <h3 className="text-xl font-bold mb-6 text-white">
                Contact Info
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin
                    className="text-[#2596be] flex-shrink-0 mt-1"
                    size={18}
                  />
                  <span className="text-gray-400">
                    33 Kingston Rd, New Malden KT3 5AG
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#2596be] flex-shrink-0" size={18} />
                  <span className="text-gray-400">020 8542 0098</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="text-[#2596be] flex-shrink-0" size={18} />
                  <span className="text-gray-400">
                    info@WrenchCustoms.co.uk
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>
            © {currentYear} Wrench Customs Auto Repair. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
