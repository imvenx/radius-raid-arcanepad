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
import { onMounted, onBeforeUnmount, ref } from 'vue';
const gameLoaded = ref(false);


// Function to dynamically load a script
const loadScript = (src: any) => {
  return new Promise((resolve, reject) => {
    // Avoid reloading the script if it's already in the document
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

onMounted(async () => {

  ; (window as any).$ = {};

  // List your scripts here
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
    'js/socketio.js',
    'js/networking.js',
    'js/viewer.js',
    // Make sure to add any additional scripts you may have
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
});

onBeforeUnmount(() => {
  // Perform any necessary cleanup, such as removing global variables or intervals
});
</script>

<style scoped>
body {
  background: #080808;
}

#wrap {
  background: #222;
  box-shadow: inset 0 0 0 1px #404040, 0 0 0 1px #000;
  left: 50%;
  opacity: 0;
  padding: 10px;
  position: absolute;
  top: 50%;
  transition: opacity 1.5s;
}

.loaded #wrap {
  opacity: 1;
}

#wrap-inner {
  background: #000;
  overflow: hidden;
  position: relative;
}

canvas {
  cursor: crosshair;
  display: block;
  left: 0;
  position: absolute;
  top: 0;
}
</style>
