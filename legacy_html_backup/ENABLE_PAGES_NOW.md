# Enable GitHub Pages - Step by Step

## Your files are pushed! Now enable GitHub Pages:

### Step 1: Go to Settings
1. Click on **"Settings"** tab (top right of your repository page)

### Step 2: Find Pages Section
1. Scroll down to **"Pages"** in the left sidebar
2. Or go directly to: https://github.com/abedisyedaliabbas/abedi-research/settings/pages

### Step 3: Configure Source
1. Under **"Source"**, select:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
2. Click **"Save"**

### Step 4: Wait for Deployment
- GitHub will show: "Your site is ready to be published"
- Wait 1-2 minutes
- You'll see a green checkmark when it's deployed

### Step 5: Visit Your Site
Your site will be at:
- **https://abedisyedaliabbas.github.io/abedi-research/**

---

## If Pages is Already Enabled:

### Check Deployment Status
1. Go to: https://github.com/abedisyedaliabbas/abedi-research/actions
2. Look for "pages build and deployment"
3. Click on it to see if it's running or failed

### Force Re-deploy
1. Go to Settings → Pages
2. Change the branch to something else (like `gh-pages`)
3. Click Save
4. Change it back to `main` and `/ (root)`
5. Click Save again

This will trigger a fresh deployment.

---

## Quick Check:
Visit: https://abedisyedaliabbas.github.io/abedi-research/

If you see a 404, Pages is not enabled yet.
If you see your site, it's working!

