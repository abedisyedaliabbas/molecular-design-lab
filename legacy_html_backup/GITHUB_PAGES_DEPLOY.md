# 🚀 Deploy to GitHub Pages - Free Hosting

GitHub Pages is perfect for your portfolio! It's free, professional, and gives you a `.github.io` URL.

## ✅ Why GitHub Pages is Great

- ✅ **100% Free** - No credit card needed
- ✅ **Free SSL** - Automatic HTTPS
- ✅ **Custom domain** support (optional)
- ✅ **Professional URL** - `username.github.io/portfolio`
- ✅ **Version control** - Track all your changes
- ✅ **Easy updates** - Just push changes to GitHub

## 📋 Step-by-Step Guide

### Step 1: Create GitHub Account (if you don't have one)

1. Go to https://github.com
2. Click "Sign up"
3. Create your account (free)

### Step 2: Create a New Repository

1. After signing in, click the **"+"** icon (top right)
2. Select **"New repository"**
3. Repository name: `portfolio` (or `abedi-research` or any name you like)
4. Description: "My research portfolio website"
5. Make it **Public** (required for free GitHub Pages)
6. **Don't** check "Initialize with README" (we'll upload files)
7. Click **"Create repository"**

### Step 3: Upload Your Files

**Option A: Using GitHub Web Interface (Easiest)**

1. On your new repository page, click **"uploading an existing file"**
2. Drag and drop your entire `Portfolio` folder contents:
   - `index.html`
   - `publications.html`
   - `news.html`
   - `travel.html`
   - `assets/` folder
   - All other files
3. Scroll down, add commit message: "Initial portfolio upload"
4. Click **"Commit changes"**

**Option B: Using GitHub Desktop (Recommended for Updates)**

1. Download GitHub Desktop: https://desktop.github.com
2. Install and sign in
3. Click **"File" → "Add Local Repository"**
4. Select your `Portfolio` folder
5. Click **"Publish repository"**
6. Choose your GitHub account and repository name
7. Click **"Publish repository"**

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Scroll down to **"Pages"** (left sidebar)
4. Under **"Source"**, select:
   - Branch: **`main`** (or `master`)
   - Folder: **`/ (root)`**
5. Click **"Save"**

### Step 5: Your Site is Live! 🎉

Wait 1-2 minutes, then visit:
- **URL:** `https://your-username.github.io/portfolio/`

Replace `your-username` with your actual GitHub username!

## 🔄 How to Update Your Site

**Using GitHub Web Interface:**
1. Go to your repository
2. Click the file you want to edit
3. Click the pencil icon (✏️)
4. Make changes
5. Scroll down, commit changes
6. Site updates in 1-2 minutes!

**Using GitHub Desktop:**
1. Make changes to your files locally
2. Open GitHub Desktop
3. See your changes listed
4. Add commit message
5. Click "Commit to main"
6. Click "Push origin"
7. Done!

## 🎯 Custom Domain (Optional)

If you want `yourname.com` instead of `username.github.io`:

1. Buy a domain (Namecheap, Google Domains, etc.)
2. In your GitHub repo → Settings → Pages
3. Add your custom domain
4. Update DNS records (GitHub will show you how)

## 📁 Important: File Structure

Make sure your `index.html` is in the **root** of the repository, not in a subfolder.

Your structure should be:
```
portfolio/
├── index.html
├── publications.html
├── news.html
├── travel.html
├── assets/
│   ├── css/
│   ├── js/
│   └── img/
└── (other files)
```

## ⚠️ Common Issues

**Issue: 404 Error**
- Make sure `index.html` is in the root folder
- Wait 2-3 minutes after enabling Pages
- Check the Pages settings (Source should be `/ (root)`)

**Issue: CSS/JS not loading**
- Make sure all file paths are relative (e.g., `assets/css/style.css`)
- Don't use absolute paths like `/assets/...`

**Issue: Images not showing**
- Make sure image files are uploaded
- Check file paths in your code

## 🎨 Your GitHub Pages URL Format

- **Repository name:** `portfolio`
- **Your URL:** `https://your-username.github.io/portfolio/`

Or if you name the repo `abedi-research`:
- **Your URL:** `https://your-username.github.io/abedi-research/`

## 💡 Pro Tip

You can also create a repository named exactly `your-username.github.io` to get:
- **URL:** `https://your-username.github.io/` (cleaner!)

But then you need to put all files in the root, not in a subfolder.

---

**Ready to deploy?** Follow the steps above and your site will be live in 5 minutes! 🚀

