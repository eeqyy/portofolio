<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRenderLoop } from "@tresjs/core";

const props = defineProps<{ active: boolean }>();
const root = ref<HTMLElement | null>(null);
const beacon = ref<any>(null);
const beamMaterial = ref<any>(null);
const blend = ref(0);
const reducedMotion = ref(false);
let motionQuery: MediaQueryList | null = null;
let resizeHandler: (() => void) | null = null;

function positionBeacon() {
  if (!root.value || !beacon.value) return;
  const aspect = root.value.clientWidth / Math.max(1, root.value.clientHeight);
  beacon.value.position.set(aspect * 2.15, 1.2, -1.2);
}

onMounted(() => {
  motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  reducedMotion.value = motionQuery.matches;
  motionQuery.addEventListener("change", syncMotion);
  resizeHandler = positionBeacon;
  positionBeacon();
  window.addEventListener("resize", resizeHandler);
});

function syncMotion() {
  reducedMotion.value = Boolean(motionQuery?.matches);
}

onBeforeUnmount(() => {
  motionQuery?.removeEventListener("change", syncMotion);
  if (resizeHandler) window.removeEventListener("resize", resizeHandler);
});

const { onLoop } = useRenderLoop();
let wasActive = false;
let activeSince = 0;
const beamLoop = onLoop(({ delta, elapsed }) => {
  if (props.active && !wasActive) activeSince = elapsed;
  wasActive = props.active;

  const target = props.active ? 1 : 0;
  blend.value += (target - blend.value) * Math.min(1, delta * 1.35);
  if (beacon.value && !reducedMotion.value && props.active) {
    // The local Y axis is vertical: this sweeps the beam around the lighthouse.
    beacon.value.rotation.y = (elapsed - activeSince) * 0.48;
  }
  if (beamMaterial.value) beamMaterial.value.opacity = blend.value * 0.15;
});
onBeforeUnmount(() => beamLoop.off());
</script>

<template>
  <div ref="root" class="beacon-sweep" aria-hidden="true">
    <TresCanvas :alpha="true" :antialias="false" :dpr="[1, 1]">
      <TresPerspectiveCamera :position="[0, 0, 10]" :fov="42" />
      <TresGroup ref="beacon" :position="[0, 1.2, -1.2]">
        <TresGroup :rotation="[0, 0, 0]">
          <TresMesh :position="[0, 0, 3.5]" :rotation="[-1.5708, 0, 0]">
            <TresConeGeometry :args="[0.58, 7, 64, 1, true]" />
            <TresMeshBasicMaterial
              ref="beamMaterial"
              color="#ffe7ad"
              :transparent="true"
              :opacity="0"
              :side="2"
              depth-write="false"
            />
          </TresMesh>
        </TresGroup>
      </TresGroup>
    </TresCanvas>
  </div>
</template>
