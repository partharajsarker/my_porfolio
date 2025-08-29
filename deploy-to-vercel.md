# 🚀 Deploy to Vercel - Step by Step Guide

## 📋 **Step 1: Go to Vercel Dashboard**

1. Open [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click **"New Project"**

## 🔄 **Step 2: Import Your Repository**

1. In the left section, find **"my_porfolio"**
2. Click the **"Import"** button next to it
3. Wait for Vercel to load the project

## ⚙️ **Step 3: Configure Project Settings**

### **Project Name:**

- Keep as: `my-porfolio` (or change if you want)

### **Framework Preset:**

- Select: **"Other"**

### **Root Directory:**

- Leave as: `./` (default)

### **Build Command:**

- Change to: `npm run build`

### **Output Directory:**

- Keep as: `public`

### **Install Command:**

- **IMPORTANT:** Change to: `npm ci`
- **Remove:** `&& composer install --no-dev --optimize-autoloader`

## 🔑 **Step 4: Add Environment Variables**

Click **"Add More"** and add these one by one:

| Key                | Value                                                 |
| ------------------ | ----------------------------------------------------- |
| `APP_NAME`         | `Partha Raj Sarker Portfolio`                         |
| `APP_ENV`          | `production`                                          |
| `APP_DEBUG`        | `false`                                               |
| `APP_URL`          | `https://your-project-name.vercel.app`                |
| `APP_KEY`          | `base64:KXJWhi7zqTWaOHMLu5oeyp4fESNj2XBKRqJWtn8HGxs=` |
| `DB_CONNECTION`    | `sqlite`                                              |
| `DB_DATABASE`      | `/tmp/database.sqlite`                                |
| `CACHE_DRIVER`     | `file`                                                |
| `SESSION_DRIVER`   | `file`                                                |
| `QUEUE_CONNECTION` | `sync`                                                |
| `LOG_CHANNEL`      | `stack`                                               |
| `LOG_LEVEL`        | `error`                                               |
| `MAIL_MAILER`      | `log`                                                 |
| `VITE_APP_NAME`    | `Partha Raj Sarker Portfolio`                         |

## 🚀 **Step 5: Deploy**

1. **Double-check** all settings are correct
2. **Click "Deploy"** button
3. **Wait** for build to complete
4. **Your portfolio will be live!**

## ✅ **Expected Result:**

- ✅ No more Composer errors
- ✅ Successful build
- ✅ Live portfolio URL
- ✅ All Laravel routes working

## 🆘 **If You Still Get Errors:**

1. **Make sure** Install Command is just `npm ci`
2. **Verify** Build Command is `npm run build`
3. **Check** all environment variables are added
4. **Try redeploying** after fixing settings

---

## 🎯 **Key Points to Remember:**

- **Install Command:** `npm ci` (NOT the Composer version)
- **Build Command:** `npm run build`
- **Output Directory:** `public`
- **Framework Preset:** Other

**Follow these steps exactly and your portfolio will deploy successfully!** 🎉
