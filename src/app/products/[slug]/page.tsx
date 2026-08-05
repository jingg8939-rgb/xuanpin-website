import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronLeft } from "lucide-react";
import { products, getProductBySlug, getAllSlugs } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-[#f5f5f5] pt-24 pb-4 lg:pt-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm">
            <Link
              href="/"
              className="text-[#666666] transition-colors hover:text-[#C8102E]"
            >
              Home
            </Link>
            <span className="text-[#666666]">/</span>
            <Link
              href="/products"
              className="text-[#666666] transition-colors hover:text-[#C8102E]"
            >
              Products
            </Link>
            <span className="text-[#666666]">/</span>
            <span className="text-[#333333]">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Hero */}
      <section className="bg-[#f5f5f5] pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image Gallery */}
            <ProductDetailClient
              productSlug={product.slug}
              productImage={product.image}
              productName={product.name}
            />

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <span
                className={`inline-block w-fit rounded-full px-3 py-1 text-xs font-medium ${
                  product.category === "biodegradable"
                    ? "bg-green-100 text-green-700"
                    : "bg-[#FDE8EB] text-[#C8102E]"
                }`}
              >
                {product.categoryLabel}
              </span>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-[#333333] sm:text-4xl">
                {product.name}
              </h1>
              <p className="mt-1 text-lg text-[#999999]">{product.nameCn}</p>
              <p className="mt-4 text-lg leading-relaxed text-[#666666]">
                {product.description}
              </p>

              {/* Key Features Preview */}
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#333333]">
                  Key Features
                </h3>
                <ul className="mt-3 space-y-2">
                  {product.features.slice(0, 4).map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-[#666666]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8102E]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-[#C8102E] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#A00D24] hover:shadow-lg"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 rounded-md border border-gray-200 px-6 py-3 text-sm font-medium text-[#333333] transition-all hover:border-[#C8102E] hover:text-[#C8102E]"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#333333] sm:text-3xl">
            Applications
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {product.applications.map((app) => (
              <div
                key={app}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition-shadow hover:shadow-sm"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-[#FDE8EB] text-[#C8102E]">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span className="text-sm text-[#333333]">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features & Benefits */}
      <section className="section-padding bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#333333] sm:text-3xl">
            Key Features & Benefits
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C8102E] text-white">
                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={3}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <span className="text-sm leading-relaxed text-[#333333]">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold text-[#333333] sm:text-3xl">
            Specifications
          </h2>
          <div className="mt-8 overflow-hidden rounded-lg border border-gray-200">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-[#f5f5f5]">
                  <th className="px-6 py-3 font-semibold text-[#333333]">
                    Parameter
                  </th>
                  <th className="px-6 py-3 font-semibold text-[#333333]">
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {product.specifications.map((spec, idx) => (
                  <tr key={spec.label} className={idx % 2 === 0 ? "bg-white" : "bg-[#fafafa]"}>
                    <td className="px-6 py-3 font-medium text-[#333333]">
                      {spec.label}
                    </td>
                    <td className="px-6 py-3 text-[#666666]">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding bg-[#f5f5f5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-semibold text-[#333333]">
              Related Products
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/products/${rp.slug}`}
                  className="group overflow-hidden rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-36 items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100/50">
                    <span className="text-3xl font-bold text-gray-200">
                      {rp.name.charAt(0)}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-[#333333] group-hover:text-[#C8102E]">
                      {rp.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#666666] line-clamp-2">
                      {rp.shortDescription}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="section-padding bg-[#C8102E]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white">
            Interested in {product.name}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Contact us today for samples, pricing, or custom formulation
            requirements.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-[#C8102E] transition-all hover:bg-gray-100 hover:shadow-lg"
          >
            Request a Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
