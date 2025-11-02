"use client";
import React from 'react';
// Replaced next/link with standard 'a' tags for this environment
// import Link from 'next/link'; 

// --- Navigation Links Data ---
// This makes it easy to manage the nav and the content sections
const policySections = [
  {
    id: 'section-1',
    title: 'Information We Collect',
    href: '#section-1',
  },
  {
    id: 'section-2',
    title: 'Use of Information',
    href: '#section-2',
  },
  {
    id: 'section-3',
    title: 'Tracking & Analytics',
    href: '#section-3',
  },
  {
    id: 'section-4',
    title: 'Email Communications',
    href: '#section-4',
  },
  {
    id: 'section-5',
    title: 'Security & Other Providers',
    href: '#section-5',
  },
  {
    id: 'section-6',
    title: 'Payments, Ads & Remarketing',
    href: '#section-6',
  },
  {
    id: 'section-7',
    title: 'Changes to This Policy',
    href: '#section-7',
  },
  {
    id: 'section-8',
    title: 'Contact Us',
    href: '#section-8',
  },
];

// --- Left-Side Navigation Component ---
// Now accepts 'activeId' as a prop to be fully controlled by the parent page
function PolicyNav({ activeId }) {
  return (
    <nav className="space-y-2" aria-label="Privacy Policy Sections">
      {policySections.map((section) => (
        <a // Changed from <Link> to <a>
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
          // The 'a' tag handles navigation, state is managed by the scroll spy
        >
          {section.title}
        </a> // Changed from </Link> to </a>
      ))}
    </nav>
  );
}

// --- Main Privacy Policy Page Component ---
export default function PrivacyPolicyPage() {
  // State to hold the currently active section ID
  const [activeId, setActiveId] = React.useState('section-1');

  // --- Scroll-Spying Logic ---
  React.useEffect(() => {
    const handleScroll = () => {
      let currentSectionId = 'section-1';
      let minDistance = Infinity;

      // Check the position of each section
      policySections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const { top } = element.getBoundingClientRect();

          // We're looking for the section closest to the top of the viewport
          // '150' is a pixel offset to make the "active" trigger feel natural
          const distance = Math.abs(top - 150);

          if (distance < minDistance) {
            minDistance = distance;
            currentSectionId = section.id;
          }
        }
      });

      setActiveId(currentSectionId);
    };

    // Attach the listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check on load
    handleScroll();

    // Cleanup the listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this runs once on mount

  return (
    // Main container with no background, as requested
    // Switched to a 2-column layout on medium screens and up
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-12 md:gap-16">
        {/* --- Left Column: Sticky Navigation --- */}
        {/* Stacks on top on mobile, becomes sticky side-nav on desktop */}
        <aside className="md:col-span-4 lg:col-span-3 mb-12 md:mb-0">
          <div className="md:sticky md:top-24">
            {' '}
            {/* top-24 leaves room for your main sticky navbar */}
            <h3 className="text-2xl font-bold text-stone-700 mb-6">
              Policy Sections
            </h3>
            {/* Pass the activeId state to the Nav component */}
            <PolicyNav activeId={activeId} />
          </div>
        </aside>

        {/* --- Right Column: Scrollable Content --- */}
        <main className="md:col-span-8 lg:col-span-9">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-stone-700 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-purple-300">
              Last updated: November 03, 2025
            </p>
          </div>

          {/* Policy Content */}
          <div className="space-y-12 text-lg text-slate-600 leading-relaxed">
            <p>
              Bengal Business Committee ("we," "our," "us," or "Straxcel") is
              committed to protecting your privacy. This Privacy Policy explains
              how your personal information is collected, used, and disclosed by
              Bengal Business Committee when you visit our website
              [https://bbc.straxcel.com] (the "Site").
            </p>

            {/* Section 1 */}
            <section
              id="section-1"
              className="scroll-mt-24" // Offset for sticky nav
            >
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                1. Information We Collect
              </h2>
              <div className="space-y-4">
                <p>
                  We collect information you provide directly to us when you use
                  our contact forms or communicate with us. This may include:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Any other information you choose to provide</li>
                </ul>
                <p>
                  We also automatically collect certain information when you
                  visit our Site, such as your IP address, browser type,
                  operating system, and information about your browsing
                  behavior.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                2. Use of Information
              </h2>
              <div className="space-y-4">
                <p>We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Provide, maintain, and improve our services;</li>
                  <li>Respond to your comments, questions, and requests;</li>
                  <li>
                    Send you technical notices, updates, and support messages;
                  </li>
                  <li>
                    Communicate with you about products, services, and events
                    offered by Straxcel and others, including for remarketing
                    purposes;
                  </li>
                  <li>
                    Monitor and analyze trends, usage, and activities in
                    connection with our Site.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                3. Tracking & Analytics
              </h2>
              <div className="space-y-4">
                <p>
                  We use third-party tracking and analytics tools to help us
                  understand how users interact with our Site. These tools may
                  use cookies, web beacons, and other technologies to collect
                  information about your use of the Site. The analytics tools we
                  use include:
                </p>
                <ul className="list-disc list-inside space-y-2 pl-4">
                  <li>Google Analytics</li>
                  <li>Meta Analytics (Facebook Pixel)</li>
                  <li>Vercel Analytics</li>
                </ul>
                <p>
                  This data helps us improve our website and marketing efforts.
                  We also use these tools for remarketing and advertising
                  purposes.
                </p>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                4. Email Communications
              </h2>
              <p>
                As you have indicated, we send emails to our users. We may use
                your personal information to send you newsletters, marketing or
                promotional materials, and other information that may be of
                interest to you. You may opt out of receiving any, or all, of
                these communications from us by following the unsubscribe link
                or instructions provided in any email we send.
              </p>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                5. Security & Other Providers
              </h2>
              <p>
                The security of your data is important to us. We use various
                security measures to protect your information. Our Site uses
                Google reCAPTCHA to help protect against spam and abuse. Use of
                reCAPTCHA is subject to the Google Privacy Policy and Terms of
                Use.
              </p> 
            </section>

            {/* Section 6 */}
            <section id="section-6" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                6. Payments, Ads, and Remarketing
              </h2>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Payments:</strong> We do not currently allow users to
                  pay for products or services directly on our Site.
                </li>
                <li>
                  <strong>Ads:</strong> We do not show third-party ads on our
                  Site.
                </li>
                <li>
                  <strong>Remarketing:</strong> We use remarketing services to
                  advertise on third-party websites to you after you visited our
                  Site.
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                7. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page. You are advised to review this Privacy Policy
                periodically for any changes.
              </p>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="scroll-mt-24">
              <h2 className="text-3xl font-bold text-stone-700 pt-8 pb-4">
                8. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, you can
                contact us:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>By Email:</strong>{' '}
                  <a // Changed from <Link> to <a>
                    href="mailto:info@bbc.straxcel.com"
                    className="text-purple-300 hover:text-purple-100 underline"
                  >
                    info@bbc.straxcel.com
                  </a>
                </li>
                <li>
                  <strong>By Webpage:</strong>{' '}
                  <a // Changed from <Link> to <a>
                    href="https://bbc.straxcel.com/contact"
                    className="text-purple-300 hover:text-purple-100 underline"
                  >
                    https://bbc.straxcel.com/contact
                  </a>
                </li>
                <li>
                  <strong>By Phone:</strong>{' '}
                  <a // Changed from <Link> to <a>
                    href="tel:+911234567890"
                    className="text-purple-300 hover:text-purple-100 underline"
                  >
                    +91 12345 67890
                  </a>{' '}
                  (Please replace with your actual number)
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

