'use client';

import Link from 'next/link';

export default function IntegrationsPage() {
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
              <span>Integrations</span>
            </div>
          </nav>

          <h1>Integrations</h1>

          <p>Connect Consyn with your favorite tools and services. We offer 1000+ pre-built integrations and a powerful API for custom connections.</p>

          <h2>Popular Integrations</h2>

          <h3>Communication</h3>
          <ul>
            <li><strong>Slack</strong> - Receive notifications and updates in Slack channels</li>
            <li><strong>Microsoft Teams</strong> - Integrate with Teams for collaboration</li>
            <li><strong>Discord</strong> - Get alerts in your Discord server</li>
          </ul>

          <h3>Development Tools</h3>
          <ul>
            <li><strong>GitHub</strong> - Sync with repositories and trigger workflows</li>
            <li><strong>GitLab</strong> - Integrate with CI/CD pipelines</li>
            <li><strong>Jira</strong> - Automatic issue creation and tracking</li>
            <li><strong>Linear</strong> - Streamline your development workflow</li>
          </ul>

          <h3>Data & Analytics</h3>
          <ul>
            <li><strong>Google Analytics</strong> - Track usage and performance</li>
            <li><strong>Mixpanel</strong> - Advanced product analytics</li>
            <li><strong>Segment</strong> - Unified customer data platform</li>
            <li><strong>Amplitude</strong> - Product intelligence</li>
          </ul>

          <h3>Databases</h3>
          <ul>
            <li><strong>PostgreSQL</strong> - Direct database connections</li>
            <li><strong>MongoDB</strong> - NoSQL database integration</li>
            <li><strong>MySQL</strong> - Relational database support</li>
            <li><strong>Redis</strong> - Caching and real-time data</li>
          </ul>

          <h2>Setting Up Integrations</h2>

          <h3>OAuth Integrations</h3>
          <p>For services that support OAuth (like Slack, GitHub):</p>
          <ol>
            <li>Go to Settings → Integrations in your Consyn dashboard</li>
            <li>Click "Connect" next to your desired service</li>
            <li>Authorize Consyn to access your account</li>
            <li>Configure integration settings and permissions</li>
          </ol>

          <h3>API Key Integrations</h3>
          <p>For services that use API keys:</p>
          <ol>
            <li>Generate an API key from the service you want to integrate</li>
            <li>In Consyn, navigate to Settings → Integrations</li>
            <li>Select the service and click "Configure"</li>
            <li>Paste your API key and save</li>
          </ol>

          <h2>Webhooks</h2>

          <p>Send real-time data to any endpoint using webhooks.</p>

          <h3>Creating a Webhook</h3>
          <pre><code>{`POST https://api.consyn.tech/v1/webhooks
Content-Type: application/json

{
  "url": "https://your-app.com/webhook",
  "events": ["data.analyzed", "integration.connected"],
  "secret": "your-webhook-secret"
}`}</code></pre>

          <h3>Webhook Payload</h3>
          <p>Webhook requests include:</p>
          <pre><code>{`{
  "event": "data.analyzed",
  "timestamp": "2026-01-12T10:30:00Z",
  "data": {
    "id": "analysis_123",
    "status": "completed",
    "results": { ... }
  },
  "signature": "sha256=..."
}`}</code></pre>

          <h3>Verifying Webhooks</h3>
          <p>Always verify webhook signatures to ensure security:</p>
          <pre><code>{`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return signature === \`sha256=\${digest}\`;
}`}</code></pre>

          <h2>Custom Integrations</h2>

          <p>Build custom integrations using our REST API. See the <Link href="/docs/api-reference">API Reference</Link> for details.</p>

          <h3>Example: Custom Integration</h3>
          <pre><code>{`import { ConsynClient } from '@consyn/sdk';

const client = new ConsynClient({
  apiKey: process.env.CONSYN_API_KEY
});

// Listen for events
client.on('data.analyzed', async (event) => {
  // Send to your custom system
  await yourSystem.process(event.data);
});`}</code></pre>

          <h2>Integration Marketplace</h2>
          <p>Browse our integration marketplace to discover new ways to extend Consyn:</p>
          <ul>
            <li>Community-built integrations</li>
            <li>Pre-configured templates</li>
            <li>One-click installation</li>
            <li>Regular updates and support</li>
          </ul>

          <h2>Need Help?</h2>
          <p>Integration questions? Contact us:</p>
          <ul>
            <li>Email: <a href="mailto:integrations@consyn.tech">integrations@consyn.tech</a></li>
            <li>Check the <Link href="/docs/faq">FAQ</Link></li>
            <li>Join our <a href="https://github.com/" target="_blank" rel="noopener noreferrer">developer community</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}
