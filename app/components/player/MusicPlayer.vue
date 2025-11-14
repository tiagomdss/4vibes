<template>
  <div class="player" id="player">
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div class="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=1000&auto=format&fit=crop"
          alt="Album"
          class="w-16 h-16 object-cover"
        >
        <div>
          <div class="font-display text-lg">4 THE WIN</div>
          <div class="font-tech text-sm text-gray-400">4VIBES</div>
        </div>
      </div>

      <div class="flex items-center gap-6">
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

      <div class="flex items-center gap-3 w-full md:w-auto">
        <i class="fas fa-volume-up"></i>
        <input
          id="volumeRange"
          type="range"
          min="0"
          max="1"
          step="0.01"
          value="0.5"
          class="w-40 accent-[#FF4D8D]"
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
  audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
  audio.loop = true
  audio.volume = 0.5
  audioPlayer.value = audio
  document.body.appendChild(audio)

  const playerEl = document.getElementById('player')
  const playPauseBtn = document.getElementById('playPauseBtn')
  const playIcon = playPauseBtn?.querySelector('i') || null
  const volumeRange = document.getElementById('volumeRange') as HTMLInputElement | null

  const platformButtonsIds = ['playSpotify', 'playApple', 'playDeezer', 'playYoutubeMusic']
  const platformButtons = platformButtonsIds
    .map((id) => document.getElementById(id))
    .filter((btn): btn is HTMLElement => !!btn)

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

  const togglePlay = () => {
    if (isPlaying.value) pause()
    else play()
  }

  playPauseBtn?.addEventListener('click', togglePlay)

  platformButtons.forEach((btn) => {
    btn.addEventListener('click', play)
  })

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
    platformButtons.forEach((btn) => btn.removeEventListener('click', play))
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
