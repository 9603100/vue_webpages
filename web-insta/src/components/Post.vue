<template>
  <div>
    <div v-for="item in items" :key="item.id">
      {{ item }}
    </div>
    <post-nav></post-nav>
    <post-image></post-image>
    <post-response></post-response>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostImage from '@/components/PostImage'
import PostNav from '@/components/PostNav'
import PostResponse from '@/components/PostResponse'

export default {
  name: 'Post',
  components: {
    PostImage,
    PostNav,
    PostResponse,
  },
  computed: {
    ...mapState(['items'])
  }
}

</script>


<style>

</style>