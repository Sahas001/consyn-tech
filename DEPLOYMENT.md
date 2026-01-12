# Consyn - Intelligent Technology Solutions

A modern, elegant static website for Consyn - a tech startup offering intelligent technology solutions for enterprises.

## 🎨 Design Features

- **Modern & Elegant**: Clean design with smooth animations and transitions
- **Startup Aesthetic**: Professional branding with a tech-forward feel
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance Optimized**: Lightweight static site with zero external dependencies
- **Accessibility**: Semantic HTML and keyboard navigation support

## 📁 File Structure

```
consyn-tech/
├── index.html       # Main HTML file with all sections
├── styles.css       # Modern CSS with animations and responsive design
├── script.js        # Interactive features and animations
└── README.md        # This file
```

## 🚀 Getting Started

### Local Development

1. **Open locally**: Simply open `index.html` in your browser
   ```bash
   # Option 1: Direct file open
   open index.html
   
   # Option 2: Using a local server (recommended)
   python3 -m http.server 8000
   # Then visit http://localhost:8000
   ```

2. **Live Server** (VS Code):
   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

### Deployment to consyn.tech

#### GitHub Pages (automated)
1. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds and deploys via GitHub Actions.
2. In repository Settings → Pages, set **Source** to **GitHub Actions** and add `consyn.tech` as the custom domain (HTTPS will be enforced).
3. DNS records to add at your registrar:
   - `A` 185.199.108.153
   - `A` 185.199.109.153
   - `A` 185.199.110.153
   - `A` 185.199.111.153
   - Optional: `CNAME` for `www` → `Sahas001.github.io`
4. The `CNAME` file in the repo keeps the domain configured on every deploy.

#### Other Hosting Services

**Vercel**
```bash
npm i -g vercel
vercel
```

**Netlify**
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=.
```

#### Option 2: Traditional Web Hosting

1. Connect via FTP/SFTP to your hosting provider
2. Upload all files to the public directory
3. Ensure `index.html` is set as the default document

#### Option 3: Docker Deployment

Create a `Dockerfile`:
```dockerfile
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

Build and run:
```bash
docker build -t consyn-tech .
docker run -p 80:80 consyn-tech
```

## 🎯 Sections

- **Navigation**: Sticky navbar with smooth scrolling
- **Hero**: Eye-catching introduction with animated gradient orbs
- **Features**: 6 key features with hover effects
- **How It Works**: 3-step process visualization
- **Testimonials**: Social proof with customer reviews
- **Pricing**: 3-tier pricing strategy
- **CTA**: Final call-to-action section
- **Footer**: Complete footer with links and contact info

## 🎨 Customization

### Update Brand Information
Edit in `index.html`:
- Logo and company name
- Navigation links
- Content in all sections

### Customize Colors
Edit `:root` variables in `styles.css`:
```css
:root {
    --color-primary: #0066ff;
    --color-secondary: #6c5ce7;
    --color-accent: #00d084;
    /* ... more colors ... */
}
```

### Modify Content
- Update text in `index.html`
- Customize feature descriptions
- Update pricing tiers
- Change testimonials

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- **Page Size**: ~50KB (gzipped)
- **Load Time**: < 1s on modern connections
- **Core Web Vitals**: Optimized
- **SEO**: Semantic HTML ready

## 🔐 Security

- No external scripts (except Google Fonts)
- No database or backend required
- No user data collection
- Safe for all audiences

## 🛠 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Vanilla JS (no frameworks)
- **Typography**: Inter and Sora fonts from Google Fonts

## 📝 License

© 2026 Consyn. All rights reserved.

## 🤝 Support

For customizations or questions, contact: hello@consyn.tech
