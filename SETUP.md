# 🎨 Portfolio Configuration Guide for Forkers

This guide helps you customize the portfolio to make it your own! All personal information, projects, skills, and education data are now stored in JSON configuration files, making it super easy to update without touching the code.

## 📁 Configuration Files Location

All configuration files are located in `/public/config/`:

```
public/config/
├── portfolio.json      # Personal info, social links, SEO metadata
├── skills.json         # Skills and certifications
├── projects.json       # All your projects
├── education.json      # Education timeline and achievements
└── about.json          # About section contact info
```

## 🚀 Quick Start

### 1. Clone and Install

```bash
git clone https://github.com/11KAlYAN11/Kalyan_Portfolio.github.io.git
cd Kalyan_Portfolio.github.io
npm install
```

### 2. Configure Your Portfolio

Edit the configuration files in `/public/config/`:

#### **portfolio.json** - Your Personal Information

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "tagline": "Your tagline",
    "bio": "Your biography",
    "location": "Your City, Country",
    "email": "your.email@example.com",
    "phone": "+1 234 567 8900",
    "graduationYear": 2025
  },
  "social": {
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourprofile",
    "twitter": "@yourhandle",
    "portfolio": "https://yourporfolio.com",
    "instagram": "https://instagram.com/yourprofile"
  },
  "seo": {
    "title": "Your Name | Your Title",
    "description": "Your professional description",
    "keywords": "your, keywords, here",
    "domain": "yourdomain.com",
    "imageUrl": "https://yourdomain.com/preview-image.jpg"
  }
}
```

#### **skills.json** - Your Technical Skills

```json
{
  "skillCategories": [
    {
      "icon": "Code",
      "title": "Programming Languages",
      "skills": ["Java", "Python", "JavaScript"],
      "color": "from-blue-500/20 to-blue-600/20"
    }
    // ... more categories
  ],
  "certifications": [
    "Your Certification 1",
    "Your Certification 2"
  ]
}
```

**Available Icons**: `Code`, `Server`, `Database`, `Globe`, `Brain`, `Tool`, `BookOpen`, `Users`, `ShoppingCart`, `Lightbulb`, `Sparkles`, etc. (Lucide React icons)

**Color Gradients**: Choose from Tailwind CSS gradients like:
- `from-blue-500/20 to-blue-600/20`
- `from-green-500/20 to-green-600/20`
- `from-purple-500/20 to-purple-600/20`

#### **projects.json** - Your Projects

```json
{
  "projects": [
    {
      "id": 1,
      "title": "Project Name",
      "description": "Project description",
      "icon": "Code",
      "tech": ["Tech 1", "Tech 2"],
      "features": ["Feature 1", "Feature 2"],
      "type": "Backend / Frontend / Full Stack / AI/ML",
      "gradient": "from-blue-500/20 to-indigo-500/20",
      "liveUrl": "https://project.com",
      "githubUrl": "https://github.com/user/repo"
    }
  ]
}
```

#### **education.json** - Your Education & Achievements

```json
{
  "timeline": [
    {
      "id": 1,
      "type": "education",
      "title": "Your Degree",
      "institution": "Your University",
      "period": "2020 - 2024",
      "details": "CGPA: 8.5",
      "icon": "GraduationCap",
      "iconColor": "text-blue-400"
    }
  ],
  "achievements": [
    "Achievement 1",
    "Achievement 2"
  ]
}
```

**Available Timeline Types**: `education`, `experience`, `achievement`

**Available Icons**: 
- Education/Achievement: `GraduationCap`, `Trophy`, `Award`, `BookOpen`
- Experience: `Briefcase`, `Code`, `Database`
- Icon Colors: `text-blue-400`, `text-green-400`, `text-yellow-400`, etc.

#### **about.json** - About Section Details

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
    }
  ]
}
```

### 3. Environment Variables

Create a `.env.local` file (copy from `.env.example`):

```bash
cp .env.example .env.local
```

Fill in your actual values:

```env
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_key_here
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id

# GitHub API (optional)
VITE_GITHUB_USERNAME=yourusername
VITE_GITHUB_TOKEN=your_token
```

### 4. Setup EmailJS for Contact Form

1. Go to [EmailJS](https://www.emailjs.com/)
2. Sign up for a free account
3. Create a new email service
4. Create a new email template
5. Copy your credentials to `.env.local`

### 5. Update HTML Metadata

Edit `index.html` to update meta tags:

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description">
<meta name="keywords" content="your, keywords">
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Your Name",
  "url": "https://yourdomain.com"
}
</script>
```

### 6. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:5173`

### 7. Build for Production

```bash
npm run build
```

## 📝 Configuration Reference

### Icon Names (Lucide React)

For skills and projects, use any [Lucide React icon](https://lucide.dev/):

```
Code, Server, Database, Globe, Brain, Tool, BookOpen, Users, ShoppingCart, 
Lightbulb, Sparkles, Award, Trophy, GraduationCap, Briefcase, Mail, Phone, 
MapPin, Github, Linkedin, Twitter, ExternalLink, CheckCircle, Heart, Star, 
MessageSquare, Calendar, and many more...
```

### Tailwind Color Gradients

Mix and match with Tailwind's gradient system:

```
from-{color}-{intensity} to-{color}-{intensity}

Colors: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, 
green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

Intensities: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

Examples:
- from-blue-500/20 to-purple-500/20
- from-green-500/20 to-emerald-500/20
- from-orange-500/20 to-red-500/20
```

## 🎯 Component Usage

The following components automatically load data from config files:

- **Skills.tsx** ← `skills.json`
- **Projects.tsx** ← `projects.json`
- **Education.tsx** ← `education.json`
- **About.tsx** ← `about.json` + portfolio.json

## 🔐 Security Notes

- ⚠️ Never commit `.env.local` to version control
- ✅ Add `.env.local` to `.gitignore`
- ✅ Use environment variables for API keys
- ✅ Keep GitHub tokens and sensitive data out of config files

## 🌐 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Then drag and drop the 'dist' folder to Netlify
```

### GitHub Pages

Update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

## 📚 Additional Resources

- [Lucide React Icons](https://lucide.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [GitHub API Documentation](https://docs.github.com/en/rest)

## 🤝 Contributing

Feel free to:
- Fork this repository
- Customize the configuration files
- Add your own projects and skills
- Share your customized version!

## ⭐ If you found this helpful, please star the repository!

## 📧 Need Help?

Check the original repository: [Kalyan_Portfolio.github.io](https://github.com/11KAlYAN11/Kalyan_Portfolio.github.io)

---

**Happy Portfolio Building! 🚀**
