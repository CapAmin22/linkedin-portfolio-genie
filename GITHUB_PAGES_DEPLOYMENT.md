
# Deploying Your Portfolio with GitHub Pages

This guide will walk you through the process of deploying your portfolio on GitHub Pages, a free hosting service provided by GitHub.

## Prerequisites

1. A GitHub account
2. Git installed on your computer
3. Your portfolio project ready to deploy

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in to your account
2. Click the "+" button in the top right corner and select "New repository"
3. Name your repository (e.g., `portfolio` or `your-username.github.io`)
4. Make it public
5. Click "Create repository"

## Step 2: Prepare Your Portfolio for Deployment

1. If using Vite (which this project uses), update the `vite.config.ts` file to include the base URL if you're not using a custom domain:

```typescript
export default defineConfig({
  // Add this line if your repository name is not username.github.io
  base: '/your-repo-name/',
  // ... rest of your configuration
});
```

2. Create a deployment script in your `package.json`:

```json
"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Install the gh-pages package:

```bash
npm install --save-dev gh-pages
```

## Step 3: Push Your Code to GitHub

```bash
# Initialize git in your project folder (if not already done)
git init

# Add the remote repository
git remote add origin https://github.com/your-username/your-repo-name.git

# Add all files to staging
git add .

# Commit your changes
git commit -m "Initial commit"

# Push to GitHub
git push -u origin main
```

## Step 4: Deploy to GitHub Pages

Run the deploy script:

```bash
npm run deploy
```

This will build your project and publish it to a branch called `gh-pages` in your repository.

## Step 5: Configure GitHub Pages in Your Repository

1. Go to your GitHub repository
2. Click on "Settings"
3. Scroll down to the "GitHub Pages" section
4. For the "Source" option, select the `gh-pages` branch
5. Click "Save"

Your site will be published at `https://your-username.github.io/your-repo-name/`

## Step 6: Using a Custom Domain (Optional)

1. In your repository settings, under GitHub Pages, enter your custom domain
2. Update your DNS settings with your domain provider
3. Create a CNAME file in your public folder with your custom domain

## Troubleshooting

- **404 Errors**: Make sure the `base` property in your Vite config matches your repository name
- **Missing Resources**: Check that all asset paths are relative
- **Routing Issues**: If using React Router, make sure to use `HashRouter` instead of `BrowserRouter` or configure your repository for proper SPA routing

For more detailed information, refer to the [GitHub Pages documentation](https://docs.github.com/en/pages).
