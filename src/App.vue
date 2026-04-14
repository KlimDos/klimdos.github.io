<template>
  <div
    id="App"
    class="min-h-screen flex flex-col items-center px-4 py-10 sm:py-14"
  >
    <main class="w-full max-w-3xl flex flex-col gap-10 sm:gap-12">
      <Neon />
      <Bitcoin />
    </main>
    <footer
      class="mt-auto pt-10 text-center text-xs text-gray-500"
    >
      <a
        href="https://github.com/KlimDos/klimdos.github.io"
        rel="noopener noreferrer"
        target="_blank"
        aria-label="Source code on GitHub (opens in a new tab)"
        class="text-gray-400 underline decoration-gray-600 underline-offset-2 transition-colors hover:text-gray-200 hover:decoration-gray-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-sm"
      >Source on GitHub</a>
    </footer>
  </div>
</template>

<script>
import Neon from "./components/Neon.vue";
import Bitcoin from "./components/Bitcoin.vue";

export default {
  name: "App",
  components: {
    Neon,
    Bitcoin,
  },
};
</script>

<style>
#app {
  min-height: 100vh;
}
</style>
