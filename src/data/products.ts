export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  category: "biodegradable" | "performance";
  categoryLabel: string;
  shortDescription: string;
  description: string;
  applications: string[];
  features: string[];
  specifications: ProductSpec[];
  images: string[];
}

export const products: Product[] = [
  {
    slug: "pbat-compound-masterbatch",
    name: "PBAT Compound Masterbatch",
    category: "biodegradable",
    categoryLabel: "Biodegradable Solutions",
    shortDescription:
      "High-performance biodegradable PBAT-based compound masterbatch for compostable film and packaging applications.",
    description:
      "Our PBAT Compound Masterbatch is engineered for superior biodegradability and mechanical performance. Formulated with premium PBAT resin and carefully selected additives, it delivers excellent film吹ability, consistent dispersion, and reliable compostability. Ideal for manufacturers seeking to transition from conventional plastics to sustainable alternatives without sacrificing product quality.",
    applications: [
      "Compostable shopping bags and T-shirt bags",
      "Agricultural mulch films",
      "Food packaging films",
      "Waste bags",
      "Courier bags and mailing envelopes",
    ],
    features: [
      "EN 13432 and ASTM D6400 compostability compliant",
      "Excellent film blowability with stable bubble",
      "Superior elongation at break and tensile strength",
      "Consistent pellet quality with no dust",
      "Compatible with conventional blown film equipment",
      "Shelf life: 12 months in proper storage conditions",
    ],
    specifications: [
      { label: "Base Resin", value: "PBAT" },
      { label: "Pellet Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Melt Flow Index", value: "2.0-4.0 g/10min" },
      { label: "Density", value: "1.14-1.20 g/cm\u00b3" },
      { label: "Processing Temperature", value: "140-180\u00b0C" },
      { label: "Addition Ratio", value: "100% (full replacement)" },
      { label: "Moisture Content", value: "\u22640.1%" },
      { label: "Biodegradation Rate", value: "\u226590% within 180 days" },
    ],
    images: [],
  },
  {
    slug: "pla-compound-masterbatch",
    name: "PLA Compound Masterbatch",
    category: "biodegradable",
    categoryLabel: "Biodegradable Solutions",
    shortDescription:
      "Versatile PLA-based compound masterbatch for rigid and semi-rigid biodegradable products.",
    description:
      "Our PLA Compound Masterbatch leverages polylactic acid derived from renewable resources to create high-performance biodegradable products. With optimized thermal stability and impact resistance, this masterbatch is suitable for a wide range of applications from rigid packaging to disposable tableware. It offers excellent processability on standard equipment while meeting the growing demand for bio-based solutions.",
    applications: [
      "Rigid food containers and cups",
      "Disposable cutlery and tableware",
      "Cold drink cups and straws",
      "3D printing filaments",
      "Injection molded bio-products",
    ],
    features: [
      "Bio-based content derived from corn starch",
      "High gloss and excellent surface finish",
      "Good rigidity and dimensional stability",
      "Suitable for injection molding and thermoforming",
      "Transparent to translucent finish available",
      "Industrial compostable per EN 13432",
    ],
    specifications: [
      { label: "Base Resin", value: "PLA" },
      { label: "Pellet Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Melt Flow Index", value: "3.0-8.0 g/10min" },
      { label: "Density", value: "1.24-1.28 g/cm\u00b3" },
      { label: "Processing Temperature", value: "170-210\u00b0C" },
      { label: "Addition Ratio", value: "100% (full replacement)" },
      { label: "Moisture Content", value: "\u22640.05%" },
      { label: "Heat Deflection Temperature", value: "55-60\u00b0C" },
    ],
    images: [],
  },
  {
    slug: "ppa-masterbatch",
    name: "PPA Masterbatch",
    category: "performance",
    categoryLabel: "Performance Enhancement",
    shortDescription:
      "Polymer Processing Aid masterbatch for enhanced film extrusion surface quality and higher throughput.",
    description:
      "Our PPA (Polymer Processing Aid) Masterbatch is designed to eliminate melt fracture and improve surface quality in film extrusion processes. Based on advanced fluoropolymer technology, it migrates to the die surface to create a lubricating layer, reducing die buildup and enabling higher line speeds. This results in significant productivity gains and consistent product quality across all extrusion runs.",
    applications: [
      "HDPE and LLDPE blown film",
      "Cast film production",
      "Pipe and profile extrusion",
      "Wire and cable coating",
      "Sheet extrusion",
    ],
    features: [
      "Eliminates sharkskin and melt fracture defects",
      "Reduces die buildup extending run times",
      "Enables 15-30% throughput increase",
      "Improved film surface gloss and clarity",
      "Low addition ratio for cost efficiency",
      "Compatible with all polyolefin resins",
    ],
    specifications: [
      { label: "Active Component", value: "Fluoropolymer blend" },
      { label: "Carrier Resin", value: "LLDPE" },
      { label: "Pellet Form", value: "Round pellets, 2-3mm" },
      { label: "Active Content", value: "25\u00b12%" },
      { label: "Melt Flow Index", value: "2.0-5.0 g/10min" },
      { label: "Addition Ratio", value: "0.05-0.3%" },
      { label: "Processing Temperature", value: "160-280\u00b0C" },
      { label: "Moisture Content", value: "\u22640.1%" },
    ],
    images: [],
  },
  {
    slug: "barium-sulfate-masterbatch",
    name: "Barium Sulfate Masterbatch",
    category: "performance",
    categoryLabel: "Performance Enhancement",
    shortDescription:
      "High-loading barium sulfate masterbatch for superior weighting, radiation shielding, and surface finish.",
    description:
      "Our Barium Sulfate Masterbatch delivers exceptional density and whiteness for applications requiring weighting, X-ray shielding, or enhanced surface properties. Using carefully selected high-purity barium sulfate with optimized particle size distribution, this masterbatch ensures uniform dispersion and consistent performance. It is widely used in plastic industries where high specific gravity and excellent surface finish are critical.",
    applications: [
      "X-ray protective curtains and aprons",
      "Automotive components for sound dampening",
      "Home appliance housings",
      "Industrial flooring tiles",
      "Anti-radiation packaging",
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
      { label: "Active Component", value: "BaSO\u2084 (99%+ purity)" },
      { label: "Carrier Resin", value: "PE / PP (customizable)" },
      { label: "Filling Content", value: "80-88%" },
      { label: "Pellet Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Density", value: "3.8-4.2 g/cm\u00b3" },
      { label: "Whiteness", value: "\u226595%" },
      { label: "Particle Size (D50)", value: "1.0-1.5 \u03bcm" },
      { label: "Addition Ratio", value: "10-40%" },
    ],
    images: [],
  },
  {
    slug: "talc-masterbatch",
    name: "Talc Masterbatch",
    category: "performance",
    categoryLabel: "Performance Enhancement",
    shortDescription:
      "Premium talc-filled masterbatch for enhanced stiffness, dimensional stability, and cost reduction.",
    description:
      "Our Talc Masterbatch is formulated with high-purity, ultra-fine talc to provide significant reinforcement and cost optimization in polyolefin applications. The carefully controlled particle size and surface treatment ensure excellent dispersion and strong interfacial bonding with the polymer matrix. This masterbatch is ideal for injection molding and extrusion applications where rigidity, heat resistance, and surface quality are paramount.",
    applications: [
      "Automotive interior and exterior parts",
      "Home appliance components",
      "Food containers and packaging",
      "Injection molded industrial parts",
      "PP woven and non-woven fabrics",
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
      { label: "Active Component", value: "Natural talc (Mg\u2083Si\u2084O\u2081\u2080(OH)\u2082)" },
      { label: "Carrier Resin", value: "PP / PE (customizable)" },
      { label: "Filling Content", value: "70-85%" },
      { label: "Pellet Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Density", value: "1.6-2.0 g/cm\u00b3" },
      { label: "Whiteness", value: "\u226590%" },
      { label: "Particle Size (D50)", value: "2.0-4.0 \u03bcm" },
      { label: "Addition Ratio", value: "10-50%" },
    ],
    images: [],
  },
  {
    slug: "defoamer-masterbatch",
    name: "Defoamer Masterbatch",
    category: "performance",
    categoryLabel: "Performance Enhancement",
    shortDescription:
      "Highly effective defoaming masterbatch to eliminate gas bubbles and surface defects in plastic processing.",
    description:
      "Our Defoamer Masterbatch is specifically designed to eliminate foam and gas bubbles caused by moisture, volatile residues, or trapped air during plastic processing. It works by breaking down bubble walls and allowing gases to escape before they cause surface defects. This masterbatch is essential for recycling operations, filled compound production, and any process where moisture or volatiles create quality issues.",
    applications: [
      "Recycled plastic processing",
      "Filled compound extrusion",
      "Blown film with high regrind content",
      "Injection molding with moisture-sensitive resins",
      "Pigment and filler masterbatch production",
    ],
    features: [
      "Eliminates bubbles, pinholes, and surface voids",
      "Improves surface quality and mechanical properties",
      "Reduces or eliminates pre-drying requirements",
      "Compatible with PE, PP, PS, ABS, and more",
      "No effect on optical clarity at recommended doses",
      "Easy to handle and dose with standard equipment",
    ],
    specifications: [
      { label: "Active Component", value: "Calcium oxide / chemical defoaming blend" },
      { label: "Carrier Resin", value: "PE / EVA" },
      { label: "Pellet Form", value: "Round pellets, 2-3mm" },
      { label: "Active Content", value: "75-85%" },
      { label: "Density", value: "1.4-1.8 g/cm\u00b3" },
      { label: "Processing Temperature", value: "150-280\u00b0C" },
      { label: "Addition Ratio", value: "1-5%" },
      { label: "Moisture Absorption Capacity", value: "\u226520% of its weight" },
    ],
    images: [],
  },
  {
    slug: "calcium-carbonate-masterbatch",
    name: "Calcium Carbonate Masterbatch",
    category: "performance",
    categoryLabel: "Performance Enhancement",
    shortDescription:
      "Cost-effective calcium carbonate filler masterbatch for significant material cost reduction while maintaining quality.",
    description:
      "Our Calcium Carbonate Masterbatch utilizes premium natural or precipitated calcium carbonate with advanced surface treatment technology to achieve optimal compatibility with polyolefin matrices. It provides substantial cost savings through raw material replacement while maintaining acceptable mechanical properties and processing characteristics. Available in various loading levels to match specific application requirements.",
    applications: [
      "Blown film (shopping bags, garbage bags)",
      "Injection molding (containers, caps, closures)",
      "Flat yarn and woven fabrics",
      "Pipe and profile extrusion",
      "Blow molding (bottles, containers)",
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
      { label: "Active Component", value: "CaCO\u2083 (natural/precipitated)" },
      { label: "Carrier Resin", value: "PE / PP (customizable)" },
      { label: "Filling Content", value: "70-85%" },
      { label: "Pellet Form", value: "Cylindrical granules, 3-4mm" },
      { label: "Density", value: "1.6-2.0 g/cm\u00b3" },
      { label: "Whiteness", value: "\u226592%" },
      { label: "Particle Size (D50)", value: "1.0-3.0 \u03bcm" },
      { label: "Addition Ratio", value: "5-40%" },
    ],
    images: [],
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
