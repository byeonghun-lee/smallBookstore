<template>
  <div>
    <h2></h2>
    <ul v-for="store in regionFilter" class="listWrap">
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
      regionName: this.$route.params.regionName,
      regionFilter: this.regionFilter
    }
  },
  mounted: function mounted() {
    var regionFilter;
    regionFilter = this.bookstore;
    for (var i = 0; i < regionFilter.length; i++) {
      // console.log(regionFilter[i].address);
      var regionName = this.$route.params.regionName;
      // console.log('regionName:', regionName);
      var whereRegion = regionFilter[i].address.substring(0, 2);
      // console.log('whereRegion:', whereRegion);
      if (whereRegion === regionName) {
        console.log("서울지역: ", regionFilter[i]);
        this.regionFilter = regionFilter[i];
        console.log("this.regionFilter :", this.regionFilter);
      }
    }
  }
}
</script>

<style>

</style>
