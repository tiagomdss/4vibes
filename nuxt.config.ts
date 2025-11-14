export default defineNuxtConfig({
  // Ativa o diretório app/
  // (Em versões mais recentes do Nuxt, isso é automático se a pasta 'app' existir)
  // dir: {
  //   app: 'app',
  // },

  // Módulos que vamos usar
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],

  // CSS Global (importa nosso arquivo de CSS customizado)
  css: [
    '@/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css' // Importa o CSS do Font Awesome
  ],

  // Head global (CDN do Font Awesome para ícones <i class="fa ...">)
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
        },
      ],
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js',
          defer: true,
        },
      ],
    },
  },

  // Configuração do Google Fonts
  googleFonts: {
    families: {
      Anton: true,
      Montserrat: {
        wght: [300, 400, 500, 600, 700, 800, 900]
      },
      Syncopate: {
        wght: [400, 700]
      }
    },
    display: 'swap', // Melhora a performance de carregamento da fonte
  },

  // Diretórios de componentes (auto-import)
  components: [
    {
      path: '~/app/components',
      pathPrefix: false,
    },
  ],

  // Configurações de build
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@tsparticles/vue3'
    ],
  },

  // Desativa o Server-Side Rendering (SSR) para este exemplo
  // Seu site parece ser principalmente visual e pode se beneficiar do SSR,
  // mas para uma migração inicial simples e para garantir que bibliotecas
  // como particles e AOS funcionem sem erros de "window is not defined",
  // podemos começar com SSR desativado.
  // Remova ou comente a linha abaixo para (re)ativar o SSR.
  ssr: false,

  devtools: { enabled: true }
})