<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useHead } from 'nuxt/app'

useHead({
  script: [
    {
      src: '/js/animation.js',
      type: 'text/javascript',
      defer: true
    },
    {
      src: '/js/templatemo-custom.js',
      type: 'text/javascript',
      defer: true
    },
    {
      src: '/js/imagesloaded.js',
      type: 'text/javascript',
      defer: true
    },
    {
      src: '/js/owl-carousel.js',
      type: 'text/javascript',
      defer: true
    },
  ]
})
</script>