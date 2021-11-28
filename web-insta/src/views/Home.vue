<template>
  <b-container>
    <b-row>
      <b-col>
        <story></story>
        <post></post>
      </b-col>
      <b-col>
        <side-bar></side-bar>
      </b-col>
    </b-row>
  </b-container>
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