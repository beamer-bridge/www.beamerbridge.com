<template>
  <div id="app">
    <header
      class="fixed top-0 z-20 hidden h-[105px] w-screen flex-row overflow-hidden bg-grey-dark lg:flex"
    >
      <div class="absolute top-1/4 left-1/3 -z-10 h-1/2 w-full bg-radial-teal"></div>

      <div class="container mx-auto flex flex-row items-center">
        <a href="/">
          <img class="w-64" src="/logo.png" />
        </a>
        <div class="flex-auto"></div>
        <div class="flex flex-row items-center gap-16">
          <a
            class="rounded-3xl border border-neon-yellow py-1 px-3 text-xl text-neon-yellow hover:bg-neon-yellow hover:text-dark-teal"
            href="https://testnet.beamerbridge.com"
            target="_blank"
            >dApp</a
          >
          <a class="text-xl text-sea-green" href="https://docs.beamerbridge.com" target="_blank"
            >Docs</a
          >
          <a
            class="text-xl text-sea-green"
            href="https://docs.beamerbridge.com/faq.html"
            target="_blank"
            >FAQs</a
          >
        </div>
      </div>
    </header>

    <header class="fixed z-20 flex h-[140px] w-screen flex-col items-center bg-black lg:hidden">
      <div class="my-auto">
        <div class="absolute left-0 -z-10 h-1/4 w-full bg-radial-teal"></div>
        <img class="h-11" src="/logo.png" />
      </div>
      <div class="flex w-full">
        <a
          href="https://testnet.beamerbridge.com"
          target="_blank"
          class="flex w-2/4 justify-center bg-neon-yellow py-2 text-2xl text-dark-teal"
          >dApp</a
        >
        <a
          href="https://docs.beamerbridge.com"
          target="_blank"
          class="flex w-2/4 justify-center bg-sea-green py-2 text-2xl text-dark-teal"
          >Docs</a
        >
        <a
          href="https://docs.beamerbridge.com/faq.html"
          target="_blank"
          class="flex w-2/4 justify-center bg-neon-yellow py-2 text-2xl text-dark-teal"
          >FAQs</a
        >
      </div>
    </header>

    <div class="pt-[140px] lg:pt-[105px]">
      <section v-if="frontmatter.layout === 'page'" class="w-full bg-radial-grey-teal-sea">
        <div id="page-container" class="container mx-auto flex flex-col py-10">
          <h1 class="mb-4 font-semibold">{{ frontmatter.title }}</h1>
          <Content />
        </div>
      </section>
      <Content v-else />
    </div>
    <footer class="bg-black py-8 text-lg">
      <div class="container mx-auto grid grid-cols-1 items-center gap-2 sm:grid-cols-2 sm:gap-4">
        <div class="flex flex-col items-center gap-2 text-center">
          <div class="flex flex-row items-center gap-8">
            <a href="https://github.com/beamer-bridge" target="_blank" class="hover:scale-110">
              <img class="w-8" src="/github.png" />
            </a>
            <a href="https://discord.gg/YWdStZkz9z" target="_blank" class="hover:scale-110">
              <img class="w-8" src="/discord.png" />
            </a>
            <a href="https://twitter.com/BeamerBridge" target="_blank" class="hover:scale-110">
              <img class="w-8" src="/twitter.png" />
            </a>
          </div>

          <a href="mailto: hello@beamerbridge.com" class="underline hover:text-sea-green"
            >hello@beamerbridge.com</a
          >
          <a href="media-kit.tar.gz" class="hover:text-sea-green"> Branding Kit </a>
          <a
            href="https://web3.career/web3-companies/beamer-bridge"
            target="_blank"
            class="hover:text-sea-green"
          >
            Career
          </a>
        </div>

        <div class="flex flex-col items-center gap-2 self-end text-center">
          <a href="/imprint" target="_blank" class="hover:text-sea-green">Imprint</a>
          <a href="/privacy" target="_blank" class="hover:text-sea-green">Privacy Policy</a>
          <span class="">Project led by Brainbot Technologies AG</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';

const { frontmatter } = useData();
</script>

<style lang="css">
#app {
  font-family: Sora, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  @apply text-2xl font-normal text-mint;
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
