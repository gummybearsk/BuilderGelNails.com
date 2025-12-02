import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleLayout } from '@/components';
import { getPostBySlug, getAllPosts } from '@/lib/posts';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug('products', slug);

  if (!post) {
    return {
      title: 'Review Not Found',
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
    },
  };
}

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts
    .filter((post) => post.category === 'products')
    .map((post) => ({
      slug: post.slug,
    }));
}

function PlaceholderContent({ excerpt, title }: { excerpt: string; title: string }) {
  return (
    <div className="prose prose-lg max-w-none">
      <p className="lead">{excerpt}</p>
      <div className="my-8 p-6 bg-secondary-50 rounded-xl text-center">
        <p className="text-secondary-600 mb-0">
          Full product review coming soon. This review will cover detailed
          testing results for {title.toLowerCase()}.
        </p>
      </div>
    </div>
  );
}

export default async function ProductReviewPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug('products', slug);

  if (!post) {
    notFound();
  }

  return (
    <ArticleLayout post={post} showAffiliate>
      <PlaceholderContent excerpt={post.excerpt} title={post.title} />
    </ArticleLayout>
  );
}
