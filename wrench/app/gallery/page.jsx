"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryLayout from "../components/layout/GalleryLayout";

const GalleryImage = ({ image, onClick }) => {
  return (
    <div
      className="relative group cursor-pointer overflow-hidden rounded-lg"
      onClick={() => onClick(image)}
    >
      <div className="aspect-square relative">
        <Image
          src={image.src}
          alt={image.alt}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
        <h3 className="text-white font-bold text-lg">{image.title}</h3>
        <p className="text-gray-300 text-sm">{image.category}</p>
      </div>
    </div>
  );
};

const MasonryGrid = ({ images, onImageClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image) => (
        <GalleryImage key={image.id} image={image} onClick={onImageClick} />
      ))}
    </div>
  );
};

export default function GalleryPage() {
  const galleryImages = [
    {
      id: 1,
      title: "Engine Repair Service",
      description: "Professional engine repair and maintenance service.",
      category: "Engine Repair",
      categoryId: 1,
      src: "/img/beamer.jpg",
      alt: "Engine repair service",
    },
    {
      id: 2,
      title: "Transmission Overhaul",
      description: "Complete transmission service and repair.",
      category: "Transmission",
      categoryId: 2,
      src: "/img/golfr.jpg",
      alt: "Transmission repair",
    },
    {
      id: 3,
      title: "Brake System Inspection",
      description: "Thorough brake system inspection and repair.",
      category: "Brake Service",
      categoryId: 3,
      src: "/img/ramp.jpg",
      alt: "Brake system inspection",
    },
    {
      id: 4,
      title: "Electrical System Diagnostics",
      description: "Advanced electrical system diagnostics and repair.",
      category: "Electrical",
      categoryId: 4,
      src: "/img/beamer.jpg",
      alt: "Electrical system diagnostics",
    },
    {
      id: 5,
      title: "Bodywork and Paint",
      description: "Professional bodywork and paint services.",
      category: "Bodywork",
      categoryId: 5,
      src: "/img/golfr.jpg",
      alt: "Bodywork and paint",
    },
    {
      id: 6,
      title: "Oil Change Service",
      description: "Regular oil change and fluid check service.",
      category: "Engine Repair",
      categoryId: 1,
      src: "/img/ramp.jpg",
      alt: "Oil change service",
    },
    {
      id: 7,
      title: "Wheel Alignment",
      description: "Precision wheel alignment service.",
      category: "Brake Service",
      categoryId: 3,
      src: "/img/beamer.jpg",
      alt: "Wheel alignment",
    },
    {
      id: 8,
      title: "Battery Replacement",
      description: "Battery testing and replacement service.",
      category: "Electrical",
      categoryId: 4,
      src: "/img/golfr.jpg",
      alt: "Battery replacement",
    },
    {
      id: 9,
      title: "Transmission Fluid Change",
      description: "Transmission fluid change and system check.",
      category: "Transmission",
      categoryId: 2,
      src: "/img/ramp.jpg",
      alt: "Transmission fluid change",
    },
    {
      id: 10,
      title: "Dent Repair",
      description: "Professional dent repair service.",
      category: "Bodywork",
      categoryId: 5,
      src: "/img/beamer.jpg",
      alt: "Dent repair",
    },
    {
      id: 11,
      title: "Air Conditioning Service",
      description: "Complete air conditioning system service and repair.",
      category: "Electrical",
      categoryId: 4,
      src: "/img/golfr.jpg",
      alt: "Air conditioning service",
    },
    {
      id: 12,
      title: "Exhaust System Repair",
      description: "Exhaust system inspection and repair.",
      category: "Engine Repair",
      categoryId: 1,
      src: "/img/ramp.jpg",
      alt: "Exhaust system repair",
    },
  ];

  return (
    <GalleryLayout>
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Our Service Gallery
        </h1>
        <p className="text-gray-600">
          Browse through our gallery to see examples of our auto repair services
          and completed projects.
        </p>
      </div>

      <MasonryGrid
        images={galleryImages}
        onImageClick={(image) => console.log("Image clicked:", image)}
      />
    </GalleryLayout>
  );
}
