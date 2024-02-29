<template>
  <div>
    result is
    {{ res }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      res: null
    }
  },
  created() {
    // this.fetchRes()
    this.res = this.$route.params.postid
  },
  methods: {
    // fetchRes() {
    //   //@ts-ignore
    //   this.$api.site
    //     .serverStatus()
    //     .then((response: any) => {
    //       this.res = response
    //       console.log(this.res)
    //     })
    //     .catch((error: any) => {
    //       console.log(error)
    //     })
    // }
  }
})
</script>
