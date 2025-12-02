import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components';
import { getPostsByCategory } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'Builder Gel Problems & Fixes - Troubleshooting Guide',
  description:
    'Solutions for common builder gel problems including lifting, peeling, bubbles, and cracking. Expert troubleshooting tips to fix your manicure.',
  openGraph: {
    title: 'Builder Gel Problems & Fixes - Troubleshooting Guide',
    description:
      'Solutions for common builder gel problems including lifting, peeling, and more.',
  },
};

const commonProblems = [
  {
    problem: 'Lifting at Cuticles',
    cause: 'Incomplete prep or product touching skin',
    icon: '⬆️',
  },
  {
    problem: 'Peeling or Chipping',
    cause: 'Thin application or improper curing',
    icon: '📄',
  },
  {
    problem: 'Bubbles in Gel',
    cause: 'Shaking bottle or applying too thick',
    icon: '🫧',
  },
  {
    problem: 'Gel Won&apos;t Cure',
    cause: 'Weak lamp or incompatible products',
    icon: '💡',
  },
  {
    problem: 'Cracking',
    cause: 'Too rigid formula or over-curing',
    icon: '💔',
  },
  {
    problem: 'Uneven Surface',
    cause: 'Poor self-leveling or rushed application',
    icon: '📐',
  },
];

export default async function ProblemsPage() {
  const posts = await getPostsByCategory('problems');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-rose-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'Problems & Fixes' }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mt-6 mb-4">
            Problems & Fixes
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl">
            Don&apos;t worry—every nail tech has been there. I&apos;ve troubleshot
            thousands of builder gel issues, and most have simple solutions.
            Find your problem below.
          </p>
        </div>
      </section>

      {/* Quick Diagnosis Grid */}
      <section className="py-12 border-b border-secondary-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-secondary-900 mb-6">
            Quick Diagnosis
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonProblems.map((item) => (
              <div
                key={item.problem}
                className="p-5 bg-white rounded-xl border border-secondary-200 hover:border-primary-300 hover:shadow-md transition-all cursor-pointer"
              >
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-secondary-900">
                      {item.problem}
                    </h3>
                    <p className="text-sm text-secondary-500 mt-1">
                      Common cause: {item.cause}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Articles */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-2xl font-bold text-secondary-900 mb-8">
            In-Depth Troubleshooting Guides
          </h2>

          {posts.length > 0 ? (
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="p-6 bg-white rounded-xl border border-secondary-200 hover:shadow-lg transition-shadow"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-secondary-900 mb-2 hover:text-primary-600 transition-colors">
                        <Link href={`/problems/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="text-secondary-600 line-clamp-2">
                        {post.excerpt}
                      </p>
                    </div>
                    <Link
                      href={`/problems/${post.slug}`}
                      className="flex-shrink-0 px-5 py-2 bg-primary-50 text-primary-700 font-medium rounded-full hover:bg-primary-100 transition-colors"
                    >
                      Read Solution →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Placeholder content */
            <div className="bg-secondary-50 rounded-2xl p-8 md:p-12">
              <div className="text-center mb-10">
                <div className="text-6xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">
                  Detailed Guides Coming Soon
                </h3>
                <p className="text-secondary-600">
                  Full troubleshooting articles are on the way. In the meantime,
                  here are quick tips:
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">⬆️</span> Fixing Lifting
                  </h4>
                  <ul className="space-y-2 text-secondary-600">
                    <li>• Push back and remove all cuticle properly</li>
                    <li>• Use a dehydrator and primer</li>
                    <li>• Keep gel away from skin by 1mm</li>
                    <li>• Apply thinner layers and cap the free edge</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">🫧</span> Fixing Bubbles
                  </h4>
                  <ul className="space-y-2 text-secondary-600">
                    <li>• Never shake the bottle—roll it gently</li>
                    <li>• Apply thin, even coats</li>
                    <li>• Let product self-level before curing</li>
                    <li>• Use a clean brush without old product</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">💡</span> Curing Issues
                  </h4>
                  <ul className="space-y-2 text-secondary-600">
                    <li>• Check if lamp wattage matches product needs</li>
                    <li>• Replace bulbs every 6-12 months</li>
                    <li>• Cure for full recommended time</li>
                    <li>• Don&apos;t move hand during curing</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6">
                  <h4 className="font-bold text-secondary-900 mb-4 flex items-center gap-2">
                    <span className="text-xl">💔</span> Preventing Cracks
                  </h4>
                  <ul className="space-y-2 text-secondary-600">
                    <li>• Choose flexible formulas for natural nails</li>
                    <li>• Don&apos;t over-cure (follow times exactly)</li>
                    <li>• Maintain proper apex structure</li>
                    <li>• Avoid very long extensions on weak nails</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-12 bg-primary-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Problem Not Listed?
          </h2>
          <p className="text-secondary-600 mb-6">
            Check our complete guides for more detailed coverage of builder gel
            techniques and best practices.
          </p>
          <Link
            href="/guides"
            className="inline-block px-6 py-3 bg-primary-600 text-white font-semibold rounded-full hover:bg-primary-700 transition-colors"
          >
            Browse All Guides
          </Link>
        </div>
      </section>
    </div>
  );
}
