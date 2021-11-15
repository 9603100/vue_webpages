<template>
  <div>
    <side-bar-user-account></side-bar-user-account>
    <side-bar-recommend></side-bar-recommend>
  </div>
</template>

<script>
import SideBarUserAccount from '@/components/SideBarUserAccount'
import SideBarRecommend from '@/components/SideBarRecommend'

export default {
  name: 'SideBar',
  components: {
    SideBarUserAccount,
    SideBarRecommend,
  }
}
</script>

<style>

</style>