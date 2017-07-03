<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
export default {
  data: function data() {
    return {

    };
  }
};
</script>

<style lang="scss">
body{
  margin: 0;
  background-color: #f4f1ea;
}
</style>
