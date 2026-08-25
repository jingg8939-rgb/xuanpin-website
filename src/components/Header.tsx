"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("nav");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProductsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/products", label: t("products"), hasDropdown: true },
    { href: "/products", label: t("applications") },
    { href: "/about", label: t("quality") },
    { href: "/about", label: t("about") },
    { href: "/news", label: t("news") },
    { href: "/contact", label: t("contact") },
  ];

  const currentLocale = pathname.split("/")[1] || "en";

  const switchLocale = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    window.location.href = newPath;
  };

  const isTransparent = !isScrolled;
  const textColor = isTransparent ? "text-white" : "text-[#333333]";
  const hoverColor = isTransparent ? "hover:text-white/80" : "hover:text-[#C8102E]";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-sm border-b border-gray-100"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Xuanpin Logo"
              className="h-10 w-10 rounded-lg object-contain"
            />
            <div className="flex flex-col">
              <span className={cn("text-lg font-bold leading-tight transition-colors", textColor)}>
                {t("brandName")}
              </span>
              <span className={cn("text-xs tracking-wide transition-colors", isTransparent ? "text-gray-300" : "text-gray-500")}>
                {t("brandSubline")}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative">
                {link.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                        pathname === link.href || pathname.startsWith(link.href + "/")
                          ? cn(textColor, "opacity-100")
                          : cn(textColor, hoverColor)
                      )}
                    >
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </Link>
                    {isProductsOpen && (
                      <div className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-white shadow-xl border border-gray-100 py-2 z-50">
                        <Link
                          href="/products"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C8102E]"
                        >
                          {t("allProducts")}
                        </Link>
                        <Link
                          href="/products/pbat-ab-masterbatch-system"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C8102E]"
                        >
                          {t("pbatMasterbatch")}
                        </Link>
                        <Link
                          href="/products/pla-compound-masterbatch"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C8102E]"
                        >
                          {t("plaMasterbatch")}
                        </Link>
                        <Link
                          href="/products/caco3-masterbatch"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C8102E]"
                        >
                          {t("caco3Masterbatch")}
                        </Link>
                        <Link
                          href="/products/ppa-masterbatch"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#C8102E]"
                        >
                          {t("whiteMasterbatch")}
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-md px-4 py-2 text-sm font-medium transition-colors",
                      pathname === link.href || pathname.startsWith(link.href + "/")
                        ? cn(textColor, "opacity-100")
                        : cn(textColor, hoverColor)
                    )}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Language Switcher */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className={cn("flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors", textColor, hoverColor)}
              >
                <Globe className="h-4 w-4" />
                <span>{currentLocale === "en" ? "EN" : "中文"}</span>
              </button>
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-lg bg-white shadow-xl border border-gray-100 py-1 z-50">
                  <button
                    onClick={() => {
                      switchLocale("en");
                      setIsLangMenuOpen(false);
                    }}
                    className={cn(
                      "block w-full px-4 py-2 text-left text-sm hover:bg-gray-50",
                      currentLocale === "en" ? "text-[#C8102E] font-medium" : "text-[#333333]"
                    )}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      switchLocale("zh");
                      setIsLangMenuOpen(false);
                    }}
                    className={cn(
                      "block w-full px-4 py-2 text-left text-sm hover:bg-gray-50",
                      currentLocale === "zh" ? "text-[#C8102E] font-medium" : "text-[#333333]"
                    )}
                  >
                    中文
                  </button>
                </div>
              )}
            </div>

            <Link
              href="/contact"
              className="ml-4 rounded-lg bg-[#C8102E] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#A00D24]"
            >
              {t("getQuote")}
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={cn("inline-flex items-center justify-center rounded-md p-2 lg:hidden transition-colors", textColor)}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white lg:hidden">
          <nav className="mx-auto max-w-7xl space-y-1 px-4 py-4 sm:px-6">
            {navLinks.map((link, idx) => (
              <Link
                key={idx}
                href={link.href}
                className={cn(
                  "block rounded-md px-3 py-2 text-base font-medium transition-colors text-[#333333] hover:text-[#C8102E] hover:bg-gray-50"
                )}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Language Switcher */}
            <div className="pt-4 border-t border-gray-200 mt-4">
              <div className="text-sm font-medium text-gray-700 mb-2">{t("language")}</div>
              <div className="flex gap-2">
                <button
                  onClick={() => switchLocale("en")}
                  className={cn(
                    "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    currentLocale === "en"
                      ? "bg-[#C8102E] text-white"
                      : "bg-gray-100 text-[#333333] hover:bg-gray-200"
                  )}
                >
                  English
                </button>
                <button
                  onClick={() => switchLocale("zh")}
                  className={cn(
                    "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-colors",
                    currentLocale === "zh"
                      ? "bg-[#C8102E] text-white"
                      : "bg-gray-100 text-[#333333] hover:bg-gray-200"
                  )}
                >
                  中文
                </button>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-4 block rounded-md bg-[#C8102E] px-5 py-2.5 text-center text-base font-medium text-white transition-colors hover:bg-[#A00D24]"
            >
              {t("getQuote")}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
