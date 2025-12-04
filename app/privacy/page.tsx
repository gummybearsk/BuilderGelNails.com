import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for BuilderGelNails.com - how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}
        />

        <h1 className="text-4xl font-bold text-secondary-900 mt-6 mb-8">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            BuilderGelNails.com (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is
            committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard information when
            you visit our website.
          </p>

          <h2>Information We Collect</h2>

          <h3>Automatically Collected Information</h3>
          <p>
            When you visit our website, we automatically collect certain
            information about your device, including:
          </p>
          <ul>
            <li>
              Browser type and version
            </li>
            <li>
              Operating system
            </li>
            <li>
              Pages visited and time spent on pages
            </li>
            <li>
              Referring website addresses
            </li>
            <li>
              General geographic location (country/city level)
            </li>
          </ul>

          <h3>Cookies and Tracking Technologies</h3>
          <p>
            We use cookies and similar tracking technologies to:
          </p>
          <ul>
            <li>Analyze website traffic and usage patterns</li>
            <li>Remember your preferences</li>
            <li>Improve our website experience</li>
          </ul>

          <h2>Google Analytics</h2>
          <p>
            We use Google Analytics to understand how visitors interact with our
            website. Google Analytics collects information such as:
          </p>
          <ul>
            <li>How often users visit the site</li>
            <li>What pages they visit</li>
            <li>What other sites they used before coming to our site</li>
          </ul>
          <p>
            You can opt out of Google Analytics by installing the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </p>

          <h2>Affiliate Links</h2>
          <p>
            Our website contains affiliate links to products we recommend. When
            you click these links, the affiliate partner may place cookies on
            your device to track the referral. We may earn a commission if you
            make a purchase, at no additional cost to you.
          </p>
          <p>
            These third-party affiliates have their own privacy policies
            governing their data collection practices.
          </p>

          <h2>How We Use Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Improve our website content and user experience</li>
            <li>Analyze traffic patterns and site usage</li>
            <li>Understand what content is most valuable to our readers</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2>Information Sharing</h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except:
          </p>
          <ul>
            <li>To service providers who assist in operating our website</li>
            <li>When required by law or to protect our rights</li>
            <li>With your consent</li>
          </ul>

          <h2>Data Security</h2>
          <p>
            We implement reasonable security measures to protect your
            information. However, no method of transmission over the Internet is
            100% secure, and we cannot guarantee absolute security.
          </p>

          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal information we have about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Object to certain processing of your information</li>
            <li>Opt out of certain data collection</li>
          </ul>

          <h2>Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under 13 years of age. We
            do not knowingly collect personal information from children under
            13.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will post
            any changes on this page and update the &quot;Last updated&quot; date.
          </p>

          <h2>Questions About This Policy</h2>
          <p>
            If you have questions about this Privacy Policy, please review our{' '}
            <Link href="/about">About page</Link> for more information about how
            we handle data and privacy.
          </p>
        </div>
      </div>
    </div>
  );
}
