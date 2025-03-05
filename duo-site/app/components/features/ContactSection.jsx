"use client";

import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactInfo = ({ icon: Icon, title, content }) => {
  return (
    <div className="flex items-start gap-4 mb-6">
      <div className="w-10 h-10 bg-[#2596be]/10 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="text-[#2596be]" size={20} />
      </div>
      <div>
        <h4 className="font-bold mb-1">{title}</h4>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const ContactSection = () => {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#2596be] font-medium mb-2">CONTACT US</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Get In Touch With Us
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need to schedule a service? Contact us today and
            our team will be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-6">Send Us A Message</h4>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
                  placeholder="Service Enquiry"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-[#2596be] text-white px-8 py-3 rounded hover:bg-[#1a7a9d] transition-colors w-full"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Information</h4>
            <div className="space-y-4">
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
            </div>

            {/* Map */}
            <div className="mt-8 h-[300px] bg-gray-200 rounded-lg relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-gray-500">
                  Google Map will be embedded here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
