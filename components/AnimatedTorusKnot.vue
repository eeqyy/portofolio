<script setup lang="ts">
import { onScopeDispose, shallowRef } from "vue";
import { useRenderLoop } from "@tresjs/core";

const props = withDefaults(defineProps<{ speed?: number }>(), {
  speed: 1,
});

const mesh = shallowRef<{
  rotation: { x: number; y: number };
} | null>(null);

const { onLoop } = useRenderLoop();

const loop = onLoop(({ delta }) => {
  if (!mesh.value) return;

  mesh.value.rotation.x += delta * 0.35 * props.speed;
  mesh.value.rotation.y += delta * 0.5 * props.speed;
});

// Lepas callback dari render loop saat canvas di-unmount agar tidak bocor.
onScopeDispose(() => {
  loop.off();
});
</script>

<template>
  <TresMesh ref="mesh">
    <TresTorusKnotGeometry :args="[1, 0.3, 128, 32]" />
    <TresMeshStandardMaterial
      color="#f596aa"
      :roughness="0.25"
      :metalness="0.75"
    />
  </TresMesh>
</template>
