<script setup lang="ts">
import { computed, ref } from "vue";
import { Vector3 } from "three";

const cameraPosition = new Vector3(0, 0, 5);
const keyLightPosition = new Vector3(10, 10, 5);
const rimLightPosition = new Vector3(-10, -10, -5);

const loading = ref(true);
const isHovered = ref(false);
const isFocused = ref(false);
// shortcut: keyboard aktif hanya saat kursor di atas area canvas atau area difokuskan,
// agar tombol panah/WASD tidak mengganggu scroll halaman di tempat lain.
const active = computed(() => isHovered.value || isFocused.value);

function handleReady() {
  loading.value = false;
}

function focusSelf(e: PointerEvent) {
  (e.currentTarget as HTMLElement).focus();
}
</script>

<template>
  <div
    class="relative w-full rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-poster-mint/50"
    tabindex="0"
    role="group"
    aria-label="Torus knot 3D interaktif berwarna pink; arahkan kursor ke area ini lalu gunakan WASD atau tombol panah untuk menggerakkan, klik objek untuk efek bounce"
    :aria-busy="loading"
    @pointerdown="focusSelf"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
    @focus="isFocused = true"
    @blur="isFocused = false"
  >
    <TresCanvas
      :alpha="true"
      :antialias="true"
      :dpr="[1, 2]"
      @ready="handleReady"
    >
      <TresPerspectiveCamera :position="cameraPosition" :fov="50" />

      <TresAmbientLight :intensity="0.6" />
      <TresDirectionalLight
        :position="keyLightPosition"
        :intensity="1.5"
        color="#00ca9a"
      />
      <TresPointLight
        :position="rimLightPosition"
        :intensity="1.2"
        color="#f596aa"
      />

      <AnimatedTorusKnot :active="active" />

      <OrbitControls
        make-default
        :enable-zoom="false"
        :enable-pan="false"
        :auto-rotate="false"
        :enable-damping="true"
        :damping-factor="0.05"
      />
    </TresCanvas>

    <!-- HUD: kontrol (retro arcade, pojok kiri) -->
    <div
      v-show="!loading"
      aria-hidden="true"
      class="pointer-events-none absolute left-3 top-3 z-10 select-none font-mono text-[0.6rem] uppercase leading-tight tracking-[0.18em] text-poster-mint [text-shadow:0_0_8px_rgba(0,202,154,0.55)]"
    >
      <div class="rounded-sm border border-poster-mint/40 bg-poster-bg/70 px-2 py-1.5">
        <div class="flex items-center gap-1.5">
          <span class="inline-block size-1.5 animate-pulse bg-poster-mint" />
          <span>CONTROLS</span>
        </div>
        <div class="mt-1 text-poster-pink [text-shadow:0_0_6px_rgba(245,150,170,0.5)]">
          USE WASD TO MOVE OBJECT
        </div>
        <div class="mt-0.5 text-poster-mint/80">
          STATUS: <span :class="active ? 'text-poster-mint' : 'text-poster-pink'">{{ active ? 'ACTIVE' : 'READY' }}</span>
        </div>
      </div>
    </div>

    <!-- HUD: statistik (retro arcade, pojok kanan) -->
    <div
      v-show="!loading"
      aria-hidden="true"
      class="pointer-events-none absolute right-3 top-3 z-10 select-none font-mono text-[0.6rem] uppercase leading-tight tracking-[0.18em] text-poster-mint [text-shadow:0_0_8px_rgba(0,202,154,0.55)]"
    >
      <div class="rounded-sm border border-poster-mint/40 bg-poster-bg/70 px-2 py-1.5 text-right">
        <div>LEVEL: <span class="text-poster-pink [text-shadow:0_0_6px_rgba(245,150,170,0.5)]">FULL-STACK DEV</span></div>
        <div class="mt-0.5">EXP: <span class="text-poster-pink [text-shadow:0_0_6px_rgba(245,150,170,0.5)]">3+ PROJECTS</span></div>
      </div>
    </div>

    <Transition
      enter-active-class="transition-opacity duration-500"
      enter-from-class="opacity-0"
      leave-active-class="transition-opacity duration-500"
      leave-to-class="opacity-0"
    >
      <div
        v-if="loading"
        class="pointer-events-none absolute inset-0 grid place-items-center bg-poster-bg/60"
        role="status"
        aria-live="polite"
      >
        <div
          class="flex items-center gap-3 font-display text-[0.7rem] font-bold uppercase tracking-[0.25em] text-poster-mint"
        >
          <span
            class="size-3 animate-spin border-2 border-poster-mint border-t-transparent"
            aria-hidden="true"
          />
          <span>Loading 3D Asset...</span>
        </div>
      </div>
    </Transition>
  </div>
</template>
