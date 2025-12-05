import Link from 'next/link';
import { getAllPosts, getPostPath } from '@/lib/posts';
import { getAllProducts } from '@/lib/products';
import { getDefaultAuthor } from '@/lib/authors';

// Question cards for the homepage
const questions = [
  {
    question: 'What is builder gel?',
    answer: 'Builder gel is a thick, self-leveling gel used to add strength and structure to natural nails or create extensions.',
    link: '/guides/builder-gel-complete-guide',
  },
  {
    question: 'What is BIAB™?',
    answer: 'BIAB™ (Builder In A Bottle) is a trademarked brush-on builder gel by The GelBottle Inc. We also cover similar bottle-applied builder gels.',
    link: '/guides/builder-gel-complete-guide',
  },
  {
    question: 'How do I use builder gel?',
    answer: 'Prep, apply base coat, build structure with the apex technique, cure, and finish with top coat.',
    link: '/how-to/how-to-use-builder-gel',
  },
  {
    question: 'How do I remove builder gel?',
    answer: 'File down 80-90%, soak in acetone for 15-25 minutes, and gently push off. Never peel or pry.',
    link: '/how-to/how-to-remove-builder-gel',
  },
  {
    question: 'Builder gel vs acrylic?',
    answer: 'Builder gel is lighter, self-leveling, low odor, and soak-off. Acrylic is stronger but heavier and requires more filing.',
    link: '/comparisons/builder-gel-vs-acrylic-vs-biab',
  },
  {
    question: 'Builder gel vs poly gel?',
    answer: 'Builder gel self-levels and cures quickly. Poly gel requires slip solution and has unlimited work time.',
    link: '/comparisons/builder-gel-vs-poly-gel',
  },
  {
    question: 'Why is my builder gel sticky or lifting?',
    answer: 'Sticky residue is normal (use top coat). Lifting usually means improper prep or under-curing.',
    link: '/problems/builder-gel-sticky-or-lifting-fixes',
  },
  {
    question: 'Why is my builder gel cracking?',
    answer: 'Cracking often results from thin application, missing apex, or over-filing. Learn proper technique.',
    link: '/problems/builder-gel-cracking-fixes',
  },
  {
    question: 'Best builder gel for beginners?',
    answer: 'Self-leveling formulas from Beetles, Modelones, or The GelBottle BIAB™ are great starting points.',
    link: '/products/best-builder-gel-kits',
  },
  {
    question: 'Can I use builder gel on natural nails?',
    answer: 'Yes! Builder gel is excellent for strengthening weak or damaged natural nails without extensions.',
    link: '/guides/builder-gel-natural-nails',
  },
];

// Start Here paths
const startHerePaths = [
  {
    title: "I'm New to Builder Gel",
    description: 'Start with the basics: what builder gel is, how it differs from other products, and what you need.',
    link: '/guides/builder-gel-complete-guide',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'DIY at Home',
    description: 'Ready to try? Follow my step-by-step tutorial for applying builder gel at home safely.',
    link: '/how-to/how-to-use-builder-gel',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Find the Right Kit',
    description: 'Budget-friendly Amazon kits or pro-grade options? I review both so you can choose wisely.',
    link: '/products',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
];

export default async function HomePage() {
  const allPosts = await getAllPosts();
  const products = getAllProducts().slice(0, 4);
  const author = getDefaultAuthor();

  // Get recent posts for "Latest Articles"
  const recentPosts = allPosts.filter((post) => post.category !== 'about').slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-secondary-900 leading-tight">
              Builder Gel Nails & BIAB:
              <span className="block text-primary-600">Clear Guides, Tutorials & Product Picks</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto">
              Your complete guide to builder gel nails and BIAB-style bottle-applied builder gels. Expert tutorials, honest product reviews, and professional troubleshooting tips from a licensed nail technician.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/guides/builder-gel-complete-guide"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                Start Learning
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 font-medium rounded-lg border-2 border-primary-600 hover:bg-primary-50 transition-colors"
              >
                Browse Kits
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is Builder Gel Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-secondary-900">
              What Are Builder Gel & BIAB-Style Products?
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              <strong>Builder gel</strong> is a thick, self-leveling gel that adds strength and structure to your nails.
              Unlike regular gel polish, it can be used to reinforce weak nails, create extensions, or build an apex for durability.
            </p>
            <p className="mt-4 text-lg text-secondary-600">
              <strong>BIAB™</strong> (Builder In A Bottle) is a trademarked brush-on builder gel by The GelBottle Inc.
              We also review similar <em>bottle-applied builder gels</em> from various brands—budget-friendly Amazon options
              to professional salon products.
            </p>
            <p className="mt-4 text-sm text-secondary-500">
              Note: BIAB™ is a trademark of The GelBottle Inc. We independently review multiple brands.
            </p>
          </div>
        </div>
      </section>

      {/* Question Grid */}
      <section className="py-16 bg-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-secondary-900 text-center mb-12">
            Common Questions Answered
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {questions.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-secondary-200 group"
              >
                <h3 className="text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm text-secondary-600">{item.answer}</p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-600">
                  Read more
                  <svg className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Start Here Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-secondary-900 text-center mb-4">
            Start Here
          </h2>
          <p className="text-center text-secondary-600 mb-12 max-w-2xl mx-auto">
            Choose your path based on where you are in your builder gel journey.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {startHerePaths.map((path, index) => (
              <Link
                key={index}
                href={path.link}
                className="bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 border border-primary-200 hover:border-primary-400 hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-4 group-hover:bg-primary-200 transition-colors">
                  {path.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">
                  {path.title}
                </h3>
                <p className="mt-2 text-secondary-600">{path.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problems & Fixes Section */}
      <section className="py-16 bg-secondary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-center mb-4">
            Problems & Fixes
          </h2>
          <p className="text-center text-secondary-300 mb-12 max-w-2xl mx-auto">
            Troubleshooting common builder gel issues based on real salon experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link
              href="/problems/builder-gel-sticky-or-lifting-fixes"
              className="bg-secondary-800 rounded-lg p-6 hover:bg-secondary-700 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary-400 transition-colors">
                    Sticky or Lifting
                  </h3>
                  <p className="mt-1 text-secondary-400 text-sm">
                    Why your builder gel stays tacky or pops off—and how to fix it.
                  </p>
                </div>
              </div>
            </Link>
            <Link
              href="/problems"
              className="bg-secondary-800 rounded-lg p-6 hover:bg-secondary-700 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold group-hover:text-primary-400 transition-colors">
                    Cracking & Breaking
                  </h3>
                  <p className="mt-1 text-secondary-400 text-sm">
                    Common causes of builder gel cracking and how to prevent it.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Product Picks Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-heading font-bold text-secondary-900">
              Featured Products
            </h2>
            <Link
              href="/products"
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              View all →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-secondary-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <span className="text-xs font-medium text-primary-600 uppercase">{product.brand}</span>
                <h3 className="mt-1 text-sm font-semibold text-secondary-900 line-clamp-2">
                  {product.name}
                </h3>
                <div className="mt-2 flex items-center gap-2">
                  {product.isPro && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-accent-100 text-accent-700 rounded">Pro</span>
                  )}
                  {product.isHemaFree && (
                    <span className="px-2 py-0.5 text-xs font-medium bg-green-100 text-green-700 rounded">HEMA-Free</span>
                  )}
                </div>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer sponsored"
                  className="mt-3 inline-flex items-center text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  Check Price →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles (if we have posts) */}
      {recentPosts.length > 0 && (
        <section className="py-16 bg-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-heading font-bold text-secondary-900 text-center mb-12">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={getPostPath(post)}
                  className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
                >
                  <div className="p-6">
                    <span className="text-xs font-medium text-primary-600 uppercase">
                      {post.category}
                    </span>
                    <h3 className="mt-2 text-lg font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* About & Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl font-heading font-bold text-primary-600">
                {author.name.charAt(0)}
              </span>
            </div>
            <h2 className="text-3xl font-heading font-bold text-secondary-900">
              Meet {author.name}
            </h2>
            <p className="mt-2 text-primary-600 font-medium">{author.role}</p>
            <p className="mt-4 text-secondary-600">
              {author.bio}
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center text-primary-600 font-medium hover:text-primary-700"
            >
              About Us & Editorial Standards
              <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
