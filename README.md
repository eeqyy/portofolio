# Rizki Dzulfikar Al-Qatiri — Portfolio

Portofolio pribadi dengan gaya **Neo-Retro Poster / Editorial**: teks poster
raksasa, aksen mint–pink, dan hero 3D interaktif. Dibangun dengan Nuxt 3 (SSR)
dan siap dideploy ke Vercel, Netlify, atau Node server.

## Tech stack

- **Nuxt 3.21** + Vue 3.5 + TypeScript
- **Tailwind CSS 3.4** (`@nuxtjs/tailwindcss`)
- **TresJS 4** + Three.js untuk hero torus knot
- **@vueuse/motion** untuk scroll reveal dan micro-interaction
- **@nuxtjs/google-fonts** — Syne, Merriweather, Plus Jakarta Sans
- **Nitro** — SSR node-server, Vercel, dan Netlify

## Menjalankan secara lokal

Node.js 22 LTS direkomendasikan (minimum 20).

```bash
npm install
cp .env.example .env
npm run dev
```

Buka `http://localhost:3000`.

```bash
npm run typecheck   # vue-tsc / Nuxt type check
npm run build       # build production ke .output
npm run preview     # preview hasil build
npm run generate    # opsi static generate
```

## Environment

| Variable | Contoh | Fungsi |
| --- | --- | --- |
| `NUXT_PUBLIC_SITE_URL` | `https://domain-kamu.com` | Canonical, `og:url`, dan URL absolut `og:image` |

Nilai default di `nuxt.config.ts` adalah placeholder
`https://rizkidzulfikar.vercel.app`. Ganti dengan domain produksi sebelum build.
`NUXT_PUBLIC_SITE_URL` dibaca saat build, jadi set juga di environment hosting
lalu redeploy.

## Push ke GitHub (eeqyy)

Buat repository kosong bernama `portofolio` di GitHub (tanpa README), lalu dari
root folder proyek:

```bash
git init
git add .
git commit -m "chore: prepare portfolio for deployment"
git branch -M main
git remote add origin https://github.com/eeqyy/portofolio.git
git push -u origin main
```

Jika remote sudah ada, gunakan `git remote set-url origin ...` sebelum push.
Ganti `portofolio` jika nama repository berbeda. Jika folder ini masih berada di
dalam repo induk, jadikan folder proyek sebagai repository terpisah dan push
repo tersebut, bukan repo induk.

## Deployment

### Vercel — SSR (direkomendasikan)

1. Push repo ke GitHub (lihat bagian sebelumnya).
2. Di Vercel: **Add New → Project → Continue with GitHub**, hubungkan akun
   `eeqyy`, lalu import repository `portofolio` dengan root directory `./`.
   Framework terdeteksi sebagai **Nuxt.js**; `vercel.json` sudah menyetel build
   command `npm run build`.
3. Tambahkan environment variable `NUXT_PUBLIC_SITE_URL` untuk Production dan
   Preview.
4. Deploy. Vercel memakai Nitro preset Vercel secara otomatis.
5. Setelah menambah custom domain, perbarui `NUXT_PUBLIC_SITE_URL` dan redeploy
   agar canonical/OG image memakai domain final.

### Netlify — SSR

1. Di Netlify: **Add new site → Import an existing project → GitHub**,
   hubungkan akun `eeqyy`, lalu pilih repository `portofolio`.
2. `netlify.toml` sudah mengatur build `npm run build`, publish `dist`,
   Node 22, dan `NITRO_PRESET=netlify`.
3. Tambahkan `NUXT_PUBLIC_SITE_URL` di Site configuration → Environment
   variables.
4. Deploy. Tidak perlu redirect SPA karena halaman dirender SSR.

### Node server / VPS

```bash
npm ci
NUXT_PUBLIC_SITE_URL=https://domain-kamu.com npm run build
PORT=3000 HOST=0.0.0.0 node .output/server/index.mjs
```

Gunakan process manager (PM2/systemd) dan reverse proxy (Nginx/Caddy) untuk
TLS. Environment runtime tidak mengubah meta yang sudah dibangun, jadi set
domain produksi saat build.

### Opsi static

Jika hosting tidak mendukung Node:

```bash
npm run generate
```

Deploy isi `.output/public`. Untuk situs satu halaman, arahkan fallback
`/*` ke `/200.html` (atau `/index.html`) di hosting. Jika memakai Netlify,
ubah `netlify.toml` menjadi command `npm run generate`, publish
`.output/public`, lalu tambahkan redirect tersebut. Mode ini kehilangan SSR
runtime, tetapi metadata dan halaman utama tetap diprerender.

### Checklist setelah deploy

- [ ] `NUXT_PUBLIC_SITE_URL` sudah berisi domain final.
- [ ] `https://domain-kamu.com/og-image.jpg` dapat diakses (200).
- [ ] Cek preview di Facebook Sharing Debugger, LinkedIn Post Inspector, dan
      X Card Validator.
- [ ] Cek `/robots.txt`, canonical, dan JSON-LD di source halaman.

## SEO & metadata

Head metadata diatur di `nuxt.config.ts`: title, description, canonical,
Open Graph, Twitter/X card, theme color, dan JSON-LD `Person`.
Gambar pratinjau sosial ada di `public/og-image.jpg` (1200×630). Ganti file ini
jika desain hero berubah.

## Struktur proyek

```text
assets/css/main.css      Tailwind + utility poster + reduced-motion reset
components/
  AnimatedTorusKnot.vue  torus knot + render loop cleanup
  CanvasSkeleton.vue     fallback Suspense 3D
  ModelCanvas.vue        TresCanvas transparan + status WebGL
  RetroCursor.vue        cursor desktop, pointer presisi
  GrainOverlay.vue       noise overlay global
layouts/default.vue
pages/index.vue          hero, about, projects, Xora, contact
public/og-image.jpg
nuxt.config.ts           modul, SEO/OG, runtimeConfig
vercel.json
netlify.toml
```

## Catatan implementasi

- 3D dimuat lazy dengan `defineAsyncComponent` + `<Suspense>`; chunk Three.js
  tidak ikut preload halaman awal. Skeleton tampil selama chunk/WebGL dimuat.
- Chunk 3D ±873 kB (gzip ±236 kB) dan masih memicu warning ukuran chunk saat
  build; chunk tersebut terisolasi dan tidak memblokir render awal.
- Animasi scroll memakai `visibleOnce` dari `@vueuse/motion` (setara
  `slide-visible-once-bottom`) dengan stagger.
- `prefers-reduced-motion` dihormati; listener cursor dan render loop dibersihkan
  saat unmount.

## Kontak & sosial

- Email: [eqy.dev@gmail.com](mailto:eqy.dev@gmail.com)
- GitHub: [github.com/eeqyy](https://github.com/eeqyy)
- LinkedIn: [Rizki Dzulfikar Al-Qatiri](https://www.linkedin.com/search/results/people/?keywords=Rizki%20Dzulfikar%20Al-Qatiri)
- Substack: [substack.com/@eeqyy](https://substack.com/@eeqyy)
- Instagram: [@eqyzcba](https://instagram.com/eqyzcba)
- TikTok: [@rizkyzfak](https://tiktok.com/@rizkyzfak)
- Facebook: [Rizki Dzulfikar](https://www.facebook.com/search/top?q=Rizki%20Dzulfikar)
