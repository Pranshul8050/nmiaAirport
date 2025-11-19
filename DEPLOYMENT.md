# NMIA Airport Website - Deployment Guide

## ✅ Recent Fixes Applied

### Fixed Vercel Deployment Error

The `EBADPLATFORM` error has been resolved with the following changes:

1. **Removed platform-specific lock files** (`package-lock.json`)
2. **Added `.npmrc`** with Linux platform configuration
3. **Added `vercel.json`** with forced clean install

## 🚀 Deploy to Vercel

### Option 1: Redeploy with Cache Clear (Recommended)

1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Select your project
3. Go to **Settings** → **General**
4. Scroll down and click **"Clear Build Cache"**
5. Go to **Deployments** tab
6. Click the **three dots** on the latest deployment
7. Select **"Redeploy"**

### Option 2: Force New Deployment

Push any small change to trigger a new deployment:

```bash
git commit --allow-empty -m "Force redeploy"
git push nmia main
```

## 🔑 Environment Variables

Make sure these are set in Vercel Dashboard → Settings → Environment Variables:

```
VITE_SUPABASE_PROJECT_ID=xpiyjvphnabdsfrrelbc
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwaXlqdnBobmFiZHNmcnJlbGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIwMDg4MzAsImV4cCI6MjA3NzU4NDgzMH0.8vtOAqQet8HBlYorhVTBmmju6PTcTXDoN_VZ7fvnY1E
VITE_SUPABASE_URL=https://xpiyjvphnabdsfrrelbc.supabase.co
VITE_AVIATION_STACK_API_KEY=f8a84323e493bfd6dce0fc34987ba11c
VITE_WEATHER_API_KEY=587f82cc9953422bbc0175211251711
VITE_NEWS_API_KEY=0edbce7aa075448dbed9506c379d7abb
```

## ✨ Features

- ✅ Live Flight Information (Aviation Stack API)
- ✅ Real-time Mumbai Weather
- ✅ Auto-refreshing NMIA News (every 30 minutes)
- ✅ Responsive Design
- ✅ Modern UI with Amber/Charcoal Theme

## 📱 Local Development

```bash
npm install
npm run dev
```

Visit: http://localhost:8080

## 🛠️ Build

```bash
npm run build
```

## 📦 Tech Stack

- React 18.3.1
- TypeScript 5.8.3
- Vite 5.4.21
- Tailwind CSS 3.4.17
- Supabase 2.78.0
- TanStack Query 5.83.0

---

**Repository:** https://github.com/Pranshul8050/nmiaAirport
