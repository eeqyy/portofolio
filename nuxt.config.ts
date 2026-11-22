const siteUrl = (
  process.env.NUXT_PUBLIC_SITE_URL ??
  "https://portofolio-bice-mu-50.vercel.app"
).replace(/\/$/, "");

const title =
  "Rizki Dzulfikar Al-Qatiri — Full-Stack Developer & Design Enthusiast";

const description =
  "Portofolio Rizki Dzulfikar (Eki), full-stack developer dari Garut. Jelajahi karya, eksperimen web interaktif, dan visi Xora Tech.";

const ogImage = `${siteUrl}/og-image.jpg`;
const ogImageAlt =
  "Gambar pratinjau portofolio Rizki Dzulfikar Al-Qatiri.";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  ssr: true,
  devtools: { enabled: true },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@tresjs/nuxt",
    "@vueuse/motion/nuxt",
  ],

  css: ["~/assets/css/main.css"],

  runtimeConfig: {
    public: {
      siteUrl,
    },
  },

  tailwindcss: {
    cssPath: "~/assets/css/main.css",
    configPath: "tailwind.config.js",
  },

  googleFonts: {
    families: {
      Merriweather: [400, 700],
      "Plus Jakarta Sans": [400, 500, 600, 700],
    },
    display: "swap",
    download: true,
    preconnect: true,
  },

  tres: {
    devtools: true,
  },

  app: {
    head: {
      htmlAttrs: { lang: "id" },
      title,
      link: [
        { rel: "canonical", href: `${siteUrl}/` },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
      meta: [
        { name: "description", content: description },
        { name: "author", content: "Rizki Dzulfikar Al-Qatiri" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#f8faf9" },

        { property: "og:type", content: "website" },
        { property: "og:site_name", content: "Rizki Dzulfikar — Portfolio" },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:url", content: `${siteUrl}/` },
        { property: "og:image", content: ogImage },
        { property: "og:image:secure_url", content: ogImage },
        { property: "og:image:type", content: "image/jpeg" },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        { property: "og:image:alt", content: ogImageAlt },
        { property: "og:locale", content: "id_ID" },

        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: ogImage },
        { name: "twitter:image:alt", content: ogImageAlt },
      ],
      script: [
        {
          type: "application/ld+json",
          key: "person-jsonld",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Rizki Dzulfikar Al-Qatiri",
            alternateName: "Eki",
            url: siteUrl,
            image: ogImage,
            jobTitle: "Full-Stack Developer",
            description,
            email: "eqy.dev@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Garut",
              addressRegion: "Jawa Barat",
              addressCountry: "ID",
            },
            sameAs: [
              "https://github.com/eeqyy",
              "https://substack.com/@eeqyy",
              "https://instagram.com/eqyzcba",
              "https://tiktok.com/@rizkyzfak",
            ],
            worksFor: {
              "@type": "Organization",
              name: "Xora Tech",
            },
            knowsAbout: [
              "Full-Stack Development",
              "3D Web",
              "UI/UX Design",
              "AI Innovations",
            ],
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${siteUrl}/`,
            },
          }),
        },
      ],
    },
  },
});
