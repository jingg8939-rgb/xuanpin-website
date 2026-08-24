import { getTranslations } from "next-intl/server";
import Link from "next/link";

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

  const whyItems = [
    "whyChooseUs.items.0.title",
    "whyChooseUs.items.1.title",
    "whyChooseUs.items.2.title",
    "whyChooseUs.items.3.title",
    "whyChooseUs.items.4.title",
    "whyChooseUs.items.5.title",
  ];

  const factoryImages = [
    "/factory1.jpg",
    "/factory2.jpg",
    "/factory3.jpg",
    "/factory4.jpg",
  ];

  const storyImages = [
    "/story_production.png",
    "/story_lab.jpg",
    "/story_warehouse.png",
  ];

  return (
    <div>
      {/* Hero Section with Video Background */}
      <section className="relative bg-slate-900 text-white overflow-hidden min-h-[80vh] flex items-center">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/hero-video-factory.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,16,46,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(200,16,46,0.2),transparent_50%)]" />
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-4xl">
            <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-gray-200 mb-6">
              {t("hero.badge")}
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight"
              dangerouslySetInnerHTML={{ __html: t("hero.title") }}
            />
            <p className="text-xl text-gray-300 mb-10 max-w-3xl">
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg text-white bg-[#C8102E] hover:bg-[#A00D24] transition-colors"
              >
                {t("hero.exploreProducts")}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/70 text-base font-semibold rounded-lg text-white hover:bg-white hover:text-slate-900 transition-colors"
              >
                {t("hero.requestSamples")}
              </Link>
            </div>
            {/* Hero Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 pt-10 border-t border-white/20">
              {[
                { value: t("hero.stats.cert1"), label: "" },
                { value: t("hero.stats.cert2"), label: "" },
                { value: t("hero.stats.capacity"), label: t("hero.stats.capacityLabel") },
                { value: t("hero.stats.countries"), label: t("hero.stats.countriesLabel") },
                { value: t("hero.stats.years"), label: t("hero.stats.yearsLabel") },
                { value: t("hero.stats.clients"), label: t("hero.stats.clientsLabel") },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-[#C8102E] mb-1">
                    {stat.value}
                  </div>
                  {stat.label && (
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#C8102E] uppercase tracking-wider mb-3">
              {t("whyChooseUs.badge")}
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t("whyChooseUs.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("whyChooseUs.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-gray-100 hover:border-[#C8102E]/30 hover:shadow-lg transition-all bg-white"
              >
                <div className="w-12 h-12 bg-[#C8102E]/10 rounded-lg flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#C8102E]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={
                        i === 0
                          ? "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          : i === 1
                          ? "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                          : i === 2
                          ? "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          : i === 3
                          ? "M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"
                          : i === 4
                          ? "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          : "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      }
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {t(`whyChooseUs.items.${i}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`whyChooseUs.items.${i}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products / Masterbatch Solutions Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#C8102E] uppercase tracking-wider mb-3">
              {t("products.badge")}
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t("products.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("products.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Biodegradable */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3
                className="text-xl font-bold text-slate-900 mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("products.biodegradable.title"),
                }}
              />
              <ul className="space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <svg className="w-4 h-4 mt-1 text-[#C8102E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{t(`products.biodegradable.items.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Mineral Filled */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3
                className="text-xl font-bold text-slate-900 mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("products.mineral.title"),
                }}
              />
              <ul className="space-y-3">
                {[0, 1, 2].map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <svg className="w-4 h-4 mt-1 text-[#C8102E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{t(`products.mineral.items.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Functional */}
            <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <h3
                className="text-xl font-bold text-slate-900 mb-6"
                dangerouslySetInnerHTML={{
                  __html: t("products.functional.title"),
                }}
              />
              <ul className="space-y-3">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-gray-600"
                  >
                    <svg className="w-4 h-4 mt-1 text-[#C8102E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{t(`products.functional.items.${i}`)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-white bg-[#C8102E] hover:bg-[#A00D24] transition-colors"
            >
              {t("products.viewAll")}
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left: Text */}
            <div>
              <span className="inline-block text-sm font-semibold text-[#C8102E] uppercase tracking-wider mb-3">
                {t("story.badge")}
              </span>
              <h2
                className="text-4xl font-bold text-slate-900 mb-8 leading-tight"
                dangerouslySetInnerHTML={{ __html: t("story.title") }}
              />
              {[0, 1, 2, 3, 4].map((i) => (
                <p key={i} className="text-gray-600 mb-4 leading-relaxed">
                  {t(`story.paragraphs.${i}`)}
                </p>
              ))}
              <ul className="mt-8 space-y-3">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 text-[#C8102E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 font-medium">
                      {t(`story.points.${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center mt-8 text-[#C8102E] font-semibold hover:underline"
              >
                {t("story.learnMore")} →
              </Link>
            </div>
            {/* Right: Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <img
                  src={storyImages[0]}
                  alt="Production facility"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={storyImages[1]}
                  alt="Quality lab"
                  className="w-full h-36 object-cover rounded-lg"
                />
              </div>
              <div>
                <img
                  src={storyImages[2]}
                  alt="Warehouse"
                  className="w-full h-36 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Production Bases Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#C8102E] uppercase tracking-wider mb-3">
              {t("factories.badge")}
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t("factories.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("factories.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={factoryImages[i]}
                  alt={t(`factories.items.${i}.name`)}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6">
                  <span className="text-5xl font-black text-gray-100 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-3">
                    {t(`factories.items.${i}.name`)}
                  </h3>
                  <div className="space-y-1.5 text-sm text-gray-600">
                    <p className="flex items-start gap-2">
                      <svg className="w-4 h-4 mt-0.5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {t(`factories.items.${i}.address`)}
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      {t(`factories.items.${i}.phone`)}
                    </p>
                    <p className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                      </svg>
                      <span>Fax: {t(`factories.items.${i}.fax`)}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/about"
              className="inline-flex items-center text-[#C8102E] font-semibold hover:underline"
            >
              {t("factories.learnMore")} →
            </Link>
          </div>
        </div>
      </section>

      {/* Chinaplas Exhibition Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[#C8102E] uppercase tracking-wider mb-3">
              {t("chinaplas.badge")}
            </span>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              {t("chinaplas.title")}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t("chinaplas.subtitle")}
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <img
              src="/chinaplas-2026-group.jpg"
              alt="Chinaplas Exhibition 2026"
              className="w-full rounded-xl shadow-lg mb-8"
            />
            <p className="text-gray-600 text-center leading-relaxed mb-6">
              {t("chinaplas.desc")}
            </p>
            <div className="flex justify-center gap-3 flex-wrap">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="inline-block bg-gray-100 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium"
                >
                  {t(`chinaplas.tags.${i}`)}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-[#C8102E] to-[#9e0d24] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-red-100 mb-10 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-base font-semibold rounded-lg text-white hover:bg-white hover:text-[#C8102E] transition-colors"
            >
              {t("cta.contactUs")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-[#C8102E] bg-white hover:bg-gray-100 transition-colors"
            >
              {t("cta.requestSamples")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
