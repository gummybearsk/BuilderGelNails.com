import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components';
import { getAllPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Builder Gel Blog - Latest Tips, News & Inspiration',
  description:
    'Stay updated with the latest builder gel tips, nail trends, and industry news. Fresh content for nail enthusiasts and professionals.',
  openGraph: {
    title: 'Builder Gel Blog - Latest Tips, News & Inspiration',
    description: 'Stay updated with the latest builder gel tips and nail trends.',
  },
};

export default async function BlogPage() {
  const allPosts = await getAllPosts();

  // Get latest posts (limit to 12)
  const posts = allPosts.slice(0, 12);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary-100 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mt-6 mb-4">
            The Builder Gel Blog
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl">
            Tips, trends, and everything builder gel. I share what I learn from
            testing products, new techniques I discover, and answers to
            questions I hear most often.
          </p>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-6 border-b border-secondary-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-medium"
            >
              All Posts
            </Link>
            <Link
              href="/guides"
              className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/how-to"
              className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 transition-colors"
            >
              How-To
            </Link>
            <Link
              href="/problems"
              className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 transition-colors"
            >
              Problems
            </Link>
            <Link
              href="/products"
              className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 transition-colors"
            >
              Products
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {posts.length > 0 ? (
            <>
              {/* Featured Post (first post) */}
              {posts[0] && (
                <article className="mb-12 bg-white rounded-2xl border border-secondary-200 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid md:grid-cols-2 gap-0">
                    <div className="aspect-video md:aspect-auto bg-secondary-100 relative">
                      {posts[0].coverImage ? (
                        <img
                          src={posts[0].coverImage}
                          alt={posts[0].title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-8xl">💅</span>
                        </div>
                      )}
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <span className="text-sm font-medium text-primary-600 mb-2">
                        {posts[0].category?.toUpperCase() || 'FEATURED'}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4 hover:text-primary-600 transition-colors">
                        <Link href={`/${posts[0].category}/${posts[0].slug}`}>
                          {posts[0].title}
                        </Link>
                      </h2>
                      <p className="text-secondary-600 mb-6 line-clamp-3">
                        {posts[0].excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-secondary-500">
                          {posts[0].readTime}
                        </span>
                        <Link
                          href={`/${posts[0].category}/${posts[0].slug}`}
                          className="text-primary-600 font-medium hover:text-primary-700"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              )}

              {/* Rest of posts */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.slice(1).map((post) => (
                  <article
                    key={post.slug}
                    className="bg-white rounded-xl border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video bg-secondary-100 relative">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="text-5xl">✨</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium text-primary-600 mb-2 block">
                        {post.category?.toUpperCase()}
                      </span>
                      <h3 className="text-lg font-bold text-secondary-900 mb-2 hover:text-primary-600 transition-colors">
                        <Link href={`/${post.category}/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-secondary-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <span className="text-xs text-secondary-500">
                        {post.readTime}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </>
          ) : (
            /* Placeholder content */
            <div className="text-center py-16">
              <div className="text-6xl mb-6">✍️</div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Blog Posts Coming Soon
              </h2>
              <p className="text-secondary-600 max-w-md mx-auto mb-8">
                I&apos;m working on fresh content to help you master builder gel.
                In the meantime, explore our main sections:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
                <Link
                  href="/guides"
                  className="p-6 bg-secondary-50 rounded-xl hover:bg-secondary-100 transition-colors"
                >
                  <span className="text-3xl mb-2 block">📖</span>
                  <span className="font-semibold text-secondary-900">Guides</span>
                </Link>
                <Link
                  href="/how-to"
                  className="p-6 bg-secondary-50 rounded-xl hover:bg-secondary-100 transition-colors"
                >
                  <span className="text-3xl mb-2 block">🎯</span>
                  <span className="font-semibold text-secondary-900">How-To</span>
                </Link>
                <Link
                  href="/problems"
                  className="p-6 bg-secondary-50 rounded-xl hover:bg-secondary-100 transition-colors"
                >
                  <span className="text-3xl mb-2 block">🔧</span>
                  <span className="font-semibold text-secondary-900">Problems</span>
                </Link>
                <Link
                  href="/products"
                  className="p-6 bg-secondary-50 rounded-xl hover:bg-secondary-100 transition-colors"
                >
                  <span className="text-3xl mb-2 block">💅</span>
                  <span className="font-semibold text-secondary-900">Products</span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-12 bg-secondary-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Stay in the Loop
          </h2>
          <p className="text-secondary-300 mb-8 max-w-xl mx-auto">
            New articles, product reviews, and tips delivered to your inbox.
            No spam—just nail goodness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors">
              Subscribe
            </button>
          </div>
          <p className="text-xs text-secondary-500 mt-4">
            Newsletter coming soon. Check back later!
          </p>
        </div>
      </section>
    </div>
  );
}
