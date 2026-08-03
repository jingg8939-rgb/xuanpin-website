import Link from "next/link";
import {
  Factory,
  FlaskConical,
  Globe,
  ShieldCheck,
  ArrowRight,
  Leaf,
  Zap,
} from "lucide-react";
import { products } from "@/data/products";

const advantages = [
  {
    icon: Factory,
    title: "Factory Direct Supply",
    description:
      "As a direct manufacturer, we eliminate middlemen to offer competitive pricing and flexible MOQ for all masterbatch products.",
  },
  {
    icon: FlaskConical,
    title: "R&D Customization",
    description:
      "Our in-house R&D team develops tailored formulations to meet your specific processing requirements and end-product specifications.",
  },
  {
    icon: Globe,
    title: "Global Export",
    description:
      "Serving customers across 30+ countries with reliable logistics, professional documentation, and responsive after-sales support.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "ISO 9001 certified production with rigorous quality control at every stage, ensuring batch-to-batch consistency.",
  },
];

export default function HomePage() {
  const biodegradableProducts = products.filter(
    (p) => p.category === "biodegradable"
  );
  const performanceProducts = products.filter(
    (p) => p.category === "performance"
  );

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-white via-white to-[#FDE8EB]">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#C8102E]/5" />
          <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-[#C8102E]/3" />
          <div className="absolute right-1/4 top-1/3 h-2 w-2 rounded-full bg-[#C8102E]/20" />
          <div className="absolute left-1/3 bottom-1/4 h-3 w-3 rounded-full bg-[#C8102E]/15" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-32 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#FDE8EB] px-4 py-1.5 text-sm font-medium text-[#C8102E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C8102E]" />
              Factory Direct &middot; R&D Customization
            </div>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-[#333333] sm:text-5xl lg:text-6xl">
              Global Masterbatch
              <br />
              <span className="text-[#C8102E]">Solutions Provider</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#666666]">
              Jiangxi Xuanpin New Materials Co., Ltd. specializes in
              manufacturing high-performance masterbatch products for plastics
              industries worldwide. From biodegradable solutions to performance
              enhancement, we deliver innovation in every pellet.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-md bg-[#C8102E] px-6 py-3 text-sm font-medium text-white transition-all hover:bg-[#A00D24] hover:shadow-lg"
              >
                Explore Products
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-[#333333] px-6 py-3 text-sm font-medium text-[#333333] transition-all hover:border-[#C8102E] hover:text-[#C8102E]"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Advantages */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#333333] sm:text-4xl">
              Why Choose Xuanpin
            </h2>
            <p className="mt-4 text-lg text-[#666666]">
              Backed by years of expertise and a commitment to excellence
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="group rounded-lg border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#FDE8EB] text-[#C8102E] transition-colors group-hover:bg-[#C8102E] group-hover:text-white">
                  <adv.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-[#333333]">
                  {adv.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666666]">
                  {adv.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="section-padding bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#333333] sm:text-4xl">
              Our Products
            </h2>
            <p className="mt-4 text-lg text-[#666666]">
              Comprehensive masterbatch solutions for diverse applications
            </p>
          </div>

          {/* Biodegradable Solutions */}
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <Leaf className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#333333]">
                  Biodegradable Solutions
                </h3>
                <p className="text-sm text-[#666666]">
                  Sustainable alternatives for a greener future
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {biodegradableProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group overflow-hidden rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-48 items-center justify-center bg-gradient-to-br from-green-50 to-green-100/50">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/80 shadow-sm">
                      <Leaf className="h-8 w-8 text-green-500" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                      {product.categoryLabel}
                    </span>
                    <h4 className="mt-3 text-lg font-semibold text-[#333333] group-hover:text-[#C8102E]">
                      {product.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#666666]">
                      {product.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#C8102E]">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Performance Enhancement */}
          <div className="mt-16">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FDE8EB]">
                <Zap className="h-5 w-5 text-[#C8102E]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#333333]">
                  Performance Enhancement
                </h3>
                <p className="text-sm text-[#666666]">
                  Advanced solutions for superior product performance
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {performanceProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group overflow-hidden rounded-lg border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex h-40 items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100/50">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/80 shadow-sm">
                      <Zap className="h-7 w-7 text-[#C8102E]/60" />
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-[#FDE8EB] px-2.5 py-0.5 text-xs font-medium text-[#C8102E]">
                      {product.categoryLabel}
                    </span>
                    <h4 className="mt-3 text-lg font-semibold text-[#333333] group-hover:text-[#C8102E]">
                      {product.name}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-[#666666]">
                      {product.shortDescription}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#C8102E]">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-[#C8102E]">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Elevate Your Products?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            Partner with Xuanpin for premium masterbatch solutions tailored to
            your needs. Get in touch for samples, technical data, or custom
            formulations.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-medium text-[#C8102E] transition-all hover:bg-gray-100 hover:shadow-lg"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:border-white hover:bg-white/10"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
