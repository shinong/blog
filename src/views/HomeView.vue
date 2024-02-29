<script setup lang="ts"></script>

<template>
  <v-container>
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

<script lang="ts">
import image from '@/images/zhiyue.jpg'
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      imageSource: image,
      posts: [
        {
          id: '1',
          location: 'Huludao',
          date: '2024-02-10',
          content: 'This is the first day I meet with Shinong',
          liked: 'true'
        },
        {
          id: '2',
          location: 'Huludao',
          date: '2024-02-11',
          content: 'Today I had a dinner with Shinong and we went to a movie together.',
          liked: 'false'
        },
        {
          id: '3',
          location: 'Huludao',
          date: '2024-02-12',
          content:
            'I went to the old town of Xincheng and the Xincheng Beach, we had lots of nice photoes and memories!',
          liked: 'false'
        },
        {
          id: '4',
          location: 'Huludao',
          date: '2024-02-14',
          content: 'Aaaaaaaa, I got rose flowrs and presents from Shinong. What should I do!',
          liked: 'true'
        },
        {
          id: '5',
          location: 'Huludao',
          date: '2024-02-15',
          content: 'Wow, we saw the fireworks together. Really enjoy the show tonight',
          liked: 'true'
        },
        {
          id: '6',
          location: 'Nanjing',
          date: '2024-02-17',
          content: 'So sad, I have to go back to work......',
          liked: 'false'
        }
      ]
    }
  }
})
</script>
