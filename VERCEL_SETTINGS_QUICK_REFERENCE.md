# ⚡ Vercel Settings - Quick Reference

## 🚨 **CRITICAL SETTINGS TO CHANGE:**

### **Install Command:**

```
❌ WRONG: npm ci && composer install --no-dev --optimize-autoloader
✅ CORRECT: npm ci
```

### **Build Command:**

```
❌ WRONG: npm run build:vercel
✅ CORRECT: npm run build
```

### **Output Directory:**

```
✅ CORRECT: public
```

### **Framework Preset:**

```
✅ CORRECT: Other
```

## 🔑 **ENVIRONMENT VARIABLES (Copy-Paste):**

```
APP_NAME=Partha Raj Sarker Portfolio
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-project-name.vercel.app
APP_KEY=base64:KXJWhi7zqTWaOHMLu5oeyp4fESNj2XBKRqJWtn8HGxs=
DB_CONNECTION=sqlite
DB_DATABASE=/tmp/database.sqlite
CACHE_DRIVER=file
SESSION_DRIVER=file
QUEUE_CONNECTION=sync
LOG_CHANNEL=stack
LOG_LEVEL=error
MAIL_MAILER=log
VITE_APP_NAME=Partha Raj Sarker Portfolio
```

## 🎯 **THE MAIN ISSUE:**

Vercel is trying to run Composer, but it's not available in the build environment.

**Solution:** Remove Composer from the Install Command and let Vercel handle PHP dependencies automatically.

## ✅ **AFTER CHANGING SETTINGS:**

1. **Save** the project settings
2. **Click "Deploy"**
3. **Build should succeed** without Composer errors
4. **Your portfolio will be live!**

---

**Remember: The key is changing the Install Command from the Composer version to just `npm ci`!** 🎯
