<template>
  <div>
    <post-nav></post-nav>
    <post-image></post-image>
    <post-response></post-response>
  </div>
</template>

<script>
import PostImage from '@/components/PostImage'
import PostNav from '@/components/PostNav'
import PostResponse from '@/components/PostResponse'

export default {
  name: 'Post',
  components: {
    PostImage,
    PostNav,
    PostResponse,
  }
}

</script>


<style>

</style>