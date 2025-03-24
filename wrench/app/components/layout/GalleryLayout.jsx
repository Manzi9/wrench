"use client";

import { useState } from "react";
import { Search, X, ChevronLeft, ChevronRight } from "lucide-react";
import MainLayout from "./MainLayout";

const FilterToolbar = ({
  categories,
  activeCategory,
  onCategoryChange,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Categories - Desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => onCategoryChange(null)}
            className={`px-4 py-2 rounded-md transition-colors ${
              activeCategory === null
                ? "bg-[#2596be] text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-md transition-colors ${
                activeCategory === category.id
                  ? "bg-[#2596be] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Categories - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full px-4 py-2 bg-gray-100 rounded-md flex items-center justify-between"
          >
            <span>
              {activeCategory === null
                ? "All Categories"
                : categories.find((c) => c.id === activeCategory)?.name ||
                  "All Categories"}
            </span>
            <ChevronRight
              size={16}
              className={`transition-transform ${
                isFilterOpen ? "rotate-90" : ""
              }`}
            />
          </button>
          {isFilterOpen && (
            <div className="absolute z-10 mt-2 w-full bg-white rounded-md shadow-lg p-2">
              <button
                onClick={() => {
                  onCategoryChange(null);
                  setIsFilterOpen(false);
                }}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  activeCategory === null ? "bg-[#2596be] text-white" : ""
                }`}
              >
                All Categories
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryChange(category.id);
                    setIsFilterOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 rounded-md ${
                    activeCategory === category.id
                      ? "bg-[#2596be] text-white"
                      : ""
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Search */}
        <form onSubmit={handleSubmit} className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search gallery..."
            className="w-full md:w-64 pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2596be]"
          />
          <button
            type="submit"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2596be]"
          >
            <Search size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

const Lightbox = ({ image, onClose, onPrev, onNext }) => {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
        aria-label="Close lightbox"
      >
        <X size={24} />
      </button>

      <button
        onClick={onPrev}
        className="absolute left-4 text-white hover:text-gray-300"
        aria-label="Previous image"
      >
        <ChevronLeft size={36} />
      </button>

      <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4">
          <h3 className="text-lg font-bold">{image.title}</h3>
          <p>{image.description}</p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="absolute right-4 text-white hover:text-gray-300"
        aria-label="Next image"
      >
        <ChevronRight size={36} />
      </button>
    </div>
  );
};

const GalleryLayout = ({ children }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { id: 1, name: "Engine Repair" },
    { id: 2, name: "Transmission" },
    { id: 3, name: "Brake Service" },
    { id: 4, name: "Electrical" },
    { id: 5, name: "Body Work" },
  ];

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    // Filter images by category logic would go here
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Search images logic would go here
  };

  const openLightbox = (image) => {
    setLightboxImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    document.body.style.overflow = "auto";
  };

  const goToPrevImage = () => {
    // Logic to go to previous image would go here
  };

  const goToNextImage = () => {
    // Logic to go to next image would go here
  };

  return (
    <MainLayout>
      <div className="px-6 md:px-12 lg:px-24 py-12">
        <div className="max-w-7xl mx-auto">
          <FilterToolbar
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            onSearch={handleSearch}
          />

          {children}

          {lightboxImage && (
            <Lightbox
              image={lightboxImage}
              onClose={closeLightbox}
              onPrev={goToPrevImage}
              onNext={goToNextImage}
            />
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default GalleryLayout;
