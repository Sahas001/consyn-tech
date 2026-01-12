'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import ThemeToggle from '../theme-toggle';

interface DocsLayoutProps {
  children: ReactNode;
  breadcrumb?: string;
}

export default function DocsLayout({ children, breadcrumb }: DocsLayoutProps) {
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
            <div className="nav-actions">
              <ThemeToggle />
              <Link className="cta-btn-primary" href="/">Back to Home</Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="docs-content">
        <div className="docs-container">
          {breadcrumb && (
            <nav className="docs-nav" aria-label="Breadcrumb">
              <div className="breadcrumb">
                <Link href="/docs">Documentation</Link>
                <span>/</span>
                <span>{breadcrumb}</span>
              </div>
            </nav>
          )}
          {children}
        </div>
      </div>
    </main>
  );
}
