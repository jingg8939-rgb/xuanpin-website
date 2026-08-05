"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Placeholder gradient colors for each category
const placeholderColors: Record<string, string[]> = {
  biodegradable: [
    "from-green-100 to-green-200/50",
    "from-green-50 to-green-100/50",
    "from-emerald-100 to-emerald-200/50",
    "from-teal-50 to-teal-100/50",
  ],
  performance: [
    "from-gray-100 to-gray-200/50",
    "from-slate-50 to-slate-100/50",
    "from-stone-100 to-stone-200/50",
    "from-zinc-50 to-zinc-100/50",
  ],
};

export default function ProductDetailClient({
  productSlug,
  productImage,
  productName,
}: {
  productSlug: string;
  productImage: string;
  productName: string;
}) {
  const [currentImage, setCurrentImage] = useState(0);

  // Determine category from slug pattern
  const isBiodegradable =
    productSlug.startsWith("pbat") || productSlug.startsWith("pla");
  const colors = isBiodegradable
    ? placeholderColors.biodegradable
    : placeholderColors.performance;

  const totalImages = 4;
  const hasImage = !!productImage;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + totalImages) % totalImages);
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg bg-white">
        <div
          className={`flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${colors[currentImage]}`}
        >
          {hasImage ? (
            <Image
              src={productImage}
              alt={productName}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/80 shadow-sm">
                <svg
                  className="h-10 w-10 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
              </div>
              <span className="text-sm text-gray-400">Product Photo</span>
            </div>
          )}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-sm transition-all hover:bg-white hover:shadow-md"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5 text-[#333333]" />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-sm transition-all hover:bg-white hover:shadow-md"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5 text-[#333333]" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: totalImages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentImage(idx)}
            className={`aspect-square overflow-hidden rounded-md border-2 transition-all ${
              currentImage === idx
                ? "border-[#C8102E] shadow-sm"
                : "border-gray-100 hover:border-gray-300"
            }`}
          >
            {hasImage ? (
              <Image
                src={productImage}
                alt={`${productName} view ${idx + 1}`}
                fill
                className="object-cover"
                sizes="25vw"
              />
            ) : (
              <div
                className={`flex h-full w-full items-center justify-center bg-gradient-to-br ${colors[idx]}`}
              >
                <svg
                  className="h-6 w-6 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                  />
                </svg>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
