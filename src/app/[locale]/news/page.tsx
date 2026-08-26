import { getTranslations } from "next-intl/server";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "news" });
  return {
    title: t("title"),
  };
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("news");

  const newsItems = [
    {
      tag: t("news.0.tag"),
      date: "2024-12-15",
      title: t("news.0.title"),
      desc: t("news.0.desc"),
    },
    {
      tag: t("news.1.tag"),
      date: "2024-11-28",
      title: t("news.1.title"),
      desc: t("news.1.desc"),
    },
    {
      tag: t("news.2.tag"),
      date: "2024-10-31",
      title: t("news.2.title"),
      desc: t("news.2.desc"),
    },
    {
      tag: t("news.3.tag"),
      date: "2024-09-20",
      title: t("news.3.title"),
      desc: t("news.3.desc"),
    },
    {
      tag: t("news.4.tag"),
      date: "2024-08-15",
      title: t("news.4.title"),
      desc: t("news.4.desc"),
    },
    {
      tag: t("news.5.tag"),
      date: "2024-07-10",
      title: t("news.5.title"),
      desc: t("news.5.desc"),
    },
  ];

  const exhibitions = [
    { year: "2026", image: "/images/news/chinaplas-2026.png", title: "CHINAPLAS 2026", date: "21st Apr. 2026 – 24th Apr. 2026" },
    { year: "2025", image: "/images/news/chinaplas-2025.jpg", title: "CHINAPLAS 2025", date: "21st May 2025 – 24th May 2025" },
    { year: "2024", image: "/images/news/chinaplas-2024-team.jpg", title: "CHINAPLAS 2024", date: "23rd Apr. 2024 – 26th Apr. 2024" },
    { year: "2024b", image: "/images/news/chinaplas-2024-jxsx.jpg", title: "CHINAPLAS 2024", date: "23rd Apr. 2024 – 26th Apr. 2024" },
    { year: "2023", image: "/images/news/chinaplas-2023.jpg", title: "CHINAPLAS 2023", date: "17th Apr. 2023 – 20th Apr. 2023" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-[#C8102E] uppercase tracking-wider mb-3">
            {t("subtitle")}
          </span>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("description")}
          </p>
        </div>

        {/* Company News */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {t("companyNews.title")}
          </h2>
          <p className="text-gray-500 mb-8">{t("companyNews.subtitle")}</p>
          <div className="space-y-6">
            {newsItems.map((item, idx) => (
              <div
                key={idx}
                className="border-b border-gray-200 pb-6 last:border-0"
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm font-medium text-[#C8102E]">
                    {item.tag}
                  </span>
                  <span className="text-sm text-gray-400">
                    {new Date(item.date).toLocaleDateString(
                      locale === "zh" ? "zh-CN" : "en-US",
                      { year: "numeric", month: "short", day: "numeric" }
                    )}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Chinaplas Exhibition */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            {t("chinaplas.title")}
          </h2>
          <p className="text-gray-500 mb-8">{t("chinaplas.subtitle")}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {exhibitions.map((ex, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
              >
                <div className="aspect-video bg-gray-100 relative">
                  <Image
                    src={ex.image}
                    alt={ex.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {ex.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">{ex.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
