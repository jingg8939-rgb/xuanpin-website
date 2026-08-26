import { getTranslations } from "next-intl/server";
import { getAllProductsLocalized } from "@/data/products";
import type { Locale } from "@/data/products";
import ProductsClient from "./ProductsClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "products" });

  return {
    title: t("title"),
    description: t("subtitle"),
  };
}

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}) {
  const { locale } = await params;
  const { category } = await searchParams;
  const products = getAllProductsLocalized(locale as Locale);

  return <ProductsClient products={products} locale={locale} initialCategory={category || "all"} />;
}
