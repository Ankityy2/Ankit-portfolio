# Ankit Yadav — Portfolio

A premium, production-ready Next.js 14 portfolio website with 3D animations, glassmorphism design, and a dark futuristic theme.

## ✨ Features

- **3D Hero Animation** — React Three Fiber + Three.js floating geometry
- **Particle Network Background** — Canvas-based animated particle system
- **Custom Cursor** — Glow dot + trailing ring with hover states
- **Loading Screen** — Cinematic intro animation
- **Glassmorphism UI** — Frosted glass cards with depth
- **Framer Motion** — Smooth scroll reveals & page transitions
- **Type Animation** — Animated role text cycling
- **Skill Bars** — Animated proficiency bars with category tabs
- **Project Cards** — Hover animations with tech tags & highlights
- **Timeline Experience** — Vertical animated timeline
- **Contact Form** — Ready for EmailJS integration
- **SEO Optimized** — OpenGraph, Twitter cards, metadata
- **Mobile First** — Fully responsive on all screen sizes
- **Deploy Ready** — Vercel-configured out of the box

## 🛠 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion |
| 3D | Three.js + React Three Fiber |
| Fonts | Syne (display) + DM Sans (body) + Space Mono |
| Icons | Lucide React |
| Deploy | Vercel |

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles, CSS variables, animations
│   ├── layout.tsx       # Root layout with SEO metadata
│   └── page.tsx         # Main page assembling all sections
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   └── ContactSection.tsx
│   ├── three/
│   │   └── HeroCanvas.tsx   # 3D scene
│   └── ui/
│       ├── Cursor.tsx
│       ├── Footer.tsx
│       ├── LoadingScreen.tsx
│       ├── Navbar.tsx
│       ├── ParticleBackground.tsx
│       └── SectionHeading.tsx
└── lib/
    └── data.ts          # ← All your resume data lives here
```

## ✏️ Customization

### Update Your Info
Edit `/src/lib/data.ts`:
- `personalInfo` — name, email, phone, social links
- `projects` — add/edit projects
- `skills` — adjust skill levels
- `experience` — work history
- `education` — academic background
- `certifications` — add certs

### Connect Contact Form
Install EmailJS and update `ContactSection.tsx`:
```bash
npm install @emailjs/browser
```
Then replace the mock submit with:
```ts
await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY');
```

### Add Resume PDF
Place your resume at `/public/resume.pdf` for the download button to work.

## 🌐 Deploying to Vercel

```bash
# Option 1 — Vercel CLI
npm i -g vercel
vercel

# Option 2 — GitHub Integration
# Push to GitHub → Import in vercel.com → Auto-deploy
```

## 🎨 Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `--accent-cyan` | `#00f5ff` | Primary accent, glows |
| `--accent-purple` | `#8b5cf6` | Secondary accent |
| `--accent-gold` | `#fbbf24` | Highlights, stats |
| `--bg-primary` | `#050810` | Page background |
| Font Display | Syne | Headings |
| Font Body | DM Sans | Paragraphs |
| Font Mono | Space Mono | Labels, tags |

---

Built with ❤️ for **Ankit Yadav** | Delhi NCR, India
