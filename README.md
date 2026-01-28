# Ellen Herrera - Personal Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Features

- Dark modern design with coral/orange accents
- Smooth animations and transitions
- Mobile-responsive layout
- Easy content management through a single data file
- Static export for GitHub Pages deployment
- Automatic deployment via GitHub Actions

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed
- GitHub account

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Updating Content

All website content is centralized in `src/data/content.ts`. To update:

1. Open `src/data/content.ts`
2. Edit the relevant sections:
   - `siteConfig` - Your name, email, social links
   - `heroContent` - Homepage headline and tagline
   - `aboutContent` - Bio and stats
   - `experienceContent` - Work history
   - `fitnessContent` - Fitness credentials
   - `educationContent` - Education and certifications
   - `projectsContent` - Featured projects
   - `contactContent` - Contact information
3. Save the file
4. Changes appear immediately in development mode

### Adding Your Photo

1. Add your profile photo to `public/images/profile.jpg`
2. Update `aboutContent.image` in `src/data/content.ts` if using a different filename

### Adding Project Images

1. Add images to `public/images/projects/`
2. Uncomment and update the `image` field in each project in `projectsContent`

## Deployment to GitHub Pages

### Initial Setup

1. **Create a GitHub repository**:
   - For a personal site: name it `yourusername.github.io`
   - For a project site: any name (requires `basePath` config)

2. **If using a project repo** (not username.github.io), update `next.config.js`:
   ```js
   const nextConfig = {
     output: 'export',
     images: { unoptimized: true },
     basePath: '/your-repo-name',  // Uncomment and set this
   }
   ```

3. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

4. **Enable GitHub Pages**:
   - Go to repository Settings > Pages
   - Under "Build and deployment", select "GitHub Actions"
   - The site will deploy automatically on push to `main`

5. **Access your site**:
   - Personal: `https://yourusername.github.io`
   - Project: `https://yourusername.github.io/repo-name`

### Subsequent Updates

Simply push to the `main` branch - GitHub Actions will automatically rebuild and deploy:

```bash
git add .
git commit -m "Update content"
git push
```

## Local Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (creates `out/` folder) |
| `npm run start` | Start production server (requires build first) |
| `npm run lint` | Run ESLint |

## Project Structure

```
├── public/
│   └── images/           # Your images go here
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Main page
│   ├── components/       # React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Fitness.tsx
│   │   ├── Education.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── data/
│       └── content.ts    # ← EDIT THIS FILE TO UPDATE CONTENT
├── next.config.js
├── tailwind.config.js
└── package.json
```

## Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```js
colors: {
  background: '#0f0f0f',      // Main background
  'card-bg': '#1a1a1a',       // Card backgrounds
  accent: {
    DEFAULT: '#f97316',       // Main accent (coral/orange)
    light: '#fb923c',         // Hover state
  },
}
```

### Fonts

Fonts are configured in `src/app/layout.tsx`. The site uses:
- **Inter** - Main font
- **JetBrains Mono** - Code/monospace

## TODO Items

Search for `// TODO:` in `src/data/content.ts` to find items that need your input:

- [ ] Add your email address
- [ ] Add your GitHub username
- [ ] Add specific dates for positions
- [ ] Add your profile photo
- [ ] Add project screenshots
- [ ] Add any additional certifications

## License

This project is for personal use by Ellen Herrera.
