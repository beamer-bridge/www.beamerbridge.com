<template>
  <div>
    <section
      class="flex justify-center bg-hero-beams bg-cover bg-no-repeat px-8 pb-16 lg:bg-contain lg:px-0 lg:pt-12 2xl:pt-0"
    >
      <div class="flex w-[1400px] flex-col items-center">
        <div
          class="flex min-h-screen max-w-[50rem] flex-auto flex-col items-start self-end pt-24 lg:gap-10 lg:pt-6"
        >
          <h1
            class="-ml-1 text-6xl leading-4xl text-sea-green md:-ml-2 md:text-8xl md:leading-7xl lg:-ml-3 2xl:text-9xl 2xl:leading-9xl"
          >
            <span>Enjoy <span class="font-semibold">Effortless</span> Bridging</span>
          </h1>
          <h2
            class="md:leading-2xl mt-6 text-xl md:text-3xl lg:-mt-4 lg:leading-3xl 2xl:text-4xl 2xl:leading-3xl"
          >
            Beam your ERC20 assets<br />between EVM compatible rollups
            <br class="hidden md:inline" />with certainty, speed and security
          </h2>
          <a
            class="my-8 rounded-[67px] bg-neon-yellow py-2 px-8 text-2xl text-black lg:my-4 lg:py-3"
            href="https://testnet.beamerbridge.com"
            target="_blank"
          >
            <span class="hidden whitespace-nowrap lg:inline">Try Beamer on Testnet</span>
            <span class="inline whitespace-nowrap lg:hidden">try the app</span>
          </a>
          <div class="text-sea-green md:mr-20">
            <p class="md:leading-2xl text-lg leading-6 md:text-2xl">
              Beamer solves the problem of rollup silos in the L2 space.
              <br class="hidden lg:inline" />Our bridge enables users to move and consolidate
              assets across rollups, make P2P payments to recipients on other rollups, and access
              dApps on other rollups.
            </p>
          </div>
        </div>

        <div
          class="mt-36 flex w-full flex-col items-center justify-between text-center lg:flex-row lg:items-start"
        >
          <div class="flex flex-col md:flex-row">
            <div class="mb-20 flex flex-col items-center md:mr-8 md:max-w-[18.75rem]">
              <h3 class="z-10 text-4xl font-semibold">Certain</h3>
              <div class="relative -mt-[0.5rem] h-4 w-48 bg-dark-teal"></div>
              <img class="h-72 lg:my-8 lg:h-auto lg:w-full" src="/properties_certain.png" />
              <p class="text-lg lg:px-4">
                The amount of tokens sent and received will always be the same. That means no more
                guessing due to conversion rates or slippage.
              </p>
            </div>

            <div class="mb-20 flex flex-col items-center md:ml-8 md:max-w-[18.75rem] lg:mr-8">
              <h3 class="z-10 text-4xl font-semibold">Fast</h3>
              <div class="relative -mt-[0.5rem] h-4 w-48 bg-dark-teal"></div>
              <img class="h-72 lg:my-8 lg:h-auto lg:w-full" src="/properties_fast.png" />
              <p class="text-lg lg:mt-1 lg:px-4">
                Most transfers will be completed in just a few blocks. On average, transfers are
                reliably completed within 20 seconds.
              </p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row">
            <div class="mb-20 flex flex-col items-center md:mr-8 md:max-w-[18.75rem] lg:mx-2">
              <h3 class="z-10 text-4xl font-semibold">Simple</h3>
              <div class="relative -mt-[0.5rem] h-4 w-48 bg-dark-teal"></div>
              <img class="h-72 lg:my-8 lg:h-auto lg:w-full" src="/properties_simple.png" />
              <p class="text-lg lg:px-4">
                Users only needs to sign one transaction per transfer. Once received, the recipient
                will be able to use the tokens right away.
              </p>
            </div>

            <div class="mb-20 flex flex-col items-center md:ml-8 md:max-w-[18.75rem]">
              <h3 class="z-10 text-4xl font-semibold">Secure</h3>
              <div class="relative -mt-[0.5rem] h-4 w-48 bg-dark-teal"></div>
              <img class="h-72 lg:my-8 lg:h-auto lg:w-full" src="/properties_secure.png" />
              <p class="text-lg lg:px-4">
                Beamer relies on Ethereum L1. There are no new security assumptions. Users will
                always receive their tokens and be able to use them immediately after the transfer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <a
      class="flex justify-center bg-neon-yellow p-8 text-center lg:py-0"
      href="https://testnet.beamerbridge.com"
      target="_blank"
    >
      <div
        class="flex w-[1400px] flex-col items-center justify-between gap-4 lg:h-40 lg:flex-row lg:gap-0"
      >
        <h1 class="xl:text-4xl text-3xl font-semibold text-dark-teal 2xl:text-5xl">
          Beam tokens between
        </h1>
        <img src="/metis_logo.png" />
        <img class="-mt-[0.8rem]" src="/boba_logo.png" />
        <img class="h-18 mt-2 lg:mt-0" src="/arrow.svg" />
      </div>
    </a>

    <section class="flex justify-center bg-radial-grey-teal px-8 py-20 lg:py-20">
      <div class="flex w-[1400px] flex-col">
        <h1 class="mb-14 text-4xl font-semibold">How does Beamer work?</h1>
        <div class="flex flex-col gap-8 lg:flex-row lg:gap-20">
          <div class="flex w-full justify-center lg:order-2 lg:w-[60%] lg:pt-6">
            <img class="md:h-[40rem]" src="/diagram.png" />
          </div>
          <div class="w-full text-sea-green lg:order-1 lg:w-[50%]">
            <h2 class="text-semibold my-8 text-2xl text-peach">For Users</h2>
            <div class="my-2 flex gap-2 text-lg">
              <span class="text-peach">1a.</span>
              <span class="leading-8"
                >The user initiates transaction by sending assets and service fees on the initial
                rollup.</span
              >
            </div>
            <div class="my-2 flex gap-2 text-lg">
              <span class="text-peach">1b.</span>
              <span class="leading-8"
                >The agent sends the same amount of assets to user on target rollup within
                seconds.</span
              >
            </div>
            <span class="text-lg text-sea-green"
              >The user is now done - they can access and use the assets on the target
              rollup.</span
            >

            <h2 class="text-semibold my-8 text-2xl text-fire">For Liquidity Providers</h2>
            <div class="my-2 flex gap-2 text-lg leading-8">
              <span class="text-fire">2a.</span>
              <span class="leading-8"
                >The agent claims the assets and service fees on the initial rollup.</span
              >
            </div>
            <div class="my-2 flex gap-2 text-lg">
              <span class="text-fire">2b.</span>
              <span class="leading-8"
                >If no one challenges the claim, the agent can withdraw the assets and service
                fees. If another agent challenges the claim, the agents resolve the dispute using
                an escalation game.</span
              >
            </div>
            <span class="text-lg text-sea-green"
              >As an alternative to the escalation game, an agent may submit a proof on Ethereum
              L1.</span
            >

            <div
              class="mt-14 flex w-full items-start gap-4 rounded-4xl bg-sea-green p-8 text-lg text-black lg:w-120"
            >
              <img class="mt-1 w-7" src="/info_icon.svg" />
              <p class="text-lg">
                The current test version of Beamer only allows user functions.<br />
                The agent functions will be available to liquidity providers soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="flex justify-center bg-mint p-8 text-center">
      <div
        class="flex w-[1400px] flex-col items-center justify-between gap-8 lg:h-40 lg:flex-row lg:gap-0"
      >
        <img class="w-40" src="/community_icon.png" />
        <p class="break-normal text-2xl font-semibold text-black lg:px-8">
          Beamer is a community&#8209;driven and open&#8209;source&nbsp;project. <br />Voice your
          feedback, comments and questions.
        </p>
        <a
          class="whitespace-nowrap rounded-4xl bg-peach py-2 px-8 text-center drop-shadow-petite lg:py-3"
          href="https://discord.gg/YWdStZkz9z"
          target="_blank"
          >Join our Community</a
        >
      </div>
    </section>
  </div>
</template>
