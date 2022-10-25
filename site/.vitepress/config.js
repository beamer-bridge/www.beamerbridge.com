export default {
  title: 'Explore Rollups Effortlessly',
  titleTemplate: 'Beamer Bridge',
  description:
    'Beam your ERC20 assets between EVM compatible rollups with certainty, speed and security',
  lang: 'en',
  head: [
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Explore Rollups Effortlessly | Beamer Bridge' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Beam your ERC20 assets between EVM compatible rollups with certainty, speed and security.',
      },
    ],
    ['meta', { property: 'og:image', content: 'https://beamerbridge.com/twitter-card.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Explore Rollups Effortlessly | Beamer Bridge' }],
    [
      'meta',
      {
        name: 'twitter:description',
        content:
          'Beam your ERC20 assets between EVM compatible rollups with certainty, speed and security.',
      },
    ],
    ['meta', { name: 'twitter:image', content: 'https://beamerbridge.com/twitter-card.png' }],
    // Matomo tracking
    [
      'script',
      { type: 'text/javascript' },
      `
        var _paq = window._paq = window._paq || [];
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(["setCookieDomain", "*.beamerbridge.com"]);
        _paq.push(['trackPageView']);
        _paq.push(['enableLinkTracking']);
        (function() {
          var u="https://beamerbridge.matomo.cloud/";
          _paq.push(['setTrackerUrl', u+'matomo.php']);
          _paq.push(['setSiteId', '1']);
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src='//cdn.matomo.cloud/beamerbridge.matomo.cloud/matomo.js'; s.parentNode.insertBefore(g,s);
        })();
    `,
    ],
  ],
  markdown: {
    anchor: {
      permalink: false,
    },
  },
};
