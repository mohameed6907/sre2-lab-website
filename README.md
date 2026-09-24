<div align="center">

# SRE² Lab
### Sustainability & Renewable Energy Research Laboratory
**Sivas University of Science and Technology (SBTÜ)**

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwindcss)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=flat&logo=vercel)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-Academic_Open_Source-green?style=flat)](LICENSE)

</div>

---

## 🔬 About SRE² Lab

The **Sustainability & Renewable Energy Research Laboratory (SRE² Lab)** at **Sivas University of Science and Technology (SBTÜ)** pioneers interdisciplinary research at the intersection of materials science, flexible electronics, mechanical energy harvesting, and autonomous intelligent systems.

Led by **Dr. Qazi Muhammad Saqib**, the laboratory develops zero-power, battery-free, and self-sustaining technologies engineered to solve global challenges across defense, aerospace, wearable healthcare, and smart cities.

---

## 🧭 Core Research Axes

| Axis | Focus Domain | Key Technologies |
| :--- | :--- | :--- |
| **Axis 01** | **Novel Trends in Renewable Energy Generation** | Triboelectric (TENG), Piezoelectric (PENG), and Thermoelectric Nanogenerators, ambient scavenging, waste-to-energy conversion. |
| **Axis 02** | **Advanced Energy Storage & Self-Powered Systems** | Supercapacitors, micro-supercapacitors, solid-state electrolytes, monolithic self-charging integration. |
| **Axis 03** | **Self-Powered Multifunctional Sensors & E-Skin** | Tactile arrays, conformal electronic skin, flexible biosensors, human-machine interfaces (HMI). |
| **Axis 04** | **Nature-Inspired Platforms for Smart Technologies** | Biodegradable functional biofilms, chitin/chitosan transducers, bio-smart polymers, micro-activity harvesters. |
| **Axis 05** | **Advanced Sensing for Aviation & Space** | Extreme environment structural health monitoring, UAV autonomous sensors, spacecraft instrumentation. |

---

## 🏛️ Website Architecture & Navigation

```
├── public/
│   ├── cover-pages/       # Journal cover highlights and videos
│   ├── data/              # Lab datasets (info.xlsx, publications.json, news_auto.json)
│   ├── equipments/        # Research facility instrumentation imagery
│   ├── gallery/           # High-tech laboratory showcase, milestones, and awards
│   ├── hero/              # Hero showcase background assets
│   ├── news/              # Press coverage and announcement imagery
│   ├── pfp/               # High-resolution team profile pictures
│   ├── research/          # Scientific figures, axis schematics, and pillar assets
│   ├── sre-logo.png       # Official SRE² Lab Logo
│   └── favicon.ico        # Browser favicons
├── src/
│   ├── app/
│   │   ├── blog/          # Lab blog and research perspectives
│   │   ├── collaborators/ # International collaborating professors
│   │   ├── facilities/    # Cleanrooms, characterization labs, and equipment
│   │   ├── gallery/       # Visual albums, awards, and videos
│   │   ├── join/          # Direct inquiry and student/postdoc recruitment
│   │   ├── news/          # Announcements, press coverage, and slug pages
│   │   ├── pi/            # Principal Investigator biography & credentials
│   │   ├── publications/  # Journals, Conferences, Patents, and Books
│   │   ├── research/      # Comprehensive scientific axes & strategic pillars
│   │   ├── team/          # Researchers, engineers, and scientists
│   │   ├── layout.tsx     # Global application layout & font configurations
│   │   └── page.tsx       # Homepage with luminous hero & capability previews
│   ├── components/        # Reusable navigation, footer, and interactive components
│   └── lib/               # Server-side data loaders and publication helpers
├── tailwind.config.ts     # Academic cobalt/navy blue color palette
├── next.config.ts         # Clean Next.js configuration
└── package.json           # Project dependencies and build scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.18.0 or higher (v20+ recommended)
- **npm** or **yarn** / **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/mohameed6907/sre2-lab-website.git

# Navigate into the project directory
cd sre2-lab-website

# Install dependencies
npm install
```

### Development Server

```bash
# Run local development server with Turbopack
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the website.

### Production Build

```bash
# Compile and build the production bundle
npm run build
```

---

## 📝 Updating Lab Content

### 1. Team Members & News
Team profiles and news headlines are managed via `public/data/info.xlsx`:
- **Team Sheet**: Name, role, profile picture filename (`/public/pfp/`), LinkedIn URL, and research bio.
- **News Sheet**: Title, slug, excerpt, date, category, and markdown filename.
- **News Markdown**: Articles are stored in `public/news/md/` with imagery in `public/news/img/` or `public/gallery/`.

### 2. Scientific Publications
Publications are organized under `src/lib/publicationsData.ts` (and mirrored in `public/data/publications.json`), categorized into:
- **Selected Articles** (`/publications/journals`)
- **Conference Papers** (`/publications/conferences`)
- **Patents & IP** (`/publications/patents`)
- **Books & Chapters** (`/publications/books`)

Publications can also be refreshed via the ORCID integration script:
```bash
npm run fetch-publications
```
*(Requires `ORCID_ID`, `ORCID_CLIENT_ID`, and `ORCID_CLIENT_SECRET` environment variables).*

### 3. Blog Articles
The blog section (`/blog`) is currently titled **SRE² LAB Blogs** and set up for upcoming dispatches, perspectives, and research stories.

---

## 🌐 Deployment to Vercel

The website is optimized for seamless zero-configuration deployment on **[Vercel](https://vercel.com)**:

1. Import the repository `mohameed6907/sre2-lab-website` in your Vercel Dashboard.
2. Vercel automatically detects **Next.js** framework presets.
3. Click **Deploy** — automatic builds and global Edge CDN distribution will be configured instantly.
4. Any future push to the `main` branch automatically triggers preview and production deployments.

---

## 📄 License & Attribution

- **Codebase**: Academic Open Source License.
- **Scientific Figures, Imagery & Content**: © SRE² Lab — Sivas University of Science and Technology (SBTÜ). All rights reserved.
- **Contact & Inquiries**: Dr. Qazi Muhammad Saqib (`qazi.saqib@sivas.edu.tr`).
