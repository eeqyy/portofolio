<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const BeaconSweepAsync = defineAsyncComponent(() => import("~/components/BeaconSweep.vue"));
const isNight = ref(false);

const navLinks = [
  { href: "#about", label: "Tentang" },
  { href: "#work", label: "Karya" },
  { href: "#vision", label: "Xora Tech" },
];
const projects = [
  {
    title: "Desa Karamatwangi Web App",
    category: "Community Service System",
    description: "Platform web desa untuk transparansi informasi publik Desa Karamatwangi, Cikajang.",
    stack: ["HTML", "Tailwind CSS", "JavaScript", "Node.js"],
    image: "/projects/webdesa.jpg",
  },
  {
    title: "Cafe Management System",
    category: "Internal Operations & POS",
    description: "Sistem manajemen operasional kafe untuk kontrol inventaris dan transaksi.",
    stack: ["Node.js", "Express", "Tailwind CSS", "JavaScript"],
    image: "/projects/scancafe.jpg",
  },
  {
    title: "Xora — Educational Platform",
    category: "Web Competition Entry · IconFest UNSIL",
    description: "Aplikasi web edukasi interaktif berbasis analisis learning gaps.",
    stack: ["Tailwind CSS", "Node.js", "JavaScript"],
    image: "/projects/xoratech.jpg",
  },
];
const contacts = [
  { label: "Email", value: "eqy.dev@gmail.com", href: "mailto:eqy.dev@gmail.com" },
  { label: "GitHub", value: "eeqyy", href: "https://github.com/eeqyy" },
  { label: "LinkedIn", value: "Rizki Dzulfikar Al-Qatiri", href: "https://www.linkedin.com/search/results/people/?keywords=Rizki%20Dzulfikar%20Al-Qatiri" },
  { label: "Substack", value: "eeqyy", href: "https://substack.com/@eeqyy" },
  { label: "Instagram", value: "@eqyzcba", href: "https://instagram.com/eqyzcba" },
  { label: "TikTok", value: "@rizkyzfak", href: "https://tiktok.com/@rizkyzfak" },
  { label: "Facebook", value: "Rizki Dzulfikar", href: "https://www.facebook.com/search/top?q=Rizki%20Dzulfikar" },
];

function changeSky() {
  isNight.value = !isNight.value;
}
</script>

<template>
  <main id="top" class="portfolio" :class="{ 'is-night': isNight }">
    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-artwork" aria-hidden="true">
        <img class="hero-artwork-image artwork-day" src="/lighthouse-coast.jpg" alt="" fetchpriority="high" />
        <img class="hero-artwork-image artwork-night" src="/lighthouse-night.jpg" alt="" />
      </div>
      <div class="beacon-light-layer" aria-hidden="true">
        <ClientOnly>
          <Suspense>
            <BeaconSweepAsync :active="isNight" />
          </Suspense>
        </ClientOnly>
      </div>
      <header class="site-header">
        <a class="wordmark" href="#top" aria-label="Eki, kembali ke halaman atas">eki<span>.</span></a>
        <nav class="main-nav" aria-label="Navigasi utama">
          <a v-for="link in navLinks" :key="link.href" :href="link.href">{{ link.label }}</a>
          <a href="#contact">Kontak</a>
        </nav>
        <button class="sky-toggle" type="button" :aria-pressed="isNight" @click="changeSky">
          <span aria-hidden="true">{{ isNight ? "☼" : "☾" }}</span>
          <span>Suasana malam</span>
        </button>
      </header>

      <div class="hero-content">
        <p class="eyebrow"><span class="eyebrow-dot" /> Portfolio · Garut, Indonesia</p>
        <h1 id="hero-title">Halo, saya <em>Rizki</em><br />Dzulfikar Al-Qatiri.</h1>
        <p class="hero-role">Full-stack developer yang menyukai desain dan pengalaman digital yang terasa hidup.</p>
        <div class="hero-actions">
          <a class="button button-primary" href="#work">Jelajahi karya <span aria-hidden="true">↓</span></a>
          <a class="text-link" href="#contact">Mari berbincang <span aria-hidden="true">↗</span></a>
        </div>
        <p class="sky-hint">{{ isNight ? "Cahaya mercusuar menyapu pesisir" : "Pilih suasana langit dari tombol di atas" }}</p>
      </div>
      <a class="scroll-cue" href="#about" aria-label="Gulir ke bagian tentang saya"><span /> Gulir perlahan</a>
      <div class="hero-caption" aria-hidden="true">{{ isNight ? "Malam yang tenang · Garut" : "Langit cerah · Garut" }}</div>
    </section>

    <section id="about" class="content-section about-section">
      <div class="section-heading"><p class="eyebrow">Sedikit tentang saya</p><span class="section-index">01 / 04</span></div>
      <div class="about-grid">
        <div class="about-portrait-column">
          <h2>Saya percaya hal yang baik terasa <em>sederhana.</em></h2>
          <figure class="portrait-frame">
            <img src="/profile-placeholder.svg" alt="Ilustrasi placeholder foto profil Rizki Dzulfikar Al-Qatiri" />
            <figcaption><span>Rizki Dzulfikar Al-Qatiri</span><span>Ganti dengan foto kamu</span></figcaption>
          </figure>
        </div>
        <div class="about-copy">
          <p>Eki adalah full-stack developer asal Garut yang bekerja di persimpangan arsitektur web dan ekspresi visual. Ia menikmati proses membangun produk dari nol — merancang alur, menulis API, menyusun antarmuka, sampai merilisnya.</p>
          <p>Di luar layar, ia mengisi waktu dengan gitar, menggambar, desain visual, menulis, dan membaca.</p>
          <p>Saat ini ia sedang membangun portofolio, bereksperimen dengan 3D, dan mendalami AI agentic.</p>
          <div class="about-facts"><span>Berbasis di <b>Garut, Jawa Barat</b></span><span>Terbuka untuk <b>kolaborasi</b></span></div>
        </div>
      </div>
      <div class="interest-row"><span>Yang sedang saya jelajahi</span><div><span>Interactive 3D Web · scene dan interaksi real-time</span><span>AI & Automation · alur kerja digital yang lebih cerdas</span><span>Desain visual</span></div></div>
    </section>

    <section id="work" class="content-section work-section">
      <div class="section-heading"><p class="eyebrow">Karya pilihan</p><a class="text-link" href="https://github.com/eeqyy" target="_blank" rel="noreferrer">Lihat GitHub <span aria-hidden="true">↗</span></a></div>
      <div class="project-grid">
        <article v-for="(project, i) in projects" :key="project.title" class="project-card">
          <a class="project-image" href="https://github.com/eeqyy" target="_blank" rel="noreferrer" :aria-label="`Lihat ${project.title} di GitHub`">
            <img :src="project.image" :alt="`Tampilan ${project.title}`" loading="lazy" />
            <span class="project-number">0{{ i + 1 }}</span><span class="project-arrow" aria-hidden="true">↗</span>
          </a>
          <p class="project-category">{{ project.category }}</p>
          <h3>{{ project.title }}</h3>
          <p class="project-description">{{ project.description }}</p>
          <ul class="tag-list"><li v-for="tech in project.stack" :key="tech">{{ tech }}</li></ul>
        </article>
      </div>
    </section>

    <section id="vision" class="xora-section">
      <div class="xora-inner"><div><p class="eyebrow">Sebuah visi kecil</p><h2>Xora <em>Tech</em></h2></div>
        <div class="xora-copy"><p class="xora-lead">Membuat kebutuhan digital yang baik terasa lebih dekat bagi UMKM.</p><p>Ruang kolaborasi untuk pengembangan web, desain grafis, dan identitas visual dengan pendekatan yang ramah dan terjangkau.</p><a class="text-link" href="#contact">Kenali lebih lanjut <span aria-hidden="true">↗</span></a></div>
      </div>
      <div class="service-list"><span>Web development</span><span>Desain grafis</span><span>Identitas visual</span><span>Untuk UMKM</span></div>
    </section>

    <footer id="contact" class="content-section contact-section">
      <div class="section-heading"><p class="eyebrow">Punya ide menarik?</p><span class="section-index">04 / 04</span></div>
      <div class="contact-intro"><h2>Mari buat sesuatu yang <em>berarti.</em></h2><p>Terbuka untuk kolaborasi proyek, magang, dan eksperimen web. Balasan tercepat lewat email.</p></div>
      <ul class="contact-list"><li v-for="(contact, i) in contacts" :key="contact.label"><a :href="contact.href" :target="contact.href.startsWith('http') ? '_blank' : undefined" :rel="contact.href.startsWith('http') ? 'noreferrer' : undefined"><span class="contact-label">0{{ i + 1 }} · {{ contact.label }}</span><span>{{ contact.value }}</span><span aria-hidden="true">↗</span></a></li></ul>
      <div class="footer-bottom"><span>© 2026 Rizki Dzulfikar Al-Qatiri</span><span>Dibuat dengan tenang di Garut</span><a href="#top">Kembali ke atas ↑</a></div>
    </footer>
  </main>
</template>
