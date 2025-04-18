npm i --legacy-peer-deps

# MDX support

npm install @next/mdx @mdx-js/loader @mdx-js/react

Warning!

> next.config.js must be next.config.mjs with "type": "module"

# Syntax highlighting with Prism

npm install prismjs

# KaTeX for math rendering

npm install katex

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

git checkout --orphan gh-pages
git reset --hard
git commit --allow-empty -m "Initialize gh-pages branch"
git push origin gh-pages
git checkout main

pnpm run clean-build
cd out
New-Item .nojekyll -ItemType File
cd ..

git checkout --orphan gh-pages (initial branch creation)
or
git checkout gh-pages (when gh-pages branch already exists)
xcopy out\*.\* . /s /e /y
echo. > .nojekyll
git add .
git commit -m "🚀 Deploy static site"
git push origin HEAD:gh-pages --force
git checkout main

# Save current work

git checkout main
git add .
git commit -m "💾 Save work before deploy"

# Switch to a temporary branch

git checkout --orphan gh-pages

# Clear the index (everything)

git reset --hard

# Copy the out/ content to root of gh-pages

cp -r out/\* .

# Add .nojekyll if not already

touch .nojekyll

# Commit and push to gh-pages

git add .
git commit -m "🚀 Deploy static site"
git push origin HEAD:gh-pages --force

# Switch back to main

git checkout main
