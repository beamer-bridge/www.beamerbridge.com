<template>
  <div>  
    <section class="bg-hero-beams bg-no-repeat bg-cover lg:bg-contain flex justify-center px-8 lg:px-0 lg:pt-12 2xl:pt-0 pb-16">
      <div class="flex flex-col items-center w-[1400px]">
        <div class="min-h-screen max-w-[50rem] flex-auto pt-24 lg:pt-6 flex flex-col self-end items-start lg:gap-10">
          <h1
            class="text-6xl md:text-8xl -ml-1 md:-ml-2 lg:-ml-3 2xl:text-9xl leading-4xl md:leading-7xl 2xl:leading-9xl text-sea-green">
            <span>Enjoy <span class="font-semibold">Effortless</span> Bridging</span>
          </h1>
          <h2 class="mt-6 lg:-mt-4 text-xl md:leading-2xl md:text-3xl lg:leading-3xl 2xl:text-4xl 2xl:leading-3xl">
            Beam your ERC20 assets<br>between EVM compatible rollups <br class="hidden md:inline">with certainty, speed
            and
            security
          </h2>
          <a class="my-8 lg:my-4 py-2 lg:py-3 px-8 bg-neon-yellow rounded-[67px] text-2xl text-black"
            href="https://testnet.beamerbridge.com" target="_blank">
            <span class="hidden lg:inline whitespace-nowrap">Try Beamer on Testnet</span>
            <span class="inline lg:hidden whitespace-nowrap">try the app</span>
          </a>
          <div class="text-sea-green md:mr-20">
            <p class="text-lg leading-6 md:text-2xl md:leading-2xl">
              Beamer solves the problem of rollup silos in the L2 space. <br class="hidden lg:inline">Our
              bridge enables users to move and consolidate assets across rollups,
              make P2P payments to recipients on other rollups, and access dApps
              on other rollups.
            </p>
          </div>
        </div>

        <div class="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start text-center mt-36">
          <div class="flex flex-col md:flex-row">
            <div class="md:max-w-[18.75rem] flex flex-col items-center mb-20 md:mr-8">
              <h3 class="font-semibold text-4xl z-10">Certain</h3>
              <div class="relative bg-dark-teal w-48 h-4 -mt-[0.5rem]"></div>
              <img class="h-72 lg:h-auto lg:w-full lg:my-8" src="/properties_certain.png">
              <p class="text-lg lg:px-4">
                The amount of tokens sent and received will always be the same. That means no more guessing due to
                conversion rates or slippage.
              </p>
            </div>

            <div class="md:max-w-[18.75rem] flex flex-col items-center mb-20 md:ml-8 lg:mr-8">
              <h3 class="font-semibold text-4xl z-10">Fast</h3>
              <div class="relative bg-dark-teal w-48 h-4 -mt-[0.5rem]"></div>
              <img class="h-72 lg:h-auto lg:w-full lg:my-8" src="/properties_fast.png">
              <p class="text-lg lg:px-4 lg:mt-1">
                Most transfers will be completed in just a few blocks. On average, transfers are reliably completed
                within
                20 seconds.
              </p>
            </div>
          </div>

          <div class="flex flex-col md:flex-row">
            <div class="md:max-w-[18.75rem] flex flex-col items-center mb-20 lg:mx-2 md:mr-8">
              <h3 class="font-semibold text-4xl z-10">Simple</h3>
              <div class="relative bg-dark-teal w-48 h-4 -mt-[0.5rem]"></div>
              <img class="h-72 lg:h-auto lg:w-full lg:my-8" src="/properties_simple.png">
              <p class="text-lg lg:px-4">
                Users only needs to sign one transaction per transfer. Once received, the recipient will be able to
                use the tokens right away.
              </p>
            </div>

            <div class="md:max-w-[18.75rem] flex flex-col items-center mb-20 md:ml-8">
              <h3 class="font-semibold text-4xl z-10">Secure</h3>
              <div class="relative bg-dark-teal w-48 h-4 -mt-[0.5rem]"></div>
              <img class="h-72 lg:h-auto lg:w-full lg:my-8" src="/properties_secure.png">
              <p class="text-lg lg:px-4">
                Beamer relies on Ethereum L1. There are no new security assumptions. Users will always receive their
                tokens and be able to use them immediately after the transfer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <a class="bg-neon-yellow flex justify-center p-8 lg:py-0 text-center" href="https://testnet.beamerbridge.com"
      target="_blank">
      <div class="flex flex-col lg:flex-row justify-between gap-4 lg:gap-0 items-center w-[1400px] lg:h-40">
        <h1 class="text-dark-teal text-3xl xl:text-4xl 2xl:text-5xl font-semibold">Beam tokens between</h1>
        <img src="/metis_logo.png">
        <img class="-mt-[0.8rem]" src="/boba_logo.png">
        <img class="h-18 mt-2 lg:mt-0" src="/arrow.svg">
      </div>
    </a>

    <section class="bg-radial-grey-teal flex justify-center px-8 py-20 lg:py-20">
      <div class="flex flex-col w-[1400px]">
        <h1 class="text-4xl font-semibold mb-14">How does Beamer work?</h1>
        <div class="flex flex-col gap-8 lg:gap-20 lg:flex-row">
          <div class="flex w-full lg:w-[60%] justify-center lg:pt-6 lg:order-2">
            <img class="md:h-[40rem]" src="/diagram.png">
          </div>
          <div class="w-full lg:w-[50%] text-sea-green lg:order-1">
            <h2 class="text-2xl text-semibold text-peach my-8">For Users</h2>
            <div class="flex text-lg gap-2 my-2">
              <span class="text-peach">1a.</span>
              <span class="leading-8">The user initiates transaction by sending assets and service fees on the
                initial rollup.</span>
            </div>
            <div class="flex text-lg gap-2 my-2">
              <span class="text-peach">1b.</span>
              <span class="leading-8">The agent sends the same amount of assets to user on target rollup within
                seconds.</span>
            </div>
            <span class="text-lg text-sea-green">The user is now done - they can access and use the assets on
              the target
              rollup.</span>

            <h2 class="text-2xl text-semibold text-fire my-8">For Liquidity Providers</h2>
            <div class="flex text-lg leading-8 gap-2 my-2">
              <span class="text-fire">2a.</span>
              <span class="leading-8">The agent claims the assets and service fees on the initial rollup.</span>
            </div>
            <div class="flex text-lg gap-2 my-2">
              <span class="text-fire">2b.</span>
              <span class="leading-8">If no one challenges the claim, the agent can withdraw the assets and service
                fees. If another agent
                challenges the claim, the agents resolve the dispute using an escalation game.</span>
            </div>
            <span class="text-lg text-sea-green">As an alternative to the escalation game, an agent may submit a proof
              on
              Ethereum L1.</span>

            <div class="text-lg w-full lg:w-120 p-8 mt-14 flex items-start gap-4 bg-sea-green text-black rounded-4xl">
              <img class="w-7 mt-1" src="/info_icon.svg">
              <p class="text-lg">
                The current test version of Beamer only allows user functions.<br>
                The agent functions will be available to liquidity providers soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-mint flex justify-center p-8 text-center">
      <div class="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0 w-[1400px] lg:h-40">
        <img class="w-40" src="/community_icon.png">
        <p class="text-2xl lg:px-8 text-black font-semibold break-normal">Beamer is a community&#8209;driven
          and open&#8209;source&nbsp;project.
          <br>Voice your feedback, comments and questions.
        </p>
        <a class="py-2 lg:py-3 px-8 bg-peach drop-shadow-petite rounded-4xl text-center whitespace-nowrap"
          href="https://discord.gg/YWdStZkz9z" target="_blank">Join our Community</a>
      </div>
    </section>
  </div>
</template>
