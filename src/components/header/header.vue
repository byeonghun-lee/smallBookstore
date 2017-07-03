<template>
  <header class="header">
    <h1 class="mainTitle">작은 책방</h1>
    <a href="#"><img class="mapIcon" src="../../assets/mapIcon.png" alt="위치로 책방 찾기"></a>
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
  font-weight: 700;
  @media screen and (max-width: 480px){
    font-size: 1.6rem;
    line-height: 50px;
  }
}
.mapIcon{
  @media screen and (max-width: 480px){
    width: 50px;
    height: 50px;
  }
}
.header{
  background: #ffba41;
  display: flex;
  @media screen and (max-width: 480px){
    padding: 0 10px;
    justify-content: space-between;
  }
}
</style>
