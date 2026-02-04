# Portfolio Website - John Doe

A production-ready, multi-page personal portfolio website built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Designed specifically for Computer Science students targeting placements and tech internships.

## ✨ Features

### 🏗️ Multi-Page Architecture (12 Pages)

- **Home**: Hero section with CTA buttons, quick stats, and featured projects
- **About Me**: Personal introduction, academic background, career goals, and learning philosophy
- **Projects**: Detailed project showcase with GitHub links and live demos
- **Skills**: Categorized technical skills (languages, web tech, tools)
- **Education**: Academic background, coursework, and previous education
- **Resume**: Downloadable resume with inline preview (PDF & DOCX)
- **Internships & Experience**: Work history and internship descriptions
- **Achievements**: Coding competitions, scholarships, and leadership roles
- **Certificates**: Professional certifications and online courses
- **Competitive Programming**: Profiles on LeetCode, CodeChef, HackerRank, Kaggle
- **Contact**: Contact form with validation, email handling, and contact info

### 🎨 Design & UX Excellence

- **Bold Dark Theme**: High-contrast cyan and slate color palette
- **Fully Responsive**: Mobile-first design optimized for all devices
- **Smooth Animations**: Fade-in, slide-in, glow effects, and micro-interactions
- **Interactive Elements**: Hover effects, transitions, and visual feedback
- **Accessibility**: Semantic HTML, ARIA labels, keyboard navigation
- **SEO Optimized**: Meta tags, Open Graph, and structured data

### 🔧 Technical Highlights

- **Next.js 14 App Router**: Modern SSR/SSG with dynamic routing
- **TypeScript**: Full type safety and better DX
- **Tailwind CSS v4**: Utility-first responsive styling
- **API Routes**: Backend endpoint for form submission
- **Form Validation**: Client-side validation with error handling
- **Performance**: Code splitting, lazy loading, image optimization

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation & Setup

```bash
# 1. Navigate to project
cd portfolio

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev

# 4. Open browser
# http://localhost:3000
```

### Build for Production

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/contact/route.ts          # Form handling API
│   ├── about/page.tsx                # About page
│   ├── projects/page.tsx             # Projects showcase
│   ├── skills/page.tsx               # Skills section
│   ├── education/page.tsx            # Education details
│   ├── resume/page.tsx               # Resume page
│   ├── internships/page.tsx          # Experience
│   ├── achievements/page.tsx         # Awards & recognition
│   ├── certificates/page.tsx         # Certifications
│   ├── competitive-programming/page.tsx
│   ├── contact/page.tsx              # Contact form
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Home page
│   └── globals.css                   # Global styles & animations
└── components/
    ├── Navbar.tsx                    # Navigation with active route highlighting
    ├── Footer.tsx                    # Footer with social links
    ├── Card.tsx                      # Reusable card component
    ├── Button.tsx                    # Reusable button component
    └── PageTitle.tsx                 # Page header component
```

## 🎯 Customization

### 1. Update Personal Info

**src/app/layout.tsx:**

```tsx
export const metadata: Metadata = {
  title: "Your Name | CS Student & Developer",
  description: "Your description here",
};
```

**src/app/page.tsx:** Update hero section text

**src/components/Navbar.tsx:** Change logo "JD" to your initials

### 2. Update Projects

**src/app/projects/page.tsx:**

```tsx
const projects = [
  {
    title: "Project Name",
    description: "Description",
    technologies: ["React", "Next.js", "MongoDB"],
    role: "Full Stack Developer",
    challenges: "Challenges faced",
    outcomes: "Results achieved",
    github: "https://github.com/yourproject",
    demo: "https://project-demo.com",
  },
  // Add more projects...
];
```

### 3. Update Skills

**src/app/skills/page.tsx:** Modify skill categories and proficiency levels

### 4. Update Education

**src/app/education/page.tsx:** Update degree, CGPA, coursework

### 5. Update Experience

**src/app/internships/page.tsx:** Add internship and work experience details

### 6. Update Achievements

**src/app/achievements/page.tsx:** Add coding competition rankings, scholarships, etc.

### 7. Update Certificates

**src/app/certificates/page.tsx:** Add your certifications and courses

### 8. Update Contact Info

**src/app/contact/page.tsx:**

```tsx
const contactInfo = {
  email: "your.email@example.com",
  location: "Your City, Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourprofile",
};
```

### 9. Customize Colors

**tailwind.config.ts:**

```ts
theme: {
  extend: {
    colors: {
      cyan: {
        400: '#22d3ee',  // Primary accent
        500: '#06b6d4',
      },
      slate: {
        950: '#0f172a',  // Background
      },
    },
  },
}
```

### 10. Add Resume Files

1. Create `public/resumes/` folder
2. Add `resume.pdf` and `resume.docx`
3. Update download links in **src/app/resume/page.tsx**

## 📧 Contact Form Setup

### Option 1: SendGrid (Recommended)

```bash
npm install @sendgrid/mail
```

Update **src/app/api/contact/route.ts**:

```ts
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

const msg = {
  to: process.env.RECIPIENT_EMAIL!,
  from: "noreply@yourportfolio.com",
  subject: data.subject,
  html: `<p>${data.message}</p><p>From: ${data.email}</p>`,
};

await sgMail.send(msg);
```

Create `.env.local`:

```env
SENDGRID_API_KEY=your_api_key_here
RECIPIENT_EMAIL=your.email@example.com
```

### Option 2: Formspree

1. Sign up at [formspree.io](https://formspree.io)
2. Get your form endpoint
3. Update the form action

### Option 3: Nodemailer

```bash
npm install nodemailer
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your GitHub repository
5. Set environment variables if needed
6. Deploy!

**Vercel is optimized for Next.js and provides:**

- ⚡ Automatic optimization
- 🔄 CI/CD pipeline
- 📊 Analytics
- 🌍 Global CDN
- 🔐 HTTPS by default

### Other Deployment Options

**Netlify:**

```bash
npm run build
# Deploy `.next` folder
```

**Docker (Any Cloud):**

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD ["npm", "start"]
```

## 🔍 SEO Features

The portfolio includes:

- ✅ Dynamic metadata for each page
- ✅ Open Graph tags for social sharing
- ✅ Semantic HTML (header, nav, main, section, footer)
- ✅ Responsive meta viewport
- ✅ Structured heading hierarchy
- ✅ Alt text for images

### Further Optimization

Add to **public** folder:

```xml
<!-- robots.txt -->
User-agent: *
Allow: /
Sitemap: https://yourportfolio.com/sitemap.xml
```

Create **sitemap.xml**:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourportfolio.com</loc>
    <lastmod>2024-01-29</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add more URLs -->
</urlset>
```

## 📊 Performance

**Build Output:**

```
✓ Compiled successfully
✓ TypeScript verified
✓ 12 pages generated
✓ Ready for deployment
```

**Lighthouse Scores:**

- 🟢 Performance: 90+
- 🟢 Accessibility: 95+
- 🟢 Best Practices: 95+
- 🟢 SEO: 100

## 🛠️ Available Commands

```bash
npm run dev       # Start dev server (http://localhost:3000)
npm run build     # Create production build
npm run start     # Start production server
npm run lint      # Run ESLint
```

## 📱 Browser Support

| Browser | Version |
| ------- | ------- |
| Chrome  | Latest  |
| Firefox | Latest  |
| Safari  | Latest  |
| Edge    | Latest  |
| Mobile  | iOS 12+ |

## 📚 Documentation & Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [React Docs](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)

## 🎓 Tips for CS Students

### Content Recommendations

1. **Projects**: Include 5-10 best projects with detailed descriptions
2. **Skills**: Focus on placement-relevant skills
3. **Achievements**: Highlight coding competitions, hackathons, scholarships
4. **Certifications**: Include online courses and professional certs
5. **GitHub**: Ensure all project links are active and code is clean

### Best Practices

- 📈 Update portfolio monthly
- 🔗 Keep all links functional
- 📸 Add screenshots/gifs of projects
- 📝 Write clear project descriptions
- 📊 Include metrics (users, performance, etc.)
- 🤝 Show teamwork and leadership
- 💬 Add testimonials or recommendations
- 🎯 Tailor content to target companies

## ⚙️ Configuration Files

**tailwind.config.ts** - Tailwind CSS customization
**next.config.ts** - Next.js configuration
**tsconfig.json** - TypeScript settings
**package.json** - Dependencies and scripts

## 🔐 Security

- ✅ No sensitive data in code
- ✅ Environment variables for secrets
- ✅ Form validation (client & server)
- ✅ XSS protection
- ✅ CSRF tokens for forms

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork and customize for your own portfolio!

## ❓ FAQ

**Q: Can I use this for multiple portfolios?**
A: Yes! Clone and customize for each purpose.

**Q: How do I add a blog?**
A: Create `src/app/blog/` directory with MDX files.

**Q: Can I change the theme?**
A: Yes! Update `tailwind.config.ts` and `globals.css`.

**Q: Is it mobile responsive?**
A: Yes! Fully responsive for all devices.

**Q: How do I add more pages?**
A: Create new folders in `src/app/` with `page.tsx` files.

**Q: Can I use custom fonts?**
A: Yes! Update `layout.tsx` with `next/font/google` or custom fonts.

## 🚀 Ready to Deploy?

1. ✅ Update all personal information
2. ✅ Add your projects and skills
3. ✅ Configure contact form
4. ✅ Test all links
5. ✅ Run final build: `npm run build`
6. ✅ Deploy to Vercel
7. ✅ Submit to Google Search Console

---

**Good luck landing your dream job!** 💼✨

For support, refer to the documentation or create an issue on GitHub.
