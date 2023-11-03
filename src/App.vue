<template>
  <!-- <router-view /> -->
  <div id="wrap">
    <div id="wrap-inner">
      <canvas id="cbg1"></canvas>
      <canvas id="cbg2"></canvas>
      <canvas id="cbg3"></canvas>
      <canvas id="cbg4"></canvas>
      <canvas id="cmg"></canvas>
      <canvas id="cfg"></canvas>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Arcane } from 'arcanepad-web-sdk';
import { onMounted, onBeforeUnmount, ref } from 'vue';

const gameLoaded = ref(false);

onMounted(async () => {

  ; (window as any).$ = {};

  const scripts = [
    'js/jsfxr.js',
    'js/util.js',
    'js/storage.js',
    'js/definitions.js',
    'js/audio.js',
    'js/text.js',
    'js/hero.js',
    'js/enemy.js',
    'js/bullet.js',
    'js/explosion.js',
    'js/powerup.js',
    'js/particle.js',
    'js/particleemitter.js',
    'js/textpop.js',
    'js/levelpop.js',
    'js/button.js',
    'js/game.js',
    // 'js/socketio.js',
    // 'js/networking.js',
  ];

  try {
    for (const src of scripts) {
      await loadScript(src);
    }
    console.log('All scripts have been loaded');
    gameLoaded.value = true; // The game is now loaded
  } catch (error) {
    console.error('Error occurred while loading scripts:', error);
  }

  Arcane.init()

  await Arcane.arcaneClientInitialized()
    ; (window as any).Arcane = Arcane;
  await loadScript('js/viewer.js')
});

const loadScript = (src: any) => {
  return new Promise<void | HTMLScriptElement>((resolve, reject) => {
    if (document.querySelector(`script[src="${src}"]`)) {
      return resolve();
    }
    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error(`Failed to load the script: ${src}`));
    document.head.appendChild(script);
  });
};

</script>

<style scoped></style>
