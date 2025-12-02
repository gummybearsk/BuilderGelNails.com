export interface Author {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  credentials: string[];
  avatarUrl: string;
}

export const authors: Record<string, Author> = {
  "sara-kim": {
    id: "sara-kim",
    name: "Sara Kim",
    role: "Licensed Nail Technician & Educator",
    title: "Licensed Nail Technician & Educator",
    bio: "Sara Kim is a licensed nail technician with over 8 years of salon experience specializing in builder gel, BIAB™ (Builder In A Bottle) by The GelBottle, and structured manicures. She has worked with both professional brands and consumer builder gel kits and focuses on nail health, safe removal, and allergen-aware product choices.",
    credentials: [
      "Licensed Nail Technician",
      "8+ Years Experience",
      "Builder Gel Specialist"
    ],
    avatarUrl: "/images/authors/sara-kim.jpg",
  },
} as const;

export function getAuthor(id: string): Author | undefined {
  return authors[id];
}

export function getDefaultAuthor(): Author {
  return authors["sara-kim"];
}
