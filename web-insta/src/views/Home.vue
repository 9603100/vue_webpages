<template>
  <div>
    <story></story>
    <recommend></recommend>
    <post></post>
  </div>
</template>

<script>
import Recommend from '@/components/Recommend'
import Post from '@/components/Post'
import Story from '@/components/Story'

export default {
  name: 'Home',
  components : {
    Recommend,
    Post,
    Story,
  }
}
</script>

<style>

</style>