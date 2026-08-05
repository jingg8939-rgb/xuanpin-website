import type { Metadata } from "next";
import Image from "next/image";
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
          <div id="biodegradable" className="mb-16 scroll-mt-24">
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
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {products
                .filter((p) => p.category === "biodegradable")
                .map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
            </div>
          </div>

          {/* Performance Enhancement */}
          <div id="performance" className="scroll-mt-24">
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
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
    <div className="group overflow-hidden rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Product Image */}
      <div
        className={`relative flex h-52 items-center justify-center overflow-hidden ${
          isGreen
            ? "bg-gradient-to-br from-green-50 to-green-100/50"
            : "bg-gradient-to-br from-gray-50 to-gray-100/50"
        }`}
      >
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="flex flex-col items-center gap-2">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-sm`}
            >
              {isGreen ? (
                <Leaf className="h-8 w-8 text-green-500" />
              ) : (
                <Zap className="h-8 w-8 text-[#C8102E]/60" />
              )}
            </div>
            <span className="text-xs text-gray-400">Product Photo</span>
          </div>
        )}
      </div>

      {/* Product Info */}
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
        <h3 className="mt-3 text-lg font-semibold text-[#333333]">
          {product.name}
        </h3>
        <p className="mt-0.5 text-sm text-[#999999]">{product.nameCn}</p>
        <p className="mt-2 text-sm leading-relaxed text-[#666666]">
          {product.shortDescription}
        </p>

        {/* Applications */}
        <div className="mt-4 border-t border-gray-50 pt-3">
          <p className="text-xs font-medium uppercase tracking-wider text-[#999999]">
            Applications
          </p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {product.applications.slice(0, 3).map((app) => (
              <span
                key={app}
                className="inline-block rounded bg-gray-50 px-2 py-0.5 text-xs text-[#666666]"
              >
                {app}
              </span>
            ))}
            {product.applications.length > 3 && (
              <span className="inline-block rounded bg-gray-50 px-2 py-0.5 text-xs text-[#999999]">
                +{product.applications.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Key Specs */}
        <div className="mt-3 border-t border-gray-50 pt-3">
          <p className="text-xs font-medium uppercase tracking-wider text-[#999999]">
            Key Specs
          </p>
          <div className="mt-1.5 space-y-1">
            {product.specifications.slice(0, 3).map((spec) => (
              <div key={spec.label} className="flex items-center text-xs">
                <span className="w-28 shrink-0 text-[#999999]">
                  {spec.label}:
                </span>
                <span className="font-medium text-[#333333]">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
