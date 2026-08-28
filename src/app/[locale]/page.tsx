import { getTranslations, getLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";

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

  const productLinks: Record<string, string> = {
    "PBAT A/B Masterbatch": "/products/pbat-ab-masterbatch-system",
    "PBAT A/B 母粒": "/products/pbat-ab-masterbatch-system",
    "PLA A/B Masterbatch": "/products/pla-compound-masterbatch",
    "PLA A/B 母粒": "/products/pla-compound-masterbatch",
    "Starch-Based Masterbatch": "/products/pbat-biodegradable-masterbatch",
    "淀粉基母粒": "/products/pbat-biodegradable-masterbatch",
    "Bamboo Powder Masterbatch": "/products/bamboo-powder-masterbatch",
    "竹粉母粒": "/products/bamboo-powder-masterbatch",
    "Nano & Modified Calcium Carbonate Masterbatch": "/products/caco3-masterbatch",
    "纳米及改性碳酸钙母粒": "/products/caco3-masterbatch",
    "Barium Sulfate Masterbatch": "/products/barium-sulfate-masterbatch",
    "硫酸钡母粒": "/products/barium-sulfate-masterbatch",
    "Talc Masterbatch": "/products/talc-masterbatch",
    "滑石粉母粒": "/products/talc-masterbatch",
    "Desiccant Masterbatch": "/products/defoamer-masterbatch",
    "消泡母粒": "/products/defoamer-masterbatch",
    "PPA Masterbatch": "/products/ppa-masterbatch",
    "PPA 母粒": "/products/ppa-masterbatch",
    "Slip & Anti-block Masterbatch": "/products/slip-anti-block-masterbatch",
    "爽滑抗粘连母粒": "/products/slip-anti-block-masterbatch",
    "Anti-static Masterbatch": "/products/anti-static-masterbatch",
    "抗静电母粒": "/products/anti-static-masterbatch",
    "Antioxidant Masterbatch": "/products/antioxidant-masterbatch",
    "抗氧化母粒": "/products/antioxidant-masterbatch",
    "Matting Masterbatch": "/products/matting-masterbatch",
    "消光母粒": "/products/matting-masterbatch",
    "White Masterbatch": "/products/white-masterbatch",
    "白色母粒": "/products/white-masterbatch",
    "Whitening Masterbatch": "/products/whitening-masterbatch",
    "增白母粒": "/products/whitening-masterbatch",
    "Photo-Oxidation Masterbatch": "/products/photo-oxidation-masterbatch",
    "光氧化母粒": "/products/photo-oxidation-masterbatch",
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-[#1a2744] text-white overflow-hidden min-h-[85vh] flex items-center">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center rounded-full border border-white/20 px-4 py-1.5 text-sm font-medium text-white mb-8">
                <span className="w-2 h-2 rounded-full bg-[#C8102E] mr-2"></span>
                {t("hero.badge")}
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Your Trusted Masterbatch Manufacturer
                <br />
                <span className="text-gray-400">for Innovative Plastic Solutions</span>
              </h1>
              <p className="text-lg text-gray-400 mb-10 max-w-lg leading-relaxed">
                {t("hero.subtitle")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold rounded-lg text-white bg-[#C8102E] hover:bg-[#A00D24] transition-colors"
                >
                  {t("hero.exploreProducts")} →
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white/30 text-base font-semibold rounded-lg text-white hover:bg-white/10 transition-colors"
                >
                  {t("hero.requestSamples")}
                </Link>
              </div>
            </div>
            {/* Right: Video */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <video
                  className="w-full h-[420px] lg:h-[480px] object-cover"
                  src="/hero-video-complete.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
              {/* RoHS Badge - top right */}
              <div className="absolute -top-3 -right-3 bg-[#C8102E] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg">
                {t("hero.stats.cert1")}
              </div>
              {/* OK Compost Badge - bottom left */}
              <div className="absolute -bottom-3 -left-3 bg-white/90 text-slate-800 text-xs font-bold px-3 py-1.5 rounded-md shadow-lg backdrop-blur">
                {t("hero.stats.cert2")}
              </div>
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
            {['🏭', '', '🌱', '⚙️', '🔬', '🌍'].map((emoji, i) => (
              <div
                key={i}
                className="p-8 rounded-xl border border-gray-100 hover:border-[#C8102E]/30 hover:shadow-lg transition-all bg-white"
              >
                <div className="text-4xl mb-6">
                  {emoji}
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
                {[0, 1, 2, 3].map((i) => {
                  const itemName = t(`products.biodegradable.items.${i}`);
                  const linkHref = productLinks[itemName] || "/products";
                  return (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-4 h-4 mt-1 text-[#C8102E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Link href={linkHref} className="hover:text-[#C8102E] hover:underline transition-colors cursor-pointer">
                        {itemName}
                      </Link>
                    </li>
                  );
                })}
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
                {[0, 1, 2].map((i) => {
                  const itemName = t(`products.mineral.items.${i}`);
                  const linkHref = productLinks[itemName] || "/products";
                  return (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-4 h-4 mt-1 text-[#C8102E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Link href={linkHref} className="hover:text-[#C8102E] hover:underline transition-colors cursor-pointer">
                        {itemName}
                      </Link>
                    </li>
                  );
                })}
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
                {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => {
                  const itemName = t(`products.functional.items.${i}`);
                  const linkHref = productLinks[itemName] || "/products";
                  return (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <svg className="w-4 h-4 mt-1 text-[#C8102E] shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <Link href={linkHref} className="hover:text-[#C8102E] hover:underline transition-colors cursor-pointer">
                        {itemName}
                      </Link>
                    </li>
                  );
                })}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
            <div className="flex flex-col gap-6">
              <img
                src={storyImages[0]}
                alt="Production facility"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <img
                src={storyImages[1]}
                alt="Quality lab"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
              <img
                src={storyImages[2]}
                alt="Warehouse"
                className="w-full h-64 object-cover rounded-xl shadow-lg"
              />
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
          <div className="max-w-2xl mx-auto">
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
      <section className="py-24 bg-[#1a2744] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">{t("cta.title")}</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {t("cta.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border-2 border-white text-base font-semibold rounded-lg text-white hover:bg-white hover:text-[#1a2744] transition-colors"
            >
              {t("cta.contactUs")}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-[#1a2744] bg-white hover:bg-gray-100 transition-colors"
            >
              {t("cta.requestSamples")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
