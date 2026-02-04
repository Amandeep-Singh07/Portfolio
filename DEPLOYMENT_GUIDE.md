# Deployment & Customization Guide

## 🚀 Quick Deployment to Vercel

### Step 1: Prepare Your Code

```bash
cd portfolio
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

### Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Select your GitHub repository
4. Click "Deploy"
5. Vercel will automatically detect Next.js configuration
6. Your portfolio is live! 🎉

### Step 3: Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain (e.g., johndoe.com)
3. Update DNS records as shown
4. Wait for SSL certificate (usually instant)

## 📋 Pre-Deployment Checklist

- [ ] Update `src/app/layout.tsx` with your name and metadata
- [ ] Update `src/app/page.tsx` hero section
- [ ] Add all your projects to `src/app/projects/page.tsx`
- [ ] Update skills in `src/app/skills/page.tsx`
- [ ] Update education in `src/app/education/page.tsx`
- [ ] Update internships in `src/app/internships/page.tsx`
- [ ] Update achievements in `src/app/achievements/page.tsx`
- [ ] Update certificates in `src/app/certificates/page.tsx`
- [ ] Update competitive programming profiles
- [ ] Configure contact form (see Contact Form Setup)
- [ ] Update all social links (GitHub, LinkedIn, Email)
- [ ] Test all links in development
- [ ] Run `npm run build` and verify no errors
- [ ] Test responsive design on mobile
- [ ] Check SEO metadata
- [ ] Add resume PDFs to `public/resumes/`

## 🎨 Complete Customization Guide

### 1. Change the Name & Branding

**File: `src/app/layout.tsx`**

```tsx
export const metadata: Metadata = {
  title: "John Doe | CS Student & Developer", // Change this
  description: "Your custom description", // Change this
};
```

**File: `src/components/Navbar.tsx`**

```tsx
<Link href="/" className="text-2xl font-bold text-cyan-400">
  JD {/* Change to your initials */}
</Link>
```

**File: `src/components/Footer.tsx`**

```tsx
<h3 className="text-2xl font-bold text-cyan-400 mb-2">JD</h3>  {/* Update */}
```

### 2. Customize the Home Page

**File: `src/app/page.tsx`**

Change the hero text:

```tsx
<h1>Your Name Here</h1>
<h2>Your Role | Your Focus</h2>
<p>Your tagline and professional description</p>
```

Update the stats:

```tsx
<Card className="text-center">
  <div className="text-4xl font-bold text-cyan-400 mb-2">YOUR_NUMBER+</div>
  <p className="text-slate-400">Your Stat Name</p>
</Card>
```

Update featured projects:

```tsx
<Card>
  <h3 className="text-2xl font-bold text-cyan-400 mb-4">Your Project Name</h3>
  <p className="text-slate-400 mb-4">Your project description...</p>
  {/* Add your tech stack */}
  <div className="flex gap-4">
    <a href="your-github-link">GitHub →</a>
    <a href="your-demo-link">Live Demo →</a>
  </div>
</Card>
```

### 3. Add All Your Projects

**File: `src/app/projects/page.tsx`**

Create a comprehensive projects array:

```tsx
const projects = [
  {
    title: "E-Commerce Platform",
    description: "What you built and why",
    technologies: ["Next.js", "MongoDB", "Stripe"],
    role: "Full Stack Developer",
    challenges: "What was difficult",
    outcomes: "What you achieved",
    github: "https://github.com/yourproject",
    demo: "https://project-live-link.com",
  },
  {
    title: "Your Second Project",
    // ... more projects
  },
];
```

### 4. Update Your Complete Skills

**File: `src/app/skills/page.tsx`**

Update the skill categories:

```tsx
const skillCategories = [
  {
    category: "Programming Languages",
    description: "What you know well",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "Java", level: "Advanced" },
      // Add more...
    ],
  },
  {
    category: "Web Technologies",
    skills: [
      { name: "React", level: "Expert" },
      // Add more...
    ],
  },
  // More categories...
];
```

### 5. Update Education Details

**File: `src/app/education/page.tsx`**

```tsx
// Update current degree
<h3 className="text-2xl font-bold text-cyan-400 mb-2">B.Tech / B.Sc</h3>
<p className="text-slate-300 text-lg mb-4">Your Major</p>
<p className="text-slate-400">
  Your University Name | Location
  <br />
  Expected Graduation: Your Date
</p>

// Update CGPA
<p className="text-3xl font-bold text-cyan-400">Your CGPA</p>

// Update specialization
<h3 className="text-xl font-bold text-cyan-400 mb-4">Your Specialization</h3>

// Update coursework
<span className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-sm">
  Your Course Name
</span>
```

### 6. Add Your Internships

**File: `src/app/internships/page.tsx`**

```tsx
const experiences = [
  {
    company: "Company Name",
    role: "Your Role",
    duration: "Jun 2023 - Aug 2023",
    description: "What you did",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3",
    ],
    skills: ["Tech1", "Tech2", "Tech3"],
    impact: "What you achieved",
  },
];
```

### 7. Add Your Achievements

**File: `src/app/achievements/page.tsx`**

```tsx
const achievements = [
  {
    category: "Coding Competitions",
    items: [
      {
        title: "Your Achievement",
        description: "Details about the achievement",
        date: "Month Year",
        icon: "🏆",
      },
    ],
  },
];
```

### 8. Add Your Certificates

**File: `src/app/certificates/page.tsx`**

```tsx
const certificates = [
  {
    category: "Web Development",
    certs: [
      {
        name: "Certificate Name",
        issuer: "Issuing Organization",
        date: "Month Year",
        credentialId: "Your Credential ID",
        status: "Completed",
        description: "What you learned",
      },
    ],
  },
];
```

### 9. Update Competitive Programming

**File: `src/app/competitive-programming/page.tsx`**

```tsx
const platforms = [
  {
    name: "LeetCode",
    icon: "💻",
    profile: "your_leetcode_username",
    stats: {
      "Problems Solved": "Your number+",
      Ranking: "Your ranking",
      Badges: "Your count+",
      Streak: "Your days",
    },
    profileUrl: "https://leetcode.com/your_username",
  },
];
```

### 10. Update Contact Information

**File: `src/app/contact/page.tsx`**

```tsx
<a href="mailto:your.email@example.com">
  your.email@example.com
</a>

<p className="text-slate-400">
  Your City, State, Country
</p>

<a href="https://linkedin.com/in/yourprofile">
  linkedin.com/in/yourprofile
</a>

<a href="https://github.com/yourprofile">
  github.com/yourprofile
</a>
```

### 11. Configure Contact Form Email

**Option A: Using SendGrid (Recommended)**

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Create an API key
3. Update `src/app/api/contact/route.ts`:

```ts
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

// Inside POST function:
const msg = {
  to: process.env.RECIPIENT_EMAIL!,
  from: "noreply@yourdomain.com",
  subject: `New Portfolio Contact: ${data.subject}`,
  html: `
    <h2>New Contact Message</h2>
    <p><strong>From:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Subject:</strong> ${data.subject}</p>
    <p><strong>Message:</strong></p>
    <p>${data.message}</p>
  `,
};

await sgMail.send(msg);
```

4. Create `.env.local`:

```env
SENDGRID_API_KEY=SG.your_api_key_here
RECIPIENT_EMAIL=your.email@gmail.com
```

**Option B: Using Formspree (Easiest)**

1. Go to [formspree.io](https://formspree.io)
2. Create a new form
3. Get your form endpoint
4. Update the form action in `contact/page.tsx`

### 12. Add Your Resume

1. Create `public/resumes/` folder
2. Add `resume.pdf` and `resume.docx` files
3. Update links in `src/app/resume/page.tsx`:

```tsx
<Button href="/resumes/resume.pdf">
  📄 Download PDF
</Button>
<Button href="/resumes/resume.docx" variant="secondary">
  📝 Download DOCX
</Button>
```

### 13. Customize Color Scheme

**File: `tailwind.config.ts`**

```ts
theme: {
  extend: {
    colors: {
      cyan: {
        300: '#67e8f9',
        400: '#22d3ee',  // Primary accent
        500: '#06b6d4',
      },
      slate: {
        950: '#0f172a',  // Background
        900: '#0f172a',
        800: '#1e293b',
      },
      // Add custom colors
      // blue, green, purple, etc.
    },
  },
}
```

Update corresponding classes in CSS and components.

## 🌐 Domain & DNS Setup

### Using Vercel (Recommended)

1. Dashboard → Settings → Domains
2. Add your domain
3. Follow Vercel's DNS instructions
4. Wait for SSL (automatic)

### Custom Nameservers

Update your domain registrar to use Vercel's nameservers:

- ns1.vercel-dns.com
- ns2.vercel-dns.com

## 🔐 Environment Variables

Create `.env.local` in project root:

```env
# Email Service
SENDGRID_API_KEY=your_key_here
RECIPIENT_EMAIL=your@email.com

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your_ga_id

# Database (if using)
DATABASE_URL=your_database_url
```

**Note:** Never commit `.env.local` to GitHub. Add it to `.gitignore`.

## 📊 Analytics Setup

Add Google Analytics to `src/app/layout.tsx`:

```tsx
import Script from 'next/script';

// In RootLayout component:
<Script
  strategy="afterInteractive"
  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
  `}
</Script>
```

## 🔍 SEO Optimization Checklist

- [ ] Update metadata in each page (title, description)
- [ ] Add Open Graph tags
- [ ] Create `public/robots.txt`
- [ ] Create `public/sitemap.xml`
- [ ] Submit to Google Search Console
- [ ] Submit to Bing Webmaster Tools
- [ ] Add structured data (Schema.org)
- [ ] Optimize images with alt text
- [ ] Ensure fast load times
- [ ] Mobile responsive testing
- [ ] Check Core Web Vitals

## 🧪 Final Testing Before Deployment

```bash
# Build check
npm run build

# Lint check
npm run lint

# Type check
npx tsc --noEmit

# Manual testing checklist:
# [ ] All pages load correctly
# [ ] Mobile responsive on iPhone 12
# [ ] Mobile responsive on Android
# [ ] All links work
# [ ] Forms submit correctly
# [ ] Contact form sends emails
# [ ] Images load properly
# [ ] Dark theme displays correctly
# [ ] No console errors
# [ ] Lighthouse score > 90
```

## 🚀 Deployment Workflow

1. **Development**

   ```bash
   npm run dev
   ```

2. **Testing**

   ```bash
   npm run build
   npm run start
   ```

3. **Push to GitHub**

   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

4. **Deploy to Vercel**
   - Automatic on push (if connected)
   - Or manual trigger in dashboard

5. **Monitor**
   - Check Vercel Analytics
   - Monitor error logs
   - Check Google Analytics

## 📱 Testing Checklist

### Desktop

- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile

- [ ] iPhone 12/13/14
- [ ] Android (Chrome)
- [ ] Tablet (iPad)

### Performance

- [ ] Lighthouse: 90+
- [ ] Core Web Vitals: Good
- [ ] Load time: < 3s

### Functionality

- [ ] Navigation works
- [ ] All pages load
- [ ] Forms work
- [ ] Links are correct
- [ ] Images display
- [ ] Animations smooth
- [ ] No console errors

## 🎓 Best Practices

1. **Keep Updated**: Update portfolio monthly
2. **Fresh Projects**: Add new projects regularly
3. **Quality Content**: Write clear descriptions
4. **Active Links**: Ensure all links work
5. **Professional Tone**: Maintain professionalism
6. **Typo Check**: Proofread everything
7. **Link Preview**: Test links before deployment
8. **Mobile First**: Always test on mobile

---

**Your portfolio is ready to impress recruiters!** 🎉

For support, refer to the README or documentation.
