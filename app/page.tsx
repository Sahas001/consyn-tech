'use client';

import Link from 'next/link';
import { Fragment, useEffect } from 'react';
import ThemeToggle from './theme-toggle';

const featureCards = [
  {
    title: 'AI-Powered Analytics',
    description: 'Real-time insights powered by advanced machine learning algorithms',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 2V30M2 16H30M8 8L24 24M24 8L8 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and compliance with all major standards',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 12H28M6 4H26C27.1 4 28 4.9 28 6V26C28 27.1 27.1 28 26 28H6C4.9 28 4 27.1 4 26V6C4 4.9 4.9 4 6 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Real-Time Sync',
    description: 'Seamless synchronization across all your devices and teams',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M16 2C8.27 2 2 8.27 2 16C2 23.73 8.27 30 16 30C23.73 30 30 23.73 30 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 8V16L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: '24/7 Support',
    description: 'Expert support team always ready to help you succeed',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 16C4 9.37 9.37 4 16 4C22.63 4 28 9.37 28 16C28 22.63 22.63 28 16 28C9.37 28 4 22.63 4 16Z" stroke="currentColor" strokeWidth="2" />
        <path d="M16 10V16L20 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'API Integration',
    description: 'Connect with 1000+ tools through our powerful API',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2 8H30V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8H30V12H2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Scalable Infrastructure',
    description: 'Grow from startup to enterprise without infrastructure worries',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M4 10H28V24C28 25.1 27.1 26 26 26H6C4.9 26 4 25.1 4 24V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 4V10H20V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const steps = [
  { number: '01', title: 'Connect', description: 'Link your data sources and configure your workspace in seconds' },
  { number: '02', title: 'Configure', description: 'Set up your workflows with our visual configuration builder' },
  { number: '03', title: 'Deploy', description: 'Launch your solution and start seeing results immediately' },
];

const testimonials = [
  {
    quote: '"Consyn transformed how we approach data. The ROI was immediate and transformative."',
    initials: 'JD',
    name: 'Jane Doe',
    role: 'CEO, TechCorp',
  },
  {
    quote: '"Best investment we made this year. Support is exceptional and the platform scales beautifully."',
    initials: 'MS',
    name: 'Michael Smith',
    role: 'CTO, InnovateLabs',
  },
  {
    quote: '"Their AI capabilities are years ahead of competitors. Highly recommended for any growing business."',
    initials: 'SR',
    name: 'Sarah Rodriguez',
    role: 'Founder, DataStream',
  },
];

const pricing = [
  {
    name: 'Starter',
    price: '$99',
    cadence: '/mo',
    description: 'Perfect for getting started',
    features: ['Up to 10K requests/month', 'Basic analytics', 'Email support', '1 team member'],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'Professional',
    price: '$299',
    cadence: '/mo',
    description: 'For growing teams',
    features: ['Unlimited requests', 'Advanced analytics', 'Priority support', '25 team members', 'Custom integrations'],
    cta: 'Start Free Trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: '',
    description: 'For large organizations',
    features: ['Everything in Professional', 'Unlimited team members', 'Dedicated support', 'Custom SLA', 'On-premise option'],
    cta: 'Contact Sales',
    featured: false,
  },
];

const footerColumns = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '/docs/security' },
      { label: 'How it Works', href: '#how-it-works' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '/docs' },
      { label: 'API Reference', href: '/docs/api-reference' },
      { label: 'Getting Started', href: '/docs/getting-started' },
      { label: 'FAQ', href: '/docs/faq' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'contact@consyn.tech', href: 'mailto:contact@consyn.tech' },
      { label: 'GitHub', href: 'https://github.com/', external: true },
      { label: 'LinkedIn', href: 'https://linkedin.com/in/consyn', external: true },
      { label: 'Help Center', href: '/docs/README.md' },
    ],
  },
];

export default function HomePage() {
  useEffect(() => {
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (event: Event) => {
      const target = event.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href === '#') return;
      if (href && href.startsWith('#')) {
        event.preventDefault();
        const section = document.querySelector(href);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick));

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

    const buttons = document.querySelectorAll('.cta-btn-primary, .cta-btn-secondary');
    const handleRipple = (event: Event) => {
      const target = event.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${(event as MouseEvent).clientX - rect.left - size / 2}px`;
      ripple.style.top = `${(event as MouseEvent).clientY - rect.top - size / 2}px`;
      target.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    };

    buttons.forEach(button => button.addEventListener('click', handleRipple));

    const navbar = document.querySelector('.navbar');
    const indicator = document.querySelector('.scroll-indicator') as HTMLElement | null;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (navbar) {
        (navbar as HTMLElement).style.boxShadow = scrollTop > 50 ? '0 4px 12px rgba(0, 0, 0, 0.08)' : 'none';
      }
      if (indicator) {
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / height) * 100;
        indicator.style.width = `${scrolled}%`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick));
      animatedElements.forEach(el => observer.unobserve(el));
      observer.disconnect();
      buttons.forEach(button => button.removeEventListener('click', handleRipple));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main>
      <div className="scroll-indicator" aria-hidden="true" />
      <nav className="navbar" aria-label="Primary">
        <div className="container">
          <div className="nav-wrapper">
            <Link href="#" className="logo" aria-label="Consyn home">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path d="M12 2L2 7V12L12 22L22 12V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>consyn</span>
            </Link>
            <ul className="nav-menu">
              <li><Link href="#features">Features</Link></li>
              <li><Link href="#how-it-works">How it Works</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
              <li><Link href="/docs">Docs</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
            <div className="nav-actions">
              <ThemeToggle />
              <Link className="cta-btn-primary" href="#pricing">Get Started</Link>
            </div>
          </div>
        </div>
      </nav>

      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <div className="hero-content" data-animate>
            <h1 className="hero-title" id="hero-title">Intelligent Technology for Tomorrow</h1>
            <p className="hero-subtitle">Build, scale, and transform your business with our cutting-edge platform designed for modern enterprises.</p>
            <div className="hero-cta">
              <Link className="cta-btn-primary" href="#pricing">Start Free Trial</Link>
              <Link className="cta-btn-secondary" href="#how-it-works">Watch Demo</Link>
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="gradient-orb" />
            <div className="gradient-orb orb-2" />
          </div>
        </div>
      </section>

      <section id="features" className="features" aria-labelledby="features-title">
        <div className="container">
          <div className="section-header" data-animate>
            <h2 id="features-title">Powerful Features</h2>
            <p>Everything you need to succeed in one intelligent platform</p>
          </div>
          <div className="features-grid">
            {featureCards.map(card => (
              <div key={card.title} className="feature-card" data-animate>
                <div className="feature-icon">{card.icon}</div>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="how-it-works" aria-labelledby="how-it-works-title">
        <div className="container">
          <div className="section-header" data-animate>
            <h2 id="how-it-works-title">How It Works</h2>
            <p>Get started in minutes with our intuitive setup process</p>
          </div>
          <div className="steps-container">
            {steps.map((step, index) => (
              <Fragment key={step.title}>
                <div className="step" data-animate>
                  <div className="step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="step-arrow" aria-hidden="true">→</div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials" aria-labelledby="testimonials-title">
        <div className="container">
          <div className="section-header" data-animate>
            <h2 id="testimonials-title">Loved by Teams Worldwide</h2>
            <p>Join thousands of companies transforming their businesses</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.name} className="testimonial-card" data-animate>
                <div className="stars" aria-hidden="true">★★★★★</div>
                <p>{testimonial.quote}</p>
                <div className="testimonial-author">
                  <div className="author-avatar" aria-hidden="true">{testimonial.initials}</div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing" aria-labelledby="pricing-title">
        <div className="container">
          <div className="section-header" data-animate>
            <h2 id="pricing-title">Simple, Transparent Pricing</h2>
            <p>Choose the plan that fits your needs</p>
          </div>
          <div className="pricing-grid">
            {pricing.map(plan => (
              <div key={plan.name} className={`pricing-card${plan.featured ? ' featured' : ''}`} data-animate>
                {plan.featured && <div className="badge">Most Popular</div>}
                <h3>{plan.name}</h3>
                <div className="price">{plan.price}<span>{plan.cadence}</span></div>
                <p>{plan.description}</p>
                <ul className="features-list">
                  {plan.features.map(item => (
                    <li key={item}>✓ {item}</li>
                  ))}
                </ul>
                {plan.featured ? (
                  <Link className="cta-btn-primary" href="#contact">{plan.cta}</Link>
                ) : (
                  <Link className="cta-btn-secondary" href="#contact">{plan.cta}</Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-cta-title">
        <div className="container" data-animate>
          <h2 id="final-cta-title">Ready to Transform Your Business?</h2>
          <p>Join forward-thinking teams already using Consyn to drive innovation</p>
          <Link className="cta-btn-primary cta-large" href="#pricing">Start Your Free Trial Today</Link>
          <p className="cta-footnote">No credit card required. 14 days free access to all features.</p>
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
              <div className="social-links">
                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" title="Visit our GitHub">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/consyn" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="Connect on LinkedIn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://twitter.com/consyn" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Follow us on Twitter">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>
            {footerColumns.map(column => (
              <div key={column.title} className="footer-col" data-animate>
                <h4 id={`footer-${column.title.toLowerCase()}`}>{column.title}</h4>
                <ul>
                  {column.links.map(link => (
                    <li key={link.label}>
                      <Link href={link.href} target={link.external ? '_blank' : undefined} rel={link.external ? 'noopener noreferrer' : undefined}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
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
