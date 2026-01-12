'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import ThemeToggle from '../theme-toggle';

const docCards = [
  {
    title: 'Getting Started',
    description: 'Learn how to quickly set up and start using Consyn',
    href: '/docs/getting-started',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2C8.27 2 2 8.27 2 16C2 23.73 8.27 30 16 30C23.73 30 30 23.73 30 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 8V16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and endpoint references',
    href: '/docs/api-reference',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 12H28M6 4H26C27.1 4 28 4.9 28 6V26C28 27.1 27.1 28 26 28H6C4.9 28 4 27.1 4 26V6C4 4.9 4.9 4 6 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Security',
    description: 'Learn about our security practices and compliance',
    href: '/docs/security',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L4 8V14C4 22 16 30 16 30C16 30 28 22 28 14V8L16 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Integrations',
    description: 'Connect Consyn with your favorite tools',
    href: '/docs/integrations',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 8H30V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 8H30V12H2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'FAQ',
    description: 'Frequently asked questions and answers',
    href: '/docs/faq',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="14" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 22V22.5M16 18C16 16 18 15.5 18 14C18 12.5 17 11 15.5 11C14 11 13 12 13 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const resources = [
  { title: 'GitHub Repository', description: 'View our source code', link: 'https://github.com/' },
  { title: 'Community Forum', description: 'Join the discussion', link: '#' },
  { title: 'Video Tutorials', description: 'Watch and learn', link: '#' },
];

export default function DocsPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(el => {
      el.classList.add('animate-ready');
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <nav className="navbar" aria-label="Primary">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="/" className="logo" aria-label="Consyn home">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
            <div className="nav-actions">
              <ThemeToggle />
              <Link className="cta-btn-primary" href="/">Back to Home</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="docs-hero">
        <div className="container">
          <h1 className="hero-title" data-animate>Documentation</h1>
          <p className="hero-subtitle" data-animate>Everything you need to build with Consyn</p>
        </div>
      </section>

      <section className="docs-section">
        <div className="container">
          <div className="section-header" data-animate>
            <h2>Get Started</h2>
            <p>Find guides, resources, and references to help you succeed</p>
          </div>
          <div className="docs-grid">
            {docCards.map(card => (
              <Link key={card.title} href={card.href} className="doc-card" data-animate>
                <div className="doc-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <div className="doc-arrow">→</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="docs-resources">
        <div className="container">
          <h2 className="section-title" data-animate>Additional Resources</h2>
          <div className="resources-grid">
            {resources.map(resource => (
              <div key={resource.title} className="resource-card" data-animate>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  Learn More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer" aria-labelledby="footer-title">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col" data-animate>
              <div className="footer-logo">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M12 2L2 7V12L12 22L22 12V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>consyn</span>
              </div>
              <p>Intelligent technology solutions for modern enterprises.</p>
            </div>
            <div className="footer-col" data-animate>
              <h4>Product</h4>
              <ul>
                <li><Link href="/#features">Features</Link></li>
                <li><Link href="/#pricing">Pricing</Link></li>
                <li><Link href="/docs/security">Security</Link></li>
              </ul>
            </div>
            <div className="footer-col" data-animate>
              <h4>Resources</h4>
              <ul>
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/docs/api-reference">API Reference</Link></li>
                <li><Link href="/docs/getting-started">Getting Started</Link></li>
              </ul>
            </div>
            <div className="footer-col" data-animate>
              <h4 id="contact">Contact</h4>
              <ul>
                <li><a href="mailto:contact@consyn.tech">contact@consyn.tech</a></li>
                <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://linkedin.com/in/consyn" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p id="footer-title">© 2026 Consyn. All rights reserved.</p>
            <div className="footer-links">
              <Link href="#">Privacy Policy</Link>
              <Link href="#">Terms of Service</Link>
              <Link href="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
