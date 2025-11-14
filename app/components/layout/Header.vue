<template>
  <nav class="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <a href="#" class="text-3xl font-display tracking-wider text-white hover:text-[#FF4D8D] transition-colors duration-300">
        4VIBES
      </a>
      <div class="hidden md:flex space-x-8">
        <a href="#members" class="font-tech text-sm tracking-[0.2em] hover:text-[#FF4D8D] transition-colors">MEMBERS</a>
        <a href="#music" class="font-tech text-sm tracking-[0.2em] hover:text-[#FF4D8D] transition-colors">MUSIC</a>
        <a href="#gallery" class="font-tech text-sm tracking-[0.2em] hover:text-[#FF4D8D] transition-colors">GALLERY</a>
        <a href="#subscribe" class="font-tech text-sm tracking-[0.2em] hover:text-[#FF4D8D] transition-colors">JOIN US</a>
      </div>
      <button class="md:hidden text-2xl text-white" id="menuToggle">
        <i class="fas fa-bars"></i>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
