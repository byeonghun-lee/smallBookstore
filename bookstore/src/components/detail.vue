<template>
  <div>
    <div class="thumbnailArea">
      <div class="imageSize">
        <!-- this.bookstore[id -1]을 데이터에 담는 법. (숫자때문에 인식 안됨.)  -->
        <img :src="this.bookstore[id -1].thumbnail" :alt="this.bookstore[id -1].shopname + '사진'">
      </div>
      <h2>{{ this.bookstore[id -1].shopname }}</h2>
      <p>{{ this.bookstore[id -1].address }}</p>
    </div>
    <div class="storyArea whiteBox">
      <h3><span class="titleColor">책방</span> 이야기</h3>
      <p>{{ this.bookstore[id -1].story }}</p>
    </div>
    <div class="bestsellerArea whiteBox">
      <h3><span class="titleColor">책방</span> 추천</h3>
      <ul>
        <li v-for="bestBook in this.bookstore[id -1].bestseller" class="bestBookList">{{ bestBook }}</li>
      </ul>
    </div>
    <div class="instargramArea whiteBox">
      <h3><span class="titleColor">instargram</span></h3>
    </div>
    <div class="mapArea whiteBox">
      <h3><span class="titleColor">책방</span>가는 길</h3>
    </div>
    <!-- <p>{{ id }}</p> -->
  </div>
</template>
<script>

export default {
  name: 'app',
  firebase:{
    bookstore: bookstoreRef
  },
  data () {
    return {
      id: this.$route.params.id
      // bStore: this.bookstore
    }
  }
}
</script>
<style lang="scss">
.titleColor{
  color: #ffba41;
}
.bestBookList{
  color: #3fa4f6;
}
.thumbnailArea{
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  h2{
    font-weight: 200;
    margin-top: 0.8rem;
    margin-bottom: 0;
  }
  p{
    margin-top: 0.2rem;
    margin-bottom: 15px;
    text-align: center;
    color: #afaaaa;
  }
  @media screen and (max-width: 480px){
    width: 95%;
    margin: 10px auto;
    h2{
      font-size: 1.3rem;
    }
    p{
      width: 170px;
      font-size: 0.8rem;
    }
    .imageSize{
      width: 190px;
      height: 190px;
      border-radius: 100%;
      margin-top: 15px;
      overflow: hidden;
      img{
        width: 300px;
      }
    }
  }
}
.whiteBox{
  background-color: white;
  h3{
    margin: 0;
    margin-bottom: 10px;
  }
  p{
    color: #afaaaa;
  }
  @media screen and (max-width: 480px){
    width: 90%;
    margin: 10px auto;
    padding: 10px;
    h3{
      font-weight: 100;
    }
    p{
      width: 95%;
      margin: 0 auto;
    }
  }
}
</style>
