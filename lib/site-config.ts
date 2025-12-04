export const siteConfig = {
  name: "Builder Gel Nails",
  domain: "buildergelnails.com",
  url: "https://buildergelnails.com",
  description: "Your complete guide to builder gel nails, BIAB™, and bottle-applied builder gels. Expert tutorials, product reviews, and troubleshooting by licensed nail technicians.",
  author: "Sara Kim",

  // Google Analytics
  gaId: "G-TK8RVLYDX5",

  // Navigation
  mainNav: [
    { label: "Home", href: "/" },
    { label: "Guides", href: "/guides" },
    { label: "How-To", href: "/how-to" },
    { label: "Comparisons", href: "/comparisons" },
    { label: "Problems & Fixes", href: "/problems" },
    { label: "Product Picks", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ],

  footerNav: [
    { label: "About & Editorial Standards", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ],

  // Social (empty for MVP)
  social: {
    // instagram: "",
    // pinterest: "",
    // youtube: "",
  },
} as const;

export type SiteConfig = typeof siteConfig;
