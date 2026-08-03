import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Leaf, Zap } from "lucide-react";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore our full range of masterbatch products including biodegradable solutions and performance enhancement masterbatch.",
};

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f5f5f5] pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#333333] sm:text-5xl">
              Our Products
            </h1>
            <p className="mt-4 text-lg text-[#666666]">
              Comprehensive masterbatch solutions for every application. From
              biodegradable to performance-enhancing, find the right product for
              your needs.
            </p>
          </div>
        </div>
      </section>

      {/* All Products */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Biodegradable Solutions */}
          <div className="mb-16">
            <div className="mb-8 flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <Leaf className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#333333]">
                  Biodegradable Solutions
                </h2>
                <p className="text-sm text-[#666666]">
                  Eco-friendly, compostable masterbatch for sustainable
                  applications
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.category === "biodegradable")
                .map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
            </div>
          </div>

          {/* Performance Enhancement */}
          <div>
            <div className="mb-8 flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FDE8EB]">
                <Zap className="h-5 w-5 text-[#C8102E]" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-[#333333]">
                  Performance Enhancement
                </h2>
                <p className="text-sm text-[#666666]">
                  Advanced masterbatch for superior processing and end-product
                  quality
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.category === "performance")
                .map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({
  product,
}: {
  product: (typeof products)[number];
}) {
  const isGreen = product.category === "biodegradable";
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group overflow-hidden rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
    >
      <div
        className={`flex h-48 items-center justify-center ${
          isGreen
            ? "bg-gradient-to-br from-green-50 to-green-100/50"
            : "bg-gradient-to-br from-gray-50 to-gray-100/50"
        }`}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-sm">
          {isGreen ? (
            <Leaf className="h-8 w-8 text-green-500" />
          ) : (
            <Zap className="h-8 w-8 text-[#C8102E]/60" />
          )}
        </div>
      </div>
      <div className="p-6">
        <span
          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
            isGreen
              ? "bg-green-100 text-green-700"
              : "bg-[#FDE8EB] text-[#C8102E]"
          }`}
        >
          {product.categoryLabel}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-[#333333] group-hover:text-[#C8102E]">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#666666]">
          {product.shortDescription}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#C8102E]">
          Learn More
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
