Serve out doesn't show styles, but deployment to github shows styles properly due to cfa-notes/ prefix in index.html inside "out" dir.

```bash
# 1. Build and create 'out' directory
pnpm run build
# or
pnpm run clean-build

# 2. Deploy
pnpm run deploy

```

npm i --legacy-peer-deps

🔧 1. Configure next.config.mjs for GitHub Pages
Update your config like this:

const isProd = process.env.NODE_ENV === "production";

🧱 2. Add a 404.tsx page
GitHub Pages requires 404.html to fall back correctly for unknown routes.

Create:

tsx
Copy
Edit
// app/404.tsx
export default function NotFound() {
return <h1>404 - Page Not Found</h1>;
}

1. Build and export
   pnpm run build

🚫 4. Ensure .nojekyll is added
GitHub Pages ignores folders starting with \_ unless you add a .nojekyll file.

Create it in the out/ folder:

bash
Copy
Edit
echo > out/.nojekyll

🚀 5. Deploy to gh-pages branch manually
One-time setup:
If you haven’t yet created gh-pages:

bash
Copy
Edit
git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initial gh-pages branch"
git push origin gh-pages
git checkout main

Push the out/ folder
bash
Copy
Edit
git checkout gh-pages
git rm -rf .
cp -r out/\* .
touch .nojekyll
git add .
git commit -m "🚀 Deploy static site"
git push origin gh-pages --force
git checkout main

✅ 6. Set GitHub Pages settings
Go to your repo settings:

Settings → Pages

Select the gh-pages branch, root folder

Save

🛠 Optional: Add deploy script
In package.json:

```json
"scripts": {
  "deploy": "npm run build && npm run export && gh-pages -d out"
}
```
