'use client';

import Link from 'next/link';

export default function SecurityPage() {
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
              <span>Security</span>
            </div>
          </nav>

          <h1>Security & Compliance</h1>

          <p>At Consyn, security is our top priority. We implement industry-leading practices to protect your data.</p>

          <h2>Data Encryption</h2>

          <h3>Encryption in Transit</h3>
          <p>All data transmitted to and from Consyn is encrypted using TLS 1.3, ensuring secure communication between your applications and our services.</p>

          <h3>Encryption at Rest</h3>
          <p>Your data is encrypted at rest using AES-256 encryption, meeting banking and government security standards.</p>

          <h2>Compliance & Certifications</h2>
          <ul>
            <li><strong>SOC 2 Type II</strong> - Annual audits verify our security controls</li>
            <li><strong>GDPR Compliant</strong> - Full compliance with EU data protection regulations</li>
            <li><strong>HIPAA Ready</strong> - Enterprise plans include BAA for healthcare data</li>
            <li><strong>ISO 27001</strong> - Certified information security management</li>
          </ul>

          <h2>Access Control</h2>

          <h3>API Key Management</h3>
          <p>Secure your integrations with our API key system:</p>
          <ul>
            <li>Generate multiple keys with different permissions</li>
            <li>Rotate keys without downtime</li>
            <li>Monitor key usage and audit logs</li>
            <li>Revoke compromised keys instantly</li>
          </ul>

          <h3>Role-Based Access Control (RBAC)</h3>
          <p>Professional and Enterprise plans include granular permission controls:</p>
          <ul>
            <li>Admin, Developer, and Viewer roles</li>
            <li>Custom role creation (Enterprise)</li>
            <li>Team-level access controls</li>
            <li>Resource-specific permissions</li>
          </ul>

          <h2>Infrastructure Security</h2>

          <h3>Hosting & Infrastructure</h3>
          <ul>
            <li>Multi-region redundancy for high availability</li>
            <li>DDoS protection and rate limiting</li>
            <li>Regular security patches and updates</li>
            <li>24/7 monitoring and incident response</li>
          </ul>

          <h3>Network Security</h3>
          <ul>
            <li>Private VPC for Enterprise customers</li>
            <li>IP allowlisting available</li>
            <li>VPN and private endpoints supported</li>
            <li>Web Application Firewall (WAF)</li>
          </ul>

          <h2>Data Privacy</h2>

          <h3>Data Retention</h3>
          <p>We retain your data according to your plan:</p>
          <ul>
            <li><strong>Starter:</strong> 30 days</li>
            <li><strong>Professional:</strong> 1 year</li>
            <li><strong>Enterprise:</strong> Customizable retention policies</li>
          </ul>

          <h3>Data Deletion</h3>
          <p>Request complete data deletion at any time. We permanently delete your data within 30 days of account closure.</p>

          <h3>GDPR Rights</h3>
          <p>We support all GDPR data subject rights:</p>
          <ul>
            <li>Right to access your data</li>
            <li>Right to rectification</li>
            <li>Right to erasure</li>
            <li>Right to data portability</li>
            <li>Right to object</li>
          </ul>

          <h2>Incident Response</h2>

          <p>In the unlikely event of a security incident:</p>
          <ul>
            <li>We notify affected customers within 24 hours</li>
            <li>Provide detailed incident reports</li>
            <li>Work with you to minimize impact</li>
            <li>Conduct thorough post-incident reviews</li>
          </ul>

          <h2>Security Best Practices</h2>

          <div className="warning-box">
            <strong>Recommended practices for keeping your account secure:</strong>
          </div>
          <ul>
            <li>Never share API keys or commit them to version control</li>
            <li>Use environment variables for sensitive data</li>
            <li>Enable two-factor authentication (2FA)</li>
            <li>Regularly rotate API keys</li>
            <li>Use the principle of least privilege</li>
            <li>Monitor API usage and audit logs</li>
            <li>Report suspicious activity immediately</li>
          </ul>

          <h2>Vulnerability Disclosure</h2>
          <p>Found a security issue? We appreciate responsible disclosure:</p>
          <ul>
            <li>Email: <a href="mailto:security@consyn.tech">security@consyn.tech</a></li>
            <li>PGP Key available upon request</li>
            <li>We respond within 24 hours</li>
            <li>Bug bounty program for qualifying vulnerabilities</li>
          </ul>

          <h2>Questions?</h2>
          <p>For security-related inquiries, contact our security team at <a href="mailto:security@consyn.tech">security@consyn.tech</a>.</p>
        </div>
      </div>
    </main>
  );
}
