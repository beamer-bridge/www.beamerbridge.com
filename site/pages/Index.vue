<template>
  <div>
    <section
      class="relative flex h-[920px] justify-center overflow-hidden bg-radial-grey-teal-sea py-6 text-center md:h-[1024px] md:py-32 2xl:h-[1124px] 2xl:py-24"
    >
      <div
        class="bg absolute -top-16 left-0 z-10 h-full w-full bg-hero-beams bg-cover bg-[center_top_0rem] bg-no-repeat"
      ></div>
      <div class="container z-20 flex flex-col items-center gap-9 text-center">
        <h1
          class="px-3 text-center text-6xl leading-5xl text-sea-green sm:px-0 lg:text-7xl lg:leading-6xl"
        >
          <span class="font-bold">
            Explore Rollups
            <br />
            Effortlessly
          </span>
        </h1>
        <h2 class="px-[10%] text-xl lg:text-2xl xl:px-[20%]">
          Beam your ERC20 assets between EVM compatible rollups with certainty, speed and security.
        </h2>
        <a
          class="rounded-[67px] bg-neon-yellow py-4 px-8 text-2xl text-black transition-all hover:bg-neon-green hover:shadow-2xl"
          href="https://app.beamerbridge.com"
          target="_blank"
        >
          <span class="inline whitespace-nowrap">Start Beaming</span>
        </a>
      </div>

      <!-- transitioned element -->
      <div
        class="absolute z-10 h-[400px] w-full text-center transition-all duration-500 ease-in-out"
        :style="{ bottom: `${ellipseBottomPosition}px` }"
      >
        <h1
          class="absolute z-20 mx-auto w-full pt-[280px] text-center text-5xl font-bold text-teal-200 sm:pt-[220px] md:text-6xl"
        >
          Simple and Secure
        </h1>
        <div
          class="-z-10 h-full rounded-t-[50%] bg-[white] [transition:_transform_0.5s_ease-in-out,box-shadow_0.3s_ease-in-out,opacity_0.5s_ease-in-out] [transition-delay:0s,0.3s,0s]"
          :class="[ellipseClasses, ellipseShadowClasses, ellipseOpacityClasses]"
          :style="{ '--tw-scale-x': scaleX }"
        ></div>
      </div>
    </section>

    <section class="relative z-20" id="property-section">
      <div
        v-for="property in properties"
        :key="property.label"
        :style="{ backgroundColor: property.bgColor }"
      >
        <div
          class="container mx-auto grid grid-cols-1 items-center justify-center gap-10 py-10 md:grid-cols-3"
        >
          <h1
            class="text-center text-4xl font-bold text-black md:col-span-1"
            v-html="property.label"
          ></h1>

          <p
            class="px-4 text-center text-xl text-black sm:px-0 md:col-span-2 lg:text-left lg:text-2xl"
            v-html="property.description"
          ></p>
        </div>
      </div>
    </section>

    <section class="bg-teal-200 py-24">
      <div
        class="container mx-auto grid w-full grid-cols-1 gap-20 text-center lg:grid-cols-3 lg:gap-6"
      >
        <div class="flex flex-col items-center gap-8">
          <h3 class="z-10 text-4xl font-semibold">
            P2P <br />
            Transfers
          </h3>
          <img class="h-72" src="/properties_certain.png" />
          <p class="px-4 text-xl sm:px-0">
            Enjoy the best dApps, DeFi protocols, games, NFT projects and DAOs - whichever rollup
            they're on. Discover amazing dApps on

            <a
              href="https://www.optimism.io/"
              target="_blank"
              class="whitespace-nowrap underline transition-colors hover:text-sea-green"
              >Optimism</a
            >,
            <a
              href="https://arbitrum.io/"
              target="_blank"
              class="whitespace-nowrap underline transition-colors hover:text-sea-green"
            >
              Arbitrum</a
            >,
            <a
              href="https://ethereum.org/"
              target="_blank"
              class="whitespace-nowrap underline transition-colors hover:text-sea-green"
            >
              Ethereum</a
            >,
            <a
              href="https://zkevm.polygon.technology/"
              target="_blank"
              class="whitespace-nowrap underline transition-colors hover:text-sea-green"
            >
              Polygon zkEVM</a
            >
            and
            <a
              href="https://base.org/"
              target="_blank"
              class="whitespace-nowrap underline transition-colors hover:text-sea-green"
            >
              Base</a
            >.
          </p>
        </div>

        <div class="flex flex-col items-center gap-8">
          <h3 class="z-10 text-4xl font-semibold">
            Accessing <br />
            dApps
          </h3>
          <img class="h-72" src="/properties_simple.png" />
          <p class="px-4 text-xl sm:px-0">
            Bring together all your assets on the rollup of your choice so you can deploy them most
            effectively. Never worry about asset fragmentation again!
          </p>
        </div>

        <div class="flex flex-col items-center gap-8">
          <h3 class="z-10 text-4xl font-semibold">
            Consolidating <br />
            assets
          </h3>
          <img class="h-72" src="/properties_fast.png" />
          <p class="px-4 text-xl sm:px-0">
            Transfer assets to anyone on any rollup. Send money to friends, charities or online
            shops. Just copy their address in the "Target Address" field.
          </p>
        </div>
      </div>
    </section>

    <a
      class="z-20 flex justify-center bg-neon-yellow py-6 text-center"
      href="https://app.beamerbridge.com"
      target="_blank"
    >
      <div class="container flex flex-col items-center justify-between gap-8 lg:flex-row lg:gap-0">
        <h1 class="text-3xl font-semibold text-dark-teal xl:text-4xl">Beam tokens between</h1>
        <div
          class="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16 xl:gap-24"
        >
          <img class="w-10" src="/ethereum.png" />
          <img src="/optimism_logo.png" class="w-16" />
          <img class="w-16" src="/arbitrum_logo.png" />
          <img class="w-16" src="/polygon_zkevm_logo.png" />
          <img class="w-16" src="/base.svg" />
        </div>
        <img class="mt-2 h-10 lg:mt-0" src="/arrow.svg" />
      </div>
    </a>

    <section class="bg-cta bg-cover bg-center py-20 xl:py-16">
      <div class="container mx-auto flex flex-col items-center justify-center gap-44 text-center">
        <h1
          class="text-center text-6xl font-bold leading-5xl text-sea-green lg:text-7xl lg:leading-6xl"
        >
          Enjoy Effortless <br />Bridging
        </h1>
        <a
          class="rounded-[67px] bg-neon-yellow px-8 py-4 text-2xl text-black transition-all hover:bg-neon-green hover:shadow-2xl"
          href="https://app.beamerbridge.com"
          target="_blank"
        >
          <span class="inline whitespace-nowrap">Start Beaming</span>
        </a>
      </div>
    </section>

    <section class="bg-rosa py-8 text-center">
      <div
        class="container mx-auto flex flex-col items-center justify-between gap-8 px-4 lg:flex-row xl:gap-20 xl:px-0"
      >
        <div class="flex flex-col items-center gap-8 md:flex-row xl:gap-20">
          <img class="w-40" src="/community_icon.png" />
          <p
            class="break-normal px-4 text-center text-2xl font-semibold text-black md:px-0 md:text-left"
          >
            Beamer is a community&#8209;driven and open&nbsp;source&nbsp;project. <br />Voice your
            feedback, comments and questions.
          </p>
        </div>
        <a
          class="whitespace-nowrap rounded-4xl bg-peach py-3 px-8 text-center text-black transition-colors hover:bg-fire"
          href="https://discord.gg/beamerbridge"
          target="_blank"
          >Join our Community</a
        >
      </div>
    </section>

    <section class="bg-mint py-8 text-center">
      <div class="container mx-auto my-4 flex flex-col items-center px-4 xl:px-0">
        <span class="text-2xl font-semibold text-dark-teal">Backed by</span>
        <div class="mt-12 flex w-full flex-col items-center justify-between gap-8 lg:flex-row">
          <a href="https://atka.io/" target="_blank" class="opacity-70 hover:opacity-100">
            <img class="h-16" src="/partners/atka.png" />
          </a>
          <a href="https://kindi.capital/" target="_blank" class="opacity-70 hover:opacity-100">
            <img class="h-16" src="/partners/kindi.png" />
          </a>
          <a href="https://alphemy.capital/" target="_blank" class="opacity-70 hover:opacity-100">
            <img class="h-20" src="/partners/alphemy.png" />
          </a>
          <a
            href="https://coinix.capital/en/"
            target="_blank"
            class="opacity-70 hover:opacity-100"
          >
            <img class="h-16" src="/partners/coinix.png" />
          </a>
          <a
            href="https://www.parallelvc.xyz/"
            target="_blank"
            class="opacity-70 hover:opacity-100"
          >
            <img class="h-16" src="/partners/parallel.png" />
          </a>
          <a href="https://zeeprime.capital/" target="_blank" class="opacity-70 hover:opacity-100">
            <img class="h-16" src="/partners/zeeprime.png" />
          </a>
          <span
            class="select-none font-['Inter'] text-2xl font-semibold text-black opacity-70 hover:opacity-100"
            >Etiënne</span
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const properties = [
  {
    label: 'Blazing Fast',
    description: 'Bridge assets in as little as 2.5 seconds... and always under 20 seconds.',
    bgColor: '#E5FCFB',
  },
  {
    label: 'Exact<br/>amounts',
    description: 'If you send USDC 1,000, you always receive USDC 1,000.<br/>No funky decimals. ',
    bgColor: '#CBF9F3',
  },
  {
    label: 'Easy Fees',
    description: 'Pay just 0.3% of the transfer amount.<br/>Charged upfront on the source rollup.',
    bgColor: '#9CEBE6',
  },
  {
    label: 'Super<br/>Simple',
    description: "Sign just one transaction on the source rollup.<br/>That's it. You're done!",
    bgColor: '#67E0DD',
  },
  {
    label: 'Canonical<br/>Tokens',
    description: 'You always receive canonical tokens, never derivative or proxy tokens.',
    bgColor: '#38CFCB',
  },
  {
    label: 'Final',
    description: "When you get your tokens on the destination rollups, they're 100% yours.",
    bgColor: '#2EBFBB',
  },
  {
    label: 'Security of<br/>Ethereum L1',
    description: 'We use Ethereum L1 for messaging and settlement.<br/>Best-in-class security.',
    bgColor: '#22ABA7',
  },
];

/*
 * Ellipse transition logic
 */

const ellipseClasses = `
mt-[14rem]
lg:mt-[17rem]
scale-y-[1.4]
md:scale-y-[1.6]
xl:scale-y-[2.0]
2xl:scale-y-[2.5]
`;

const scaleXInitialValue = 0.25;
const scaleXMax = 1.1;
const ellipseBottomInitialPosition = -350;

const ellipseShadowClasses = ref('');
const ellipseOpacityClasses = ref('opacity-0');
const ellipseBottomPosition = ref(ellipseBottomInitialPosition);
const scaleX = ref(scaleXInitialValue);

function isVisible(ele: HTMLElement, offset = 0): boolean {
  const { top, bottom } = ele.getBoundingClientRect();
  const vHeight = window.innerHeight || document.documentElement.clientHeight;

  return (top > 0 || bottom > 0) && top - offset < vHeight;
}
function isScrolledPast(ele: HTMLElement): boolean {
  const { top } = ele.getBoundingClientRect();
  return top < 0;
}

const onScroll = async (): Promise<void> => {
  const elementBorder = document.querySelector('#property-section') as HTMLDivElement;
  if (isVisible(elementBorder, 150)) {
    ellipseBottomPosition.value = 0;
    scaleX.value = scaleXMax;
    ellipseShadowClasses.value = 'shadow-neon-yellow';
    ellipseOpacityClasses.value = 'opacity-1';
  } else if (!isScrolledPast(elementBorder)) {
    ellipseBottomPosition.value = ellipseBottomInitialPosition;
    scaleX.value = scaleXInitialValue;
    ellipseShadowClasses.value = '';
    ellipseOpacityClasses.value = 'opacity-0';
  }
};

onMounted(() => {
  window.addEventListener('scroll', onScroll);
  onScroll();
});
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
});
</script>
