<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

const cursor = ref<HTMLDivElement | null>(null);
const isEnabled = ref(false);
const isActive = ref(false);

let query: MediaQueryList | null = null;
let frame = 0;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;
let hasMoved = false;

function render() {
  frame = 0;
  if (!cursor.value) return;

  const dx = targetX - currentX;
  const dy = targetY - currentY;
  currentX += dx * 0.18;
  currentY += dy * 0.18;

  cursor.value.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

  if (Math.abs(dx) > 0.4 || Math.abs(dy) > 0.4) {
    frame = requestAnimationFrame(render);
  }
}

function handleMove(event: PointerEvent) {
  if (!isEnabled.value || event.pointerType !== "mouse") return;

  targetX = event.clientX;
  targetY = event.clientY;

  if (!hasMoved || !isActive.value) {
    hasMoved = true;
    currentX = targetX;
    currentY = targetY;
  }

  isActive.value = true;
  if (!frame) frame = requestAnimationFrame(render);
}

function hide() {
  isActive.value = false;
}

function syncEnabled(event?: MediaQueryListEvent) {
  isEnabled.value = event ? event.matches : Boolean(query?.matches);
  if (!isEnabled.value) hide();
}

onMounted(() => {
  // Hanya aktif untuk pointer presisi di desktop, dan hormati reduced motion.
  query = window.matchMedia(
    "(pointer: fine) and (min-width: 1024px) and (prefers-reduced-motion: no-preference)",
  );
  syncEnabled();

  query.addEventListener("change", syncEnabled);
  window.addEventListener("pointermove", handleMove, { passive: true });
  window.addEventListener("blur", hide);
  document.documentElement.addEventListener("pointerleave", hide);
});

onBeforeUnmount(() => {
  query?.removeEventListener("change", syncEnabled);
  window.removeEventListener("pointermove", handleMove);
  window.removeEventListener("blur", hide);
  document.documentElement.removeEventListener("pointerleave", hide);

  if (frame) cancelAnimationFrame(frame);
  frame = 0;
});
</script>

<template>
  <div
    v-if="isEnabled"
    ref="cursor"
    data-retro-cursor
    aria-hidden="true"
    class="pointer-events-none fixed left-0 top-0 z-[80] hidden transition-opacity duration-200 will-change-transform lg:block"
    :class="isActive ? 'opacity-100' : 'opacity-0'"
  >
    <span
      class="absolute -left-2.5 -top-2.5 block size-5 border border-poster-mint/60 transition-transform duration-200"
      :class="isActive ? 'scale-100' : 'scale-75'"
    />
    <span
      class="absolute -left-0.5 -top-0.5 block size-1 bg-poster-pink"
    />
  </div>
</template>
