<template>
  <div id="app">
    <header
      class="hidden lg:flex fixed z-20 w-screen lg:h-28 top-0 flex-col lg:flex-row items-center gap-12 p-24 py-10 bg-grey-dark overflow-hidden">
      <div class="absolute -z-10 top-1/4 left-1/3 h-1/2 w-full bg-radial-teal"></div>
      <a href="/">
        <img class="w-80" src="/logo.png" />
      </a>
      <div class="flex-auto"></div>
      <a class="py-1 px-3 border border-neon-yellow rounded-3xl text-2xl text-neon-yellow"
        href="https://testnet.beamerbridge.com" target="_blank">App</a>
      <a class="text-2xl text-sea-green" href="https://docs.beamerbridge.com" target="_blank">Documentation</a>
    </header>

    <header class="lg:hidden w-screen flex flex-col items-center fixed z-20 bg-black">
      <div class="m-4 p-2">
        <div class="absolute -z-10 left-0 h-1/4 w-full bg-radial-teal"></div>
        <img class="h-11" src="/logo.png" />
      </div>
      <div class="flex w-full">
        <a href="https://testnet.beamerbridge.com" target="_blank"
          class="w-2/4 flex justify-center py-2 text-3xl bg-neon-yellow text-dark-teal">App</a>
        <a href="https://docs.beamerbridge.com" target="_blank"
          class="w-2/4 flex justify-center py-2 text-3xl bg-sea-green text-dark-teal">Docs</a>
      </div>
    </header>

    <div class="pt-20 lg:pt-24">
        <section v-if="frontmatter.layout === 'page'" class="w-full bg-radial-grey-teal-sea">
            <div id="page-container" class="mx-auto md:container flex flex-col pt-20 lg:pt-16 pb-10 px-5">
                <h1 class="font-semibold mb-4">{{ frontmatter.title }}</h1>
                <Content />
            </div>
        </section>
        <Content v-else />
    </div>

    <footer class="bg-black flex justify-center p-8 text-lg">
      <div class="flex flex-col items-center lg:gap-4 w-[1400px]">
        <div class="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center text-center">
          <a href="media-kit.tar.gz">
            Branding Kit
          </a>
          <div class="flex flex-row items-center gap-8">
            <a href="https://github.com/beamer-bridge" target="_blank"><img class="w-8" src="/github.png"></a>
            <a href="https://discord.gg/YWdStZkz9z" target="_blank"><img class="w-8" src="/discord.png"></a>
            <a href="https://twitter.com/BeamerBridge" target="_blank"><img class="w-8" src="/twitter.png"></a>
          </div>
          <a href="mailto: hello@beamerbridge.com">hello@beamerbridge.com</a>
        </div>

        <div class="flex flex-col lg:flex-row gap-4 lg:gap-8 items-center text-center mt-8 lg:mt-0">
          <div class="flex gap-8">
            <a href="https://www.brainbot.com/imprint.html" target="_blank">Imprint</a>
            <a href="/privacy" target="_blank">Privacy Policy</a>
          </div>
          <span class="text-sea-green">Project led by Brainbot Technologies AG</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useData }  from 'vitepress';

const { frontmatter } = useData();
</script>

<style lang="css">
#app {
  font-family: Sora, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-mint text-2xl font-normal;
}

#page-container {
  @apply text-base; 
}

#page-container div {
  @apply space-y-4;
}

#page-container h1 {
  @apply text-4xl;
}

#page-container h2 {
  @apply text-2xl;
}
</style>
