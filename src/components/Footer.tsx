import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const navT = useTranslations("nav");

  const quickLinks = [
    { href: "/", label: navT("home") },
    { href: "/products", label: navT("products") },
    { href: "/about", label: navT("about") },
    { href: "/contact", label: navT("contact") },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#C8102E]">
                <span className="text-lg font-bold text-white">X</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                XUANPIN
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-gray-400">
              {t("about")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("quickLinks")}
            </h3>
            <ul className="mt-4 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
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

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("products")}
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t("biodegradable")}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t("performance")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              {t("contact")}
            </h3>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#C8102E]" />
                <span className="text-sm text-gray-400">
                  Xingguo County Industrial Park, Ganzhou City, Jiangxi Province, China
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[#C8102E]" />
                <span className="text-sm text-gray-400">+86 797-5518888</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#C8102E]" />
                <span className="text-sm text-gray-400">info@xuanpin.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Jiangxi Xuanpin New Materials Co., Ltd. {t("rights")}
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                {t("privacy")}
              </Link>
              <Link href="#" className="text-sm text-gray-400 hover:text-white">
                {t("terms")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
