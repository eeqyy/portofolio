<template>
  <div
    class="relative flex w-full flex-col items-center justify-center overflow-hidden border border-poster-mint/25 bg-poster-bg/95"
    role="status"
    aria-live="polite"
    aria-label="Memuat aset 3D interaktif"
  >
    <!-- grid + scanline -->
    <div
      aria-hidden="true"
      class="bg-grid-poster pointer-events-none absolute inset-0 opacity-60"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 h-px animate-[scanline_2.8s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-poster-mint to-transparent shadow-[0_0_18px_#00ca9a]"
    />

    <!-- corner marks -->
    <span
      aria-hidden="true"
      class="absolute left-3 top-3 size-3 border-l border-t border-poster-mint/60"
    />
    <span
      aria-hidden="true"
      class="absolute right-3 top-3 size-3 border-r border-t border-poster-mint/60"
    />
    <span
      aria-hidden="true"
      class="absolute bottom-3 left-3 size-3 border-b border-l border-poster-mint/60"
    />
    <span
      aria-hidden="true"
      class="absolute bottom-3 right-3 size-3 border-b border-r border-poster-mint/60"
    />

    <div class="relative flex flex-col items-center gap-5 px-6 text-center">
      <div
        class="relative grid size-20 place-items-center border border-poster-mint/40"
      >
        <span
          aria-hidden="true"
          class="absolute inset-2 border border-poster-mint/20"
        />
        <span
          aria-hidden="true"
          class="absolute inset-4 animate-[spin_3s_linear_infinite] border border-poster-mint/40 border-t-poster-mint"
        />
        <span class="size-2 bg-poster-mint" />
      </div>

      <div>
        <p class="label-poster text-poster-mint">Loading 3D Asset...</p>
        <p
          class="mt-2 font-display text-[0.55rem] uppercase tracking-[0.32em] text-white/30"
        >
          Menyiapkan scene / WebGL
        </p>
      </div>

      <div class="h-px w-28 bg-gradient-to-r from-transparent via-poster-mint/50 to-transparent" />

      <p class="max-w-[16rem] text-[0.65rem] leading-relaxed text-white/35">
        Memuat aset 3D secara terpisah agar halaman tetap ringan.
      </p>
    </div>
  </div>
</template>
