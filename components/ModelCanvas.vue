<script setup lang="ts">
import { ref } from "vue";
import { Vector3 } from "three";

const cameraPosition = new Vector3(0, 0, 5);
const keyLightPosition = new Vector3(10, 10, 5);
const rimLightPosition = new Vector3(-10, -10, -5);

const loading = ref(true);

function handleReady() {
  loading.value = false;
}
</script>

<template>
  <div
    class="relative w-full"
    role="group"
    aria-label="Torus knot 3D interaktif berwarna pink; seret untuk memutar"
    :aria-busy="loading"
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

      <AnimatedTorusKnot />

      <OrbitControls
        make-default
        :enable-zoom="false"
        :enable-pan="false"
        :auto-rotate="false"
        :enable-damping="true"
        :damping-factor="0.05"
      />
    </TresCanvas>

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
