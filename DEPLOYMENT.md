# Deployment Guide: GitHub Pages + Custom Domain

## Step 1: Push to GitHub

Your repository is initialized locally and ready to push. Use these commands:

```bash
cd d:\VJ\vj-enterprises-website-source

# Push to GitHub (set main branch as upstream)
git branch -M main
git push -u origin main
```

**Note:** This requires:
- Git credentials configured on your machine, OR
- A GitHub Personal Access Token (PAT)

If you haven't authenticated yet, GitHub will prompt you for credentials.

## Step 2: Enable GitHub Pages

1. Go to: https://github.com/vjenterprisesofficial/website
2. Click on **Settings** (top right)
3. Navigate to **Pages** (left sidebar)
4. Under "Source", select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Step 3: Deploy to GitHub Pages

Once main branch is pushed and gh-pages branch is created:

```bash
npm install
npm run deploy
```

This will:
- Build your site (`npm run build`)
- Push the `dist` folder to the `gh-pages` branch
- Make it live at: https://vjenterprisesofficial.github.io/website

## Step 4: Connect Custom Domain

Your custom domain is already configured in `public/CNAME`:
```
www.vjenterprisesdigital.com
```

### With GitHub Pages (Recommended):

1. Go to your repo **Settings** → **Pages**
2. Under "Custom domain", enter: `www.vjenterprisesdigital.com`
3. Check "Enforce HTTPS"
4. GitHub will automatically create/validate the CNAME record

### At Your Domain Registrar (DNS Setup):

Add these DNS records:

**For www subdomain:**
```
Type: CNAME
Name: www
Value: vjenterprisesofficial.github.io
```

**For root domain (optional, for https://vjenterprisesdigital.com):**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

DNS changes can take 15 minutes to 48 hours to propagate.

## Step 5: Verify Deployment

Once deployed, check:
- ✅ https://vjenterprisesofficial.github.io/website (GitHub Pages)
- ✅ https://www.vjenterprisesdigital.com (Custom domain - after DNS propagates)
- ✅ SSL certificate auto-renews (GitHub Pages handles this)

## Ongoing Deployments

Every time you make changes:

```bash
git add .
git commit -m "Update: your changes here"
git push origin main
npm run deploy
```

## Troubleshooting

**Domain not showing?**
- Wait 24-48 hours for DNS to propagate
- Check DNS records at: https://mxtoolbox.com/

**HTTPS not working?**
- Ensure GitHub Pages shows "✓ Certificate issued" in Settings → Pages
- Can take 5-10 minutes after custom domain setup

**Site showing 404?**
- Check that `public/CNAME` exists and has correct domain
- Verify GitHub Pages settings point to `gh-pages` branch
- Rebuild and redeploy: `npm run deploy`
