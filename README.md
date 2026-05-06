# 🚀 Portfolio Website — React + Vite + Tailwind CSS

Website portfolio modern dark mode dengan animasi Framer Motion.

---

## 📁 Struktur Folder

```
portfolio/
├── public/
│   └── favicon.svg          # Favicon custom
├── src/
│   ├── components/
│   │   ├── CustomCursor.jsx  # Kursor custom animasi
│   │   ├── Navbar.jsx        # Navigasi sticky + mobile menu
│   │   ├── Hero.jsx          # Hero section + foto draggable
│   │   ├── About.jsx         # About me + focus areas
│   │   ├── Skills.jsx        # Skills dengan progress bar
│   │   ├── Projects.jsx      # Project cards + GitHub link
│   │   ├── Certificates.jsx  # Sertifikat cards
│   │   ├── Contact.jsx       # Contact methods
│   │   └── Footer.jsx        # Footer + social icons
│   ├── App.jsx               # Root component
│   ├── main.jsx              # Entry point
│   └── index.css             # Global styles + Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── .gitignore
```

---

## ⚙️ Cara Install & Jalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan development server

```bash
npm run dev
```

Buka http://localhost:5173

### 3. Build untuk production

```bash
npm run build
```

---

## 🎨 Kustomisasi

### Ganti Nama & Info Pribadi
Edit file-file berikut:
- `src/components/Hero.jsx` — Nama, deskripsi, tagline
- `src/components/About.jsx` — Bio, statistik
- `src/components/Contact.jsx` — Email, WhatsApp, GitHub, LinkedIn
- `src/components/Footer.jsx` — Link sosial media

### Ganti Foto Profil
Di `src/components/Hero.jsx`, ganti bagian `DraggablePhoto`:
```jsx
// Ganti div dengan initials ini:
<img
  src="/foto-profil.jpg"  // taruh foto di folder /public
  alt="Foto Profil"
  className="w-full h-full object-cover"
/>
```

### Tambah/Edit Project
Di `src/components/Projects.jsx`, edit array `projects`.

### Tambah/Edit Sertifikat
Di `src/components/Certificates.jsx`, edit array `certificates`.

### Tambah/Edit Skills
Di `src/components/Skills.jsx`, edit array `skills`.

---

## 🚀 Deploy ke Vercel

### Cara 1 — Via GitHub (Recommended)

1. Push project ke GitHub:
```bash
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main
```

2. Buka https://vercel.com
3. Login dengan akun GitHub
4. Klik **"New Project"**
5. Import repository portfolio kamu
6. Setting sudah otomatis terdeteksi (Vite):
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
7. Klik **Deploy** 🎉

### Cara 2 — Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy ke production
vercel --prod
```

---

## 📦 Teknologi yang Digunakan

| Tech | Version | Kegunaan |
|------|---------|----------|
| React | 18.x | UI Framework |
| Vite | 5.x | Build tool |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 11.x | Animasi |
| React Icons | 5.x | Icon library |
| React Scroll | 1.x | Smooth scrolling |

---

## 🎨 Warna Tema

| Nama | Hex | Kegunaan |
|------|-----|----------|
| Hitam gelap | `#050810` | Background utama |
| Dark navy | `#0A0F1E` | Card background |
| Biru neon | `#00D4FF` | Accent utama |
| Neon glow | `#0099CC` | Neon effect |
| Putih | `#ffffff` | Teks utama |

---

## 📝 Tips Tambahan

- Taruh foto profil di folder `/public` dengan nama `foto-profil.jpg`
- Taruh CV di folder `/public` dengan nama `cv.pdf`
- Custom domain bisa diatur di dashboard Vercel setelah deploy
- Semua animasi menggunakan Framer Motion — bisa dikustomisasi di setiap komponen
