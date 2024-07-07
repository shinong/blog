<script setup lang="ts">
import WebHeaderAndMenu from '@/components/WebHeaderAndMenu.vue'
</script>
<template>
  <v-layout>
    <WebHeaderAndMenu></WebHeaderAndMenu>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>
