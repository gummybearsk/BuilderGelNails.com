import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ComponentType } from 'react';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export type Category =
  | 'guides'
  | 'how-to'
  | 'problems'
  | 'products'
  | 'comparisons'
  | 'blog'
  | 'about';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: Category;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime?: string;
  coverImage?: string;
  difficulty?: string;
  steps?: number;
  tags?: string[];
}

interface PostFrontmatter {
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  readTime?: string;
  coverImage?: string;
  difficulty?: string;
  steps?: number;
  tags?: string[];
}

function getCategoryPosts(category: Category): Post[] {
  const categoryDir = path.join(postsDirectory, category);

  try {
    if (!fs.existsSync(categoryDir)) {
      return [];
    }

    const files = fs.readdirSync(categoryDir).filter((file) => file.endsWith('.mdx'));

    return files.map((file) => {
      const filePath = path.join(categoryDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      const frontmatter = data as PostFrontmatter;

      return {
        slug: frontmatter.slug || file.replace(/\.mdx$/, ''),
        title: frontmatter.title || '',
        excerpt: frontmatter.excerpt || '',
        category: category,
        author: frontmatter.author || 'sara-kim',
        publishedAt: frontmatter.publishedAt || new Date().toISOString().split('T')[0],
        updatedAt: frontmatter.updatedAt,
        readTime: frontmatter.readTime,
        coverImage: frontmatter.coverImage,
        difficulty: frontmatter.difficulty,
        steps: frontmatter.steps,
        tags: frontmatter.tags,
      };
    }).sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
  } catch {
    return [];
  }
}

export async function getPostBySlug(category: Category, slug: string): Promise<Post | null> {
  const filePath = path.join(postsDirectory, category, `${slug}.mdx`);

  try {
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    const frontmatter = data as PostFrontmatter;

    return {
      slug: frontmatter.slug || slug,
      title: frontmatter.title || '',
      excerpt: frontmatter.excerpt || '',
      category: category,
      author: frontmatter.author || 'sara-kim',
      publishedAt: frontmatter.publishedAt || new Date().toISOString().split('T')[0],
      updatedAt: frontmatter.updatedAt,
      readTime: frontmatter.readTime,
      coverImage: frontmatter.coverImage,
      difficulty: frontmatter.difficulty,
      steps: frontmatter.steps,
      tags: frontmatter.tags,
    };
  } catch {
    return null;
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const categories: Category[] = ['guides', 'how-to', 'problems', 'products', 'comparisons', 'blog', 'about'];
  const allPosts: Post[] = [];

  for (const category of categories) {
    const categoryPosts = getCategoryPosts(category);
    allPosts.push(...categoryPosts);
  }

  return allPosts.sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export async function getPostsByCategory(category: Category): Promise<Post[]> {
  return getCategoryPosts(category);
}

export function getPostPath(post: Post): string;
export function getPostPath(category: Category, slug: string): string;
export function getPostPath(postOrCategory: Post | Category, slug?: string): string {
  if (typeof postOrCategory === 'string') {
    if (postOrCategory === 'about') {
      return '/about';
    }
    return `/${postOrCategory}/${slug}`;
  }
  if (postOrCategory.category === 'about') {
    return '/about';
  }
  return `/${postOrCategory.category}/${postOrCategory.slug}`;
}

// Find a post by slug across all categories (synchronous for components)
export function findPostBySlug(slug: string): Post | null {
  const categories: Category[] = ['guides', 'how-to', 'problems', 'products', 'comparisons', 'blog', 'about'];

  for (const category of categories) {
    const filePath = path.join(postsDirectory, category, `${slug}.mdx`);

    try {
      if (fs.existsSync(filePath)) {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        const frontmatter = data as PostFrontmatter;

        return {
          slug: frontmatter.slug || slug,
          title: frontmatter.title || '',
          excerpt: frontmatter.excerpt || '',
          category: category,
          author: frontmatter.author || 'sara-kim',
          publishedAt: frontmatter.publishedAt || new Date().toISOString().split('T')[0],
          updatedAt: frontmatter.updatedAt,
          readTime: frontmatter.readTime,
          coverImage: frontmatter.coverImage,
          difficulty: frontmatter.difficulty,
          steps: frontmatter.steps,
          tags: frontmatter.tags,
        };
      }
    } catch {
      continue;
    }
  }

  return null;
}

export async function getPostContentComponent(
  category: Category,
  slug: string
): Promise<ComponentType | null> {
  try {
    const mdxModule = await import(`@/content/posts/${category}/${slug}.mdx`);
    return mdxModule.default as ComponentType;
  } catch {
    return null;
  }
}
