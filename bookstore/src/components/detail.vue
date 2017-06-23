<template>
  <div>
    <div class="thumbnailArea">
      <div class="imageSize">
        <!-- this.bookstore[id -1]을 데이터에 담는 법. (숫자때문에 인식 안됨.)  -->
        <img :src="this.bookstore[id -1].thumbnail" :alt="this.bookstore[id -1].shopname + '사진'">
      </div>
      <h2 class="shopname">{{ this.bookstore[id -1].shopname }}</h2>
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
      <h3><span class="titleColor">책방</span>사진</h3>
      <div class="bookStoreImage"></div>
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
  },
  mounted: function mounted() {
    var shopName = document.querySelector(".shopname").innerText;
    $.ajax({
      url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyBk202ezM-uvLl5SMhYkj0V2Be5XFUpTIE&cx=003292722399188843842:x-w1kmde7ps&q=" + shopName,
      dataType: "json",

      success: function(data){
        console.log("성공", data);
        console.log(data.items["0"].pagemap.cse_image["0"].src);
        for (var i = 0; i < data.items.length; i++) {
          var imgArea = document.querySelector(".bookStoreImage");
          var storeImages = [
            '<span class="storeThumbnail">',
            '<img src=' + data.items[i].pagemap.cse_image["0"].src +'>',
            '</span>'
          ].join('');
          imgArea.innerHTML += storeImages;
          console.log(storeImages);
        }
      },
      error: function(error){
        console.error("실패 :", error);
      },
      type: 'GET'
    });
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
.storeThumbnail{
  display: inline-block;
  width: 75px;
  height: 75px;
  overflow: hidden;
  img{
    height: 100px;
  }
}
</style>
