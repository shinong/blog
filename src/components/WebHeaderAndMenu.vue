<script lang="ts" setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  if (theme.global.current.value.dark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

import { ref } from 'vue'
let showMenu = ref(false)
</script>

<template>
  <v-app-bar color="primary" @click.stop="showMenu = !showMenu">
    <!-- <v-navigation-bar-icon variant="text"></v-navigation-bar-icon> -->
    <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template>
    <v-toolbar-title>Blogs</v-toolbar-title>
    <template v-slot:append>
      <v-btn icon="mdi-theme-light-dark" @click="toggleTheme"></v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer color="primary" dense v-model="showMenu">
    <v-list color="transparent">
      <v-list-item prepend-icon="mdi-pencil" title="MainPage" value="mainpage" to="/"></v-list-item>
      <v-list-item prepend-icon="mdi-account-box" title="Account" value="account"></v-list-item>
      <v-list-item prepend-icon="mdi-gavel" title="Admin" value="admin"></v-list-item>
      <v-list-item
        prepend-icon="mdi-video-box"
        title="Media"
        value="media"
        to="/media"
      ></v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>
