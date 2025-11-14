<template>
  <section id="home" class="relative h-screen flex items-center justify-center overflow-hidden">
    <!-- Background with overlay -->
    <div class="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=2574&auto=format&fit=crop"
        alt="Background"
        class="w-full h-full object-cover opacity-40"
      >
      <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80"></div>
    </div>

    <div class="relative z-10 text-center flex flex-col items-center w-full px-4">
      <p
        class="font-tech text-[#FF4D8D] tracking-[0.5em] text-sm md:text-base mb-4 animate-pulse"
        data-aos="fade-down"
      >
        OFFICIAL DEBUT
      </p>

      <h1
        class="font-display text-[15vw] leading-[0.8] uppercase tracking-tighter mix-blend-screen glitch-wrapper reveal-text"
        data-text="4 THE WIN"
      >
        4 THE WIN
      </h1>

      <div
        class="mt-8 flex flex-col md:flex-row items-center gap-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <a href="#music" class="group relative px-8 py-4 bg-transparent border border-white overflow-hidden">
          <span
            class="absolute inset-0 w-full h-full bg-white/0 group-hover:bg-white/10 transition-all duration-300 transform skew-x-12 origin-left"
          ></span>
          <span class="font-tech font-bold tracking-widest text-sm">LISTEN NOW</span>
        </a>
        <a
          href="https://www.youtube.com"
          target="_blank"
          class="flex items-center gap-2 font-tech text-sm tracking-widest text-[#FF4D8D] hover:text-white transition-colors"
        >
          <i class="fab fa-youtube text-xl"></i> WATCH MV
        </a>
      </div>
    </div>

    <!-- Decorative Elements -->
    <div class="absolute bottom-10 left-10 hidden md:block">
      <div class="w-px h-24 bg-white/30 mx-auto mb-4"></div>
      <p
        class="writing-vertical font-tech text-xs tracking-widest text-white/50 rotate-180"
        style="writing-mode: vertical-rl;"
      >
        SCROLL DOWN
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
