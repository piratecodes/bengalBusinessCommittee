"use client";
import React from 'react';
// Using standard 'a' tags for this environment

// --- Navigation Links Data ---
const termsSections = [
  {
    id: 'terms-1',
    title: 'Introduction',
    href: '#terms-1',
  },
  {
    id: 'terms-2',
    title: 'Use of Our Service',
    href: '#terms-2',
  },
  {
    id: 'terms-3',
    title: 'Intellectual Property',
    href: '#terms-3',
  },
  {
    id: 'terms-4',
    title: 'Analytics & Remarketing',
    href: '#terms-4',
  },
  {
    id: 'terms-5',
    title: 'Third-Party Links',
    href: '#terms-5',
  },
  {
    id: 'terms-6',
    title: 'Limitation of Liability',
    href: '#terms-6',
  },
  {
    id: 'terms-7',
    title: 'Governing Law',
    href: '#terms-7',
  },
  {
    id: 'terms-8',
    title: 'Changes to These Terms',
    href: '#terms-8',
  },
  {
    id: 'terms-9',
    title: 'Contact Us',
    href: '#terms-9',
  },
];

// --- Left-Side Navigation Component ---
function TermsNav({ activeId }) {
  return (
    <nav className="space-y-2" aria-label="Terms and Conditions Sections">
      {termsSections.map((section) => (
        <a
          key={section.id}
          href={section.href}
          className={`
            block px-4 py-2 rounded-lg text-lg
            ${
              activeId === section.id
                ? 'bg-purple-900/50 text-purple-100' // Active state
                : 'text-slate-600 hover:bg-gray-800/50 hover:text-stone-700' // Inactive state
            }
          `}
        >
          {section.title}
        </a>
      ))}
    </nav>
  );
}

// --- Main Terms and Conditions Page Component ---
export default function TermsAndConditionsPage() {
  // State to hold the currently active section ID
  const [activeId, setActiveId] = React.useState('terms-1');

  // --- Scroll-Spying Logic ---
  React.useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = 'terms-1';
      let minDistance = Infinity;

      termsSections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top } = element.getBoundingClientRect();
          const distance = Math.abs(top - 150); // 150px offset

          if (distance < minDistance) {
            minDistance = distance;
            currentSectionId = section.id;
          }
        }
      });

      setActiveId(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // Main container with no background
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-12 md:gap-16">
        {/* --- Left Column: Sticky Navigation --- */}
        <aside className="md:col-span-4 lg:col-span-3 mb-12 md:mb-0">
          <div className="md:sticky md:top-24">
            <h3 className="text-2xl font-bold text-stone-700 mb-6">
              Terms Sections
            </h3>
            <TermsNav activeId={activeId} />
          </div>
        </aside>

        {/* --- Right Column: Scrollable Content --- */}
        <main className="md:col-span-8 lg:col-span-9">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-stone-700 mb-4">
              Terms and Conditions
            </h1>
            <p className="text-xl text-purple-300">
              Last updated: November 03, 2025
            </p>
          </div>

          {/* Terms Content */}
          <div className="space-y-12 text-lg text-slate-600 leading-relaxed">
            <p>
              Welcome to Bengal Business Committee ("we," "our," "us," or "Straxcel"). These Terms and Conditions govern your use of our website [https://bbc.straxcel.com] (the "Site"). By accessing or using our Site, you agree to be bound by these Terms and Conditions and our Privacy Policy.
            </p>

            {/* Section 1 */}
            <section
              id="terms-1"
              className="scroll-mt-24" // Offset for sticky nav
            >
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                1. Introduction
              </h2>
              <div className="space-y-4">
                <p>
                  These Terms and Conditions ("Terms") apply to all visitors, users, and others who access or use the Site. Please read them carefully. If you disagree with any part of the terms, then you may not access the Site.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="terms-2" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                2. Use of Our Service
              </h2>
              <div className="space-y-4">
                <p>
                  Our Site provides information about our marketing, app development, and digital services. You agree not to use the Site for any purpose that is unlawful or prohibited by these Terms.
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>You may not use the Site in any manner that could damage, disable, overburden, or impair the Site.</li>
                  <li>You may not attempt to gain unauthorized access to any part of the Site, or any systems or networks connected to the Site.</li>
                  <li>You may not use any automated system, including "robots," "spiders," or "offline readers," to access the Site in a manner that sends more request messages to the servers than a human can reasonably produce in the same period.</li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="terms-3" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                3. Intellectual Property
              </h2>
              <div className="space-y-4">
                <p>
                  The Site and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of Straxcel and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Straxcel.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="terms-4" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                4. Analytics & Remarketing
              </h2>
              <div className="space-y-4">
                 <p>
                  We use third-party Service Providers, such as Google Analytics, Meta Analytics, and Vercel Analytics, to monitor and analyze the use of our Site. We also use remarketing services to advertise on third-party websites to you after you have visited our Site. These services use cookies to serve ads based on your past visits.
                </p>
              </div>
            </section>

            {/* Section 5 */}
            <section id="terms-5" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                5. Third-Party Links
              </h2>
              <p>
                Our Site may contain links to third-party web sites or services that are not owned or controlled by Straxcel. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Straxcel shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such web sites or services.
              </p>
            </section>

            {/* Section 6 */}
            <section id="terms-6" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                6. Limitation of Liability
              </h2>
              <p>
                In no event shall Straxcel, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from (i) your access to or use of or inability to access or use the Site; (ii) any conduct or content of any third party on the Site; (iii) any content obtained from the Site; and (iv) unauthorized access, use or alteration of your transmissions or content, whether based on warranty, contract, tort (including negligence) or any other legal theory, whether or not we have been informed of the possibility of such damage.
              </p>
            </section>

            {/* Section 7 */}
            <section id="terms-7" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                7. Governing Law
              </h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws of India, specifically the state of West Bengal, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>
            
            {/* Section 8 */}
            <section id="terms-8" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                8. Changes to These Terms
              </h2>
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will notify you of any changes by posting the new Terms and Conditions on this page. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
              </p>
            </section>

            {/* Section 9 */}
            <section id="terms-9" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                9. Contact Us
              </h2>
              <p>
                If you have any questions about these Terms, you can
                contact us:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>By Email:</strong>{' '}
                  <a
                    href="mailto:info@bbc.straxcel.com"
                    className="text-purple-300 hover:text-purple-100 underline"
                  >
                    info@bbc.straxcel.com
                  </a>
                </li>
                <li>
                  <strong>By Webpage:</strong>{' '}
                  <a
                    href="https://bbc.straxcel.com/contact"
                    className="text-purple-300 hover:text-purple-100 underline"
                  >
                    https://bbc.straxcel.com/contact
                  </a>
                </li>
                <li>
                  <strong>By Post Mail:</strong> Straxcel, Bankura, Simlapal,
                  West Bengal 722151, India
                </li>
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

