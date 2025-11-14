<template>
  <div>
    <!-- Gradient Background -->
    <div class="gradient-bg"></div>

    <!-- Floating Orbs -->
    <div class="floating-orb orb-1"></div>
    <div class="floating-orb orb-2"></div>
    <div class="floating-orb orb-3"></div>

    <!-- Particles Background -->
    <div id="particles-js"></div>

    <!-- Custom Cursor -->
    <div class="cursor-dot hidden md:block"></div>
    <div class="cursor-outline hidden md:block"></div>

    <Header />
    <MobileMenu />
    <main>
      <slot />
    </main>
    <MusicPlayer />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import Header from '@/components/layout/Header.vue'
import MobileMenu from '@/components/layout/MobileMenu.vue'
import MusicPlayer from '@/components/player/MusicPlayer.vue'
import Footer from '@/components/layout/Footer.vue'

onMounted(() => {
  if (typeof window === 'undefined') return

  const cursorDot = document.querySelector<HTMLElement>('.cursor-dot')
  const cursorOutline = document.querySelector<HTMLElement>('.cursor-outline')

  const handleMouseMove = (e: MouseEvent) => {
    const posX = e.clientX
    const posY = e.clientY

    cursorDot.style.left = `${posX}px`
    cursorDot.style.top = `${posY}px`

    cursorOutline.animate(
      { left: `${posX}px`, top: `${posY}px` },
      { duration: 500, fill: 'forwards' },
    )
  }

  const handleHoverIn = () => cursorOutline.classList.add('hover')
  const handleHoverOut = () => cursorOutline.classList.remove('hover')

  if (cursorDot && cursorOutline) {
    window.addEventListener('mousemove', handleMouseMove)
  }

  const hoverTargets = document.querySelectorAll<HTMLElement>(
    'a, button, .member-card, .gallery-img',
  )

  hoverTargets.forEach((el) => {
    el.addEventListener('mouseenter', handleHoverIn)
    el.addEventListener('mouseleave', handleHoverOut)
  })

  // Menu mobile
  const menuToggle = document.getElementById('menuToggle')
  const mobileMenu = document.getElementById('mobileMenu')
  const closeMenu = document.getElementById('closeMenu')

  const openMobileMenu = () => {
    if (!mobileMenu) return
    mobileMenu.classList.add('active')
  }

  const closeMobileMenu = () => {
    if (!mobileMenu) return
    mobileMenu.classList.remove('active')
  }

  menuToggle?.addEventListener('click', openMobileMenu)
  closeMenu?.addEventListener('click', closeMobileMenu)

  // Fechar o menu ao clicar em qualquer link dentro dele
  if (mobileMenu) {
    const mobileLinks = mobileMenu.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    mobileLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu)
    })
  }

  // Inicializa particles.js (se disponível no window)
  const particlesAny = (window as any)
  if (particlesAny && typeof particlesAny.particlesJS !== 'undefined') {
    particlesAny.particlesJS('particles-js', {
      particles: {
        number: { value: 200, density: { enable: true, value_area: 1000 } },
        color: { value: ['#ffffff', '#FF4D8D', '#8B5CF6', '#06B6D4', '#FFD700'] },
        shape: {
          type: ['circle', 'star'],
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 5 },
        },
        opacity: {
          value: 0.8,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
        },
        size: {
          value: 2,
          random: true,
          anim: { enable: true, speed: 3, size_min: 0.1, sync: false },
        },
        line_linked: { enable: false },
        move: {
          enable: true,
          speed: 0.5,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: false },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'bubble' },
          onclick: { enable: true, mode: 'repulse' },
          resize: true,
        },
        modes: {
          bubble: { distance: 200, size: 6, duration: 2, opacity: 1, speed: 3 },
          repulse: { distance: 150, duration: 0.4 },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    })
  }

  onBeforeUnmount(() => {
    if (cursorDot && cursorOutline) {
      window.removeEventListener('mousemove', handleMouseMove)
    }

    hoverTargets.forEach((el) => {
      el.removeEventListener('mouseenter', handleHoverIn)
      el.removeEventListener('mouseleave', handleHoverOut)
    })

    menuToggle?.removeEventListener('click', openMobileMenu)
    closeMenu?.removeEventListener('click', closeMobileMenu)

    if (mobileMenu) {
      const mobileLinks = mobileMenu.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
      mobileLinks.forEach((link) => {
        link.removeEventListener('click', closeMobileMenu)
      })
    }
  })
})
</script>

<style scoped>
</style>
