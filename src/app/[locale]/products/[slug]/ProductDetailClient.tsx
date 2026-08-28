"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import type { Product, LocalizedContent } from "@/data/products";

type ProductWithContent = Product & LocalizedContent;

export default function ProductDetailClient({
  product,
  locale,
}: {
  product: ProductWithContent;
  locale: string;
}) {
  const t = useTranslations("productDetail");
  const productImage = product.image || "/placeholder.svg";

  const relatedProducts = [
    { slug: "talc-masterbatch", name: t("related.talc") },
    { slug: "caco3-masterbatch", name: t("related.caco3") },
    { slug: "barium-sulfate-masterbatch", name: t("related.baso4") },
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
            <div className="bg-white rounded-lg border border-gray-100 flex items-center justify-center overflow-hidden p-4" style={{maxHeight: '400px'}}>
              <img
                src={productImage}
                alt={`${product.name}`}
                className="max-w-full max-h-[380px] object-contain rounded"
              />
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

            {/* Calcium Carbonate Range Cards */}
            {product.slug === "caco3-masterbatch" && (
              <div className="mt-10">
                <h2 className="text-xl font-bold text-slate-900 mb-1">
                  {t("productTypes.title")}
                </h2>
                <p className="text-gray-600 text-sm mb-5">{t("productTypes.subtitle")}</p>
                <div className="grid grid-cols-3 gap-4">
                  {/* Nano CaCO3 */}
                  <div className="p-4 bg-white border-2 border-[#C8102E] rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center mb-3">
                      <span className="text-white text-lg font-bold">N</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      {t("productTypes.nano.name")}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {t("productTypes.nano.desc")}
                    </p>
                  </div>
                  {/* Surface Modified */}
                  <div className="p-4 bg-white border-2 border-[#C8102E] rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center mb-3">
                      <span className="text-white text-lg font-bold">M</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      {t("productTypes.modified.name")}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {t("productTypes.modified.desc")}
                    </p>
                  </div>
                  {/* High-Filler-Content */}
                  <div className="p-4 bg-white border-2 border-[#C8102E] rounded-lg shadow-sm">
                    <div className="w-10 h-10 bg-[#C8102E] rounded-full flex items-center justify-center mb-3">
                      <span className="text-white text-lg font-bold">H</span>
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      {t("productTypes.highFiller.name")}
                    </h3>
                    <p className="text-gray-600 text-xs">
                      {t("productTypes.highFiller.desc")}
                    </p>
                  </div>
                </div>
              </div>
            )}
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

        {/* Calcium Carbonate Specific Sections */}
        {product.slug === "caco3-masterbatch" && (
          <>
            {/* Product Types removed - now displayed in hero area */}

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                {t("comparisonTable.title")}
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 border-b-2 border-gray-200 bg-gray-50">
                        {t("comparisonTable.headers.feature")}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-500 border-b-2 border-gray-200 bg-gray-50">
                        {t("comparisonTable.headers.conventional")}
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-bold text-[#C8102E] border-b-2 border-[#C8102E] bg-red-50">
                        {t("comparisonTable.headers.nano")}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                        {t("comparisonTable.rows.particle.label")}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-200">
                        {t("comparisonTable.rows.particle.conventional")}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-[#C8102E] border-b border-gray-200 bg-red-50/30">
                        {t("comparisonTable.rows.particle.nano")}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                        {t("comparisonTable.rows.modification.label")}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-200">
                        {t("comparisonTable.rows.modification.conventional")}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-[#C8102E] border-b border-gray-200 bg-red-50/30">
                        {t("comparisonTable.rows.modification.nano")}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                        {t("comparisonTable.rows.dispersion.label")}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-200">
                        {t("comparisonTable.rows.dispersion.conventional")}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-[#C8102E] border-b border-gray-200 bg-red-50/30">
                        {t("comparisonTable.rows.dispersion.nano")}
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 border-b border-gray-200">
                        {t("comparisonTable.rows.loading.label")}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 border-b border-gray-200">
                        {t("comparisonTable.rows.loading.conventional")}
                      </td>
                      <td className="px-6 py-4 text-sm font-bold text-[#C8102E] border-b border-gray-200 bg-red-50/30">
                        {t("comparisonTable.rows.loading.nano")}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Bag Comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {t("bagComparison.title")}
              </h2>
              <p className="text-gray-600 mb-6">
                {t("bagComparison.subtitle")}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Premium Bag */}
                <div className="relative p-8 bg-gradient-to-br from-white to-blue-50 border-2 border-[#C8102E] rounded-lg shadow-lg">
                  <div className="absolute top-4 right-4 bg-[#C8102E] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t("bagComparison.premium.badge")}
                  </div>
                  <div className="mb-6">
                    <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg flex items-center justify-center mb-4 border border-blue-200">
                      <div className="text-center">
                        <div className="text-4xl mb-2">✨</div>
                        <div className="text-blue-600 text-sm font-medium">
                          {t("bagComparison.premium.quality")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4">
                    {t("bagComparison.premium.label")}
                  </h3>
                  <ul className="space-y-2">
                    {t.raw("bagComparison.premium.features").map(
                      (feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#C8102E] mr-2 mt-1">✓</span>
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
                {/* Standard Bag */}
                <div className="relative p-8 bg-gray-100 border-2 border-gray-300 rounded-lg">
                  <div className="absolute top-4 right-4 bg-gray-400 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {t("bagComparison.standard.badge")}
                  </div>
                  <div className="mb-6">
                    <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center mb-4 border border-gray-300">
                      <div className="text-center">
                        <div className="text-4xl mb-2 opacity-50"></div>
                        <div className="text-gray-500 text-sm font-medium">
                          {t("bagComparison.standard.quality")}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-gray-600 mb-4">
                    {t("bagComparison.standard.label")}
                  </h3>
                  <ul className="space-y-2">
                    {t.raw("bagComparison.standard.features").map(
                      (feature: string, idx: number) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gray-400 mr-2 mt-1">•</span>
                          <span className="text-gray-500 text-sm">
                            {feature}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </section>
          </>
        )}

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
                {product.specifications.map((spec, idx) => {
                  const SPEC_KEY_MAP: Record<string, string> = {
                    "Carrier": "carrier",
                    "Addition": "addition",
                    "Melt Flow Index": "meltFlowIndex",
                    "Density": "density",
                    "Processing Temperature": "processingTemp",
                    "Form": "form",
                    "Moisture Content": "moistureContent",
                    "Biodegradation Rate": "biodegradationRate",
                    "Biodegradability": "biodegradability",
                    "Shelf Life": "shelfLife",
                    "Heat Resistance": "heatResistance",
                    "Particle Size": "particleSize",
                    "Whiteness": "whiteness",
                    "Appearance": "appearance",
                    "Moisture Absorption": "moistureAbsorption",
                    "BaSO₄ Content": "baso4Content",
                    "CaCO₃ Content": "caco3Content",
                    "Talc Content": "talcContent",
                  };
                  const key = SPEC_KEY_MAP[spec.label];
                  const localizedLabel = key ? t(`specLabels.${key}` as any) : spec.label;
                  return (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {localizedLabel}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {spec.value}
                      </td>
                    </tr>
                  );
                })}
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
