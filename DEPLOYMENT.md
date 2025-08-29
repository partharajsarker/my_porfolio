# 🚀 Vercel Deployment Guide

This guide will walk you through deploying your Laravel + React portfolio to Vercel.

## 📋 Prerequisites

- GitHub account
- Vercel account
- Laravel application ready for deployment

## 🔧 Step 1: Prepare Your Repository

### 1.1 Update .gitignore
Make sure your `.gitignore` excludes sensitive files:
```bash
.env
.env.local
.env.production
vendor/
node_modules/
public/build/
storage/
bootstrap/cache/
```

### 1.2 Commit and Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

## 🌐 Step 2: Deploy to Vercel

### 2.1 Connect to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your GitHub repository

### 2.2 Configure Project Settings
- **Framework Preset**: Other
- **Root Directory**: `./` (leave as default)
- **Build Command**: `npm run build:vercel`
- **Output Directory**: `public`
- **Install Command**: `npm ci && composer install --no-dev --optimize-autoloader`

### 2.3 Environment Variables
Set these in your Vercel project settings:

```bash
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.vercel.app
APP_KEY=base64:your-generated-key
DB_CONNECTION=sqlite
DB_DATABASE=/tmp/database.sqlite
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_CONNECTION=sync
LOG_CHANNEL=stack
```

### 2.4 Generate App Key
Run this locally to generate your app key:
```bash
php artisan key:generate --show
```
Copy the output and set it as `APP_KEY` in Vercel.

## ⚙️ Step 3: Vercel Configuration

### 3.1 vercel.json
The `vercel.json` file is already configured for Laravel deployment.

### 3.2 Build Output
Vercel will automatically:
- Install PHP dependencies
- Install Node.js dependencies
- Build frontend assets
- Serve the application

## 🔍 Step 4: Verify Deployment

### 4.1 Check Build Logs
- Go to your Vercel project dashboard
- Check the "Functions" tab for any errors
- Review build logs for warnings

### 4.2 Test Your Application
- Visit your deployed URL
- Test the portfolio pages
- Verify admin functionality
- Check contact form

## 🚨 Troubleshooting

### Common Issues

#### 1. Build Failures
- Check PHP version compatibility (8.2+)
- Verify all dependencies are in `composer.json`
- Ensure Node.js version is 18+

#### 2. Database Issues
- SQLite is used by default for Vercel
- Database is stored in `/tmp` (ephemeral)
- Consider using external database for production

#### 3. Asset Loading
- Ensure `public/build` directory is generated
- Check Vite build output
- Verify asset paths in production

#### 4. Environment Variables
- Double-check all required variables are set
- Ensure `APP_KEY` is properly generated
- Verify `APP_URL` matches your Vercel domain

### Debug Mode
For troubleshooting, temporarily enable debug mode:
```bash
APP_DEBUG=true
```
**Remember to disable this in production!**

## 🔄 Step 5: Continuous Deployment

### GitHub Actions
The included `.github/workflows/deploy.yml` will:
- Run tests on every push
- Deploy to Vercel automatically
- Ensure code quality

### Manual Deployment
To deploy manually:
```bash
vercel --prod
```

## 📊 Monitoring

### Vercel Analytics
- Enable Vercel Analytics for performance insights
- Monitor function execution times
- Track user experience metrics

### Error Tracking
- Set up error logging
- Monitor Laravel logs
- Configure error reporting

## 🔒 Security Considerations

### Production Checklist
- [ ] `APP_DEBUG=false`
- [ ] `APP_ENV=production`
- [ ] Strong `APP_KEY`
- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Database credentials protected

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Laravel Deployment Guide](https://laravel.com/docs/deployment)
- [Vercel PHP Runtime](https://github.com/vercel/vercel-php)

## 🆘 Support

If you encounter issues:
1. Check Vercel build logs
2. Review Laravel error logs
3. Verify environment configuration
4. Test locally with production settings

---

Happy deploying! 🎉
