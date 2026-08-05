export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  nameCn: string;
  category: "biodegradable" | "performance";
  categoryLabel: string;
  shortDescription: string;
  description: string;
  applications: string[];
  features: string[];
  specifications: ProductSpec[];
  /** Path to product image in /public, e.g. "/products/pbat-ab.jpg". Empty = use placeholder. */
  image: string;
}

export const products: Product[] = [
  // ─── Biodegradable Solutions ───────────────────────────────────────
  {
    slug: "pbat-ab-masterbatch-system",
    name: "PBAT A/B Masterbatch System",
    nameCn: "PBAT\u590D\u5408\u6BCD\u7C92\u7CFB\u7EDF",
    category: "biodegradable",
    categoryLabel: "Biodegradable Solutions",
    shortDescription:
      "Two-component PBAT compound masterbatch system for fully biodegradable film and bag production. Component A is PBAT resin compound, Component B is the additive package.",
    description:
      "Our PBAT A/B Masterbatch System is a revolutionary two-component solution designed for manufacturers transitioning to fully biodegradable film and bag production. Component A delivers the PBAT resin matrix, while Component B contains the optimized additive package for processing stability, mechanical performance, and biodegradability. This dual-component approach allows precise control over the final product properties and ensures consistent quality across production runs.",
    applications: [
      "Shopping bags",
      "Garbage bags",
      "Food packaging films",
      "Agricultural mulch films",
    ],
    features: [
      "Two-component system for precise formulation control",
      "Fully biodegradable per EN 13432 and ASTM D6400",
      "Excellent film blowability with stable bubble",
      "Superior sealing strength and mechanical properties",
      "Compatible with conventional blown film equipment",
      "Flexible A:B ratio for customized performance",
    ],
    specifications: [
      { label: "Carrier", value: "PBAT" },
      { label: "Addition", value: "A:B ratio per formulation guide" },
      { label: "Melt Flow Index", value: "2-8 g/10min" },
      { label: "Density", value: "1.20-1.30 g/cm\u00b3" },
      { label: "Processing Temperature", value: "140-180\u00b0C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Moisture Content", value: "\u22640.1%" },
      { label: "Biodegradation Rate", value: "\u226590% within 180 days" },
    ],
    image: "/products/masterbatch-pellets.jpg",
  },
  {
    slug: "pbat-biodegradable-masterbatch",
    name: "PBAT Biodegradable Masterbatch",
    nameCn: "PBAT\u751F\u7269\u964D\u89E3\u6BCD\u7C92",
    category: "biodegradable",
    categoryLabel: "Biodegradable Solutions",
    shortDescription:
      "Fully biodegradable masterbatch based on PBAT resin, compliant with EN 13432 and OK Compost standards.",
    description:
      "Our PBAT Biodegradable Masterbatch is a single-component, fully biodegradable solution based on premium PBAT resin. It is designed for manufacturers who need a straightforward, drop-in replacement for conventional polyethylene in film and packaging applications. Certified compliant with EN 13432 and OK Compost standards, this masterbatch delivers reliable biodegradability without sacrificing processing ease or end-product quality.",
    applications: [
      "Compostable bags",
      "Food service packaging",
      "Disposable cutlery",
      "Agricultural films",
    ],
    features: [
      "EN 13432 and OK Compost certified",
      "Single-component ease of use",
      "High biodegradability (\u226590% in 180 days)",
      "Excellent clarity and surface finish",
      "Good elongation and tear resistance",
      "Compatible with standard film extrusion lines",
    ],
    specifications: [
      { label: "Carrier", value: "PBAT" },
      { label: "Addition", value: "20-100%" },
      { label: "Melt Flow Index", value: "2-10 g/10min" },
      { label: "Density", value: "1.14-1.26 g/cm\u00b3" },
      { label: "Processing Temperature", value: "140-180\u00b0C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Biodegradability", value: "\u226590% in 180 days" },
      { label: "Shelf Life", value: "12 months in proper storage" },
    ],
    image: "/products/masterbatch-pellets.jpg",
  },
  {
    slug: "pla-compound-masterbatch",
    name: "PLA Compound Masterbatch",
    nameCn: "PLA\u590D\u5408\u6BCD\u7C92",
    category: "biodegradable",
    categoryLabel: "Biodegradable Solutions",
    shortDescription:
      "PLA-based compound masterbatch combining biodegradability with improved mechanical properties and heat resistance.",
    description:
      "Our PLA Compound Masterbatch leverages polylactic acid derived from renewable resources to create high-performance biodegradable products. With optimized formulations that improve upon PLA's inherent brittleness and limited heat resistance, this masterbatch opens up new application possibilities for bio-based plastics. Available in both standard and heat-resistant grades to meet diverse processing and end-use requirements.",
    applications: [
      "Rigid packaging",
      "Disposable cups and containers",
      "3D printing filaments",
      "Textile fibers",
    ],
    features: [
      "Bio-based content from renewable corn starch",
      "Improved impact strength over neat PLA",
      "Heat-resistant grades available (up to 120\u00b0C)",
      "Suitable for injection molding, thermoforming, and fiber spinning",
      "Good surface gloss and dimensional stability",
      "Industrial compostable per EN 13432",
    ],
    specifications: [
      { label: "Carrier", value: "PLA" },
      { label: "Addition", value: "20-100%" },
      { label: "Melt Flow Index", value: "5-30 g/10min" },
      { label: "Density", value: "1.24-1.28 g/cm\u00b3" },
      { label: "Heat Resistance", value: "60-120\u00b0C (modified grade)" },
      { label: "Processing Temperature", value: "170-210\u00b0C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Moisture Content", value: "\u22640.05%" },
    ],
    image: "/products/masterbatch-pellets.jpg",
  },

  // ─── Performance Enhancement ──────────────────────────────────────
  {
    slug: "ppa-masterbatch",
    name: "PPA Masterbatch",
    nameCn: "PPA\u52A0\u5DE5\u52A9\u5242\u6BCD\u7C92",
    category: "performance",
    categoryLabel: "Performance Enhancement",
    shortDescription:
      "Polymeric Processing Aid masterbatch to eliminate melt fracture, improve surface gloss, and reduce die build-up in film extrusion.",
    description:
      "Our PPA (Polymeric Processing Aid) Masterbatch is formulated with advanced fluoropolymer technology to eliminate melt fracture and improve surface quality in film extrusion. It migrates to the die surface during processing to create a lubricating layer, reducing die buildup and enabling higher throughput. The result is smoother film surfaces, higher line speeds, and extended production runs without die cleaning.",
    applications: [
      "Blown film",
      "Cast film",
      "Pipe extrusion",
      "Wire & cable",
    ],
    features: [
      "Eliminates sharkskin and melt fracture defects",
      "Reduces die buildup for longer run times",
      "Enables 15-30% throughput increase",
      "Improved film surface gloss and clarity",
      "Very low addition ratio for cost efficiency",
      "Compatible with all polyolefin resins",
    ],
    specifications: [
      { label: "Carrier", value: "LLDPE / LDPE" },
      { label: "Addition", value: "0.05-0.2%" },
      { label: "Melt Flow Index", value: "20-40 g/10min" },
      { label: "Density", value: "0.90-0.95 g/cm\u00b3" },
      { label: "Active Content", value: "25\u00b12%" },
      { label: "Processing Temperature", value: "160-280\u00b0C" },
      { label: "Form", value: "Round pellets, 2-3mm" },
      { label: "Moisture Content", value: "\u22640.1%" },
    ],
    image: "/products/masterbatch-pellets.jpg",
  },
  {
    slug: "barium-sulfate-masterbatch",
    name: "Barium Sulfate Masterbatch",
    nameCn: "\u786B\u9178\u94A1\u6BCD\u7C92",
    category: "performance",
    categoryLabel: "Performance Enhancement",
    shortDescription:
      "High-density barium sulfate filler masterbatch for weight increase, radiation shielding, and improved surface finish.",
    description:
      "Our Barium Sulfate Masterbatch delivers exceptional density and whiteness for applications requiring weighting, X-ray shielding, or enhanced surface properties. Using high-purity barium sulfate with optimized particle size distribution, this masterbatch ensures uniform dispersion and consistent performance. It is widely used in medical, automotive, and industrial applications where high specific gravity and excellent surface finish are critical.",
    applications: [
      "Medical X-ray shielding",
      "Automotive parts",
      "Home appliance shells",
      "High-end packaging",
    ],
    features: [
      "High density for effective weighting",
      "Excellent radiation shielding properties",
      "Superior whiteness and brightness",
      "Smooth surface finish on molded parts",
      "Good dispersion with minimal filter blockage",
      "Chemical inertness and thermal stability",
    ],
    specifications: [
      { label: "Carrier", value: "PP / PE / PS" },
      { label: "BaSO\u2084 Content", value: "50-80%" },
      { label: "Melt Flow Index", value: "2-15 g/10min" },
      { label: "Density", value: "1.80-3.00 g/cm\u00b3" },
      { label: "Whiteness", value: "\u226595%" },
      { label: "Particle Size (D50)", value: "1.0-1.5 \u03bcm" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Processing Temperature", value: "180-280\u00b0C" },
    ],
    image: "/products/masterbatch-pellets.jpg",
  },
  {
    slug: "talc-masterbatch",
    name: "Talc Masterbatch",
    nameCn: "\u6ED1\u77F3\u7C89\u6BCD\u7C92",
    category: "performance",
    categoryLabel: "Performance Enhancement",
    shortDescription:
      "Premium talc filler masterbatch for stiffness enhancement, dimensional stability improvement, and cost reduction in polyolefin applications.",
    description:
      "Our Talc Masterbatch is formulated with high-purity, ultra-fine talc to provide significant reinforcement and cost optimization in polyolefin applications. The carefully controlled particle size and surface treatment ensure excellent dispersion and strong interfacial bonding with the polymer matrix. This masterbatch is ideal for injection molding and extrusion applications where rigidity, heat resistance, and surface quality are paramount.",
    applications: [
      "Injection molding",
      "Blow molding",
      "Sheet extrusion",
      "Fiber & tape",
    ],
    features: [
      "Significant stiffness improvement (up to 40%)",
      "Enhanced heat deflection temperature",
      "Improved dimensional stability",
      "Excellent surface smoothness",
      "Cost-effective raw material reduction",
      "Good impact-stiffness balance",
    ],
    specifications: [
      { label: "Carrier", value: "PP / PE" },
      { label: "Addition", value: "10-40%" },
      { label: "Melt Flow Index", value: "3-20 g/10min" },
      { label: "Density", value: "1.40-2.00 g/cm\u00b3" },
      { label: "Whiteness", value: "\u226590%" },
      { label: "Particle Size (D50)", value: "2.0-4.0 \u03bcm" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Talc Content", value: "70-85%" },
    ],
    image: "/products/masterbatch-pellets.jpg",
  },
  {
    slug: "defoamer-masterbatch",
    name: "Defoamer Masterbatch",
    nameCn: "\u6D88\u6CE1\u6BCD\u7C92",
    category: "performance",
    categoryLabel: "Performance Enhancement",
    shortDescription:
      "Moisture-absorbing masterbatch that eliminates bubbles and surface defects caused by moisture in recycled or hygroscopic plastics.",
    description:
      "Our Defoamer Masterbatch is specifically designed to eliminate foam and gas bubbles caused by moisture, volatile residues, or trapped air during plastic processing. It works by absorbing moisture and breaking down bubble walls, allowing gases to escape before they cause surface defects. This masterbatch is essential for recycling operations, filled compound production, and any process where moisture or volatiles create quality issues.",
    applications: [
      "Recycled PP/PE film",
      "Blown film",
      "Injection molding",
      "Pipe extrusion",
    ],
    features: [
      "Eliminates bubbles, pinholes, and surface voids",
      "Improves surface quality and mechanical properties",
      "Reduces or eliminates pre-drying requirements",
      "Compatible with PP, PE, and other polyolefins",
      "No effect on optical clarity at recommended doses",
      "Easy to handle and dose with standard equipment",
    ],
    specifications: [
      { label: "Carrier", value: "PP / PE" },
      { label: "Addition", value: "1-3%" },
      { label: "Moisture Absorption", value: "\u22653%" },
      { label: "Melt Flow Index", value: "2-15 g/10min" },
      { label: "Density", value: "1.40-1.80 g/cm\u00b3" },
      { label: "Processing Temperature", value: "150-280\u00b0C" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Active Component", value: "Calcium oxide blend" },
    ],
    image: "/products/masterbatch-pellets.jpg",
  },
  {
    slug: "calcium-carbonate-masterbatch",
    name: "Calcium Carbonate Masterbatch",
    nameCn: "\u78B3\u9178\u9499\u6BCD\u7C92",
    category: "performance",
    categoryLabel: "Performance Enhancement",
    shortDescription:
      "High-loading calcium carbonate filler masterbatch for significant cost reduction while maintaining good mechanical properties and surface quality.",
    description:
      "Our Calcium Carbonate Masterbatch utilizes premium natural or precipitated calcium carbonate with advanced surface treatment technology to achieve optimal compatibility with polyolefin matrices. It provides substantial cost savings through raw material replacement while maintaining acceptable mechanical properties and processing characteristics. Available in various loading levels to match specific application requirements.",
    applications: [
      "Blown film",
      "Injection molding",
      "Pipe & profile extrusion",
      "Woven bags",
    ],
    features: [
      "Up to 40% cost reduction in raw materials",
      "Excellent dispersion with minimal filter pressure",
      "Maintains tensile strength at high loading",
      "Smooth surface finish on final products",
      "Consistent pellet quality for automated dosing",
      "Available in PE and PP carrier systems",
    ],
    specifications: [
      { label: "Carrier", value: "PP / PE" },
      { label: "CaCO\u2083 Content", value: "60-85%" },
      { label: "Melt Flow Index", value: "2-20 g/10min" },
      { label: "Density", value: "1.60-2.20 g/cm\u00b3" },
      { label: "Whiteness", value: "\u226592%" },
      { label: "Particle Size (D50)", value: "1.0-3.0 \u03bcm" },
      { label: "Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Processing Temperature", value: "160-260\u00b0C" },
    ],
    image: "/products/masterbatch-pellets.jpg",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(
  category: "biodegradable" | "performance"
): Product[] {
  return products.filter((p) => p.category === category);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}
