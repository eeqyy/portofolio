<script setup lang="ts">
import { onScopeDispose, shallowRef, watch } from "vue";
import { Color } from "three";
import { useRenderLoop } from "@tresjs/core";

const props = withDefaults(
  defineProps<{ speed?: number; active?: boolean }>(),
  { speed: 1, active: false },
);

const mesh = shallowRef<{
  position: { x: number; y: number };
  rotation: { x: number; y: number };
  scale: { setScalar: (s: number) => void };
  material?: { color: Color } | null;
} | null>(null);

const { onLoop } = useRenderLoop();

// shortcut: keyboard hanya menggerakkan objek saat area canvas aktif (hover/fokus),
// agar tombol panah tetap menggulir halaman di luar zona game.
const keys = new Set<string>();
const KEY_MAP: Record<string, string> = {
  w: "up", arrowup: "up",
  s: "down", arrowdown: "down",
  a: "left", arrowleft: "left",
  d: "right", arrowright: "right",
};
const SPEED = 2.6; // unit/detik
const BOUND_X = 3;
const BOUND_Y = 2;
let vx = 0;
let vy = 0;
let scaleImpulse = 0;

const pink = new Color("#f596aa");
const mint = new Color("#00ca9a");

function onKeyDown(e: KeyboardEvent) {
  const dir = KEY_MAP[e.key.toLowerCase()];
  if (!dir || !props.active) return; // di luar zona game: biarkan halaman scroll normal
  e.preventDefault();
  keys.add(dir);
}

function onKeyUp(e: KeyboardEvent) {
  const dir = KEY_MAP[e.key.toLowerCase()];
  if (dir) keys.delete(dir);
}

if (import.meta.client) {
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
  onScopeDispose(() => {
    window.removeEventListener("keydown", onKeyDown);
    window.removeEventListener("keyup", onKeyUp);
  });
}

// Lepas tombol tertahan saat pengguna keluar dari zona game (mencegah gerak nyangkut).
watch(() => props.active, (a) => { if (!a) keys.clear(); });

function handlePointerDown() {
  const m = mesh.value;
  if (!m) return;
  scaleImpulse = 0.45; // dorongan bounce, diluruhkan kembali ke skala 1 oleh render loop
  const mat = m.material;
  if (mat?.color) mat.color.copy(mint); // flash ke poster-mint
}

const loop = onLoop(({ delta }) => {
  const m = mesh.value;
  if (!m) return;

  // Rotasi idle (perilaku asli).
  m.rotation.x += delta * 0.35 * props.speed;
  m.rotation.y += delta * 0.5 * props.speed;

  // Gerak smooth: lerp kecepatan menuju target lalu terapkan ke posisi (frame-rate independent).
  const tx = (keys.has("right") ? 1 : 0) - (keys.has("left") ? 1 : 0);
  const ty = (keys.has("up") ? 1 : 0) - (keys.has("down") ? 1 : 0);
  const velDamp = 1 - Math.exp(-delta * 10);
  vx += (tx * SPEED - vx) * velDamp;
  vy += (ty * SPEED - vy) * velDamp;
  m.position.x = Math.max(-BOUND_X, Math.min(BOUND_X, m.position.x + vx * delta));
  m.position.y = Math.max(-BOUND_Y, Math.min(BOUND_Y, m.position.y + vy * delta));

  // Bounce klik: skala impuls meluruh kembali ke 1.
  scaleImpulse *= Math.exp(-delta * 6);
  m.scale.setScalar(1 + scaleImpulse);

  // Warna: kembali merah jambu (pink) setelah flash mint saat klik.
  const mat = m.material;
  if (mat?.color) mat.color.lerp(pink, 1 - Math.exp(-delta * 6));
});

onScopeDispose(() => {
  loop.off();
});
</script>

<template>
  <TresMesh ref="mesh" @pointer-down="handlePointerDown">
    <TresTorusKnotGeometry :args="[1, 0.3, 128, 32]" />
    <TresMeshStandardMaterial
      color="#f596aa"
      :roughness="0.25"
      :metalness="0.75"
    />
  </TresMesh>
</template>
