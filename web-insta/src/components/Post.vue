<template>
  <div>
    <post-nav></post-nav>
    <post-image></post-image>
  </div>
</template>

<script>
import PostImage from '@/components/PostImage'
import PostNav from '@/components/PostNav'

export default {
  name: 'Post',
  components: {
    PostImage,
    PostNav,
  }
}

</script>


<style>

</style>