import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components';
import { authors } from '@/lib/authors';

export const metadata: Metadata = {
  title: 'About BuilderGelNails.com - Our Mission & Editorial Standards',
  description:
    'Learn about BuilderGelNails.com, our editorial standards, and our commitment to providing accurate, helpful information about builder gel nails.',
  openGraph: {
    title: 'About BuilderGelNails.com - Our Mission & Editorial Standards',
    description:
      'Learn about our editorial standards and commitment to accurate builder gel information.',
  },
};

export default function AboutPage() {
  const mainAuthor = authors['sara-kim'];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Breadcrumbs
            items={[{ label: 'Home', href: '/' }, { label: 'About' }]}
          />
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mt-6 mb-4">
            About BuilderGelNails.com
          </h1>
          <p className="text-xl text-secondary-600">
            Your trusted resource for builder gel education, honest reviews, and
            practical techniques.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2>Our Mission</h2>
            <p>
              BuilderGelNails.com exists to help nail enthusiasts and
              professionals master builder gel techniques. Whether you&apos;re doing
              your first at-home manicure or running a busy salon, we provide
              the clear, accurate information you need to succeed.
            </p>
            <p>
              The nail industry is full of conflicting advice, sponsored content
              that reads like ads, and techniques that work in theory but fail
              in practice. We cut through the noise with:
            </p>
            <ul>
              <li>
                <strong>Real-world testing</strong> — Every product review
                includes actual wear testing, not just first impressions
              </li>
              <li>
                <strong>Honest assessments</strong> — We call out what
                doesn&apos;t work, even from popular brands
              </li>
              <li>
                <strong>Practical techniques</strong> — Step-by-step
                instructions that work for real people, not just nail
                competition winners
              </li>
              <li>
                <strong>Beginner-friendly explanations</strong> — No
                gatekeeping; everyone deserves access to good information
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Meet the Author */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">
            Meet the Author
          </h2>
          <div className="bg-white rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-32 h-32 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
              <span className="text-5xl">💅</span>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-secondary-900 mb-2">
                {mainAuthor.name}
              </h3>
              <p className="text-primary-600 font-medium mb-4">
                {mainAuthor.title}
              </p>
              <p className="text-secondary-600 mb-4">{mainAuthor.bio}</p>
              <p className="text-secondary-600">
                {mainAuthor.credentials.join(' • ')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">
            Editorial Standards
          </h2>
          <div className="space-y-8">
            <div className="p-6 bg-white rounded-xl border border-secondary-200">
              <h3 className="text-xl font-bold text-secondary-900 mb-3 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                Accuracy First
              </h3>
              <p className="text-secondary-600">
                Every claim we make is based on personal testing, manufacturer
                specifications, or established industry knowledge. When
                information is anecdotal or based on limited testing, we say so
                clearly. We regularly update older content to ensure accuracy.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-secondary-200">
              <h3 className="text-xl font-bold text-secondary-900 mb-3 flex items-center gap-3">
                <span className="text-2xl">🔍</span>
                Transparent Testing
              </h3>
              <p className="text-secondary-600">
                Product reviews include our testing methodology, wear time
                results, and honest pros and cons. We test products on multiple
                nail types when possible and note any limitations in our
                testing.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-secondary-200">
              <h3 className="text-xl font-bold text-secondary-900 mb-3 flex items-center gap-3">
                <span className="text-2xl">💰</span>
                Affiliate Disclosure
              </h3>
              <p className="text-secondary-600">
                Some links on this site are affiliate links, meaning we may earn
                a commission if you make a purchase. This never influences our
                reviews or recommendations—we only recommend products we
                genuinely believe in. Affiliate relationships are clearly
                disclosed on every page containing affiliate links.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-secondary-200">
              <h3 className="text-xl font-bold text-secondary-900 mb-3 flex items-center gap-3">
                <span className="text-2xl">📝</span>
                No Sponsored Content
              </h3>
              <p className="text-secondary-600">
                We do not accept payment for reviews or write sponsored posts
                disguised as editorial content. All opinions expressed are our
                own and based on genuine experience with the products discussed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trademark Notice */}
      <section className="py-12 md:py-16 bg-secondary-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">
            Trademark Notice
          </h2>
          <div className="p-6 bg-white rounded-xl border border-secondary-200">
            <p className="text-secondary-600 mb-4">
              <strong>BIAB™</strong> (Builder In A Bottle) is a registered
              trademark of The GelBottle Inc. When we use this term on our site,
              we are referring specifically to The GelBottle Inc.&apos;s branded
              product.
            </p>
            <p className="text-secondary-600">
              For similar products from other brands, we use the generic term
              &quot;builder in a bottle&quot; or &quot;BIAB-style products.&quot; BuilderGelNails.com
              is not affiliated with, endorsed by, or sponsored by The GelBottle
              Inc. or any other brand mentioned on this site unless explicitly
              stated.
            </p>
          </div>
        </div>
      </section>

      {/* E-E-A-T Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8">
            Why Trust Us
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-primary-50 rounded-xl">
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Experience
              </h3>
              <p className="text-secondary-600">
                Our content is created by nail professionals with years of
                hands-on experience applying, teaching, and troubleshooting
                builder gel techniques.
              </p>
            </div>
            <div className="p-6 bg-accent-50 rounded-xl">
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Expertise
              </h3>
              <p className="text-secondary-600">
                We hold professional certifications and continuously educate
                ourselves on new products, techniques, and industry
                developments.
              </p>
            </div>
            <div className="p-6 bg-accent-50 rounded-xl">
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Authoritativeness
              </h3>
              <p className="text-secondary-600">
                Our recommendations are backed by real-world testing and
                aligned with professional nail industry standards and best
                practices.
              </p>
            </div>
            <div className="p-6 bg-primary-50 rounded-xl">
              <h3 className="text-xl font-bold text-secondary-900 mb-3">
                Trustworthiness
              </h3>
              <p className="text-secondary-600">
                We&apos;re transparent about affiliate relationships, acknowledge
                when we don&apos;t know something, and regularly update content for
                accuracy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 md:py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Transparent & Trustworthy
          </h2>
          <p className="text-primary-100 mb-6 max-w-xl mx-auto">
            We're committed to providing accurate, helpful information about
            builder gel. All reviews are based on real testing, and we clearly
            disclose affiliate relationships.
          </p>
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-white text-primary-600 font-semibold rounded-full hover:bg-primary-50 transition-colors"
          >
            Explore Guides
          </Link>
        </div>
      </section>
    </div>
  );
}
