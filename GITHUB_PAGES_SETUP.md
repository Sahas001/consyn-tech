# GitHub Pages Deployment Guide

## Quick Setup

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy site"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository settings: `https://github.com/Sahas001/consyn-tech/settings`
   - Scroll to "Pages" section
   - Under "Source", select `Deploy from a branch`
   - Select branch: `main` and folder: `/ (root)`
   - Click Save

3. **Configure Custom Domain**
   - In the same Pages settings, under "Custom domain", enter: `consyn.tech`
   - GitHub will automatically enforce HTTPS

4. **Update DNS Records**
   
   Add these DNS records with your domain registrar:

   **Option A: Using A records (Recommended)**
   ```
   A       185.199.108.153
   A       185.199.109.153
   A       185.199.110.153
   A       185.199.111.153
   ```

   **Option B: Using CNAME record**
   ```
   CNAME   www.consyn.tech    Sahas001.github.io
   ```

   Also add:
   ```
   A       185.199.108.153    (for apex domain)
   ```

5. **Wait for DNS Propagation**
   - DNS changes can take 24-48 hours to propagate
   - Check status: `https://github.com/Sahas001/consyn-tech/settings/pages`

## After Deployment

- Your site will be live at `https://consyn.tech`
- GitHub automatically handles SSL/TLS certificates
- The GitHub Actions workflow will auto-deploy on every push to main
- The CNAME file ensures GitHub Pages knows your custom domain

## Troubleshooting

- **Site not showing?** Clear browser cache or use incognito mode
- **DNS errors?** Wait 24 hours and verify records with `nslookup consyn.tech`
- **Build failed?** Check the Actions tab in your GitHub repository

## Automatic Deployments

Every time you push to the `main` branch, the site automatically deploys via GitHub Actions. No manual action needed!
