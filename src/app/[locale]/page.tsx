import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { getAllProductsLocalized } from "@/data/products";
import type { Locale } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });

  return {
    title: t("hero.title"),
    description: t("hero.subtitle"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("home");
  const products = getAllProductsLocalized(locale as Locale);

  const biodegradableProducts = products.filter(
    (p) => p.category === "biodegradable"
  );
  const performanceProducts = products.filter(
    (p) => p.category === "performance"
  );

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,16,46,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(200,16,46,0.1),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              {t("hero.title")}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#C8102E] hover:bg-[#A00D24] transition-colors"
              >
                {t("hero.exploreProducts")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-slate-900 transition-colors"
              >
                {t("hero.contactUs")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-12">
            {t("advantages.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { key: "factory", icon: "🏭" },
              { key: "rnd", icon: "🔬" },
              { key: "export", icon: "" },
              { key: "quality", icon: "✅" },
            ].map(({ key, icon }) => (
              <div
                key={key}
                className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {t(`advantages.${key}.title`)}
                </h3>
                <p className="text-gray-600">{t(`advantages.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-slate-900 mb-4">
            {t("products.title")}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t("products.subtitle")}
          </p>

          {/* Biodegradable Products */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              {t("products.biodegradable.title")}
            </h3>
            <p className="text-gray-600 mb-8">
              {t("products.biodegradable.desc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {biodegradableProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Product Image</span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.shortDescription}
                    </p>
                    <span className="text-[#C8102E] font-medium text-sm">
                      {t("products.viewDetails")} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Performance Products */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              {t("products.performance.title")}
            </h3>
            <p className="text-gray-600 mb-8">
              {t("products.performance.desc")}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {performanceProducts.map((product) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
                >
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Product Image</span>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-slate-900 mb-2">
                      {product.name}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {product.shortDescription}
                    </p>
                    <span className="text-[#C8102E] font-medium text-sm">
                      {t("products.viewDetails")} →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#C8102E] hover:bg-[#A00D24] transition-colors"
            >
              {t("products.viewAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#C8102E] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {t("cta.title")}
          </h2>
          <p className="text-xl text-red-100 mb-8">{t("cta.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-[#C8102E] transition-colors"
            >
              {t("cta.contactUs")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-[#C8102E] bg-white hover:bg-gray-100 transition-colors"
            >
              {t("cta.requestQuote")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
