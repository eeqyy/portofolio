<script setup lang="ts">
withDefaults(defineProps<{ opacity?: number }>(), {
  opacity: 0.04,
});
</script>

<template>
  <div class="grain-overlay" :style="{ opacity }" aria-hidden="true">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-full w-full">
      <filter id="poster-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="3"
          stitchTiles="stitch"
        />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#poster-grain)" />
    </svg>
  </div>
</template>

<style scoped>
.grain-overlay {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  mix-blend-mode: overlay;
}
</style>
