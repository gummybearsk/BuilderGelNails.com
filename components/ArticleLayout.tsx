import { ReactNode } from 'react';
import { Breadcrumbs } from './Breadcrumbs';
import { AuthorBio } from './AuthorBio';
import { AffiliateDisclosure } from './AffiliateDisclosure';
import { Post } from '@/lib/posts';

interface ArticleLayoutProps {
  post: Post;
  children: ReactNode;
  showAffiliate?: boolean;
}

export function ArticleLayout({
  post,
  children,
  showAffiliate = false,
}: ArticleLayoutProps) {
  const publishDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  const updateDate = post.updatedAt
    ? new Date(post.updatedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  // Generate breadcrumbs from category
  const categoryLabels: Record<string, string> = {
    guides: 'Guides',
    'how-to': 'How-To',
    problems: 'Problems',
    products: 'Products',
    comparisons: 'Comparisons',
    blog: 'Blog',
    about: 'About',
  };

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: categoryLabels[post.category] || post.category, href: `/${post.category}` },
    { label: post.title },
  ];

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumbs */}
      <Breadcrumbs items={breadcrumbs} />

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-secondary-900 leading-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-secondary-600">
          <AuthorBio authorId={post.author} />

          {publishDate && (
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span>{publishDate}</span>
            </div>
          )}

          {post.readTime && (
            <div className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{post.readTime}</span>
            </div>
          )}

          {updateDate && updateDate !== publishDate && (
            <div className="flex items-center gap-1 text-secondary-500">
              <span>Updated: {updateDate}</span>
            </div>
          )}
        </div>
      </header>

      {/* Affiliate Disclosure */}
      {showAffiliate && <AffiliateDisclosure />}

      {/* Content */}
      <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:text-secondary-900 prose-p:text-secondary-700 prose-a:text-primary-600 hover:prose-a:text-primary-700 prose-strong:text-secondary-900 prose-li:text-secondary-700">
        {children}
      </div>

      {/* Author Bio (Full) */}
      <div className="mt-12 pt-8 border-t border-secondary-200">
        <h3 className="text-lg font-semibold text-secondary-900 mb-4">About the Author</h3>
        <AuthorBio authorId={post.author} showFull />
      </div>
    </article>
  );
}
