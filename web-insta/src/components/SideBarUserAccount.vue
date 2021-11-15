<template>
  <div>
    <b-avatar variant="info" src="http://archivenew.vop.co.kr/images/90952a5d266e2222a78d4eb07938162f/2018-05/26023757_DeDeCbRVQAAhzEb.jpg" size="6rem"></b-avatar>
    <div>
      <p>MyNameIsYejung</p>
      <p>박예정</p>
    </div>
    <div class="ms-auto">
      <button @click="modalShow = !modalShow">전환</button>
      <b-modal v-model="modalShow">
        <b-list-group>
          <b-list-group-item>계정전환</b-list-group-item>
        </b-list-group>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SideBarUserAccount',
  data() {
      return {
        modalShow: false
      }
    }
  
}
</script>

<style>

</style>