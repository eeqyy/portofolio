<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const ModelCanvasAsync = defineAsyncComponent({
  loader: () => import("~/components/ModelCanvas.vue"),
  suspensible: true,
});

const navLinks = [
  { href: "#about", label: "About", index: "02" },
  { href: "#work", label: "Work", index: "03" },
  { href: "#vision", label: "Vision", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
];

const info = [
  { label: "Domisili", value: "Garut, Jawa Barat" },
  { label: "Fokus", value: "Full-Stack Development" },
  { label: "Status", value: "Open for collaboration" },
];

const hobbies = [
  "Main Gitar",
  "Menggambar",
  "Desain Visual",
  "Menulis",
  "Membaca",
];

const explorations = [
  {
    index: "01",
    title: "Interactive 3D Web",
    detail:
      "Three.js / TresJS — membangun scene, material, dan interaksi real-time langsung di browser.",
  },
  {
    index: "02",
    title: "AI Innovations",
    detail:
      "Integrated AI, Agentic AI, & Automation — merancang alur kerja digital yang lebih cerdas.",
  },
];

const projects = [
  {
    index: "01",
    title: "Desa Karamatwangi Web App",
    category: "Community Service System",
    description:
      "Platform web desa untuk transparansi informasi publik Desa Karamatwangi, Cikajang.",
    stack: ["HTML", "Tailwind CSS", "JS", "Node.js"],
  },
  {
    index: "02",
    title: "Cafe Management System",
    category: "Internal Operations & POS",
    description:
      "Sistem manajemen operasional kafe untuk kontrol inventaris & transaksi.",
    stack: ["Node.js", "Express", "Tailwind CSS", "JS"],
  },
  {
    index: "03",
    title: "Xora — Educational Platform",
    category: "Web Competition Entry (IconFest UNSIL - Tim Patapim)",
    description:
      "Aplikasi web edukasi interaktif berbasis analisis learning gaps.",
    stack: ["Tailwind CSS", "Node.js", "JS"],
  },
];

const contacts = [
  {
    label: "Email",
    value: "eqy.dev@gmail.com",
    href: "mailto:eqy.dev@gmail.com",
    ariaLabel: "Kirim email ke eqy.dev@gmail.com",
  },
  {
    label: "GitHub",
    value: "eeqyy",
    href: "https://github.com/eeqyy",
    ariaLabel: "Buka profil GitHub eeqyy di tab baru",
  },
  {
    label: "LinkedIn",
    value: "Rizki Dzulfikar Al-Qatiri",
    href: "https://www.linkedin.com/search/results/people/?keywords=Rizki%20Dzulfikar%20Al-Qatiri",
    ariaLabel:
      "Cari Rizki Dzulfikar Al-Qatiri di LinkedIn di tab baru",
  },
  {
    label: "Substack",
    value: "eeqyy",
    href: "https://substack.com/@eeqyy",
    ariaLabel: "Buka Substack eeqyy di tab baru",
  },
  {
    label: "Instagram",
    value: "@eqyzcba",
    href: "https://instagram.com/eqyzcba",
    ariaLabel: "Buka Instagram @eqyzcba di tab baru",
  },
  {
    label: "TikTok",
    value: "@rizkyzfak",
    href: "https://tiktok.com/@rizkyzfak",
    ariaLabel: "Buka TikTok @rizkyzfak di tab baru",
  },
  {
    label: "Facebook",
    value: "Rizki Dzulfikar",
    href: "https://www.facebook.com/search/top?q=Rizki%20Dzulfikar",
    ariaLabel: "Cari Rizki Dzulfikar di Facebook di tab baru",
  },
];
</script>

<template>
  <div id="top" class="overflow-x-clip">
    <!-- ================================================================
         HERO — 3 layer: giant type / 3D canvas / editorial overlay
         ================================================================ -->
    <section
      class="relative isolate min-h-[100svh] overflow-hidden border-b border-white/15"
    >
      <!-- Layer 1 : giant background type -->
      <div
        class="pointer-events-none absolute inset-0 z-0 grid place-items-center overflow-hidden pb-[24vh]"
      >
        <p
          v-motion="{
            initial: { opacity: 0 },
            enter: {
              opacity: 0.16,
              transition: { duration: 1400, delay: 100 },
            },
          }"
          aria-hidden="true"
          class="whitespace-nowrap text-center font-display text-[clamp(2rem,10.5vw,9.5rem)] font-extrabold uppercase leading-[0.78] tracking-[-0.05em] text-poster-mint"
        >
          Rizki<br />Dzulfikar
        </p>
      </div>

      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_42%,rgba(0,202,154,0.14),transparent_58%)]"
      />

      <!-- Layer 2 : interactive 3D -->
      <div
        v-motion="{
          initial: { opacity: 0, scale: 0.96 },
          enter: {
            opacity: 1,
            scale: 1,
            transition: { duration: 900, delay: 250 },
          },
        }"
        class="absolute inset-0 z-10 flex items-center justify-center pb-24"
      >
        <ClientOnly>
          <Suspense>
            <ModelCanvasAsync
              class="h-[300px] w-full max-w-3xl sm:h-[400px] md:h-[600px]"
            />
            <template #fallback>
              <CanvasSkeleton
                class="h-[300px] w-full max-w-3xl sm:h-[400px] md:h-[600px]"
              />
            </template>
          </Suspense>
          <template #fallback>
            <CanvasSkeleton
              class="h-[300px] w-full max-w-3xl sm:h-[400px] md:h-[600px]"
            />
          </template>
        </ClientOnly>
      </div>

      <!-- Readability fade so the typography stays crisp over the model -->
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[70%] bg-gradient-to-t from-poster-bg from-20% via-poster-bg/80 via-45% to-transparent to-80%"
      />

      <!-- Layer 3 : overlay text + navigation -->
      <div class="pointer-events-none relative z-20 flex min-h-[100svh] flex-col">
        <header
          class="pointer-events-auto flex items-center justify-between gap-4 border-b border-white/15 px-6 py-4 lg:px-10"
        >
          <a
            href="#top"
            class="flex shrink-0 items-center gap-3"
            aria-label="Kembali ke atas — portfolio Rizki Dzulfikar"
          >
            <span
              class="grid size-8 place-items-center border border-poster-mint font-display text-[0.6rem] font-bold tracking-[0.12em] text-poster-mint"
            >
              EKI
            </span>
            <span
              class="label-poster hidden whitespace-nowrap text-white/70 min-[360px]:inline"
            >
              Portfolio / 2026
            </span>
          </a>

          <nav
            class="hidden items-center gap-5 md:flex lg:gap-6"
            aria-label="Navigasi utama"
          >
            <a
              v-for="link in navLinks"
              :key="link.href"
              :href="link.href"
              class="label-poster whitespace-nowrap text-white/50 transition-colors hover:text-poster-mint"
            >
              <span class="mr-1.5 text-poster-pink">{{ link.index }}</span>
              {{ link.label }}
            </a>
          </nav>

          <p class="label-poster hidden whitespace-nowrap text-white/40 lg:block">
            Garut, ID
          </p>

          <a
            href="#contact"
            class="label-poster border border-poster-mint px-3 py-2 text-poster-mint transition-all duration-300 hover:bg-poster-mint hover:text-poster-bg hover:shadow-[3px_3px_0_#f596aa] md:hidden"
            aria-label="Buka bagian kontak"
          >
            Contact
          </a>
        </header>

        <div class="relative flex flex-1 items-end px-6 pb-12 pt-24 lg:px-10">
          <!-- margin rail kiri -->
          <div
            class="absolute left-2 top-1/2 hidden -translate-y-1/2 lg:block"
            aria-hidden="true"
          >
            <p class="writing-vertical rotate-180 label-poster text-white/35">
              Full-stack / 3D / AI — Garut, Indonesia
            </p>
          </div>

          <!-- margin rail kanan : navigasi vertikal (desktop saja) -->
          <nav
            class="absolute right-2 top-1/2 hidden -translate-y-1/2 lg:block"
            aria-label="Navigasi bagian halaman"
          >
            <ul class="pointer-events-auto flex flex-col items-center gap-6">
              <li v-for="link in navLinks" :key="`rail-${link.href}`">
                <a
                  :href="link.href"
                  class="writing-vertical label-poster text-white/40 transition-colors hover:text-poster-pink"
                >
                  <span class="text-poster-mint">{{ link.index }}</span>
                  / {{ link.label }}
                </a>
              </li>
            </ul>
          </nav>

          <div class="pointer-events-auto max-w-4xl">
            <div class="flex flex-wrap items-center gap-4">
              <p class="label-poster text-poster-pink">01 — Introduction</p>
              <span class="label-poster flex items-center gap-2 text-white/40">
                <span class="relative flex size-1.5">
                  <span
                    class="absolute inline-flex size-full animate-ping bg-poster-mint opacity-75"
                  />
                  <span class="relative inline-flex size-1.5 bg-poster-mint" />
                </span>
                Open for collaboration
              </span>
            </div>

            <h1
              v-motion="{
                initial: { opacity: 0, y: 28 },
                enter: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 700, delay: 150 },
                },
              }"
              class="mt-5 font-display text-[clamp(1.6rem,8vw,2rem)] font-extrabold uppercase leading-[0.88] tracking-[-0.03em] sm:text-[clamp(2rem,5.2vw,4.75rem)]"
            >
              <span class="block">Rizki Dzulfikar</span>
              <span class="block text-poster-pink">
                Al-Qatiri <span class="text-poster-mint">(EKI)</span>
              </span>
            </h1>

            <p
              v-motion="{
                initial: { opacity: 0, y: 24 },
                enter: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 700, delay: 280 },
                },
              }"
              class="mt-5 font-accent text-lg italic text-white/85 sm:text-xl"
            >
              Full-Stack Developer &amp; Design Enthusiast
            </p>

            <p
              v-motion="{
                initial: { opacity: 0, y: 24 },
                enter: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 700, delay: 400 },
                },
              }"
              class="mt-4 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base"
            >
              Crafting robust code and expressive digital designs from Garut.
              Blending full-stack architecture with interactive 3D web
              aesthetics.
            </p>

            <div
              v-motion="{
                initial: { opacity: 0, y: 20 },
                enter: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 700, delay: 520 },
                },
              }"
              class="mt-8 flex flex-wrap items-center gap-2 sm:gap-3"
            >
              <a href="#work" class="btn-retro btn-retro-mint group">
                <span>Lihat karya</span>
                <span
                  aria-hidden="true"
                  class="transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </a>
              <a href="#contact" class="btn-retro btn-retro-outline group">
                <span>Mulai proyek</span>
                <span
                  aria-hidden="true"
                  class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
              <a
                href="https://github.com/eeqyy"
                target="_blank"
                rel="noreferrer"
                class="group label-poster ml-0 inline-flex items-center gap-1.5 text-white/50 transition-colors hover:text-poster-pink sm:ml-1"
                aria-label="Buka profil GitHub eeqyy di tab baru"
              >
                <span
                  class="underline decoration-poster-pink/60 decoration-2 underline-offset-4 transition-colors group-hover:decoration-poster-mint"
                >
                  GitHub
                </span>
                <span
                  aria-hidden="true"
                  class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================
         ABOUT & INTERESTS
         ================================================================ -->
    <section id="about" class="scroll-mt-16 border-b border-white/15">
      <div class="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: { opacity: 1, y: 0, transition: { duration: 600 } },
          }"
          class="flex flex-wrap items-end justify-between gap-4 border-b border-white/15 pb-5"
        >
          <p class="label-poster text-poster-mint">02 — About &amp; Interests</p>
          <p class="label-poster text-white/40">Garut, Jawa Barat — ID</p>
        </div>

        <div class="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div class="lg:col-span-7">
            <h2
              v-motion="{
                initial: { opacity: 0, y: 28 },
                visibleOnce: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 700, delay: 100 },
                },
              }"
              class="max-w-2xl font-accent text-[clamp(1.6rem,3.4vw,3rem)] italic leading-[1.15]"
            >
              “Kode yang <span class="text-poster-mint">rapi</span>, desain yang
              <span class="text-poster-pink">berani</span>, dan pengalaman yang
              jujur.”
            </h2>

            <p
              v-motion="{
                initial: { opacity: 0, y: 24 },
                visibleOnce: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 700, delay: 180 },
                },
              }"
              class="mt-8 max-w-2xl text-base leading-relaxed text-white/60"
            >
              Eki adalah full-stack developer asal Garut yang bekerja di
              persimpangan arsitektur web dan ekspresi visual. Ia menikmati
              proses membangun produk dari nol — merancang alur, menulis API,
              menyusun antarmuka, sampai merilisnya. Di luar layar, ia mengisi
              waktu dengan gitar, sketsa, dan buku.
            </p>

            <div class="mt-10 grid gap-4 sm:grid-cols-2">
              <article
                v-for="(item, i) in explorations"
                :key="item.title"
                v-motion="{
                  initial: { opacity: 0, y: 24 },
                  visibleOnce: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 600, delay: 240 + i * 120 },
                  },
                }"
                class="border border-white/20 p-6 transition-colors hover:border-poster-mint"
              >
                <p class="label-poster text-poster-pink">
                  Exploration {{ item.index }}
                </p>
                <h3 class="mt-4 font-display text-2xl font-bold leading-tight">
                  {{ item.title }}
                </h3>
                <p class="mt-3 text-sm leading-relaxed text-white/55">
                  {{ item.detail }}
                </p>
              </article>
            </div>
          </div>

          <aside
            v-motion="{
              initial: { opacity: 0, y: 24 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: { duration: 700, delay: 220 },
              },
            }"
            class="lg:col-span-5"
          >
            <dl class="border-t border-white/15">
              <div
                v-for="row in info"
                :key="row.label"
                class="grid grid-cols-[7rem_1fr] gap-4 border-b border-white/15 py-5"
              >
                <dt class="label-poster text-white/40">{{ row.label }}</dt>
                <dd class="text-sm text-white/80">{{ row.value }}</dd>
              </div>

              <div
                class="grid grid-cols-[7rem_1fr] gap-4 border-b border-white/15 py-5"
              >
                <dt class="label-poster text-white/40">Hobi</dt>
                <dd class="flex flex-wrap gap-2">
                  <span
                    v-for="hobby in hobbies"
                    :key="hobby"
                    class="border border-white/20 px-2.5 py-1 text-xs text-white/70"
                  >
                    {{ hobby }}
                  </span>
                </dd>
              </div>
            </dl>

            <div class="mt-8 border-l-2 border-poster-pink pl-5">
              <p class="label-poster text-white/40">Currently</p>
              <p class="mt-2 font-accent text-lg italic text-white/80">
                Membangun portfolio, bereksperimen dengan 3D, dan mendalami AI
                agentic.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>

    <!-- ================================================================
         FEATURED PROJECTS
         ================================================================ -->
    <section id="work" class="scroll-mt-16 border-b border-white/15">
      <div class="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: { opacity: 1, y: 0, transition: { duration: 600 } },
          }"
          class="flex flex-wrap items-end justify-between gap-4 border-b border-white/15 pb-5"
        >
          <p class="label-poster text-poster-mint">03 — Selected Work</p>
          <p class="label-poster text-white/40">Web / POS / Education</p>
        </div>

        <div class="mt-8 flex flex-wrap items-end justify-between gap-6">
          <h2
            v-motion="{
              initial: { opacity: 0, y: 28 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: { duration: 700, delay: 100 },
              },
            }"
            class="font-display text-[clamp(2rem,5vw,4.5rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.03em]"
          >
            Featured<br />
            <span class="text-poster-mint">Projects</span>
          </h2>

          <a
            href="https://github.com/eeqyy"
            target="_blank"
            rel="noreferrer"
            class="btn-retro btn-retro-outline group px-4"
            aria-label="Buka semua repository GitHub eeqyy di tab baru"
          >
            Semua repo di GitHub
            <span
              aria-hidden="true"
              class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </div>

        <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="(project, i) in projects"
            :key="project.title"
            v-motion="{
              initial: { opacity: 0, y: 28 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: { duration: 600, delay: i * 120 },
              },
            }"
            class="h-full"
          >
            <a
              href="https://github.com/eeqyy"
              target="_blank"
              rel="noreferrer"
              class="group relative flex h-full flex-col border border-poster-mint/25 bg-poster-bg p-6 transition-all duration-300 ease-out hover:-translate-x-1 hover:-translate-y-1 hover:scale-105 hover:border-poster-pink hover:bg-poster-mint/[0.035] hover:shadow-[0_0_0_1px_#f596aa,0_0_30px_rgba(245,150,170,0.18),10px_10px_0_#00ca9a] focus-visible:scale-[1.02] focus-visible:border-poster-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-poster-pink active:translate-x-0 active:translate-y-0 active:scale-100"
              :aria-label="`Buka proyek ${project.title} di GitHub (tab baru)`"
            >
              <div
                class="flex min-h-[4.75rem] items-start justify-between gap-4 border-b border-white/15 pb-4"
              >
                <span
                  class="font-display text-4xl font-extrabold leading-none text-poster-mint/40 transition-colors group-hover:text-poster-mint"
                >
                  {{ project.index }}
                </span>
                <span
                  class="label-poster max-w-[12rem] text-right leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-poster-pink/80"
                >
                  {{ project.category }}
                </span>
              </div>

              <h3 class="mt-6 font-display text-2xl font-bold leading-tight">
                {{ project.title }}
              </h3>

              <p class="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                {{ project.description }}
              </p>

              <ul class="mt-5 flex flex-wrap gap-2">
                <li
                  v-for="tech in project.stack"
                  :key="tech"
                  class="border border-white/15 px-2 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-poster-pink transition-colors duration-300 group-hover:border-poster-mint/40"
                >
                  {{ tech }}
                </li>
              </ul>

              <span
                class="label-poster mt-6 inline-flex items-center gap-2 text-white/50 transition-colors group-hover:text-poster-mint"
              >
                GitHub
                <span
                  class="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================
         XORA TECH — agency vision
         ================================================================ -->
    <section id="vision" class="scroll-mt-16 border-b border-white/15">
      <div class="mx-auto w-full max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: { opacity: 1, y: 0, transition: { duration: 600 } },
          }"
          class="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-white/15 pb-5"
        >
          <p class="label-poster text-poster-mint">04 — Agency Vision</p>
          <p class="label-poster text-white/40">Xora Tech</p>
        </div>

        <div
          v-motion="{
            initial: { opacity: 0, y: 32 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: { duration: 700, delay: 120 },
            },
          }"
          class="relative overflow-hidden border border-poster-mint/40 bg-poster-mint text-poster-bg"
        >
          <span
            aria-hidden="true"
            class="pointer-events-none absolute -right-6 -top-16 font-display text-[26vw] font-extrabold leading-none text-poster-bg/5"
          >
            X
          </span>

          <div class="relative grid gap-10 p-8 lg:grid-cols-12 lg:p-12">
            <div class="lg:col-span-5">
              <p class="label-poster text-poster-bg/60">Agency / Vision</p>
              <h2
                class="mt-4 font-display text-[clamp(2.75rem,6vw,5rem)] font-extrabold uppercase leading-[0.82] tracking-[-0.03em]"
              >
                Xora<br />
                <span class="text-outline-poster">Tech</span>
              </h2>
              <p class="mt-6 max-w-sm font-accent text-lg italic leading-snug text-poster-bg/75">
                An inclusive digital agency for UMKM — web development,
                graphic design, and visual identity.
              </p>
              <a
                href="#contact"
                class="btn-retro btn-retro-ink group mt-8"
                aria-label="Mulai proyek bersama Xora Tech — menuju bagian kontak"
              >
                Mulai proyek
                <span
                  aria-hidden="true"
                  class="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            </div>

            <div
              class="lg:col-span-7 lg:border-l lg:border-poster-bg/20 lg:pl-10"
            >
              <p class="label-poster text-poster-bg/60">Visi</p>
              <p
                class="mt-4 font-accent text-[clamp(1.2rem,2.2vw,1.9rem)] leading-snug"
              >
                “Mewujudkan agensi kebutuhan digital yang inklusif untuk UMKM.
                Berfokus pada penyediaan jasa pengembangan web, desain grafis,
                dan identitas visual berkualitas profesional serta hasil
                maksimal dengan harga yang terjangkau.”
              </p>

              <div class="mt-8 grid gap-3 sm:grid-cols-3">
                <span
                  v-for="service in [
                    'Web Development',
                    'Graphic Design',
                    'Visual Identity',
                  ]"
                  :key="service"
                  class="border border-poster-bg/25 px-3 py-2 text-center text-[0.6rem] tracking-[0.2em] label-poster text-poster-bg/70 sm:whitespace-nowrap"
                >
                  {{ service }}
                </span>
              </div>
            </div>
          </div>

          <div
            class="label-poster flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-poster-bg/20 bg-poster-pink px-8 py-3 text-poster-bg"
          >
            <span>Web Development</span>
            <span>Graphic Design</span>
            <span>Visual Identity</span>
            <span>For UMKM</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ================================================================
         CONTACT — event schedule grid
         ================================================================ -->
    <footer id="contact" class="scroll-mt-16 border-t-4 border-poster-pink">
      <div class="mx-auto w-full max-w-7xl px-6 pt-20 lg:px-10 lg:pt-28">
        <div
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: { opacity: 1, y: 0, transition: { duration: 600 } },
          }"
          class="flex flex-wrap items-end justify-between gap-4 border-b border-white/15 pb-5"
        >
          <p class="label-poster text-poster-mint">05 — Contact / Schedule</p>
          <p class="label-poster text-white/40">Garut, ID — GMT+7</p>
        </div>

        <div class="mt-10 flex flex-wrap items-end justify-between gap-6">
          <h2
            v-motion="{
              initial: { opacity: 0, y: 28 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: { duration: 700, delay: 100 },
              },
            }"
            class="font-display text-[clamp(2rem,8vw,7rem)] font-extrabold uppercase leading-[0.85] tracking-[-0.04em]"
          >
            Let's <span class="text-poster-pink">talk</span>
          </h2>
          <p
            v-motion="{
              initial: { opacity: 0, y: 18 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: { duration: 600, delay: 180 },
              },
            }"
            class="max-w-sm text-sm leading-relaxed text-white/55"
          >
            Terbuka untuk kolaborasi project, magang, dan eksperimen web yang
            ambisius. Balasan tercepat lewat email.
          </p>
        </div>

        <ul
          class="mt-12 grid border-l border-t border-white/15 sm:grid-cols-2"
        >
          <li
            v-for="(contact, i) in contacts"
            :key="contact.label"
            v-motion="{
              initial: { opacity: 0, y: 16 },
              visibleOnce: {
                opacity: 1,
                y: 0,
                transition: { duration: 500, delay: i * 70 },
              },
            }"
            class="border-b border-r border-white/15"
            :class="i === 0 ? 'sm:col-span-2' : ''"
          >
            <a
              :href="contact.href"
              :target="contact.href.startsWith('http') ? '_blank' : undefined"
              :rel="contact.href.startsWith('http') ? 'noreferrer' : undefined"
              :aria-label="contact.ariaLabel"
              class="group flex flex-col gap-2 px-5 py-5 transition-all duration-300 hover:bg-poster-mint hover:text-poster-bg hover:shadow-[inset_0_0_0_2px_#f596aa] focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-poster-pink sm:flex-row sm:items-center sm:gap-6"
            >
              <span class="flex items-center gap-3 sm:contents">
                <span
                  class="label-poster text-poster-mint transition-colors group-hover:text-poster-bg/60"
                >
                  0{{ i + 1 }}
                </span>
                <span
                  class="label-poster w-28 text-white/50 transition-colors group-hover:text-poster-bg/70"
                >
                  {{ contact.label }}
                </span>
              </span>
              <span
                class="flex items-center justify-between gap-3 sm:ml-auto sm:justify-end"
              >
                <span
                  class="font-accent text-lg italic text-white/85 transition-colors group-hover:text-poster-bg"
                >
                  {{ contact.value }}
                </span>
                <span
                  aria-hidden="true"
                  class="label-poster text-poster-pink transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-poster-bg"
                >
                  ↗
                </span>
              </span>
            </a>
          </li>
        </ul>

        <div
          v-motion="{
            initial: { opacity: 0, y: 14 },
            visibleOnce: {
              opacity: 1,
              y: 0,
              transition: { duration: 600, delay: 120 },
            },
          }"
          class="mt-12 flex flex-col gap-4 border-t border-white/15 py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p class="label-poster text-white/35">
            © 2026 Rizki Dzulfikar Al-Qatiri
          </p>
          <p class="label-poster text-white/35">Designed &amp; built in Garut</p>
          <a
            href="#top"
            class="group label-poster inline-flex items-center gap-2 text-poster-mint transition-colors hover:text-poster-pink"
            aria-label="Kembali ke atas halaman"
          >
            Back to top
            <span
              aria-hidden="true"
              class="transition-transform duration-300 group-hover:-translate-y-1"
            >
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>
