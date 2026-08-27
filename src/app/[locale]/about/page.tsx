import { getTranslations } from "next-intl/server";
import Link from "next/link";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("about");

  const stats = [
    { value: "90,000", unit: "sqm", label: "Factory Area" },
    { value: "30+", unit: "lines", label: "Production Lines" },
    { value: "100,000+", unit: "tons", label: "Annual Capacity" },
    { value: "100+", unit: "staff", label: "Team Members" },
  ];

  const milestones = [
    { year: "2008", descKey: "m2008" },
    { year: "2015", descKey: "m2015" },
    { year: "2016", descKey: "m2016" },
    { year: "2018", descKey: "m2018" },
    { year: "2020", descKey: "m2020" },
    { year: "2021", descKey: "m2021" },
    { year: "2023", descKey: "m2023" },
    { year: "2024", descKey: "m2024" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("subtitle")}</p>
        </div>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.value} className="text-center">
                <div className="text-4xl font-bold text-[#C8102E] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 mb-1">{stat.unit}</div>
                <div className="text-sm font-medium text-slate-900">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {t("story.title")}
              </h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {t("story.p1")}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t("story.p2")}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t("story.p3")}
                </p>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="inline-block mt-8 px-6 py-3 bg-[#1a2744] text-white rounded-lg hover:bg-[#2a3a5a] transition-colors font-medium"
              >
                {t("story.cta")}
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/about/factory.jpg"
                alt="Manufacturing facility"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </section>

        {/* Milestones */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">
            {t("milestones.title")}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12">
            {t("milestones.subtitle")}
          </p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200" />
            <div className="space-y-8">
              {milestones.map((milestone, idx) => (
                <div
                  key={milestone.year}
                  className={`relative flex items-center ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:w-1/2" />
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-[#C8102E] rounded-full border-4 border-white shadow" />
                  <div className="flex-1 md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                      <div className="text-[#C8102E] font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <p className="text-gray-600">
                        {t(`milestones.${milestone.descKey}`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Export */}
        <section className="mb-8">
          <div className="bg-[#1a2744] rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t("export.title")}
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto mb-8">
              {t("export.desc")}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block px-6 py-3 bg-white text-[#1a2744] rounded-lg hover:bg-gray-100 transition-colors font-medium"
            >
              {t("export.cta")}
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
