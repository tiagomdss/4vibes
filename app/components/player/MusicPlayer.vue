<template>
  <div class="player" id="player">
    <div/>
    <!-- Top bar com botão de fechar -->
    <div class="flex justify-end mb-1">
      <button
        id="closePlayerBtn"
        class="text-lg opacity-80 hover:opacity-100 transition-opacity"
        aria-label="Close player"
      >
        <i class="fas fa-times"></i>
      </button>
    </div>
<div/>
    <div class="flex flex-row justify-between gap-4 ">
      <!-- Coluna 1: capa + título -->
      <div class="flex items-center gap-3 min-w-[140px]">
        <img
          src="/images/album/4thetop.png"
          alt="Album"
          class="w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg"
        >
        <div>
          <div class="font-display text-lg">4 THE WIN</div>
          <div class="font-tech text-sm text-gray-400">4VIBES</div>
        </div>
      </div>

      <!-- Coluna 2: controles -->
      <div class="flex items-center justify-center gap-6 md:gap-8 flex-shrink-0">
        <button class="text-xl" id="prevBtn" aria-label="Previous">
          <i class="fas fa-step-backward"></i>
        </button>
        <button
          class="w-12 h-12 rounded-full bg-[#FF4D8D] flex items-center justify-center"
          id="playPauseBtn"
          aria-label="Play/Pause"
        >
          <i class="fas fa-play"></i>
        </button>
        <button class="text-xl" id="nextBtn" aria-label="Next">
          <i class="fas fa-step-forward"></i>
        </button>

      </div>
      <!-- Coluna 3: volume -->
      <div class="flex items-center gap-2 justify-end min-w-[120px]">
        <i class="fas fa-volume-up"></i>
        <input
          id="volumeRange"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value="0.5"
          class="w-32 md:w-40 accent-[#FF4D8D]"
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

const audioPlayer = ref<HTMLAudioElement | null>(null)
const isPlaying = ref(false)

onMounted(() => {
  if (typeof window === 'undefined') return

  // Cria o áudio escondido
  const audio = document.createElement('audio')
  // Arquivo local servido a partir de public/music
  audio.src = '/music/4-the-win.mp3'
  audio.loop = true
  audio.volume = 0.5
  audioPlayer.value = audio
  document.body.appendChild(audio)

  const playerEl = document.getElementById('player')
  const playPauseBtn = document.getElementById('playPauseBtn')
  const playIcon = playPauseBtn?.querySelector('i') || null
  const volumeRange = document.getElementById('volumeRange') as HTMLInputElement | null
  const previewBtn = document.getElementById('previewTrack')
  const closePlayerBtn = document.getElementById('closePlayerBtn')
  const updateIcon = () => {
    if (!playIcon) return
    playIcon.classList.remove('fa-play', 'fa-pause')
    playIcon.classList.add(isPlaying.value ? 'fa-pause' : 'fa-play')
  }

  const play = () => {
    if (!audioPlayer.value || !playerEl) return
    audioPlayer.value.play()
    isPlaying.value = true
    playerEl.classList.add('active')
    updateIcon()
  }

  const pause = () => {
    if (!audioPlayer.value) return
    audioPlayer.value.pause()
    isPlaying.value = false
    updateIcon()
  }

  const closePlayer = () => {
    if (!playerEl) return
    pause()
    playerEl.classList.remove('active')
  }

  const togglePlay = () => {
    if (isPlaying.value) pause()
    else play()
  }

  playPauseBtn?.addEventListener('click', togglePlay)

  if (previewBtn) {
    previewBtn.addEventListener('click', play)
  }

  if (closePlayerBtn) {
    closePlayerBtn.addEventListener('click', closePlayer)
  }

  if (volumeRange && audioPlayer.value) {
    audioPlayer.value.volume = parseFloat(volumeRange.value || '0.5')
    volumeRange.addEventListener('input', () => {
      if (!audioPlayer.value) return
      audioPlayer.value.volume = parseFloat(volumeRange.value || '0.5')
    })
  }

  const handleKeydown = (e: KeyboardEvent) => {
    const tag = (document.activeElement?.tagName || '').toLowerCase()
    if (tag === 'input' || tag === 'textarea') return
    if (e.code === 'Space') {
      e.preventDefault()
      togglePlay()
    }
  }

  window.addEventListener('keydown', handleKeydown)

  onBeforeUnmount(() => {
    playPauseBtn?.removeEventListener('click', togglePlay)
    if (previewBtn) {
      previewBtn.removeEventListener('click', play)
    }
     if (closePlayerBtn) {
       closePlayerBtn.removeEventListener('click', closePlayer)
     }
    window.removeEventListener('keydown', handleKeydown)
    if (audioPlayer.value) {
      audioPlayer.value.pause()
      audioPlayer.value.remove()
      audioPlayer.value = null
    }
  })
})
</script>

<style scoped>
</style>
