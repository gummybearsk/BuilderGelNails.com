import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Breadcrumbs } from '@/components';
import { getPostsByCategory } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Builder Gel Guides - Complete Tutorials for Beginners & Pros',
  description:
    'Comprehensive builder gel guides covering everything from basics to advanced techniques. Learn proper application, nail prep, and professional tips.',
  openGraph: {
    title: 'Builder Gel Guides - Complete Tutorials for Beginners & Pros',
    description:
      'Comprehensive builder gel guides covering everything from basics to advanced techniques.',
  },
};

export default async function GuidesPage() {
  const posts = await getPostsByCategory('guides');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Guides' }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mt-6 mb-4">
            Builder Gel Guides
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl">
            From your first application to advanced apex sculpting, these guides
            walk you through every step. In my experience, proper technique
            makes all the difference between nails that last 3 weeks and ones
            that pop off in days.
          </p>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="aspect-video bg-secondary-100 relative">
                    {post.coverImage ? (
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl">📖</span>
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-secondary-900 mb-2 hover:text-primary-600 transition-colors">
                      <Link href={`/guides/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-secondary-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-secondary-500">
                      <span>{post.readTime}</span>
                      {post.difficulty && (
                        <span className="px-2 py-1 bg-primary-50 text-primary-700 rounded">
                          {post.difficulty}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Placeholder content when no posts exist yet */
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📚</div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Guides Coming Soon
              </h2>
              <p className="text-secondary-600 max-w-md mx-auto mb-8">
                I&apos;m working on comprehensive guides to help you master builder
                gel. Check back soon for step-by-step tutorials!
              </p>
              <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                <div className="p-6 bg-secondary-50 rounded-xl">
                  <h3 className="font-semibold text-secondary-900 mb-2">
                    Beginner&apos;s Complete Guide
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Everything you need to start with builder gel
                  </p>
                </div>
                <div className="p-6 bg-secondary-50 rounded-xl">
                  <h3 className="font-semibold text-secondary-900 mb-2">
                    Application Techniques
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Master proper gel placement and shaping
                  </p>
                </div>
                <div className="p-6 bg-secondary-50 rounded-xl">
                  <h3 className="font-semibold text-secondary-900 mb-2">
                    Advanced Sculpting
                  </h3>
                  <p className="text-sm text-secondary-600">
                    Create perfect apex and extensions
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related Categories */}
      <section className="py-12 bg-secondary-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Explore More Topics
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            <Link
              href="/how-to"
              className="p-6 bg-white rounded-xl text-center hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-2 block">🎯</span>
              <span className="font-semibold text-secondary-900">
                How-To Articles
              </span>
            </Link>
            <Link
              href="/problems"
              className="p-6 bg-white rounded-xl text-center hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-2 block">🔧</span>
              <span className="font-semibold text-secondary-900">
                Problem Solving
              </span>
            </Link>
            <Link
              href="/products"
              className="p-6 bg-white rounded-xl text-center hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-2 block">💅</span>
              <span className="font-semibold text-secondary-900">
                Product Reviews
              </span>
            </Link>
            <Link
              href="/blog"
              className="p-6 bg-white rounded-xl text-center hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-2 block">✨</span>
              <span className="font-semibold text-secondary-900">
                Latest Posts
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
