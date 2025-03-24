"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Tag, Clock, User, Share2 } from "lucide-react";
import MainLayout from "./MainLayout";

const CategorySidebar = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-bold mb-4">Categories</h3>
      <ul className="space-y-2">
        <li>
          <button
            onClick={() => onCategoryChange(null)}
            className={`flex items-center w-full text-left ${
              activeCategory === null
                ? "text-[#2596be] font-medium"
                : "text-gray-600"
            }`}
          >
            All Categories
          </button>
        </li>
        {categories.map((category) => (
          <li key={category.id}>
            <button
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center w-full text-left ${
                activeCategory === category.id
                  ? "text-[#2596be] font-medium"
                  : "text-gray-600"
              }`}
            >
              <Tag size={16} className="mr-2" />
              {category.name} ({category.count})
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-bold mb-4">Search</h3>
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
        />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2596be]"
        >
          <Search size={18} />
        </button>
      </form>
    </div>
  );
};

const RelatedPosts = ({ posts }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Related Posts</h3>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-3">
            <div className="relative w-20 h-20 flex-shrink-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover rounded"
              />
            </div>
            <div>
              <h4 className="font-medium line-clamp-2 hover:text-[#2596be]">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h4>
              <div className="flex items-center text-xs text-gray-500 mt-1">
                <Clock size={12} className="mr-1" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const SocialShare = () => {
  const socialPlatforms = [
    { name: "Facebook", color: "#1877F2" },
    { name: "Twitter", color: "#1DA1F2" },
    { name: "LinkedIn", color: "#0A66C2" },
    { name: "Pinterest", color: "#E60023" },
  ];

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-10">
      {socialPlatforms.map((platform) => (
        <button
          key={platform.name}
          aria-label={`Share on ${platform.name}`}
          className="w-10 h-10 rounded-full flex items-center justify-center text-white"
          style={{ backgroundColor: platform.color }}
        >
          <Share2 size={16} />
        </button>
      ))}
    </div>
  );
};

const BlogLayout = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: 1, name: "Auto Repair", count: 12 },
    { id: 2, name: "Maintenance", count: 8 },
    { id: 3, name: "DIY Tips", count: 6 },
    { id: 4, name: "Car News", count: 5 },
    { id: 5, name: "Safety", count: 4 },
  ];

  const relatedPosts = [
    {
      id: 1,
      title: "Top 10 Car Maintenance Tips for Summer",
      slug: "car-maintenance-tips-summer",
      image: "https://picsum.photos/id/133/200/200",
      date: "June 15, 2023",
    },
    {
      id: 2,
      title: "How to Extend Your Car Battery Life",
      slug: "extend-car-battery-life",
      image: "https://picsum.photos/id/111/200/200",
      date: "May 22, 2023",
    },
    {
      id: 3,
      title: "Signs Your Brakes Need Replacement",
      slug: "signs-brakes-need-replacement",
      image: "https://picsum.photos/id/146/200/200",
      date: "April 10, 2023",
    },
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    // Filter posts by category logic would go here
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Search posts logic would go here
  };

  return (
    <MainLayout>
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">{children}</div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="lg:sticky lg:top-24">
              <SearchBar onSearch={handleSearch} />
              <CategorySidebar
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={handleCategoryChange}
              />
              <RelatedPosts posts={relatedPosts} />
            </div>
          </div>
        </div>
      </div>

      <SocialShare />
    </MainLayout>
  );
};

export default BlogLayout;
