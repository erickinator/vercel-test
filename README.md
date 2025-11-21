# Vercel Test Site

Dead simple 4-page site to learn Vercel deployment.

## Files
- index.html
- about.html
- services.html
- contact.html
- style.css

## Deployment Steps

1. **Create GitHub repo**
   - Go to GitHub, create new repo (call it whatever)
   - Don't add README or .gitignore (we already have files)

2. **Push these files to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

3. **Deploy to Vercel**
   - Go to vercel.com
   - Sign up/login (use your GitHub account)
   - Click "Add New Project"
   - Import your GitHub repo
   - Click "Deploy"
   - Done. You'll get a URL like `your-project.vercel.app`

4. **Future updates**
   - Edit files in VS Code
   - Commit and push to GitHub
   - Vercel auto-deploys (takes like 30 seconds)

That's it. No FTP. No server management. Just push and deploy.
# vercel-test
