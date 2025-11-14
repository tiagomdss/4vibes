<template>
  <section id="music" class="py-24 bg-[#0a0a0a] border-y border-white/5">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Album Art -->
        <div class="w-full lg:w-1/2 flex justify-center relative" data-aos="fade-right">
          <div class="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px]">
            <!-- Spinning Record Effect -->
            <div class="absolute inset-0 rounded-full border border-white/10 animate-[spin_10s_linear_infinite]"></div>
            <div class="absolute inset-4 rounded-full border border-white/5 animate-[spin_15s_linear_infinite_reverse]"></div>

            <img
            src="/images/album/4thetop.png"
              alt="Album Art"
              class="absolute inset-0 w-full h-full object-cover rounded-full shadow-[0_0_100px_rgba(255,77,141,0.3)] p-10 transition-all duration-700"
            >

            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-4 h-4 bg-black rounded-full border border-white/30 z-10"></div>
            </div>
          </div>
        </div>

        <!-- Info -->
        <div class="w-full lg:w-1/2 text-center lg:text-left" data-aos="fade-left">
          <span class="inline-block py-1 px-3 border border-[#FF4D8D] text-[#FF4D8D] font-tech text-xs tracking-widest mb-6">
            SINGLE RELEASE
          </span>

          <h2 class="font-display text-7xl md:text-9xl uppercase leading-none mb-2">
            4 THE<br><span class="text-stroke-pink hover:text-[#FF4D8D] transition-colors duration-500">WIN</span>
          </h2>

          <div class="space-y-6 mb-10">
            <p class="text-gray-400 max-w-md mx-auto lg:mx-0 leading-relaxed">
              The debut single that defines a generation. High-energy beats meets unapologetic attitude. This is not just music, it's a movement.
            </p>

            <div class="flex flex-wrap justify-center lg:justify-start gap-4 mt-4">
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 bg-[#1DB954] text-black font-bold py-3 px-6 hover:scale-105 transition-transform"
              >
                <i class="fab fa-spotify text-2xl"></i> SPOTIFY
              </a>

              <a
                href="https://music.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 bg-white text-black font-bold py-3 px-6 hover:scale-105 transition-transform"
              >
                <i class="fab fa-apple text-2xl"></i> APPLE MUSIC
              </a>

              <a
                href="https://www.deezer.com"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 bg-[#0f172a] text-white font-bold py-3 px-6 hover:scale-105 transition-transform"
              >
                <i class="fab fa-deezer text-2xl"></i> DEEZER
              </a>

              <a
                href="https://music.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 bg-[#ff0000] text-white font-bold py-3 px-6 hover:scale-105 transition-transform"
              >
                <i class="fab fa-youtube text-2xl"></i> YOUTUBE MUSIC
              </a>

              <button
                id="previewTrack"
                class="flex items-center gap-3 bg-[#FF4D8D] text-black font-bold py-3 px-6 hover:scale-105 transition-transform"
              >
                <i class="fas fa-play text-2xl"></i>
                <span class="flex items-center gap-2">
                  PREVIEW
                </span>
              </button>
            </div>
          </div>

          <div class="border-t border-white/10 pt-8 mt-12">
            <h3 class="font-tech text-sm tracking-[0.3em] mb-4 text-gray-500">UPCOMING ALBUM</h3>
            <div class="flex items-end justify-between">
              <span class="font-display text-4xl md:text-5xl">4 THE TOP</span>
              <span class="font-tech text-[#FF4D8D] animate-pulse">COMING SOON</span>
            </div>
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
