'use client';

import Link from 'next/link';
import DocsLayout from '../docs-layout';

export default function GettingStartedPage() {
  return (
    <DocsLayout breadcrumb="Getting Started">
      <h1>Getting Started with Consyn</h1>

          <p>Welcome to Consyn! This guide will help you get up and running in just a few minutes.</p>

          <h2>Prerequisites</h2>
          <ul>
            <li>A Consyn account (sign up for free)</li>
            <li>Basic knowledge of REST APIs</li>
            <li>Your favorite programming language or API client</li>
          </ul>

          <h2>Quick Start</h2>

          <h3>1. Create Your Account</h3>
          <p>Visit our <Link href="/#pricing">pricing page</Link> and sign up for a free trial. No credit card required.</p>

          <h3>2. Get Your API Key</h3>
          <p>Once logged in, navigate to Settings → API Keys and generate your first API key.</p>
          <div className="info-box">
            <strong>Important:</strong> Keep your API key secure. Never commit it to version control or share it publicly.
          </div>

          <h3>3. Make Your First API Call</h3>
          <p>Try this simple example to verify your setup:</p>
          <pre><code>{`curl -X GET https://api.consyn.tech/v1/status \\
  -H "Authorization: Bearer YOUR_API_KEY"`}</code></pre>

          <h2>Authentication</h2>
          <p>All API requests require authentication using your API key in the Authorization header:</p>
          <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>

          <h2>Rate Limits</h2>
          <p>API rate limits depend on your plan:</p>
          <ul>
            <li><strong>Starter:</strong> 10,000 requests/month</li>
            <li><strong>Professional:</strong> Unlimited requests</li>
            <li><strong>Enterprise:</strong> Unlimited with dedicated resources</li>
          </ul>

          <h2>Next Steps</h2>
          <ul>
            <li><Link href="/docs/api-reference">Explore the API Reference</Link></li>
            <li><Link href="/docs/integrations">Set up Integrations</Link></li>
            <li><Link href="/docs/security">Learn about Security</Link></li>
            <li><Link href="/docs/faq">Check the FAQ</Link></li>
          </ul>

          <h2>Need Help?</h2>
          <p>If you run into any issues:</p>
          <ul>
            <li>Check our <Link href="/docs/faq">FAQ</Link></li>
            <li>Email us at <a href="mailto:support@consyn.tech">support@consyn.tech</a></li>
            <li>Join our community on <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
    </DocsLayout>
  );
}
