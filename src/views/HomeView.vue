<template>
  <v-container>
    <v-row>
      <v-col>
        <p>Test placeholder, currently running on {{ env }}</p>
      </v-col>
    </v-row>
    <v-row v-for="post in posts" :key="post.id">
      <v-col>
        <v-card>
          <template v-slot:subtitle>
            <v-row>
              <v-col cols="2">{{ post.location }}</v-col>
              <v-col>{{ post.date }}</v-col>
              <v-spacer></v-spacer>
            </v-row>
          </template>
          <template v-slot:prepend>
            <v-avatar>
              <v-img :src="imageSource"></v-img>
            </v-avatar>
          </template>
          <v-card-text>{{ post.content }}</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn size="small" color="red" variant="text" icon="mdi-heart"></v-btn>
            <v-btn size="small" variant="text" icon="mdi-pencil"></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
const posts = [
  {
    id: '1',
    location: 'Waterloo',
    date: '2024-07-07',
    content: 'Hello world',
    liked: 'true'
  }
]
const imageSource = ''
const env = import.meta.env.VITE_APP_Title
</script>
