import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of use for BuilderGelNails.com - please read before using our website.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-4xl py-12">
        <Breadcrumbs
          items={[{ label: 'Home', href: '/' }, { label: 'Terms of Use' }]}
        />

        <h1 className="text-4xl font-bold text-secondary-900 mt-6 mb-8">
          Terms of Use
        </h1>

        <div className="prose prose-lg max-w-none">
          <p className="lead">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <p>
            Welcome to BuilderGelNails.com. By accessing and using this website,
            you agree to be bound by these Terms of Use. If you do not agree to
            these terms, please do not use this website.
          </p>

          <h2>Use of Content</h2>
          <p>
            All content on BuilderGelNails.com, including text, images, graphics,
            and other materials, is provided for informational and educational
            purposes only. You may:
          </p>
          <ul>
            <li>View and read content for personal, non-commercial use</li>
            <li>Share links to our content on social media</li>
            <li>
              Quote brief excerpts with proper attribution and a link back to
              the source
            </li>
          </ul>
          <p>You may not:</p>
          <ul>
            <li>Copy, reproduce, or republish substantial portions of content</li>
            <li>Use content for commercial purposes without permission</li>
            <li>Modify or create derivative works from our content</li>
            <li>Remove any copyright or attribution notices</li>
          </ul>

          <h2>Disclaimer</h2>
          <p>
            <strong>
              The information on this website is provided &quot;as is&quot; without
              warranties of any kind.
            </strong>
          </p>
          <p>
            While we strive to provide accurate and up-to-date information about
            builder gel nails, nail care techniques, and products:
          </p>
          <ul>
            <li>
              We are not responsible for any errors or omissions in the content
            </li>
            <li>
              Results may vary based on individual skill, nail type, and products
              used
            </li>
            <li>
              We recommend testing products on a small area first if you have
              sensitivities
            </li>
            <li>
              Always follow manufacturer instructions for any products mentioned
            </li>
          </ul>

          <h2>Not Professional Medical Advice</h2>
          <p>
            The content on this website is not intended to be a substitute for
            professional medical advice, diagnosis, or treatment. If you
            experience any adverse reactions, nail infections, or other health
            concerns, please consult a healthcare professional or dermatologist.
          </p>

          <h2>Affiliate Disclosure</h2>
          <p>
            BuilderGelNails.com participates in affiliate programs, including the
            Amazon Associates Program. This means:
          </p>
          <ul>
            <li>
              Some links on this site are affiliate links
            </li>
            <li>
              We may earn a commission if you make a purchase through these links
            </li>
            <li>
              This comes at no additional cost to you
            </li>
            <li>
              Affiliate relationships do not influence our reviews or
              recommendations
            </li>
          </ul>
          <p>
            We only recommend products we have personally used or thoroughly
            researched.
          </p>

          <h2>Trademarks</h2>
          <p>
            All trademarks, service marks, and trade names mentioned on this
            website are the property of their respective owners. Specifically:
          </p>
          <ul>
            <li>
              BIAB™ (Builder In A Bottle) is a trademark of The GelBottle Inc.
            </li>
            <li>
              Other brand names are trademarks of their respective companies
            </li>
          </ul>
          <p>
            BuilderGelNails.com is not affiliated with, endorsed by, or sponsored
            by any of the brands mentioned unless explicitly stated.
          </p>

          <h2>External Links</h2>
          <p>
            Our website may contain links to external websites. We are not
            responsible for the content, privacy practices, or terms of use of
            these external sites. Visiting external links is at your own risk.
          </p>

          <h2>User Conduct</h2>
          <p>When using our website, you agree not to:</p>
          <ul>
            <li>Use the site for any unlawful purpose</li>
            <li>Attempt to interfere with the site&apos;s operation</li>
            <li>Collect user information without consent</li>
            <li>Post spam, malware, or harmful content</li>
            <li>Impersonate others or misrepresent your affiliation</li>
          </ul>

          <h2>Intellectual Property</h2>
          <p>
            All original content on BuilderGelNails.com, including articles,
            images, graphics, and website design, is protected by copyright law.
            The BuilderGelNails.com name and logo are our intellectual property.
          </p>

          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, BuilderGelNails.com and its
            owners shall not be liable for any:
          </p>
          <ul>
            <li>Direct, indirect, or consequential damages</li>
            <li>Loss of profits or data</li>
            <li>Personal injury or property damage</li>
            <li>
              Damages arising from your use of or inability to use this website
            </li>
          </ul>

          <h2>Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time.
            Changes will be effective immediately upon posting. Your continued
            use of the website after changes constitutes acceptance of the new
            terms.
          </p>

          <h2>Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance
            with applicable laws, without regard to conflict of law principles.
          </p>

          <h2>Contact</h2>
          <p>
            If you have questions about these Terms of Use, please contact us at:{' '}
            <a href="mailto:hello@buildergelnails.com">hello@buildergelnails.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}
