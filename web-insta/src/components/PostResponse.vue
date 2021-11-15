<template>
  <div>
    <post-response-like></post-response-like>
    <div>
      <p>user_id</p>
      <p>내용</p>
    </div>
    <post-response-comment></post-response-comment>
  </div>
</template>

<script>
import PostResponseLike from '@/components/PostResponseLike'
import PostResponseComment from '@/components/PostResponseComment'

export default {
  name: 'PostResponse',
  components: {
    PostResponseLike,
    PostResponseComment,
  }
}
</script>

<style>

</style>