<template>
  <div>
    <div class="mb-4">
      <a href="">
        <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar>
      </a>
    </div>
    
    <a href="">meongdi_</a>

    <div>

      <button @click="modalShow = !modalShow">...</button>

      <b-modal v-model="modalShow">
        <b-list-group>
          <b-list-group-item>신고</b-list-group-item>
          <b-list-group-item>팔로우 취소</b-list-group-item>
          <b-list-group-item>게시물로 이동</b-list-group-item>
          <b-list-group-item>공유 대상...</b-list-group-item>
          <b-list-group-item>링크 복사</b-list-group-item>
          <b-list-group-item>퍼가기</b-list-group-item>
          <b-list-group-item>취소</b-list-group-item>
        </b-list-group>
      </b-modal>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostNav',
  data() {
      return {
        modalShow: false
      }
    }
  
}
</script>

<style>

</style>