import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArticleLayout } from '@/components';
import { getPostBySlug, getPostContentComponent } from '@/lib/posts';

export async function generateMetadata(): Promise<Metadata> {
  const post = await getPostBySlug('about', 'about-editorial-standards');

  return {
    title: post?.title ?? 'About BuilderGelNails.com - Our Mission & Editorial Standards',
    description:
      post?.excerpt ??
      'Learn about BuilderGelNails.com, our editorial standards, and our commitment to providing accurate, helpful information about builder gel nails.',
    openGraph: {
      title: post?.title ?? 'About BuilderGelNails.com - Our Mission & Editorial Standards',
      description:
        post?.excerpt ??
        'Learn about our editorial standards and commitment to accurate builder gel information.',
    },
  };
}

export default async function AboutPage() {
  const post = await getPostBySlug('about', 'about-editorial-standards');
  const Content = await getPostContentComponent('about', 'about-editorial-standards');

  if (!post || !Content) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <ArticleLayout post={post}>
        <Content />
      </ArticleLayout>
    </div>
  );
}
