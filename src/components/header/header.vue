<template>
  <header class="header">
    <router-link :to="{ name: 'home' }" tag="h1" class="mainTitle">작은 책방</router-link>
    <router-link :to="{name:'region'}" tag="a">
      <img class="mapIcon" src="../../assets/mapIcon.png" alt="위치로 책방 찾기">
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
.mainTitle{
  color: white;
  margin: 0;
  cursor: pointer;
  @media screen and (max-width: 480px){
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 50px;
  }
  @media screen and (min-width: 480px){
    font-weight: 500;
    font-size: 2.3rem;
  }
}
.mapIcon{
  width: 50px;
  height: 50px;
  @media screen and (min-width: 480px){
    position: relative;
    top: -10px;
  }
}
.header{
  background: #ffba41;
  display: flex;
  @media screen and (max-width: 480px){
    padding: 0 10px;
    justify-content: space-between;
  }
  @media screen and (min-width: 480px){
    padding: 1.5rem 0;
    flex-direction: column;
    align-items: center;
  }
}
</style>
