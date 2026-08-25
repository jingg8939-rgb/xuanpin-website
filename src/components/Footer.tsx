import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");

  const productLinks = [
    { href: "/products/pbat-ab-masterbatch-system", labelKey: "prodPbat" },
    { href: "/products/pla-compound-masterbatch", labelKey: "prodPla" },
    { href: "/products/caco3-masterbatch", labelKey: "prodCaco3" },
    { href: "/products/barium-sulfate-masterbatch", labelKey: "prodBaso4" },
    { href: "/products/talc-masterbatch", labelKey: "prodTalc" },
    { href: "/products/ppa-masterbatch", labelKey: "prodPpa" },
  ];

  const companyLinks = [
    { href: "/about", label: t("aboutUs") },
    { href: "/about", label: t("qualityLab") },
    { href: "/products", label: t("applications") },
    { href: "/news", label: t("newsCenter") },
    { href: "/contact", label: t("contactUs") },
  ];

  return (
    <footer className="bg-[#111111] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                alt="Xuanpin Logo"
                className="h-10 w-10 rounded-lg object-contain"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white leading-tight">
                  {t("brandName")}
                </span>
                <span className="text-xs text-gray-400">{t("brandSubline")}</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
              {t("brandTagline")}
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {t("productLinks")}
            </h3>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {t(link.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {t("company")}
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white mb-4">
              {t("contact")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" />
                <span className="text-sm text-gray-400 leading-relaxed">
                  {t("address")}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#C8102E]" />
                <span className="text-sm text-gray-400">{t("phone")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#C8102E]" />
                <span className="text-sm text-gray-400">{t("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              {t("copyright")} {t("rights")}
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                {t("privacy")}
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
