# 🌐 Farhan Khalid — Personal Portfolio Website

<p align="center">
  <img src="https://img.shields.io/badge/Framework-React-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/Bundler-Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"/>
  <img src="https://img.shields.io/badge/Language-JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/Deployed-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
  <img src="https://img.shields.io/badge/License-MIT-brightgreen?style=for-the-badge"/>
</p>

<p align="center">
  A personal portfolio website built with <strong>React</strong> and <strong>Vite</strong>, showcasing projects, skills, and experience. Deployed live on Vercel.
  <br/><br/>
  🔗 <strong>Live Site:</strong> <a href="https://farhan-khalid-portfolio.vercel.app/">farhan-khalid-portfolio.vercel.app</a>
</p>

---

## ✨ Features

| Feature | Description |
|---|---|
| ⚡ **React + Vite** | Lightning-fast dev server with HMR (Hot Module Replacement) |
| 📄 **Multi-Page Layout** | Includes `index.html` and `blog.html` pages |
| 🚀 **Vercel Deployment** | Continuously deployed from the `main` branch |
| 🔍 **ESLint Configured** | Code quality enforced with ESLint rules out of the box |
| 📱 **Responsive Design** | Optimized for all screen sizes |

---

## 📂 Project File Structure

```
farhan-khalid-portfolio/
├── public/                  ← Static assets (images, icons, favicon)
│
├── reference-audit/         ← Design reference and audit files
│
├── src/                     ← React source code
│   ├── components/          ← Reusable UI components
│   ├── App.jsx              ← Root App component
│   └── main.jsx             ← Entry point
│
├── _RecycleBin/             ← Archived/deprecated files
│
├── .gitignore
├── blog.html                ← Blog page entry point
├── index.html               ← Main entry HTML
├── fix_newlines.mjs         ← Utility script for newline fixes
├── package.json             ← Project dependencies & scripts
├── package-lock.json
├── vite.config.js           ← Vite configuration
└── README.md
```

---

## ⚙️ Prerequisites

Before you begin, make sure you have the following installed:

- ✅ **Node.js** — v18.0.0 or newer  
  👉 [Download Node.js](https://nodejs.org/)
- ✅ **npm** — v9.0.0 or newer *(comes bundled with Node.js)*
- ✅ **Git** — for cloning the repository  
  👉 [Download Git](https://git-scm.com/)

---

## 🚀 Step-by-Step Setup Guide

### Step 1 — Clone the Repository

```bash
git clone https://github.com/HelloWorld-Farhan/farhan-khalid-portfolio.git
cd farhan-khalid-portfolio
```

Or download the ZIP directly from GitHub:
> Click **Code → Download ZIP** → Extract the folder

---

### Step 2 — Install Dependencies

```bash
npm install
```

---

### Step 3 — Run the Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page auto-updates on file save — no restart needed.

---

### Step 4 — Build for Production

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## 🛠️ Tech Stack

| Component | Library / Tool |
|---|---|
| Framework | React 18 |
| Bundler | Vite |
| Language | JavaScript (ES6+) |
| Linting | ESLint |
| Deployment | Vercel |
| Package Manager | npm |

---

## ⚛️ Vite Plugin Options

This project uses Vite's official React plugins. Two options are available:

- [`@vitejs/plugin-react`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) — uses [Oxc](https://oxc.rs) for Fast Refresh
- [`@vitejs/plugin-react-swc`](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) — uses [SWC](https://swc.rs/) for Fast Refresh

---

## 🔬 React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performance. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

---

## 📋 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server at `localhost:5173` |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint to check for code issues |

---

## 🌐 Deployment

### Deploy on Vercel (Recommended)

This project is already live at 👉 [farhan-khalid-portfolio.vercel.app](https://farhan-khalid-portfolio.vercel.app/)

To deploy your own fork:

1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) and click **"New Project"**
3. Import your GitHub repository
4. Click **"Deploy"** — Vercel auto-detects Vite and configures everything

---

## 🔧 Troubleshooting

### ❌ `npm install` Fails

- Make sure Node.js version is **18.0.0 or higher**: run `node -v` to check
- Delete `node_modules/` and `package-lock.json`, then run `npm install` again

### ❌ Dev Server Not Starting / Port Conflict

- Vite defaults to port 5173 — run on a different port:
  ```bash
  npm run dev -- --port 3000
  ```

### ❌ Build Fails

- Run `npm run lint` first to catch any JS/JSX errors
- Make sure all imported components and assets exist at their referenced paths

---

## 📦 Expanding the ESLint Configuration

For production applications, using TypeScript with type-aware lint rules is recommended. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

---

## 👨‍💻 Author

**Farhan Khalid** — Web Developer & AI/ML Engineer  
📧 farhankhalid17968@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/farhan-khalid-117514259/)  
🐙 [GitHub](https://github.com/HelloWorld-Farhan)  
🌐 [Portfolio](https://farhan-khalid-portfolio.vercel.app/)

---

## 📄 License

```
MIT License

Copyright (c) 2026 Farhan Khalid

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is furnished
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

## 🌟 Star This Repo

If you found this project helpful or interesting, please consider giving it a ⭐ on GitHub!

---

<p align="center">Made with ❤️ in India</p>
