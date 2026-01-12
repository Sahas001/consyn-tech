# Consyn - Next.js Migration

This project has been migrated from static HTML to Next.js 14 with React and TypeScript.

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Remove old static files (optional):**
   ```bash
   bash cleanup.sh
   # or manually: rm index.html styles.css script.js
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ✨ New Features

- **Next.js 14** with App Router
- **React** components with TypeScript
- **Dark Mode Toggle** - Click the sun/moon icon in the navigation
- **Server-Side Rendering** ready
- **Optimized Fonts** using next/font
- **Smooth Animations** preserved from original design

## 📁 Project Structure

```
app/
├── layout.tsx          # Root layout with theme provider
├── page.tsx            # Homepage with all sections
├── globals.css         # Global styles with dark mode support
├── theme-provider.tsx  # Theme context and logic
└── theme-toggle.tsx    # Dark mode toggle button

public/
├── docs/              # Documentation pages (static)
└── favicon.svg        # Site icon
```

## 🎨 Dark Mode

The app includes a fully functional dark mode toggle:
- Click the sun/moon icon in the navigation
- Preference is saved to localStorage
- Respects system preference on first visit

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Original Files

If you want to keep the original static files for reference, they are:
- `index.html` - Original landing page
- `styles.css` - Original stylesheet
- `script.js` - Original JavaScript

Otherwise, run `bash cleanup.sh` to remove them.
