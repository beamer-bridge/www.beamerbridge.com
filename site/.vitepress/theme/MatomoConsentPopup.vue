<template>
  <div
    v-if="displayed"
    class="fixed top-0 z-50 flex h-full w-full items-center justify-center backdrop-blur"
  >
    <div class="max-w-lg rounded-md bg-dark-teal py-6 px-6 text-base">
      This site uses Matomo to analyze traffic and help us to improve your user experience. We
      process your IP address and cookies are stored on your browser for 13 months. This data is
      only processed by us and our web hosting platform. Please read our
      <a
        href="https://beamerbridge.com/privacy.html"
        target="_blank"
        class="text-sea-green hover:underline"
        >Privacy Policy</a
      >
      to learn more.
      <div class="mt-6 flex flex-row justify-evenly">
        <button
          class="disabled:hover:bg-transparent disabled:text-grey rounded-md px-2 text-base font-semibold text-fire hover:bg-sea-green/20 disabled:opacity-25"
          @click="allowConsent"
        >
          Accept
        </button>
        <button
          class="disabled:hover:bg-transparent disabled:text-grey rounded-md px-2 text-base font-semibold text-fire hover:bg-sea-green/20 disabled:opacity-25"
          @click="disallowConsent"
        >
          Decline
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref } from 'vue';

const displayed = ref(false);

onBeforeMount(() => {
  const _paq = (window._paq = window._paq || []);
  _paq.push([
    function () {
      const rememberedConsent = this.getRememberedConsent();
      const matomoConsentDeclined = window.localStorage.getItem('matomoConsentDeclined');
      displayed.value = !rememberedConsent && !matomoConsentDeclined;
    },
  ]);
});

const allowConsent = async () => {
  const _paq = (window._paq = window._paq || []);
  _paq.push(['rememberConsentGiven']);
  displayed.value = false;
};

const disallowConsent = () => {
  window.localStorage.setItem('matomoConsentDeclined', 'true');
  displayed.value = false;
};
</script>
