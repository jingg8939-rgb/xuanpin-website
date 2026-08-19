import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { products, getLocalizedProduct } from "@/data/products";
import type { Locale } from "@/data/products";
import ProductDetailClient from "./ProductDetailClient";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return {};
  }

  const localized = getLocalizedProduct(product, locale as Locale);

  return {
    title: localized.name,
    description: localized.shortDescription,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const localized = getLocalizedProduct(product, locale as Locale);

  return <ProductDetailClient product={localized} />;
}
