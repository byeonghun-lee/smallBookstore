<template>
    <footer class="footer">
      <button type="button" @click="showModal = true"><img class="footerIcon" src="../../assets/footerIcon.png" alt="사이트 만든 사람 SNS및 이메일주소 모달창"></button>
      <transition name="fade">
        <div class="modal" v-if="showModal">
          <div class="modalWindow">
            <button type="button" class="closeModal" @click="showModal = false"><i class="fa fa-times fa-2x" aria-hidden="true"></i></button>
            <div class="modalContents">
              <a href="https://github.com/byeonghun-lee" title="제작자 깃허브 페이지로 이동"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a>
              <a href="https://www.facebook.com/hun0811" title="제작자 페이스북으로 이동"><i class="fa fa-facebook-official fa-3x" aria-hidden="true"></i></a>
              <a href="https://byeonghun-lee.github.io/" title="제작자 블로그로 이동"><i class="fa fa-user-o fa-3x" aria-hidden="true"></i></a>
            </div>
            <h4>e-mail: byeonghun08@gmail.com</h4>
            <p>책방을 추가하고 싶은 분은 메일로 책방 이름과 주소를 보내주세요.</p>
          </div>
        </div>
      </transition>
    </footer>
</template>

<script>
export default {
data: function data () {
  return {
      showModal: false
    };
  }
};
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
    @media screen and (min-width: 480px){
      padding: 30px 0 10px 0;
    }
}
.footerIcon{
  border: 2px solid white;
  border-radius: 100%;
  width: 50px;
  height: 50px;
}
.modal{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}
.modalWindow{
  position: fixed;
  border-radius: 3px;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  @media screen and (max-width: 480px){
    width: 70%;
    padding: 10px;
    padding-top: 22px;
  }
  @media screen and (min-width: 480px){
    width: 30%;
    padding: 15px;
    padding-top: 25px;
  }
    h4{
      margin-top: 15px;
      margin-bottom: 0;
    }
    p{
      margin-bottom: 10px;
      margin-top: 7px;
      font-size: 0.9rem;
      color: rgb(117, 117, 117);
    }
    button{
      position: absolute;
      top: 0;
      right: 0;
      background: white;
    }
}
.modalContents{
  display: flex;
  justify-content: space-around;
  a{
    border: 3px solid rgb(117, 117, 117);
    border-radius: 50%;
    padding: 9px 11px;
    color: rgb(117, 117, 117);
  }
}

.fade-enter-active, .fade-leave-active{
  transition: opacity 0.7s ease;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>
