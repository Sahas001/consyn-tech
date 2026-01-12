'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    category: 'General',
    questions: [
      {
        q: 'What is Consyn?',
        a: 'Consyn is an intelligent technology platform that helps businesses build, scale, and transform using AI-powered analytics, enterprise security, and seamless integrations.',
      },
      {
        q: 'How much does Consyn cost?',
        a: 'We offer three plans: Starter at $99/month, Professional at $299/month, and custom Enterprise pricing. All plans include a 14-day free trial with no credit card required.',
      },
      {
        q: 'Can I change my plan later?',
        a: 'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we\'ll prorate any charges or credits.',
      },
    ],
  },
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I get started?',
        a: 'Sign up for a free trial, generate your API key from the dashboard, and follow our Getting Started guide. You\'ll be up and running in minutes.',
      },
      {
        q: 'Do I need a credit card for the trial?',
        a: 'No! Our 14-day trial requires no credit card. You can explore all features risk-free.',
      },
      {
        q: 'What happens after my trial ends?',
        a: 'You\'ll be notified before your trial expires. Choose a plan to continue, or your account will be paused (data retained for 30 days).',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What programming languages do you support?',
        a: 'Our REST API works with any language. We provide official SDKs for JavaScript/TypeScript, Python, and Go, with more coming soon.',
      },
      {
        q: 'What are the rate limits?',
        a: 'Starter plans have 10,000 requests/month. Professional and Enterprise plans offer unlimited requests with priority processing.',
      },
      {
        q: 'How do I authenticate API requests?',
        a: 'Use Bearer token authentication by including your API key in the Authorization header: Authorization: Bearer YOUR_API_KEY',
      },
      {
        q: 'Do you offer webhooks?',
        a: 'Yes! Set up webhooks to receive real-time notifications for events. See our Integrations guide for details.',
      },
    ],
  },
  {
    category: 'Security & Privacy',
    questions: [
      {
        q: 'How secure is my data?',
        a: 'We use AES-256 encryption at rest and TLS 1.3 in transit. We\'re SOC 2 Type II certified and GDPR compliant.',
      },
      {
        q: 'Where is my data stored?',
        a: 'Data is stored in secure, redundant data centers across multiple regions. Enterprise customers can choose specific regions.',
      },
      {
        q: 'Can I delete my data?',
        a: 'Yes, you can request data deletion at any time. We permanently delete all data within 30 days of account closure.',
      },
      {
        q: 'Are you HIPAA compliant?',
        a: 'Yes, Enterprise plans include HIPAA compliance with Business Associate Agreements (BAA) available.',
      },
    ],
  },
  {
    category: 'Billing',
    questions: [
      {
        q: 'How does billing work?',
        a: 'We bill monthly or annually (save 20% with annual billing). Payment is processed automatically via credit card or invoice for Enterprise.',
      },
      {
        q: 'Can I get a refund?',
        a: 'We offer a 30-day money-back guarantee. If you\'re not satisfied, contact us for a full refund.',
      },
      {
        q: 'Do you offer discounts for nonprofits?',
        a: 'Yes! Registered nonprofits and educational institutions receive 50% off all plans. Contact sales for details.',
      },
    ],
  },
  {
    category: 'Support',
    questions: [
      {
        q: 'What support do you provide?',
        a: 'Starter plans include email support. Professional adds priority support. Enterprise includes dedicated support with custom SLAs.',
      },
      {
        q: 'What are your support hours?',
        a: 'Email support: 24/7. Live chat (Professional+): Business hours. Enterprise: 24/7 dedicated support.',
      },
      {
        q: 'How can I contact support?',
        a: 'Email support@consyn.tech, use in-app chat (Professional+), or call your dedicated line (Enterprise).',
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleQuestion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <main>
      <nav className="navbar">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="logo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V12L12 22L22 12V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>consyn</span>
            </Link>
            <ul className="nav-menu">
              <li><Link href="/#features">Features</Link></li>
              <li><Link href="/#how-it-works">How it Works</Link></li>
              <li><Link href="/#pricing">Pricing</Link></li>
              <li><Link href="/docs" className="active">Docs</Link></li>
              <li><Link href="/#contact">Contact</Link></li>
            </ul>
            <Link className="cta-btn-primary" href="/#pricing">Get Started</Link>
          </div>
        </div>
      </nav>

      <div className="docs-content">
        <div className="docs-container">
          <nav className="docs-nav" aria-label="Breadcrumb">
            <div className="breadcrumb">
              <Link href="/docs">Documentation</Link>
              <span>/</span>
              <span>FAQ</span>
            </div>
          </nav>

          <h1>Frequently Asked Questions</h1>

          <p>Find answers to common questions about Consyn. Can't find what you're looking for? <a href="mailto:support@consyn.tech">Contact us</a>.</p>

          {faqs.map((category, catIndex) => (
            <div key={category.category}>
              <h2>{category.category}</h2>
              {category.questions.map((faq, qIndex) => {
                const id = `${catIndex}-${qIndex}`;
                const isOpen = openIndex === id;
                return (
                  <div key={id} style={{ marginBottom: '1rem' }}>
                    <h3
                      onClick={() => toggleQuestion(id)}
                      style={{
                        cursor: 'pointer',
                        padding: '1rem',
                        background: 'var(--color-light)',
                        borderRadius: 'var(--radius-md)',
                        marginBottom: isOpen ? '0.5rem' : '0',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                      }}
                    >
                      {faq.q}
                      <span style={{ fontSize: '1.5rem', transition: 'transform 0.3s', transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
                        ▼
                      </span>
                    </h3>
                    {isOpen && (
                      <div style={{ padding: '1rem', background: 'var(--color-bg-alt)', borderRadius: 'var(--radius-md)' }}>
                        <p>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}

          <h2>Still have questions?</h2>
          <p>We're here to help!</p>
          <ul>
            <li>Email: <a href="mailto:support@consyn.tech">support@consyn.tech</a></li>
            <li>Check our <Link href="/docs">Documentation</Link></li>
            <li>Join our <a href="https://github.com/" target="_blank" rel="noopener noreferrer">community</a></li>
            <li>Schedule a demo with our team</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
