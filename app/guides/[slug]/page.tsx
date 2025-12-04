import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleLayout } from '@/components';
import { getPostBySlug, getAllPosts, getPostContentComponent } from '@/lib/posts';

interface PageProps {
  params: { slug: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params;
  const post = await getPostBySlug('guides', slug);

  if (!post) {
    return {
      title: 'Guide Not Found',
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
    .filter((post) => post.category === 'guides')
    .map((post) => ({
      slug: post.slug,
    }));
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = params;
  const post = await getPostBySlug('guides', slug);
  const Content = await getPostContentComponent('guides', slug);

  if (!post || !Content) {
    notFound();
  }

  return (
    <ArticleLayout post={post} showAffiliate>
      <Content />
    </ArticleLayout>
  );
}
