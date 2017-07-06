<template>
  <div>
    <h2></h2>
    <ul v-for="store in bookstore" class="bookStoreList">
      <router-link :to="{name:'detail', params:{id: store.id}}" tag="li">
      <div class="bookStorePhoto">
          <img :src="store.thumbnail" alt="책방 사진">
      </div>
      <p class="namePosition">{{ store.shopname }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  firebase: {
    bookstore: bookstoreRef
  },
  data: function data() {
    return {

    }
  }
}
</script>

<style>

</style>
