import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components';
import { getPostsByCategory } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Builder Gel Comparisons - Acrylic vs BIAB vs Poly Gel',
  description:
    'Clear, experience-based comparisons of builder gel, BIAB, acrylic, and poly gel so you can choose the right system.',
  openGraph: {
    title: 'Builder Gel Comparisons - Acrylic vs BIAB vs Poly Gel',
    description:
      'Head-to-head comparisons of builder systems with real-world pros, cons, and use cases.',
  },
};

export default async function ComparisonsPage() {
  const posts = await getPostsByCategory('comparisons');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Comparisons' }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mt-6 mb-4">
            Builder Gel Comparisons
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl">
            I compare builder gel, BIAB, acrylic, and poly gel using real salon criteria—feel on the nail,
            removal time, learning curve, cost, and who each system suits best.
          </p>
        </div>
      </section>

      {/* Comparisons Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-secondary-900 mb-2 hover:text-primary-600 transition-colors">
                      <Link href={`/comparisons/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-secondary-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-secondary-500">
                      <span>{post.readTime || '8 min read'}</span>
                      <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded">
                        Side-by-Side
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">⚖️</div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Comparisons Coming Soon
              </h2>
              <p className="text-secondary-600 max-w-md mx-auto">
                I’m testing builder gel vs BIAB vs acrylic vs poly gel so you can see the real differences.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
