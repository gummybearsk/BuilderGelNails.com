export interface Product {
  id: string;
  name: string;
  brand: string;
  vendor: string;
  url: string;
  imageUrl?: string;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  description?: string;
  isPro?: boolean;
  isHemaFree?: boolean;
  bestFor?: string;
  viscosity?: string;
  hemaFree?: boolean;
}

export const products: Product[] = [
  {
    id: "beetles-8in1-clear-builder",
    name: "Beetles Builder Gel for Nails",
    brand: "Beetles",
    vendor: "Amazon",
    url: "https://www.amazon.com/dp/B08Y17L51L",
    imageUrl: "/images/products/beetles-8in1-clear-builder.jpg",
    description: "Self-leveling builder gel; cures under LED in 60 sec or UV in 2 min. Beginner-friendly kit with 6 colors. Requires base/top coat.",
    priceRange: '$',
    isPro: false,
    isHemaFree: false,
    hemaFree: false,
    bestFor: "Beginners",
    viscosity: "Medium",
  },
  {
    id: "modelones-builder-kit-56g",
    name: "Modelones Builder Nail Gel Kit",
    brand: "Modelones",
    vendor: "Amazon",
    url: "https://www.amazon.com/dp/B08ZJ9VBYN",
    imageUrl: "/images/products/modelones-builder-kit-56g.jpg",
    description: "Low-odor, non-lifting formula with 28-day wear. Self-leveling and flexible. Good for novices and intermediate DIY.",
    priceRange: '$',
    isPro: false,
    isHemaFree: false,
    hemaFree: false,
    bestFor: "Beginners",
    viscosity: "Medium",
  },
  {
    id: "makartt-clear-builder-kit",
    name: "Makartt Clear Gel Builder Kit",
    brand: "Makartt",
    vendor: "Amazon",
    url: "https://www.amazon.com/dp/B0DJSQ2NJ8",
    imageUrl: "/images/products/makartt-clear-builder-kit.jpg",
    description: "Budget-friendly builder gel kit with forms and brush. Self-leveling formula for extensions.",
    priceRange: '$',
    isPro: false,
    isHemaFree: false,
    hemaFree: false,
    bestFor: "Budget buyers",
    viscosity: "Medium",
  },
  {
    id: "mia-secret-formagel-kit",
    name: "Mia Secret Formagel Builder Gel Kit",
    brand: "Mia Secret",
    vendor: "Amazon",
    url: "https://www.amazon.com/dp/B01FZO61P8",
    imageUrl: "/images/products/mia-secret-formagel-kit.jpg",
    description: "Self-leveling formula ideal for strengthening natural nails or building extensions. Non-yellowing, chip-resistant finish. UV/LED compatible.",
    priceRange: '$$',
    isPro: true,
    isHemaFree: false,
    hemaFree: false,
    bestFor: "Intermediate",
    viscosity: "Medium-Thick",
  },
  {
    id: "thegelbottle-biab-shop",
    name: "The GelBottle BIAB™ Builder In A Bottle",
    brand: "The GelBottle Inc.",
    vendor: "The GelBottle US",
    url: "https://thegelbottle.us/biabtm-shop-all",
    imageUrl: "/images/products/thegelbottle-biab-shop.jpg",
    description: "The original BIAB™ (Builder In A Bottle) - a professional brush-on builder allowing multiple enhancements. Self-leveling, no sidewall flooding, 21+ days wear. Soak-off removal.",
    priceRange: '$$$',
    isPro: true,
    isHemaFree: false,
    hemaFree: false,
    bestFor: "Professionals",
    viscosity: "Self-leveling",
  },
  {
    id: "thegelbottle-biab-aulait",
    name: "Au Lait HEMA-Free BIAB™",
    brand: "The GelBottle Inc.",
    vendor: "The GelBottle US",
    url: "https://thegelbottle.us/biabtm-shop-all",
    imageUrl: "/images/products/thegelbottle-biab-aulait.jpg",
    description: "HEMA-free version of BIAB™ inspired by the classic Milky BIAB™. Same quality and finish for clients with sensitivities.",
    priceRange: '$$$',
    isPro: true,
    isHemaFree: true,
    hemaFree: true,
    bestFor: "Sensitive clients",
    viscosity: "Self-leveling",
  },
  {
    id: "kokoist-excel-builder-clear",
    name: "Kokoist Excel Builder Clear",
    brand: "Kokoist",
    vendor: "Kokoist USA",
    url: "https://kokoistusa.com/products/excel-builder-clear",
    imageUrl: "/images/products/kokoist-excel-builder-clear.png",
    description: "Semi-hard, self-leveling builder gel. Soak-off in 10-15 min. LED cure 20 sec, UV 60 sec. Ideal for thin overlays or strong extensions.",
    priceRange: '$$$',
    isPro: true,
    isHemaFree: false,
    hemaFree: false,
    bestFor: "Professionals",
    viscosity: "Medium",
  },
  {
    id: "gelish-structure-builder",
    name: "Gelish Structure Brush-On Builder",
    brand: "Gelish",
    vendor: "Various",
    url: "https://www.gelish.com/structure",
    imageUrl: "/images/products/gelish-structure-builder.jpg",
    description: "Professional brush-on builder with crystal clear, bubble-free formula. 21+ days wear. Cruelty-free, vegan, 15-free.",
    priceRange: '$$',
    isPro: true,
    isHemaFree: false,
    hemaFree: false,
    bestFor: "Professionals",
    viscosity: "Self-leveling",
  },
];

export function getProduct(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getAllProducts(): Product[] {
  return products;
}

export function getProductsByVendor(vendor: string): Product[] {
  return products.filter((p) => p.vendor === vendor);
}

export function getProProducts(): Product[] {
  return products.filter((p) => p.isPro);
}

export function getBudgetProducts(): Product[] {
  return products.filter((p) => !p.isPro);
}

export function getHemaFreeProducts(): Product[] {
  return products.filter((p) => p.isHemaFree);
}
