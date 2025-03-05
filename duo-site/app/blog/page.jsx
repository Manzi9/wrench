"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, User, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import BlogLayout from "../components/layout/BlogLayout";

const BlogPostCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative h-60">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            <Clock size={14} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <User size={14} />
            <span>{post.author}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold mb-2 hover:text-[#2596be] transition-colors">
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <div className="flex items-center gap-2">
          <Tag size={14} className="text-[#2596be]" />
          <span className="text-sm text-gray-500">{post.category}</span>
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          currentPage === 1
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        aria-label="Previous page"
      >
        <ChevronLeft size={18} />
      </button>

      {[...Array(totalPages)].map((_, index) => (
        <button
          key={index}
          onClick={() => onPageChange(index + 1)}
          className={`w-10 h-10 rounded-full flex items-center justify-center ${
            currentPage === index + 1
              ? "bg-[#2596be] text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`w-10 h-10 rounded-full flex items-center justify-center ${
          currentPage === totalPages
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        aria-label="Next page"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Car Maintenance Tips for Summer",
      slug: "car-maintenance-tips-summer",
      excerpt:
        "Keep your vehicle running smoothly during the hot summer months with these essential maintenance tips from our expert mechanics.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
      image: "/img/beamer.jpg",
      date: "15 June 2023",
      author: "Mike Johnson",
      category: "Maintenance",
    },
    {
      id: 2,
      title: "How to Extend Your Car Battery Life",
      slug: "extend-car-battery-life",
      excerpt:
        "Learn how to maximise your car battery's lifespan with proper maintenance and care. Our guide covers everything from cleaning terminals to driving habits.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
      image: "/img/golfr.jpg",
      date: "22 May 2023",
      author: "Sarah Thompson",
      category: "Electrical",
    },
    {
      id: 3,
      title: "Signs Your Brakes Need Replacement",
      slug: "signs-brakes-need-replacement",
      excerpt:
        "Don't wait until it's too late. Learn the warning signs that indicate your vehicle's brakes need attention or replacement.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
      image: "/img/ramp.jpg",
      date: "10 April 2023",
      author: "Dave Williams",
      category: "Brake Service",
    },
    {
      id: 4,
      title: "Understanding Your Check Engine Light",
      slug: "understanding-check-engine-light",
      excerpt:
        "The check engine light can indicate various issues. Our guide helps you understand what it might mean and when to seek professional help.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
      image: "/img/beamer.jpg",
      date: "5 March 2023",
      author: "Robert Chen",
      category: "Diagnostics",
    },
    {
      id: 5,
      title: "The Importance of Regular Oil Changes",
      slug: "importance-regular-oil-changes",
      excerpt:
        "Regular oil changes are crucial for your engine's health. Learn why they matter and how often you should schedule this essential maintenance.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
      image: "/img/golfr.jpg",
      date: "18 February 2023",
      author: "Mike Johnson",
      category: "Maintenance",
    },
    {
      id: 6,
      title: "Winter Driving: Preparing Your Vehicle",
      slug: "winter-driving-preparing-vehicle",
      excerpt:
        "Get your car ready for winter conditions with our comprehensive guide to winterising your vehicle for safety and reliability.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eu aliquam nisl nisl eu nisl.",
      image: "/img/ramp.jpg",
      date: "12 January 2023",
      author: "Sarah Thompson",
      category: "Seasonal",
    },
  ];

  return (
    <BlogLayout>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Blog</h1>
        <p className="text-gray-600">
          Stay updated with the latest automotive news, maintenance tips, and
          expert advice from our team.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.id} post={post} />
        ))}
      </div>

      <Pagination
        currentPage={1}
        totalPages={3}
        onPageChange={(page) => console.log(`Navigate to page ${page}`)}
      />
    </BlogLayout>
  );
}
