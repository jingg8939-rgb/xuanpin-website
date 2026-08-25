export interface ProductSpec {
  label: string;
  value: string;
}

export interface LocalizedContent {
  name: string;
  shortDescription: string;
  description: string;
  applications: string[];
  features: string[];
  categoryLabel: string;
}

export interface Product {
  slug: string;
  category: "biodegradable" | "performance";
  image: string;
  specifications: ProductSpec[];
  en: LocalizedContent;
  zh: LocalizedContent;
}

export type Locale = "en" | "zh";

export function getLocalizedProduct(product: Product, locale: Locale): Product & LocalizedContent {
  const content = product[locale];
  return {
    ...product,
    ...content,
  };
}

export function getAllProductsLocalized(locale: Locale): (Product & LocalizedContent)[] {
  return products.map((p) => getLocalizedProduct(p, locale));
}

export const products: Product[] = [
  // ─── Biodegradable Solutions ───────────────────────────────────────
  {
    slug: "pbat-ab-masterbatch-system",
    category: "biodegradable",
    image: "/products/pbat-compound.jpg",
    specifications: [
      { label: "Carrier", value: "PBAT" },
      { label: "Addition", value: "A:B ratio per formulation guide" },
      { label: "Melt Flow Index", value: "2-8 g/10min" },
      { label: "Density", value: "1.20-1.30 g/cm³" },
      { label: "Processing Temperature", value: "140-180°C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Moisture Content", value: "≤0.1%" },
      { label: "Biodegradation Rate", value: "≥90% within 180 days" },
    ],
    en: {
      name: "PBAT A/B Masterbatch System",
      categoryLabel: "Biodegradable Solutions",
      shortDescription: "Two-component PBAT compound masterbatch system for fully biodegradable film and bag production.",
      description: "Our PBAT A/B Masterbatch System is a revolutionary two-component solution designed for manufacturers transitioning to fully biodegradable film and bag production. Component A delivers the PBAT resin matrix, while Component B contains the optimized additive package for processing stability, mechanical performance, and biodegradability. This dual-component approach allows precise control over the final product properties and ensures consistent quality across production runs.",
      applications: ["Shopping bags", "Garbage bags", "Food packaging films", "Agricultural mulch films"],
      features: [
        "Two-component system for precise formulation control",
        "Fully biodegradable per EN 13432 and ASTM D6400",
        "Excellent film blowability with stable bubble",
        "Superior sealing strength and mechanical properties",
        "Compatible with conventional blown film equipment",
        "Flexible A:B ratio for customized performance",
      ],
    },
    zh: {
      name: "PBAT复合母粒系统",
      categoryLabel: "可生物降解系列",
      shortDescription: "双组分PBAT复合母粒系统，用于全生物降解薄膜和袋子生产。",
      description: "我们的PBAT A/B母粒系统是一款革命性的双组分解决方案，专为向全生物降解薄膜和袋子生产转型的制造商设计。A组分提供PBAT树脂基体，B组分包含优化的添加剂包，用于加工稳定性、机械性能和生物降解性。这种双组分方法可以精确控制最终产品性能，并确保生产批次间的质量一致性。",
      applications: ["购物袋", "垃圾袋", "食品包装膜", "农用 mulch 膜"],
      features: [
        "双组分系统，精确配方控制",
        "符合EN 13432和ASTM D6400标准，完全生物降解",
        "优异的吹膜性能，泡管稳定",
        "卓越的密封强度和机械性能",
        "兼容传统吹膜设备",
        "灵活的A:B比例，定制性能",
      ],
    },
  },
  {
    slug: "pbat-biodegradable-masterbatch",
    category: "biodegradable",
    image: "/products/product-detail.jpg",
    specifications: [
      { label: "Carrier", value: "PBAT" },
      { label: "Addition", value: "20-100%" },
      { label: "Melt Flow Index", value: "2-10 g/10min" },
      { label: "Density", value: "1.14-1.26 g/cm³" },
      { label: "Processing Temperature", value: "140-180°C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Biodegradability", value: "≥90% in 180 days" },
      { label: "Shelf Life", value: "12 months in proper storage" },
    ],
    en: {
      name: "PBAT Biodegradable Masterbatch",
      categoryLabel: "Biodegradable Solutions",
      shortDescription: "Fully biodegradable masterbatch based on PBAT resin, compliant with EN 13432 and OK Compost standards.",
      description: "Our PBAT Biodegradable Masterbatch is a single-component, fully biodegradable solution based on premium PBAT resin. It is designed for manufacturers who need a straightforward, drop-in replacement for conventional polyethylene in film and packaging applications. Certified compliant with EN 13432 and OK Compost standards, this masterbatch delivers reliable biodegradability without sacrificing processing ease or end-product quality.",
      applications: ["Compostable bags", "Food service packaging", "Disposable cutlery", "Agricultural films"],
      features: [
        "EN 13432 and OK Compost certified",
        "Single-component ease of use",
        "High biodegradability (≥90% in 180 days)",
        "Excellent clarity and surface finish",
        "Good elongation and tear resistance",
        "Compatible with standard film extrusion lines",
      ],
    },
    zh: {
      name: "PBAT生物降解母粒",
      categoryLabel: "可生物降解系列",
      shortDescription: "基于PBAT树脂的全生物降解母粒，符合EN 13432和OK Compost标准。",
      description: "我们的PBAT生物降解母粒是基于优质PBAT树脂的单组分全生物降解解决方案。它专为需要在薄膜和包装应用中简单直接替代传统聚乙烯的制造商设计。该产品获得EN 13432和OK Compost标准认证，在不牺牲加工便利性或最终产品质量的情况下提供可靠的生物降解性。",
      applications: ["可堆肥袋", "食品服务包装", "一次性餐具", "农用薄膜"],
      features: [
        "EN 13432和OK Compost认证",
        "单组分，使用简便",
        "高生物降解性（180天内≥90%）",
        "优异的透明度和表面光洁度",
        "良好的延伸性和抗撕裂性",
        "兼容标准薄膜挤出生产线",
      ],
    },
  },
  {
    slug: "pla-compound-masterbatch",
    category: "biodegradable",
    image: "/products/pla-compound.jpg",
    specifications: [
      { label: "Carrier", value: "PLA" },
      { label: "Addition", value: "20-100%" },
      { label: "Melt Flow Index", value: "5-30 g/10min" },
      { label: "Density", value: "1.24-1.30 g/cm³" },
      { label: "Processing Temperature", value: "170-210°C" },
      { label: "Heat Resistance", value: "60-120°C (modified)" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Biodegradability", value: "≥90% in 180 days" },
    ],
    en: {
      name: "PLA Compound Masterbatch",
      categoryLabel: "Biodegradable Solutions",
      shortDescription: "PLA-based compound masterbatch combining biodegradability with improved mechanical properties and heat resistance.",
      description: "Our PLA Compound Masterbatch combines the environmental benefits of polylactic acid (PLA) with enhanced mechanical performance and heat resistance. Through advanced compounding technology, we address PLA's inherent limitations in brittleness and low heat deflection temperature, making it suitable for a wider range of applications. This product is ideal for manufacturers seeking sustainable alternatives without compromising on performance.",
      applications: ["Rigid packaging", "Disposable cups and containers", "3D printing filaments", "Textile fibers"],
      features: [
        "Improved impact resistance vs. pure PLA",
        "Enhanced heat deflection temperature",
        "Maintains full biodegradability",
        "Good processability on standard equipment",
        "Excellent surface finish and clarity",
        "Customizable formulations for specific needs",
      ],
    },
    zh: {
      name: "PLA复合母粒",
      categoryLabel: "可生物降解系列",
      shortDescription: "基于PLA的复合母粒，将生物降解性与改进的机械性能和耐热性相结合。",
      description: "我们的PLA复合母粒将聚乳酸（PLA）的环保优势与增强的机械性能和耐热性相结合。通过先进的复合技术，我们解决了PLA固有的脆性和低热变形温度限制，使其适用于更广泛的应用。该产品非常适合寻求可持续替代品而不牺牲性能的制造商。",
      applications: ["硬质包装", "一次性杯子和容器", "3D打印耗材", "纺织纤维"],
      features: [
        "相比纯PLA，抗冲击性提高",
        "热变形温度提高",
        "保持完全生物降解性",
        "在标准设备上良好的加工性",
        "优异的表面光洁度和透明度",
        "可定制配方满足特定需求",
      ],
    },
  },
  // ─── Performance Enhancement ───────────────────────────────────────
  {
    slug: "ppa-masterbatch",
    category: "performance",
    image: "/products/ppa.jpg",
    specifications: [
      { label: "Carrier", value: "LLDPE/LDPE" },
      { label: "Addition", value: "0.05-0.2%" },
      { label: "Melt Flow Index", value: "20-40 g/10min" },
      { label: "Density", value: "0.90-0.95 g/cm³" },
      { label: "Processing Temperature", value: "180-280°C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Appearance", value: "White/transparent granules" },
      { label: "Shelf Life", value: "24 months" },
    ],
    en: {
      name: "PPA Masterbatch",
      categoryLabel: "Performance Enhancement",
      shortDescription: "Polymeric Processing Aid masterbatch to eliminate melt fracture, improve surface gloss, and reduce die build-up.",
      description: "Our PPA (Polymeric Processing Aid) Masterbatch is engineered to resolve common processing challenges in polyolefin extrusion. It effectively eliminates melt fracture phenomena such as sharkskin and gross melt fracture, while significantly improving surface gloss and reducing die build-up. The ultra-low addition rate makes it highly cost-effective for high-volume production.",
      applications: ["Blown film", "Cast film", "Pipe extrusion", "Wire & cable"],
      features: [
        "Eliminates sharkskin and melt fracture",
        "Improves surface gloss and clarity",
        "Reduces die build-up significantly",
        "Ultra-low addition rate (0.05-0.2%)",
        "Compatible with PE, PP, and blends",
        "No impact on final product properties",
      ],
    },
    zh: {
      name: "PPA加工助剂母粒",
      categoryLabel: "功能增强系列",
      shortDescription: "聚合物加工助剂母粒，消除熔体破裂，提高表面光泽，减少模头积料。",
      description: "我们的PPA（聚合物加工助剂）母粒专为解决聚烯烃挤出中的常见加工问题而设计。它有效消除熔体破裂现象，如鲨鱼皮和严重熔体破裂，同时显著提高表面光泽并减少模头积料。超低添加量使其在大产量生产中具有极高的成本效益。",
      applications: ["吹膜", "流延膜", "管材挤出", "电线电缆"],
      features: [
        "消除鲨鱼皮和熔体破裂",
        "提高表面光泽和透明度",
        "显著减少模头积料",
        "超低添加量（0.05-0.2%）",
        "兼容PE、PP及其共混物",
        "不影响最终产品性能",
      ],
    },
  },
  {
    slug: "barium-sulfate-masterbatch",
    category: "performance",
    image: "/products/barium-sulfate.jpg",
    specifications: [
      { label: "Carrier", value: "PP/PE/PS" },
      { label: "BaSO₄ Content", value: "50-80%" },
      { label: "Melt Flow Index", value: "2-15 g/10min" },
      { label: "Density", value: "1.80-3.00 g/cm³" },
      { label: "Processing Temperature", value: "160-260°C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Particle Size", value: "D50: 1-5 μm" },
      { label: "Whiteness", value: "≥95%" },
    ],
    en: {
      name: "Barium Sulfate Masterbatch",
      categoryLabel: "Performance Enhancement",
      shortDescription: "High-density barium sulfate filler masterbatch for weight increase, radiation shielding, and improved surface finish.",
      description: "Our Barium Sulfate Masterbatch utilizes premium precipitated barium sulfate with high purity and fine particle size. It is designed for applications requiring increased product weight, radiation shielding properties, or enhanced surface finish. The high loading capacity and excellent dispersion ensure consistent performance while maintaining processability.",
      applications: ["Medical X-ray shielding", "Automotive parts", "Appliance shells", "High-end packaging"],
      features: [
        "High BaSO₄ loading (up to 80%)",
        "Excellent radiation shielding properties",
        "Increases product weight and density",
        "Improves surface finish and rigidity",
        "Fine particle size for smooth surface",
        "Good compatibility with multiple resins",
      ],
    },
    zh: {
      name: "硫酸钡母粒",
      categoryLabel: "功能增强系列",
      shortDescription: "高密度硫酸钡填充母粒，用于增重、辐射屏蔽和改善表面光洁度。",
      description: "我们的硫酸钡母粒采用优质沉淀硫酸钡，纯度高、粒径细。它专为需要增加产品重量、辐射屏蔽性能或增强表面光洁度的应用而设计。高填充量和优异的分散性确保性能一致，同时保持加工性。",
      applications: ["医用X射线屏蔽", "汽车部件", "家电外壳", "高端包装"],
      features: [
        "高硫酸钡填充量（高达80%）",
        "优异的辐射屏蔽性能",
        "增加产品重量和密度",
        "改善表面光洁度和刚性",
        "细粒径，表面光滑",
        "与多种树脂良好兼容",
      ],
    },
  },
  {
    slug: "talc-masterbatch",
    category: "performance",
    image: "/products/product-detail-2.jpg",
    specifications: [
      { label: "Carrier", value: "PP/PE" },
      { label: "Addition", value: "10-40%" },
      { label: "Melt Flow Index", value: "3-20 g/10min" },
      { label: "Density", value: "1.40-2.00 g/cm³" },
      { label: "Processing Temperature", value: "160-260°C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Talc Content", value: "40-70%" },
      { label: "Particle Size", value: "D50: 2-10 μm" },
    ],
    en: {
      name: "Talc Masterbatch",
      categoryLabel: "Performance Enhancement",
      shortDescription: "Premium talc filler masterbatch for stiffness enhancement, dimensional stability improvement, and cost reduction.",
      description: "Our Talc Masterbatch incorporates high-quality talc powder with controlled particle size distribution for optimal reinforcement in polyolefin applications. It significantly improves stiffness, dimensional stability, and heat resistance while reducing material costs. The excellent dispersion and compatibility ensure smooth processing and consistent product quality.",
      applications: ["Injection molding", "Blow molding", "Sheet extrusion", "Fiber & tape"],
      features: [
        "Significantly improves stiffness and rigidity",
        "Enhances dimensional stability",
        "Increases heat deflection temperature",
        "Reduces material costs effectively",
        "Excellent dispersion and compatibility",
        "Maintains good impact resistance",
      ],
    },
    zh: {
      name: "滑石粉母粒",
      categoryLabel: "功能增强系列",
      shortDescription: "优质滑石粉填充母粒，用于提高刚性、改善尺寸稳定性和降低成本。",
      description: "我们的滑石粉母粒采用高质量滑石粉，粒径分布可控，为聚烯烃应用提供最佳增强效果。它显著提高刚性、尺寸稳定性和耐热性，同时降低材料成本。优异的分散性和兼容性确保加工顺畅和产品质量一致。",
      applications: ["注塑", "吹塑", "片材挤出", "纤维和编织带"],
      features: [
        "显著提高刚性和硬度",
        "增强尺寸稳定性",
        "提高热变形温度",
        "有效降低材料成本",
        "优异的分散性和兼容性",
        "保持良好的抗冲击性",
      ],
    },
  },
  {
    slug: "defoamer-masterbatch",
    category: "performance",
    image: "/products/desiccant.jpg",
    specifications: [
      { label: "Carrier", value: "PP/PE" },
      { label: "Addition", value: "1-3%" },
      { label: "Moisture Absorption", value: "≥3%" },
      { label: "Melt Flow Index", value: "2-15 g/10min" },
      { label: "Processing Temperature", value: "160-260°C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Appearance", value: "White/gray granules" },
      { label: "Shelf Life", value: "6 months (sealed)" },
    ],
    en: {
      name: "Defoamer Masterbatch",
      categoryLabel: "Performance Enhancement",
      shortDescription: "Moisture-absorbing masterbatch that eliminates bubbles and surface defects caused by moisture in recycled or hygroscopic plastics.",
      description: "Our Defoamer Masterbatch is specially formulated to absorb moisture and eliminate gas-related defects in plastic processing. It is essential for processing recycled materials or hygroscopic resins that tend to absorb moisture from the environment. The masterbatch effectively prevents bubbles, voids, and surface imperfections, ensuring high-quality end products without the need for pre-drying.",
      applications: ["Recycled PP/PE film", "Blown film", "Injection molding", "Pipe extrusion"],
      features: [
        "High moisture absorption capacity",
        "Eliminates bubbles and surface defects",
        "No pre-drying required for recycled materials",
        "Improves product appearance and quality",
        "Easy to use with standard equipment",
        "Cost-effective solution for recyclers",
      ],
    },
    zh: {
      name: "消泡母粒",
      categoryLabel: "功能增强系列",
      shortDescription: "吸湿母粒，消除回收或吸湿性塑料中水分引起的气泡和表面缺陷。",
      description: "我们的消泡母粒专为吸收水分和消除塑料加工中的气体相关缺陷而配制。它对于加工容易从环境中吸收水分的回收材料或吸湿性树脂至关重要。该母粒有效防止气泡、空隙和表面缺陷，确保高质量最终产品，无需预干燥。",
      applications: ["回收PP/PE薄膜", "吹膜", "注塑", "管材挤出"],
      features: [
        "高吸湿能力",
        "消除气泡和表面缺陷",
        "回收材料无需预干燥",
        "改善产品外观和质量",
        "在标准设备上易于使用",
        "回收者的经济高效解决方案",
      ],
    },
  },
  {
    slug: "caco3-masterbatch",
    category: "performance",
    image: "/products/nano-calcium-carbonate.jpg",
    specifications: [
      { label: "Carrier", value: "PP/PE" },
      { label: "CaCO₃ Content", value: "60-85%" },
      { label: "Melt Flow Index", value: "2-20 g/10min" },
      { label: "Density", value: "1.60-2.20 g/cm³" },
      { label: "Processing Temperature", value: "160-260°C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Particle Size", value: "D50: 1-5 μm" },
      { label: "Whiteness", value: "≥90%" },
    ],
    en: {
      name: "Calcium Carbonate Masterbatch",
      categoryLabel: "Performance Enhancement",
      shortDescription: "High-loading calcium carbonate filler masterbatch for significant cost reduction while maintaining good mechanical properties.",
      description: "Our Calcium Carbonate Masterbatch is a high-performance filler solution designed for maximum cost efficiency without compromising product quality. Using premium ground calcium carbonate with optimized particle size and surface treatment, it achieves high loading levels while maintaining excellent dispersion and mechanical properties. This product is widely used across packaging, construction, and consumer goods industries.",
      applications: ["Blown film", "Injection molding", "Pipe & profile extrusion", "Woven bags"],
      features: [
        "High CaCO₃ loading (up to 85%)",
        "Significant cost reduction",
        "Maintains good mechanical properties",
        "Excellent dispersion and processability",
        "Improves dimensional stability",
        "Compatible with multiple processing methods",
      ],
    },
    zh: {
      name: "碳酸钙母粒",
      categoryLabel: "功能增强系列",
      shortDescription: "高填充碳酸钙填充母粒，在保持良好机械性能的同时显著降低成本。",
      description: "我们的碳酸钙母粒是一种高性能填充解决方案，旨在实现最大成本效率而不牺牲产品质量。采用优质研磨碳酸钙，优化粒径和表面处理，在高填充量下仍保持优异的分散性和机械性能。该产品广泛应用于包装、建筑和消费品行业。",
      applications: ["吹膜", "注塑", "管材和型材挤出", "编织袋"],
      features: [
        "高碳酸钙填充量（高达85%）",
        "显著降低成本",
        "保持良好的机械性能",
        "优异的分散性和加工性",
        "提高尺寸稳定性",
        "兼容多种加工方法",
      ],
    },
  },
];
