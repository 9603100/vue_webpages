<template>
  <div class="my-4 story-box">
    <story-items></story-items>
  </div>
</template>

<script>
import StoryItems from '@/components/StoryItems'

export default {
  name: 'Story',
  components: {
    StoryItems,
  }
}
</script>

<style>
.story-box{
  background-color: white;
  border: 1px solid #dcdcdc;
  padding: 15px;
}
</style>