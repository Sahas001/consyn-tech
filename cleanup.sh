#!/bin/bash
# This script removes the old static files that are no longer needed with Next.js

echo "Removing old static files..."
rm -f index.html styles.css script.js

echo "✓ Removed: index.html, styles.css, script.js"
echo ""
echo "Your Next.js app is ready!"
echo "To start the development server, run:"
echo "  npm run dev"
