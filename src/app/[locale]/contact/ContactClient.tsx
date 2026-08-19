"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { getAllProductsLocalized } from "@/data/products";
import type { Locale } from "@/data/products";

export default function ContactClient({
  locale,
}: {
  locale: string;
}) {
  const t = useTranslations("contact");
  const products = getAllProductsLocalized(locale as Locale);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    // Simulate form submission
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", company: "", product: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {t("info.title")}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  {t("info.address")}
                </h3>
                <p className="text-gray-600">{t("info.addressValue")}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  {t("info.phone")}
                </h3>
                <p className="text-gray-600">+86 XXX XXXX XXXX</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  {t("info.email")}
                </h3>
                <p className="text-gray-600">info@xuanpin.com</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-1">
                  {t("info.hours")}
                </h3>
                <p className="text-gray-600">{t("info.hoursValue")}</p>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                {t("map.title")}
              </h3>
              <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Map Placeholder</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              {t("form.title")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.name")} *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#C8102E] focus:border-[#C8102E]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.email")} *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#C8102E] focus:border-[#C8102E]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.company")}
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#C8102E] focus:border-[#C8102E]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.product")}
                </label>
                <select
                  name="product"
                  value={formData.product}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#C8102E] focus:border-[#C8102E]"
                >
                  <option value="">{t("form.selectProduct")}</option>
                  {products.map((product) => (
                    <option key={product.slug} value={product.slug}>
                      {product.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t("form.message")} *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#C8102E] focus:border-[#C8102E]"
                />
              </div>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full px-8 py-3 bg-[#C8102E] text-white font-medium rounded-md hover:bg-[#A00D24] transition-colors disabled:opacity-50"
              >
                {status === "submitting" ? t("form.submitting") : t("form.submit")}
              </button>
              {status === "success" && (
                <div className="p-4 bg-green-50 text-green-700 rounded-md">
                  {t("form.success")}
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-700 rounded-md">
                  {t("form.error")}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
