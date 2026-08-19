"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product, LocalizedContent } from "@/data/products";

type ProductWithContent = Product & LocalizedContent;

export default function ProductDetailClient({
  product,
}: {
  product: ProductWithContent;
}) {
  const t = useTranslations("productDetail");
  const [activeImage, setActiveImage] = useState(0);

  const images = [
    product.image || "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ];

  const relatedProducts = [
    { slug: "talc-masterbatch", name: "Talc Masterbatch" },
    { slug: "calcium-carbonate-masterbatch", name: "Calcium Carbonate Masterbatch" },
    { slug: "barium-sulfate-masterbatch", name: "Barium Sulfate Masterbatch" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            href="/products"
            className="text-[#C8102E] hover:underline text-sm"
          >
            ← {t("backToProducts")}
          </Link>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div>
            <div className="aspect-square bg-white rounded-lg mb-4 border border-gray-100 flex items-center justify-center overflow-hidden">
              <Image
                src={images[activeImage]}
                alt={`${product.name} - Image ${activeImage + 1}`}
                fill
                className="object-contain"
                priority={activeImage === 0}
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`aspect-square bg-white rounded border-2 transition-colors overflow-hidden ${
                    activeImage === idx
                      ? "border-[#C8102E]"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="text-sm text-[#C8102E] font-medium mb-2">
              {product.categoryLabel}
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              {product.name}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {product.shortDescription}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-[#C8102E] text-white font-medium rounded-md hover:bg-[#A00D24] transition-colors"
            >
              {t("requestQuote")}
            </Link>
          </div>
        </div>

        {/* Description */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {t("description")}
          </h2>
          <p className="text-gray-600 leading-relaxed">{product.description}</p>
        </section>

        {/* Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {t("applications")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.applications.map((app: string, idx: number) => (
              <div
                key={idx}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-2 h-2 bg-[#C8102E] rounded-full mr-3" />
                <span className="text-gray-700">{app}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {t("features")}
          </h2>
          <div className="space-y-3">
            {product.features.map((feature: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start p-4 bg-gray-50 rounded-lg"
              >
                <div className="text-[#C8102E] mr-3 mt-1">✓</div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Specifications */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {t("specifications")}
          </h2>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    {t("parameter")}
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                    {t("value")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {product.specifications.map((spec, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {spec.label}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {t("relatedProducts")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((related) => (
              <Link
                key={related.slug}
                href={`/products/${related.slug}`}
                className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-slate-900 mb-2">
                  {related.name}
                </h3>
                <span className="text-[#C8102E] text-sm">
                  {t("requestQuote")} →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
