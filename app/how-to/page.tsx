import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components';
import { getPostsByCategory } from '@/lib/posts';

export const metadata: Metadata = {
  title: 'How-To Articles - Step-by-Step Builder Gel Tutorials',
  description:
    'Detailed how-to tutorials for builder gel application. Learn removal, fill techniques, French tips, and more with clear step-by-step instructions.',
  openGraph: {
    title: 'How-To Articles - Step-by-Step Builder Gel Tutorials',
    description:
      'Detailed how-to tutorials for builder gel application and techniques.',
  },
};

export default async function HowToPage() {
  const posts = await getPostsByCategory('how-to');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-accent-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'How-To' }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mt-6 mb-4">
            How-To Tutorials
          </h1>
          <p className="text-xl text-secondary-600 max-w-3xl">
            Clear, step-by-step instructions for every builder gel technique.
            Whether you&apos;re learning removal, mastering fills, or creating
            designs, these tutorials have you covered.
          </p>
        </div>
      </section>

      {/* Popular How-To Categories */}
      <section className="py-12 border-b border-secondary-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-xl font-bold text-secondary-900 mb-6">
            Quick Jump
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              'Application',
              'Removal',
              'Fill-Ins',
              'Extensions',
              'French Tips',
              'Nail Art',
              'Repairs',
            ].map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-secondary-100 text-secondary-700 rounded-full text-sm font-medium hover:bg-secondary-200 cursor-pointer transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How-To Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="p-6 bg-white rounded-xl border border-secondary-200 hover:shadow-lg transition-shadow"
                >
                  <h2 className="text-xl font-bold text-secondary-900 mb-2 hover:text-primary-600 transition-colors">
                    <Link href={`/how-to/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-secondary-600 mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-secondary-500">
                    <span>{post.readTime}</span>
                    {post.steps && <span>{post.steps} steps</span>}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            /* Placeholder content */
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🎯</div>
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Tutorials Coming Soon
              </h2>
              <p className="text-secondary-600 max-w-md mx-auto mb-8">
                Step-by-step how-to guides are in the works. Here&apos;s what&apos;s
                coming:
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    title: 'How to Apply Builder Gel',
                    desc: 'Perfect application technique',
                  },
                  {
                    title: 'How to Remove Builder Gel',
                    desc: 'Safe removal without damage',
                  },
                  {
                    title: 'How to Do Fill-Ins',
                    desc: 'Maintain your manicure',
                  },
                  {
                    title: 'How to Create Extensions',
                    desc: 'Add length with forms or tips',
                  },
                  {
                    title: 'How to Fix Lifting',
                    desc: 'Troubleshoot common issues',
                  },
                  {
                    title: 'How to Build an Apex',
                    desc: 'Structural strength tips',
                  },
                ].map((item) => (
                  <div key={item.title} className="p-6 bg-secondary-50 rounded-xl text-left">
                    <h3 className="font-semibold text-secondary-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-secondary-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-accent-50">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl font-bold text-secondary-900 mb-4">
            Need Help With Something Specific?
          </h2>
          <p className="text-secondary-600 mb-6">
            Check out our troubleshooting guides for solutions to common
            problems.
          </p>
          <Link
            href="/problems"
            className="inline-block px-6 py-3 bg-accent-600 text-white font-semibold rounded-full hover:bg-accent-700 transition-colors"
          >
            View Problem Solutions
          </Link>
        </div>
      </section>
    </div>
  );
}
