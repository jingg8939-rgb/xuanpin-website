import { getTranslations } from "next-intl/server";

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
    { key: "capacity", value: "50,000+", unitKey: "capacityUnit" },
    { key: "countries", value: "30+", unitKey: "countriesUnit" },
    { key: "team", value: "150+", unitKey: "teamUnit" },
    { key: "lines", value: "8+", unitKey: "linesUnit" },
  ];

  const milestones = [
    { year: "2015", titleKey: "founded" },
    { year: "2017", titleKey: "expansion" },
    { year: "2019", titleKey: "export" },
    { year: "2021", titleKey: "innovation" },
    { year: "2023", titleKey: "growth" },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </div>

        {/* Company Introduction */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            {t("intro.title")}
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {t("intro.content")}
          </p>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {t("mission.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {t("mission.missionLabel")}
              </h3>
              <p className="text-gray-600">{t("mission.mission")}</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {t("mission.visionLabel")}
              </h3>
              <p className="text-gray-600">{t("mission.vision")}</p>
            </div>
          </div>
        </section>

        {/* Manufacturing & Quality */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            {t("manufacturing.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["facility", "rd", "quality", "global"].map((key) => (
              <div
                key={key}
                className="p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {t(`manufacturing.${key}.title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`manufacturing.${key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.key} className="text-center">
                <div className="text-4xl font-bold text-[#C8102E] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">{t(`stats.${stat.unitKey}`)}</div>
                <div className="text-sm font-medium text-slate-900 mt-1">
                  {t(`stats.${stat.key}`)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            {t("milestones.title")}
          </h2>
          <div className="relative">
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
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-[#C8102E] rounded-full border-4 border-white shadow" />
                  <div className="flex-1 md:w-1/2 pl-12 md:pl-0 md:px-8">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                      <div className="text-[#C8102E] font-bold text-lg mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">
                        {t(`milestones.${milestone.titleKey}.title`)}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t(`milestones.${milestone.titleKey}.desc`)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
