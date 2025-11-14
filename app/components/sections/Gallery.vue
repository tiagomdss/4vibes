<template>
  <section id="gallery" class="py-24 bg-black">
    <div class="container mx-auto px-6">
      <div class="flex justify-between items-end mb-12">
        <h2 class="font-display text-5xl md:text-6xl" data-aos="fade-right">VISUALS</h2>
        <a
          href="#"
          class="font-tech text-xs tracking-widest underline decoration-[#FF4D8D] underline-offset-4"
          data-aos="fade-left"
        >
          VIEW ALL
        </a>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 auto-rows-[200px] md:auto-rows-[300px]">
        <div
          class="col-span-2 row-span-2 relative group overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <img
            src="/images/gallery/4.jpg"
            alt="Gallery 1"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 gallery-img cursor-pointer"
          >
        </div>

        <div
          class="relative group overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src="/images/gallery/2.jpg"
            alt="Gallery 2"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 gallery-img cursor-pointer"
          >
        </div>

        <div
          class="relative group overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <img
            src="/images/gallery/3.jpg"
            alt="Gallery 3"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 gallery-img cursor-pointer"
          >
        </div>

        <div
          class="col-span-2 relative group overflow-hidden"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          <img
            src="/images/gallery/1.jpg"
            alt="Gallery 4"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 gallery-img cursor-pointer"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
