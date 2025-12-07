# ✨ Updated - Configuration-Based Portfolio

This portfolio has been refactored to use **JSON configuration files** instead of hardcoded data in the source code.

## 🎯 What's New?

### **Before**: Hardcoded data in React components
```
src/
├── components/
│   ├── Projects.tsx (with 12 hardcoded projects)
│   ├── Skills.tsx (with hardcoded skills)
│   ├── Education.tsx (with hardcoded timeline)
│   └── ... (all data mixed with UI logic)
```

### **Now**: Centralized JSON configuration
```
public/
└── config/
    ├── portfolio.json    ← Personal info & SEO
    ├── skills.json       ← Skills & certifications
    ├── projects.json     ← All projects
    ├── education.json    ← Education & timeline
    └── about.json        ← About section
```

## 🚀 For Forkers: Getting Started

### 1. Clone & Install
```bash
git clone https://github.com/11KAlYAN11/Kalyan_Portfolio.github.io.git
cd Kalyan_Portfolio.github.io
npm install
```

### 2. Edit Configuration Files
All your portfolio data is in `/public/config/` - just JSON files!

- Edit `portfolio.json` - Your name, title, social links
- Edit `projects.json` - Add/remove projects
- Edit `skills.json` - Update your skills
- Edit `education.json` - Your education timeline
- Edit `about.json` - About section details

**No code changes needed!** 🎉

### 3. Setup Environment Variables
```bash
cp .env.example .env.local
# Edit .env.local with your EmailJS credentials
```

### 4. Run Development Server
```bash
npm run dev
```

### 5. Build for Production
```bash
npm run build
```

## 📖 Complete Guides

- **[SETUP.md](./SETUP.md)** - Detailed setup instructions
- **[CONFIGURATION.md](./CONFIGURATION.md)** - Full configuration reference
- **[MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md)** - What changed

## 📁 Configuration Files Explained

### `portfolio.json`
Your personal information and SEO metadata:
- Name, title, bio
- Contact information
- Social media links
- SEO tags for Google/Twitter

### `skills.json`
Your technical skills organized by category:
- 7 skill categories
- 50+ individual skills
- Icons and colors for each category
- Certifications list

### `projects.json`
All your projects with complete information:
- Project title, description, type
- Technologies used
- Key features
- Live demo and GitHub links
- 12 sample projects included

### `education.json`
Your education and experience timeline:
- Educational institutions
- Work experience
- Achievements
- Timeline view with icons

### `about.json`
About section details:
- Major achievements
- Contact information
- Social profiles

## 💡 Why This Approach?

✅ **Easy to Customize** - Edit JSON, not code
✅ **Beginner Friendly** - No programming knowledge needed
✅ **Safe** - Can't break component logic
✅ **Scalable** - Add unlimited projects
✅ **Version Control** - Easy to track changes
✅ **Maintainable** - Single source of truth

## 🎨 Customization

### Add a New Project

Edit `/public/config/projects.json`:

```json
{
  "projects": [
    {
      "id": 13,
      "title": "My New Project",
      "description": "Project description here",
      "icon": "Code",
      "tech": ["React", "Node.js"],
      "features": ["Feature 1", "Feature 2"],
      "type": "Full Stack",
      "gradient": "from-blue-500/20 to-cyan-500/20",
      "liveUrl": "https://project.com",
      "githubUrl": "https://github.com/user/project"
    }
  ]
}
```

### Add a Skill

Edit `/public/config/skills.json` and add to a category:

```json
{
  "skillCategories": [
    {
      "icon": "Code",
      "title": "Programming Languages",
      "skills": ["Java", "Python", "JavaScript", "Your New Skill"],
      "color": "from-blue-500/20 to-blue-600/20"
    }
  ]
}
```

### Change Your Name

Edit `/public/config/portfolio.json`:

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    ...
  }
}
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist folder to Netlify
```

### GitHub Pages
Update `vite.config.ts` then push to GitHub.

## 📚 Available Resources

- **Icons**: 400+ from [Lucide React](https://lucide.dev/)
- **Colors**: Tailwind CSS gradients
- **Animations**: Framer Motion presets
- **Email**: EmailJS integration

## 🔐 Security

- `.env.local` is in `.gitignore` - your secrets are safe
- API keys never committed to git
- Config files contain only non-sensitive data

## ❓ FAQ

**Q: Do I need to know React?**
A: No! Just edit JSON files in `/public/config/`

**Q: Can I add more projects?**
A: Yes! Just add to the projects array in `projects.json`

**Q: How do I change colors?**
A: Use Tailwind CSS gradients in the `color` property

**Q: Will changes reload automatically?**
A: Yes! Dev server reloads on file save

**Q: Can I host my own version?**
A: Absolutely! This is open source - fork and customize freely

## 📞 Support

Check the documentation:
- [SETUP.md](./SETUP.md) - Installation & setup
- [CONFIGURATION.md](./CONFIGURATION.md) - Detailed reference
- [MIGRATION_SUMMARY.md](./MIGRATION_SUMMARY.md) - What changed

## 🚀 Quick Links

- [Lucide Icons](https://lucide.dev/) - 400+ icons to choose from
- [Tailwind CSS](https://tailwindcss.com/) - Colors and utilities
- [EmailJS](https://www.emailjs.com/) - Email service setup
- [Framer Motion](https://www.framer.com/motion/) - Animations

## 📜 Original Features

All original features are preserved:
- Responsive design
- Dark mode
- Contact form
- Smooth animations
- Modern UI

## 🎉 Ready to Customize?

1. Read [SETUP.md](./SETUP.md)
2. Edit config files in `/public/config/`
3. Run `npm run dev` to see changes
4. Deploy when ready!

---

**Happy customizing! 🚀**

*Questions? Check CONFIGURATION.md or SETUP.md*
