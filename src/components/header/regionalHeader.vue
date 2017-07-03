<template>
  <header class="header">
    <h1 class="mainTitle">작은 책방</h1>
    <router-link :to="{name:'home'}" tag="a">
      <img class="mapIcon" src="../../assets/shop.png" alt="위치로 책방 찾기">
    </router-link>
  </header>
</template>

<script>
export default {
  data: function data () {
    return {

    };
  }
};
</script>

<style lang="scss">

</style>
