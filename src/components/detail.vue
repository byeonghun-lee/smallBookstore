<template>
  <div>
    <transition
      enter-active-class="animated flipInX"
      appear>
      <div class="thumbnailArea">
        <div class="imageSize">
          <!-- this.bookstore[id -1]을 데이터에 담는 법. (숫자때문에 인식 안됨.)  -->
          <img :src="this.bookstore[id -1].thumbnail" :alt="this.bookstore[id -1].shopname + '사진'">
        </div>
        <h2 class="shopname">{{ this.bookstore[id -1].shopname }}</h2>
        <p class="address">{{ this.bookstore[id -1].address }}</p>
      </div>
    </transition>
    <div class="whiteBoxControll">
      <transition
        enter-active-class="animated flipInX"
        appear>
        <div class="storyArea whiteBox">
          <h3><span class="titleColor">책방</span> 이야기</h3>
          <p>{{ this.bookstore[id -1].story }}</p>
        </div>
      </transition>

      <transition
        enter-active-class="animated flipInX"
        appear>
        <div class="bestsellerArea whiteBox">
          <h3><span class="titleColor">책방</span> 추천</h3>
          <ul>
            <li v-for="bestBook in this.bookstore[id -1].bestseller" class="bestBookList">{{ bestBook }}</li>
          </ul>
        </div>
      </transition>

      <transition
        enter-active-class="animated flipInX"
        appear>
        <div class="instargramArea whiteBox">
          <h3><span class="titleColor">책방</span>사진</h3>
          <div class="bookStoreImage"></div>
        </div>
      </transition>

      <transition
        enter-active-class="animated flipInX"
        appear>
        <div class="mapArea whiteBox">
          <h3><span class="titleColor">책방</span>가는 길</h3>
          <div id="map"></div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>

export default {
  // name: 'app',
  firebase: {
    bookstore: bookstoreRef
  },
  data() {
    return {
      id: this.$route.params.id
    };
  },
  mounted: function mounted() {
    var shopName = document.querySelector(".shopname").innerText;
    $.ajax({
      url: "https://www.googleapis.com/customsearch/v1?key=AIzaSyBk202ezM-uvLl5SMhYkj0V2Be5XFUpTIE&cx=003292722399188843842:x-w1kmde7ps&searchType=image&q=" + shopName,
      dataType: "json",

      success: function(data) {
        console.log("성공", data);
        for (var i = 0; i < data.items.length; i++) {
          var imgArea = document.querySelector(".bookStoreImage");
          var storeImages = [
            '<div class="storeThumbnail">',
            '<img src=' + data.items[i].image.thumbnailLink + '>',
            '</div>'
          ].join('');
          imgArea.innerHTML += storeImages;
        }
      },
      error: function(error) {
        console.error("실패 :", error);
      },
      type: 'GET'
    });
    var address = document.querySelector(".address").innerText;
    $.ajax({
      url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyCNUd63qg-4Mu7WFpeMXkUyYnmCCkiyuGQ",
      dataType: "json",

      success: function(data) {
        console.log("주소 성공 :", data);
        /*global someFunction google:true*/
        var uluru = {lat: data.results["0"].geometry.location.lat, lng: data.results["0"].geometry.location.lng};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

      },
      error: function(error) {
        console.error("실패 :", error);
      },
      type: 'GET'
    });
  }
};
</script>
<style lang="scss">
#map {
  width: 100%;
  height: 200px;
  @media screen and (min-width: 480px){
    height: 350px;
  }
}
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
  @media screen and (min-width: 480px){
    width: 1110px;
    margin: 25px auto;
    padding: 30px 0;
    h2{
      font-size: 1.8rem;
    }
    p{
      font-size: 0.8rem;
      margin-top: 10px;
    }
    .imageSize{
      width: 250px;
      height: 250px;
      border-radius: 100%;
      margin-top: 15px;
      overflow: hidden;
      img{
        width: 400px;
      }
    }
  }
}
@media screen and (min-width: 480px){
  .whiteBoxControll{
    width: 1110px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
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
  @media screen and (min-width: 480px){
    box-sizing: border-box;
    width: 540px;
    padding: 30px;
    margin-bottom: 25px;
    h3{
      font-weight: 100;
    }
    p{
      width: 95%;
      margin: 0 auto;
    }
  }
}
.bookStoreImage{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.storeThumbnail{
  overflow: hidden;
  margin: 0;
  @media screen and (max-width: 480px){
    width: 75px;
    height: 75px;
    img{
      height: 100px;
    }
  }
  @media screen and (min-width: 480px){
    width: 110px;
    height: 110px;
    margin-bottom: 5px;
    img{
      height: 150px;
    }
  }
}

</style>
