# Richmark Foundation - Deployment Guide

## Vercel Deployment

This project is configured for easy deployment on Vercel.

### Files Added for Deployment:
- `vercel.json` - Vercel configuration
- `.npmrc` - NPM configuration for dependency resolution

### Deployment Steps:

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Fix Vercel deployment configuration"
   git push origin main
   ```

2. **Vercel will automatically**:
   - Install dependencies with `--legacy-peer-deps`
   - Build the project using `npm run build`
   - Deploy to production

### Configuration Details:

**vercel.json**:
- Uses Vite framework detection
- Configures SPA routing (all routes go to index.html)
- Sets up proper caching for assets
- Uses legacy peer deps for dependency resolution

**.npmrc**:
- Enables legacy peer dependency resolution
- Disables engine strict checking

### Build Output:
- **CSS**: ~35KB (6.7KB gzipped)
- **JavaScript**: ~351KB (92.7KB gzipped)
- **Total**: Fast loading, optimized build

### Environment:
- **Node.js**: 20.x
- **Framework**: Vite + React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React

### Domain:
Once deployed, your site will be available at:
`https://your-project-name.vercel.app`

### Custom Domain:
To use a custom domain like `richmarkfoundation.org.ng`:
1. Go to Vercel dashboard
2. Select your project
3. Go to Settings > Domains
4. Add your custom domain
5. Follow DNS configuration instructions

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

If deployment fails:
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are compatible
3. Verify vercel.json configuration
4. Check that all image files exist in /public folder

## Performance
- ✅ Optimized images with lazy loading
- ✅ Code splitting and tree shaking
- ✅ Compressed assets
- ✅ SEO optimized
- ✅ Mobile responsive
- ✅ Accessibility compliant
