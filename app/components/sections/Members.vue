<template>
  <section id="members" class="py-24 bg-black relative">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-end mb-16">
        <h2 class="font-display text-6xl md:text-8xl text-white uppercase leading-none" data-aos="fade-right">
          The<br><span class="text-[#FF4D8D]">Girls</span>
        </h2>
        <p
          class="font-tech text-sm md:text-right max-w-xs text-gray-400 mt-6 md:mt-0"
          data-aos="fade-left"
        >
          Meet the new generation of global pop. Four distinct vibes, one unstoppable force.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <!-- Member 1 -->
        <div
          class="member-card group relative h-[600px] overflow-hidden cursor-pointer"
          data-aos="fade-up"
        >
          <img
            src="/images/members/lucy.png"
            alt="Lucy"
            class="w-full h-full object-contain object-top"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div class="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 class="font-display text-5xl uppercase mb-1 group-hover:text-[#FF4D8D] transition-colors">
              Lucy
            </h3>
            <p
              class="font-tech text-xs tracking-[0.2em] text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
            >
              MAIN VOCAL
            </p>
          </div>
        </div>

        <!-- Member 2 -->
        <div
          class="member-card group relative h-[600px] overflow-hidden cursor-pointer"
          data-aos="fade-up"
        >
          <img
            src="/images/members/hyuna.png"
            alt="Hyuna"
            class="w-full h-full object-contain object-top"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div class="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 class="font-display text-5xl uppercase mb-1 group-hover:text-[#FF4D8D] transition-colors">
              Hyuna
            </h3>
            <p
              class="font-tech text-xs tracking-[0.2em] text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
            >
              MAIN RAPPER
            </p>
          </div>
        </div>

        <!-- Member 3 -->
        <div
          class="member-card group relative h-[600px] overflow-hidden cursor-pointer"
          data-aos="fade-up"
        >
          <img
            src="/images/members/paty.png"
            alt="Paty"
            class="w-full h-full object-contain object-top"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div class="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 class="font-display text-5xl uppercase mb-1 group-hover:text-[#FF4D8D] transition-colors">
              Paty
            </h3>
            <p
              class="font-tech text-xs tracking-[0.2em] text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
            >
              MAIN DANCER
            </p>
          </div>
        </div>

        <!-- Member 4 -->
        <div
          class="member-card group relative h-[600px] overflow-hidden cursor-pointer"
          data-aos="fade-up"
        >
          <img
            src="/images/members/alice.png"
            alt="Alice"
            class="w-full h-full object-contain object-top"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
          <div class="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <h3 class="font-display text-5xl uppercase mb-1 group-hover:text-[#FF4D8D] transition-colors">
              Alice
            </h3>
            <p
              class="font-tech text-xs tracking-[0.2em] text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100"
            >
              LEAD VOCAL
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
