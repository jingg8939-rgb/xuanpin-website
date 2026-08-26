"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState } from "react";
import { getAllProductsLocalized } from "@/data/products";
import type { Locale } from "@/data/products";

export default function ProductsPage({
  products,
  locale,
  initialCategory,
}: {
  products: ReturnType<typeof getAllProductsLocalized>;
  locale: string;
  initialCategory?: string;
}) {
  const t = useTranslations("products");
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || "all");

  const categories = [
    { id: "all", label: t("categories.all") },
    { id: "biodegradable", label: t("categories.biodegradable") },
    { id: "mineral", label: t("categories.mineral") },
    { id: "performance", label: t("categories.performance") },
  ];

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? "bg-[#C8102E] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.slug}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-gray-200"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <div className="text-sm text-[#C8102E] font-medium mb-2">
                  {product.categoryLabel}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {product.shortDescription}
                </p>
                <div className="mb-4">
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    {t("applications")}:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.slice(0, 3).map((app, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-block text-[#C8102E] font-medium text-sm hover:underline"
                >
                  {t("learnMore")} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
