<template>
  <div>
    <story></story>
    <side-bar></side-bar>
    <post></post>
  </div>
</template>

<script>
import SideBar from '@/components/SideBar'
import Post from '@/components/Post'
import Story from '@/components/Story'

export default {
  name: 'Home',
  components : {
    SideBar,
    Post,
    Story,
  }
}
</script>

<style>

</style>