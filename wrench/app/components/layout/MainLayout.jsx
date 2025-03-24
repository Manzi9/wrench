"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Mail } from "lucide-react";

const Breadcrumb = () => {
  const pathname = usePathname();
  const paths = pathname.split("/").filter((path) => path);

  return (
    <div className="flex items-center text-sm py-4 px-6 md:px-12 lg:px-24 bg-gray-50">
      <Link href="/" className="text-gray-500 hover:text-[#2596be]">
        Home
      </Link>
      {paths.map((path, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight size={14} className="mx-2 text-gray-400" />
          <Link
            href={`/${paths.slice(0, index + 1).join("/")}`}
            className={`capitalize ${
              index === paths.length - 1
                ? "text-[#2596be] font-medium"
                : "text-gray-500 hover:text-[#2596be]"
            }`}
          >
            {path.replace(/-/g, " ")}
          </Link>
        </div>
      ))}
    </div>
  );
};

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup logic here
    console.log("Newsletter signup:", email);
    setEmail("");
    alert("Thank you for subscribing to our newsletter!");
  };

  return (
    <section className="bg-[#2596be]/10 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          Subscribe to Our Newsletter
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Stay updated with our latest news, promotions, and automotive tips.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <div className="flex-grow relative">
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#2596be] text-white px-6 py-3 rounded-md hover:bg-[#1a7a9d] transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen pt-20">
      <Breadcrumb />
      <main>{children}</main>
      <NewsletterSignup />
    </div>
  );
};

export default MainLayout;
