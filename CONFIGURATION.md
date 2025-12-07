# 🚀 Kalyan Portfolio - Configuration Guide

Welcome to the refactored portfolio! This project now uses **JSON configuration files** instead of hardcoded data, making it incredibly easy for forkers to customize without touching the source code.

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Configuration Files](#configuration-files)
- [Environment Setup](#environment-setup)
- [File Structure](#file-structure)
- [Deployment](#deployment)
- [FAQ](#faq)

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/11KAlYAN11/Kalyan_Portfolio.github.io.git
cd Kalyan_Portfolio.github.io
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment File

```bash
cp .env.example .env.local
# Then edit .env.local with your actual credentials
```

### 4. Edit Configuration Files

All configuration files are in `/public/config/`. Edit them with your information:
- `portfolio.json` - Personal info
- `skills.json` - Your skills
- `projects.json` - Your projects
- `education.json` - Education & timeline
- `about.json` - About section

### 5. Run Development Server

```bash
npm run dev
```

### 6. Build for Production

```bash
npm run build
```

## 📁 Configuration Files

### `portfolio.json`

Your main profile information:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Professional Title",
    "tagline": "Your tagline",
    "bio": "Your professional biography",
    "location": "City, Country",
    "email": "your.email@example.com",
    "phone": "+1 234 567 8900",
    "graduationYear": 2026
  },
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "twitter": "@yourhandle",
    "portfolio": "https://yourdomain.com",
    "instagram": ""
  },
  "seo": {
    "title": "Your Name | Your Title",
    "description": "Professional description for SEO",
    "keywords": "your, keywords, separated, by, comma",
    "domain": "yourdomain.com",
    "imageUrl": "https://yourdomain.com/preview-image.jpg",
    "twitterHandle": "@yourhandle",
    "googleSiteVerification": "your_google_verification_code"
  }
}
```

### `skills.json`

Organize your technical skills by category:

```json
{
  "skillCategories": [
    {
      "icon": "Code",
      "title": "Programming Languages",
      "skills": ["Java", "Python", "JavaScript", "C", "SQL"],
      "color": "from-blue-500/20 to-blue-600/20"
    },
    {
      "icon": "Server",
      "title": "Backend Technologies",
      "skills": ["Spring Boot", "Node.js", "Express.js"],
      "color": "from-green-500/20 to-green-600/20"
    }
  ],
  "certifications": [
    "Certification 1",
    "Certification 2"
  ]
}
```

**Available Icons:** Code, Server, Database, Globe, Brain, Tool, BookOpen, Users, ShoppingCart, Lightbulb, Sparkles, and more (Lucide React icons)

### `projects.json`

Add your projects with all details:

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "icon": "Code",
      "tech": ["Tech 1", "Tech 2", "Tech 3"],
      "features": ["Feature 1", "Feature 2"],
      "type": "Full Stack",
      "gradient": "from-blue-500/20 to-indigo-500/20",
      "liveUrl": "https://project.com",
      "githubUrl": "https://github.com/user/project"
    }
  ]
}
```

**Project Types:** `Backend`, `Frontend`, `Full Stack`, `AI/ML`, `Browser Extension`

### `education.json`

Timeline of your education and achievements:

```json
{
  "timeline": [
    {
      "id": 1,
      "type": "education",
      "title": "Degree Name",
      "institution": "University Name",
      "period": "2020 - 2024",
      "details": "CGPA: 8.5",
      "icon": "GraduationCap",
      "iconColor": "text-blue-400"
    },
    {
      "id": 2,
      "type": "experience",
      "title": "Job Title",
      "institution": "Company Name",
      "period": "Month Year - Present",
      "details": "Job description",
      "icon": "Briefcase",
      "iconColor": "text-green-400"
    }
  ],
  "achievements": [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

**Timeline Types:** `education`, `experience`, `achievement`

**Icon Options for Timeline:**
- Education: `GraduationCap`, `BookOpen`
- Experience: `Briefcase`, `Code`, `Database`
- Achievement: `Trophy`, `Award`, `Star`

### `about.json`

About section details:

```json
{
  "achievements": [
    "Major Achievement 1",
    "Major Achievement 2"
  ],
  "contact": [
    {
      "icon": "MapPin",
      "text": "Your Location",
      "color": "text-blue-400"
    },
    {
      "icon": "Mail",
      "text": "your.email@example.com",
      "color": "text-green-400"
    }
  ]
}
```

## 🔐 Environment Setup

### Create `.env.local`

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

Edit `.env.local` with your actual values:

```env
# EmailJS Configuration (for contact form)
# Get these from https://www.emailjs.com/
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here

# GitHub API (optional)
VITE_GITHUB_USERNAME=yourusername
VITE_GITHUB_TOKEN=your_github_token

# Custom Domain (optional)
VITE_DOMAIN=yourdomain.com
```

### Setting Up EmailJS

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service (Gmail, Outlook, etc.)
4. Create an email template
5. Copy your **Service ID**, **Template ID**, and **Public Key**
6. Paste them into `.env.local`

## 📂 File Structure

```
Kalyan_Portfolio.github.io/
├── public/
│   └── config/
│       ├── portfolio.json      # Main config
│       ├── skills.json         # Skills & certifications
│       ├── projects.json       # All projects
│       ├── education.json      # Education & timeline
│       └── about.json          # About section
├── src/
│   ├── components/
│   │   ├── Skills.tsx          # Loads from skills.json
│   │   ├── Projects.tsx        # Loads from projects.json
│   │   ├── Education.tsx       # Loads from education.json
│   │   ├── About.tsx           # Loads from about.json
│   │   └── ... (other components)
│   └── ...
├── .env.example                # Template for environment variables
├── SETUP.md                    # This detailed setup guide
├── index.html                  # Update meta tags here
└── package.json
```

## 🎨 Customization Tips

### Adding Colors

Use Tailwind CSS gradient classes:

```
from-{color}-{intensity} to-{color}-{intensity}

Examples:
- from-blue-500/20 to-purple-500/20
- from-green-500/20 to-emerald-500/20
- from-orange-500/20 to-red-500/20
```

### Available Icon Names

All icons from [Lucide React](https://lucide.dev/):

```
Code, Server, Database, Globe, Brain, Tool, BookOpen, Users, ShoppingCart,
Lightbulb, Sparkles, Award, Trophy, GraduationCap, Briefcase, Mail, Phone,
MapPin, Github, Linkedin, Twitter, ExternalLink, CheckCircle, Heart, Star,
MessageSquare, Calendar, and 400+ more!
```

### Update HTML Metadata

Edit `index.html` to customize:

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description here">
<meta name="keywords" content="your, keywords, here">

<!-- Schema.org JSON-LD -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yourdomain.com",
  "sameAs": [
    "https://github.com/yourprofile",
    "https://linkedin.com/in/yourprofile"
  ]
}
</script>
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Vercel automatically builds and deploys from your repository.

### Deploy to Netlify

```bash
npm run build
# Then drag-and-drop the 'dist' folder to Netlify
```

Or connect your GitHub repo to Netlify for automatic deployments.

### Deploy to GitHub Pages

1. Update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

2. Build and push:

```bash
npm run build
git add -A
git commit -m "Deploy"
git push origin main
```

## 🔗 Custom Domain

### On Vercel/Netlify

1. Go to your project settings
2. Add your custom domain
3. Update DNS records

### On GitHub Pages

Update `CNAME` file:

```
yourdomain.com
```

## ❓ FAQ

**Q: Can I add more projects?**
A: Yes! Just add new objects to the `projects` array in `projects.json`.

**Q: How do I change colors?**
A: Edit the `color` property in any config file. Use Tailwind CSS gradients.

**Q: What if I don't want a live demo link?**
A: Leave `liveUrl` empty or omit it from the project object.

**Q: How do I hide the contact form?**
A: Don't add EmailJS credentials to `.env.local` - the form will show a fallback email link.

**Q: Can I add more sections?**
A: Yes! Clone an existing component and create a new config file following the same pattern.

**Q: Do I need to restart the dev server after config changes?**
A: No! The dev server will automatically reload when you save JSON files.

## 📚 Resources

- [Lucide React Icons](https://lucide.dev/)
- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Framer Motion Docs](https://www.framer.com/motion/)

## 🤝 Contributing

Feel free to:
- Fork and customize
- Share your version
- Submit improvements
- Report issues

## 📧 Need Help?

- Check the original repository issues
- Read Framer Motion documentation
- Explore Tailwind CSS docs

## ⭐ If This Helped You

Please star the original repository: [Kalyan_Portfolio.github.io](https://github.com/11KAlYAN11/Kalyan_Portfolio.github.io)

---

**Happy customizing! 🎨**
