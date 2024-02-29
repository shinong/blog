import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import editPost from '@/pages/post/editPost.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/postedit/:postid',
      name: 'post',
      component: editPost
    }
  ]
})

export default router
