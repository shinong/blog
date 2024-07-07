<template>
  <h1>test page</h1>
  <video id="localVideo" autoplay playsinline controls="false" />
</template>

import type { createHydrationRenderer } from 'vue';
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {}
  },
  created() {
    this.playVideoFromCamera()
  },
  methods: {
    async playVideoFromCamera() {
      try {
        const constraints = { video: true, audio: true }
        const stream = await navigator.mediaDevices.getUserMedia(constraints)
        const videoElement = document.querySelector('video#localVideo')
        // @ts-ignore
        videoElement.srcObject = stream
      } catch (error) {
        console.error('Error opening video camera.', error)
      }
    }
  }
})
</script>
