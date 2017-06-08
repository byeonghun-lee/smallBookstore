<template>
    <footer class="footer">
      <button type="button"><img class="footerIcon" src="../../assets/footerIcon.png" alt="사이트 만든 사람 SNS및 이메일주소 모달창"></button>
    </footer>
</template>

<script>
export default {
data: function data() {
  return {

    }
  }
}
</script>

<style lang="scss">
.footer{
    background: #ffba41;
    button{
      display: block;
      background: #ffba41;
      border: 0;
      cursor: pointer;
      margin: 0 auto;
    }
    @media screen and (max-width: 480px){
      padding: 10px 0 5px 0;
    }
}
.footerIcon{
  border: 2px solid white;
  border-radius: 100%;
  @media screen and (max-width: 480px){
    width: 50px;
    height: 50px;
  }
}
</style>
