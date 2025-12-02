import Link from 'next/link';
import { findPostBySlug, getPostPath } from '@/lib/posts';

interface InternalLinkCardProps {
  slug: string;
}

export function InternalLinkCard({ slug }: InternalLinkCardProps) {
  const post = findPostBySlug(slug);

  if (!post) {
    // Graceful fallback if post doesn't exist yet
    return (
      <div className="my-6 p-4 bg-secondary-50 border border-secondary-200 rounded-lg">
        <p className="text-sm text-secondary-500">
          Related article coming soon: <span className="font-medium">{slug}</span>
        </p>
      </div>
    );
  }

  const path = getPostPath(post);

  return (
    <Link
      href={path}
      className="my-6 block p-4 bg-gradient-to-r from-primary-50 to-white border border-primary-200 rounded-lg hover:border-primary-400 hover:shadow-md transition-all group"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
          <svg
            className="w-5 h-5 text-primary-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-secondary-900 group-hover:text-primary-700 transition-colors line-clamp-2">
            {post.title}
          </h4>
          <p className="mt-1 text-sm text-secondary-600 line-clamp-2">
            {post.excerpt}
          </p>
          <span className="mt-2 inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
            Read more
            <svg
              className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
