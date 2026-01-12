'use client';

import Link from 'next/link';

export default function APIReferencePage() {
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
              <span>API Reference</span>
            </div>
          </nav>

          <h1>API Reference</h1>

          <p>Complete reference for the Consyn REST API. All endpoints require authentication.</p>

          <h2>Base URL</h2>
          <pre><code>https://api.consyn.tech/v1</code></pre>

          <h2>Authentication</h2>
          <p>Include your API key in the Authorization header:</p>
          <pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>

          <h2>Endpoints</h2>

          <h3>GET /status</h3>
          <p>Check API status and your account information.</p>
          <pre><code>{`GET https://api.consyn.tech/v1/status

Response:
{
  "status": "operational",
  "account": {
    "plan": "professional",
    "requests_remaining": 9847
  }
}`}</code></pre>

          <h3>POST /data/analyze</h3>
          <p>Submit data for AI-powered analysis.</p>
          <pre><code>{`POST https://api.consyn.tech/v1/data/analyze
Content-Type: application/json

{
  "data": {
    "values": [1, 2, 3, 4, 5],
    "type": "timeseries"
  },
  "options": {
    "include_predictions": true
  }
}

Response:
{
  "analysis": {
    "trend": "upward",
    "confidence": 0.95,
    "predictions": [6, 7, 8]
  }
}`}</code></pre>

          <h3>GET /integrations</h3>
          <p>List all available integrations.</p>
          <pre><code>{`GET https://api.consyn.tech/v1/integrations

Response:
{
  "integrations": [
    {
      "id": "slack",
      "name": "Slack",
      "status": "available"
    },
    {
      "id": "github",
      "name": "GitHub",
      "status": "available"
    }
  ]
}`}</code></pre>

          <h2>Error Codes</h2>
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>400</code></td>
                <td>Bad Request - Invalid parameters</td>
              </tr>
              <tr>
                <td><code>401</code></td>
                <td>Unauthorized - Invalid API key</td>
              </tr>
              <tr>
                <td><code>429</code></td>
                <td>Too Many Requests - Rate limit exceeded</td>
              </tr>
              <tr>
                <td><code>500</code></td>
                <td>Internal Server Error</td>
              </tr>
            </tbody>
          </table>

          <h2>Rate Limiting</h2>
          <p>API responses include rate limit headers:</p>
          <pre><code>{`X-RateLimit-Limit: 10000
X-RateLimit-Remaining: 9847
X-RateLimit-Reset: 1673568000`}</code></pre>

          <h2>Webhooks</h2>
          <p>Configure webhooks to receive real-time notifications. See the <Link href="/docs/integrations">Integrations guide</Link> for details.</p>

          <h2>SDKs</h2>
          <p>Official SDKs available for:</p>
          <ul>
            <li>JavaScript/TypeScript (npm: <code>@consyn/sdk</code>)</li>
            <li>Python (pip: <code>consyn-sdk</code>)</li>
            <li>Go (github.com/consyn/go-sdk)</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
