import type { Metadata } from "next";
import {
  Target,
  Eye,
  Factory,
  ShieldCheck,
  Award,
  Users,
  Globe,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Jiangxi Xuanpin New Materials Co., Ltd. — our mission, manufacturing capabilities, and commitment to quality.",
};

const milestones = [
  {
    year: "2015",
    title: "Company Founded",
    description:
      "Established in Xingguo County, Jiangxi Province with a vision to become a leading masterbatch manufacturer.",
  },
  {
    year: "2017",
    title: "R&D Center Launched",
    description:
      "Invested in a dedicated R&D center with advanced testing equipment for formulation development.",
  },
  {
    year: "2019",
    title: "ISO 9001 Certified",
    description:
      "Achieved ISO 9001 quality management certification, ensuring consistent product quality.",
  },
  {
    year: "2020",
    title: "Biodegradable Line Introduced",
    description:
      "Launched PBAT and PLA compound masterbatch product lines to meet growing demand for sustainable solutions.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description:
      "Expanded exports to 30+ countries across Southeast Asia, Europe, and the Americas.",
  },
  {
    year: "2024",
    title: "Capacity Upgrade",
    description:
      "Completed production line upgrade, increasing annual capacity to 50,000+ tons.",
  },
];

const capabilities = [
  {
    icon: Factory,
    title: "Modern Production Facility",
    description:
      "30,000 sqm production facility with 8 fully automated production lines, annual capacity exceeding 50,000 tons.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control",
    description:
      "Strict QC process with incoming raw material inspection, in-process monitoring, and final product testing per international standards.",
  },
  {
    icon: Award,
    title: "Certifications",
    description:
      "ISO 9001, EN 13432, ASTM D6400, REACH, and RoHS compliant products. Regular third-party audits ensure compliance.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Team of 150+ professionals including 20+ R&D engineers with decades of experience in polymer science and masterbatch technology.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-[#f5f5f5] pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#333333] sm:text-5xl">
              About Xuanpin
            </h1>
            <p className="mt-4 text-lg text-[#666666]">
              A trusted partner in masterbatch innovation, committed to
              delivering excellence from Jiangxi to the world.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-[#333333]">
                Company Introduction
              </h2>
              <div className="mt-6 space-y-4 text-[#666666]">
                <p className="leading-relaxed">
                  Jiangxi Xuanpin New Materials Co., Ltd. is a professional
                  manufacturer specializing in the research, development,
                  production, and sales of various masterbatch products. Located
                  in Xingguo County Industrial Park, Ganzhou City, Jiangxi
                  Province, we benefit from excellent transportation access and a
                  skilled workforce.
                </p>
                <p className="leading-relaxed">
                  Since our establishment, we have been committed to providing
                  high-quality masterbatch solutions for the plastics industry
                  worldwide. Our product range covers biodegradable masterbatch
                  (PBAT &amp; PLA), functional masterbatch (PPA, defoamer), and
                  filling masterbatch (barium sulfate, talc, calcium carbonate).
                </p>
                <p className="leading-relaxed">
                  With a strong focus on R&amp;D and customer-centric
                  customization, we serve clients across Southeast Asia, Europe,
                  the Americas, and beyond, building lasting partnerships based
                  on quality, reliability, and innovation.
                </p>
              </div>
            </div>
            {/* Factory placeholder */}
            <div className="overflow-hidden rounded-lg bg-gradient-to-br from-gray-100 to-gray-200/50">
              <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3">
                <Factory className="h-16 w-16 text-gray-300" />
                <span className="text-sm text-gray-400">
                  Factory Aerial View
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-[#f5f5f5]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-gray-100 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FDE8EB] text-[#C8102E]">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#333333]">
                Our Mission
              </h3>
              <p className="mt-4 leading-relaxed text-[#666666]">
                To provide innovative, sustainable, and high-performance
                masterbatch solutions that empower our customers to create better
                plastic products. We are dedicated to advancing material science
                while minimizing environmental impact through biodegradable
                alternatives and efficient manufacturing processes.
              </p>
            </div>
            <div className="rounded-lg border border-gray-100 bg-white p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FDE8EB] text-[#C8102E]">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-2xl font-semibold text-[#333333]">
                Our Vision
              </h3>
              <p className="mt-4 leading-relaxed text-[#666666]">
                To become the world&apos;s most trusted masterbatch solutions
                provider, recognized for our commitment to quality, innovation,
                and sustainability. We envision a future where advanced material
                solutions contribute to a circular economy and a cleaner planet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capability */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#333333]">
              Manufacturing & Quality
            </h2>
            <p className="mt-4 text-lg text-[#666666]">
              State-of-the-art facilities and rigorous quality standards
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap) => (
              <div
                key={cap.title}
                className="group rounded-lg border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#FDE8EB] text-[#C8102E] transition-colors group-hover:bg-[#C8102E] group-hover:text-white">
                  <cap.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#333333]">
                  {cap.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#666666]">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section className="section-padding bg-[#C8102E]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "50,000+", label: "Tons Annual Capacity" },
              { value: "30+", label: "Export Countries" },
              { value: "150+", label: "Team Members" },
              { value: "8+", label: "Production Lines" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#333333]">
              Our Journey
            </h2>
            <p className="mt-4 text-lg text-[#666666]">
              Key milestones in our growth story
            </p>
          </div>
          <div className="mt-16">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-200 md:left-1/2 md:-translate-x-px" />

              <div className="space-y-12">
                {milestones.map((milestone, idx) => (
                  <div
                    key={milestone.year}
                    className={`relative flex flex-col gap-4 md:flex-row md:gap-8 ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className="flex-1 pl-12 md:pl-0">
                      <div
                        className={`rounded-lg border border-gray-100 bg-white p-6 shadow-sm ${
                          idx % 2 === 0 ? "md:text-right" : "md:text-left"
                        }`}
                      >
                        <span className="text-sm font-semibold text-[#C8102E]">
                          {milestone.year}
                        </span>
                        <h3 className="mt-1 text-lg font-semibold text-[#333333]">
                          {milestone.title}
                        </h3>
                        <p className="mt-2 text-sm text-[#666666]">
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Dot */}
                    <div className="absolute left-4 top-6 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                      <div className="h-3 w-3 rounded-full bg-[#C8102E]" />
                      <div className="absolute h-6 w-6 rounded-full bg-[#C8102E]/20" />
                    </div>

                    {/* Spacer for the other side */}
                    <div className="hidden flex-1 md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
