# 4VIBES ✨🎧 — Neon Girlband Experience

> Uma landing page interativa inspirada em girlbands tipo **BLACKPINK**: neon, brilhos, partículas, player de música e uma vibe bem *4th gen K-pop*.

`4vibes-nuxt` é a versão moderna em **Nuxt 4 + Vue 3** de um site estático original em HTML/CSS/JS. O objetivo é transformar o projeto em uma experiência visual e musical completa, com **cursor customizado**, **particles de estrelas**, **player de música**, **seção das integrantes** e muito mais.

---

## 🌟 A Girlband 4Vibes

As 4Vibes são uma girlband fictícia com estética **neon / cyberpunk pop**:

- **Lucy** — A líder carismática, dona dos high notes e dos discursos emocionantes.
- **Hyuna** — A main dancer, rainha dos stages e dos detalhes coreográficos.
- **Paty** — A rapper com punchlines afiadas e presença forte.
- **Alice** — A vocal doce que quebra o coração da fanbase nas baladas.

O site foi pensado como uma **landing de comeback**: tudo gira em torno do álbum, do conceito visual e da experiência do fã.

---

## 🎨 Conceito Visual

O layout mistura:

- **Background em gradiente** com orbs brilhantes.
- **Partículas (estilo estrelas)** usando `particles.js`.
- **Cursor customizado** com efeito glow e animação suave.
- Paleta **rosa neon**, **roxo**, **ciano** e **preto absoluto**.

Nada minimalista: é para parecer poster de comeback mesmo. 🩷

---

## 🧩 Seções da Página

### 1. Hero (Intro)
- Frase de impacto, call to action e vibe de capa de álbum.
- Fundo animado com partículas e orbs.
- Botões chamando para conhecer a banda e ouvir o álbum.

### 2. Members (As Meninas)
- Cards individuais das integrantes: **Lucy**, **Hyuna**, **Paty**, **Alice**.
- Imagens em `/public/images/members/*.png`.
- Layout focado em não cortar o rosto (uso de `object-contain` e `object-top`).

### 3. Music (O Álbum)
- Capa do álbum em `/public/images/album/4thetop.png`.
- Texto sobre o conceito, faixa principal e clima do comeback.
- Botões para plataformas:
  - Spotify
  - Apple Music
  - Deezer
  - YouTube Music
- Integração com o **player de música fixo** no layout.

### 4. Gallery (Fotos & Moodboard)
- Grid com fotos temáticas em `/public/images/gallery/`.
- Efeitos de hover com zoom, transição e (em algumas) grayscale → color.

### 5. Subscribe (Newsletter / Club de Fãs)
- Formulário para `JOIN THE CLUB`.
- Estilo neon, chamando para a fanbase ficar por dentro dos próximos comebacks.

### 6. Footer
- Links rápidos de navegação.
- Ícones de rede social via **Font Awesome**.
- Créditos do projeto.

---

## 🧠 Funcionalidades Especiais

- **Particles de Estrelas**
  - Fundo animado usando `particles.js` carregado via CDN.
  - Configuração com cores neon e partículas em formato de círculo/estrela.

- **Cursor Customizado**
  - `cursor-dot` e `cursor-outline` seguindo o mouse.
  - Efeito de hover em links, botões, cards de membro e imagens da galeria.

- **Player de Música Global**
  - Componente `MusicPlayer.vue` fixo no layout.
  - Usa HTML5 `<audio>` com play/pause, volume e loop.
  - Botões de plataformas na seção Music podem acionar o player.

- **Animações ao Scroll**
  - Usando **AOS (Animate On Scroll)** para efeitos suaves nas seções (zoom, fade etc.).

---

## 🛠️ Stack & Tecnologias

- **Nuxt 4** (Vue 3, file-based routing, layouts)
- **Tailwind CSS** (estilização utilitária + classes customizadas em `app/assets/css/main.css`)
- **AOS** para animações ao rolar a página
- **particles.js** para o campo de estrelas em background
- **Font Awesome** (CDN) para ícones de redes sociais e players

Dependências principais (`package.json`):

- `nuxt`
- `vue`, `vue-router`
- `@nuxtjs/tailwindcss`
- `@nuxtjs/google-fonts`
- `aos`
- `@fortawesome/*` (core + brands + solid + vue)

---

## 📁 Estrutura do Projeto (resumida)

```text
4vibes-nuxt/
├── app/
│   ├── app.vue              # Entrada da app (NuxtLayout + NuxtPage)
│   ├── assets/
│   │   └── css/
│   │       └── main.css     # CSS global com tema neon/girlband
│   ├── layouts/
│   │   └── default.vue      # Layout principal com header, footer, player, cursor, partículas
│   ├── pages/
│   │   └── index.vue        # Landing principal (Hero, Members, Music, Gallery, Subscribe)
│   └── components/
│       ├── layout/
│       │   ├── Header.vue
│       │   ├── MobileMenu.vue
│       │   └── Footer.vue
│       ├── player/
│       │   └── MusicPlayer.vue
│       └── sections/
│           ├── Hero.vue
│           ├── Members.vue
│           ├── Music.vue
│           ├── Gallery.vue
│           └── Subscribe.vue
├── public/
│   └── images/
│       ├── members/         # Fotos da Lucy, Hyuna, Paty, Alice
│       ├── album/           # Capa do álbum (4thetop)
│       └── gallery/         # Fotos da galeria
├── nuxt.config.ts           # Config Nuxt, Tailwind, Google Fonts, Font Awesome, particles.js
└── package.json
```

---

## 🚀 Como Rodar o Projeto

### 1. Instalar dependências

Recomendado usar **pnpm**:

```bash
pnpm install
```

Se preferir:

```bash
npm install
yarn install
```

### 2. Subir o servidor de desenvolvimento

```bash
pnpm dev
```

O projeto ficará disponível em:

- `http://localhost:3000`

### 3. Build de Produção

```bash
pnpm build
pnpm preview
```

Isso gera a versão otimizada e permite pré-visualizar o resultado final.

---

## 📸 Screenshots (Sugestão)

Você pode adicionar prints reais do projeto aqui quando quiser:

- **Hero Section** — fundo com partículas + título + call to action
- **Members Section** — cards das integrantes
- **Music Section** — capa do álbum e botões das plataformas
- **Gallery** — grid de fotos com hover
- **Player** — barra fixa com o player de música

```md
![Hero da 4Vibes](./docs/screenshots/hero.png)
![Membros da 4Vibes](./docs/screenshots/members.png)
```

*(crie a pasta `docs/screenshots/` caso queira organizar os arquivos de imagem do README)*

---

## 👩‍🎤 Créditos e Inspirações

- Projeto baseado em um **index.html** original convertido para Nuxt 4.
- Inspiração estética em **BLACKPINK**, **K/DA** e visuais de comeback de girlbands.
- Desenvolvido com foco em:
  - Performance (Nuxt + SPA/SSR)
  - Experiência visual (CSS custom + Tailwind + animações)
  - Interatividade (cursor, player, partículas)

Se você curte **K-pop**, **girlbands** e **UI neon brilhando**, este projeto é para você. 🩷
