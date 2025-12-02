import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs, ProductCard, AffiliateDisclosure } from '@/components';
import { products } from '@/lib/products';
import { getPostsByCategory } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Best Builder Gel Products - Reviews & Recommendations',
  description:
    'Honest reviews of the best builder gel products for every skill level and budget. Compare top brands like Beetles, Modelones, and professional options.',
  openGraph: {
    title: 'Best Builder Gel Products - Reviews & Recommendations',
    description:
      'Honest reviews of the best builder gel products for every skill level.',
  },
};

export default async function ProductsPage() {
  const posts = await getPostsByCategory('products');

  // Group products by category
  const budgetFriendly = products.filter(
    (p) => p.priceRange === '$' || p.priceRange === '$$'
  );
  const professional = products.filter(
    (p) => p.priceRange === '$$$' || p.priceRange === '$$$$'
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Products' }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mt-6 mb-4">
            Builder Gel Products
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl mb-6">
            I&apos;ve tested dozens of builder gels over the years—from $8 Amazon
            finds to $40 salon brands. Here are the ones actually worth your
            money, organized by budget and experience level.
          </p>
          <AffiliateDisclosure />
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-8 border-b border-secondary-100 sticky top-16 bg-white z-10">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#budget-friendly"
              className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 transition-colors"
            >
              Budget-Friendly
            </a>
            <a
              href="#professional"
              className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 transition-colors"
            >
              Professional Grade
            </a>
            <a
              href="#comparison"
              className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 transition-colors"
            >
              Comparison Chart
            </a>
            <a
              href="#reviews"
              className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 transition-colors"
            >
              Full Reviews
            </a>
          </div>
        </div>
      </section>

      {/* Budget-Friendly Section */}
      <section id="budget-friendly" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3">
              Budget-Friendly Options
            </h2>
            <p className="text-secondary-600">
              Great for beginners or anyone who wants quality without breaking
              the bank. These products deliver solid results under $20.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {budgetFriendly.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Professional Section */}
      <section id="professional" className="py-12 md:py-16 bg-secondary-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3">
              Professional Grade
            </h2>
            <p className="text-secondary-600">
              Salon-quality products with superior performance. Worth the
              investment if you&apos;re serious about nails or working
              professionally.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {professional.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Chart */}
      <section id="comparison" className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-8">
            Quick Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl border border-secondary-200">
              <thead>
                <tr className="bg-secondary-50">
                  <th className="text-left p-4 font-semibold text-secondary-900">
                    Product
                  </th>
                  <th className="text-left p-4 font-semibold text-secondary-900">
                    Price
                  </th>
                  <th className="text-left p-4 font-semibold text-secondary-900">
                    Best For
                  </th>
                  <th className="text-left p-4 font-semibold text-secondary-900">
                    HEMA-Free
                  </th>
                  <th className="text-left p-4 font-semibold text-secondary-900">
                    Viscosity
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, index) => (
                  <tr
                    key={product.id}
                    className={
                      index % 2 === 0 ? 'bg-white' : 'bg-secondary-50/50'
                    }
                  >
                    <td className="p-4">
                      <span className="font-medium text-secondary-900">
                        {product.name}
                      </span>
                    </td>
                    <td className="p-4 text-secondary-600">
                      {product.priceRange}
                    </td>
                    <td className="p-4 text-secondary-600">{product.bestFor}</td>
                    <td className="p-4">
                      {product.hemaFree ? (
                        <span className="text-green-600">✓ Yes</span>
                      ) : (
                        <span className="text-secondary-400">No</span>
                      )}
                    </td>
                    <td className="p-4 text-secondary-600">
                      {product.viscosity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Full Reviews */}
      <section id="reviews" className="py-12 md:py-16 bg-secondary-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-8">
            In-Depth Reviews
          </h2>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-xl border border-secondary-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-secondary-900 mb-2 hover:text-primary-600 transition-colors">
                      <Link href={`/products/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="text-secondary-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/products/${post.slug}`}
                      className="text-primary-600 font-medium hover:text-primary-700"
                    >
                      Read Full Review →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl">
              <div className="text-5xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">
                Detailed Reviews Coming Soon
              </h3>
              <p className="text-secondary-600 max-w-md mx-auto">
                I&apos;m working on comprehensive reviews for each product with
                real-world testing, wear tests, and detailed pros/cons.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Buying Tips */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-8 text-center">
            What to Look For
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary-50 rounded-xl">
              <h3 className="font-bold text-secondary-900 mb-3">
                🔍 For Beginners
              </h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• Self-leveling formula (more forgiving)</li>
                <li>• Medium viscosity (easier to control)</li>
                <li>• Brush-in-bottle format (convenient)</li>
                <li>• Budget-friendly to practice with</li>
              </ul>
            </div>
            <div className="p-6 bg-accent-50 rounded-xl">
              <h3 className="font-bold text-secondary-900 mb-3">
                💅 For Professionals
              </h3>
              <ul className="space-y-2 text-secondary-600">
                <li>• Pot format for more control</li>
                <li>• Multiple viscosities for different uses</li>
                <li>• HEMA-free for sensitive clients</li>
                <li>• Proven long-term wear performance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-primary-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start?
          </h2>
          <p className="text-primary-100 mb-6">
            Check out our beginner&apos;s guide for step-by-step instructions on
            using any builder gel.
          </p>
          <Link
            href="/guides"
            className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-colors"
          >
            View Application Guides
          </Link>
        </div>
      </section>
    </div>
  );
}
