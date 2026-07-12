# Git Commands to Push to GitHub

## Step-by-Step Commands

### 1. Navigate to your project folder
```bash
cd /Users/abedi_dr/Desktop/Portfolio
```

### 2. Check git status (optional - see what changed)
```bash
git status
```

### 3. Add all changes
```bash
git add .
```

### 4. Commit your changes
```bash
git commit -m "Update travel blog with accurate city/country data"
```

### 5. Push to GitHub
```bash
git push origin main
```

---

## If you need to set up git for the first time:

### Initialize git (if not already done)
```bash
git init
```

### Add remote repository
```bash
git remote add origin https://github.com/abedisyedaliabbas/abedi-research.git
```

### Set branch to main
```bash
git branch -M main
```

### Then push
```bash
git push -u origin main
```

---

## Quick One-Liner (if already set up)
```bash
cd /Users/abedi_dr/Desktop/Portfolio && git add . && git commit -m "Update travel blog" && git push origin main
```

---

## Troubleshooting

### If you get "remote contains work" error:
```bash
git pull origin main --allow-unrelated-histories
# Resolve any conflicts, then:
git add .
git commit -m "Merge remote changes"
git push origin main
```

### If you need to force push (use carefully):
```bash
git push -f origin main
```

---

**Note:** After pushing, GitHub Pages will update automatically in 1-2 minutes.

