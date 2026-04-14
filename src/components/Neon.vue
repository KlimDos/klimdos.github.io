<template>
  <header class="flex flex-col items-center text-center gap-3 sm:gap-4">
    <h1 class="neon-title font-display">Market Pulse</h1>
    <p
      class="max-w-md text-sm sm:text-base text-gray-400 font-sans leading-relaxed"
    >
      A live-style ticker board for walkthroughs.
    </p>
  </header>
</template>

<script>
export default {
  name: "Neon",
};
</script>

<style scoped>
.neon-title {
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 2px hsl(333deg 100% 55%);
  filter: drop-shadow(0px 2px 2px hsl(0deg 0% 0% / 0.5))
    drop-shadow(0px 0px 6px hsl(333deg 100% 50% / 0.55))
    drop-shadow(0px 0px 24px hsl(333deg 100% 50% / 0.65));
  color: deeppink;
  font-size: clamp(2.5rem, 8vw, 4.25rem);
  font-weight: 900;
  font-family: Raleway, system-ui, sans-serif;
  letter-spacing: -0.03em;
  line-height: 1.05;
}

@media (min-width: 640px) {
  .neon-title {
    -webkit-text-stroke-width: 3px;
  }
}
</style>
