<template>
  <div class="region">
    <div class="box" id="cupcake" v-if="isLoading">
      <span class = "letter">L</span>
      <div class = "cupcakeCircle box">
          <div class = "cupcakeInner box">
              <div class = "cupcakeCore box"></div>
          </div></div>
      <span class = "letter box">A</span>
      <span class = "letter box">D</span>
      <span class = "letter box">I</span>
      <span class = "letter box">N</span>
      <span class = "letter box">G</span>
    </div>
    <transition-group
    enter-active-class="animated tada"
    appear
    v-else>
      <div  class="regions" v-for="region in regionList" v-bind:key="region">
        <div class="regionImageSize">
          <img :src="region.photo" :alt="region.name + '사진'">
        </div>
        <h2 class="namePosition">{{ region.name }}</h2>
        <router-link
        tag="button"
        :class="region.enName"
        class="regionButtonPosition"
        type="button"
        :to="{ name: 'RegionDetail', params: { enName: region.enName }}">view more <i class="fa fa-angle-double-right" aria-hidden="true"></i></router-link>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: 'region',
  data: function data() {
    return {
      regionList: [
        {name: '서울', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        {name: '인천', enName: 'incheon', photo: 'http://cfile8.uf.tistory.com/image/235A1D37556D24FC013943'},
        {name: '대전', enName: 'daejeon', photo: 'http://cfile226.uf.daum.net/image/2366B74552736563237476'},
        {name: '대구', enName: 'daegu', photo: 'http://cfile6.uf.tistory.com/image/244E593A526D03A41EA0F6'},
        {name: '광주', enName: 'gwangju', photo: 'http://tour.gwangju.go.kr/uploads/board/_old/COMPETITION_2008_20130412180907_0.jpg'},
        {name: '부산', enName: 'busan', photo: 'http://cfile27.uf.tistory.com/attach/271E423457D89DB1130864'},
        {name: '울산', enName: 'ulsan', photo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/%ED%83%9C%ED%99%94%EA%B0%95%2C%EC%9A%B8%EC%82%B0.jpg'},
        {name: '세종특별자치시', enName: 'sejong', photo: 'http://cfile203.uf.daum.net/image/223FA84D54D171452D8E9B'},
        {name: '경기도', enName: 'gyeonggi', photo: 'http://cfile218.uf.daum.net/image/0269904751D4CBA62663B4'},
        {name: '강원도', enName: 'gangwon', photo: 'http://ph.kado.net/news/photo/201409/697612_257477_4739.jpg'},
        {name: '충청북도', enName: 'chungbuk', photo: 'http://file.instiz.net/data/file/20120826/d/4/f/d4f256af50618b9c0bdd34dceae572bc'},
        {name: '충청남도', enName: 'chungnam', photo: 'http://cfile218.uf.daum.net/image/2212A43B5631A9041339A2'},
        {name: '경상북도', enName: 'gyeongbuk', photo: 'http://cfile27.uf.tistory.com/image/226691335267065D1E8039'},
        {name: '경상남도', enName: 'gyeongnam', photo: 'http://chulsa.kr/files/attach/images/66/914/387/010/DSC_9630.jpg'},
        {name: '전라북도', enName: 'jeonbuk', photo: 'http://www.jbslr.com/files/attach/images/8190/434/012/c081eab89f847f0b5cd40f09fa506ff2.jpg'},
        {name: '전라남도', enName: 'jeonnam', photo: 'http://cfile210.uf.daum.net/image/256763335327B178130BB4'},
        {name: '제주도', enName: 'jeju', photo: 'http://img.earthtory.com/img/nt_img/cover/73/73_1400668296.jpg'}
      ],
      isLoading: false
    };
  },
  mounted: function mounted() {
    this.isLoading = true;
    setTimeout(function() {
      this.isLoading = false;
    }.bind(this), 3000);
  }
};
</script>

<style lang="scss">
.regions{
  position: relative;
}
.regionImageSize{
  background-color: black;
  @media screen and (max-width: 480px){
    width: 100%;
    height: 15rem;
    overflow: hidden;
    img{
      width: 120%;
      position: relative;
      top: -15%;
      opacity: 0.4;
    }
  }
}
.regionButtonPosition{
  position: absolute;
  top: 52%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  background-color: rgba(0, 0, 0, 0.7);
  border: 0;
  border-radius: 10px;
  padding: 5px 20px;
  font-weight: lighter;
  letter-spacing: 0.1rem;
}

// 로딩 애니메이션
#cupcake{
flex-direction:row;
justify-content:center;
height:100vh;
width:100%;
// background-color:#FFD454;
}

.letter{
    font-size:40px;
    color:#222;
    font-family:tahoma;
}

.box{
  display: box;
	display: flex;
}

.cupcakeCircle, .cupcakeInner, .cupcakeCore{
     border-radius:50%;
}

.cupcake, .letter, .cupcakeCircle, .cupcakeInner, .cupcakeCore{
    flex:none;
}

.letter, .cupcakeCircle{
    align-self:center;
}
.cupcakeCircle{
    align-items:center;
    justify-content:center;
    height:40px;
    width:40px;
    background-color:#222;
}

.cupcakeInner{
    align-self:center;
    justify-content:center;
    height:50%;
    width:50%;
    background-color:#ffba41;
    -webkit-animation-name:cupcakeAnimate;
    -webkit-animation-duration:500ms;
    -webkit-animation-direction:alternate;
    -webkit-animation-timing-function:ease-in-out;
    -webkit-animation-iteration-count:infinite;

}
.cupcakeCore{
    align-self:center;
    height:25%;
    width:25%;
    background-color:#222;
    -webkit-animation-name:coreAnimate;
    -webkit-animation-duration:1s;
    -webkit-animation-direction:alternate;
    -webkit-animation-timing-function:ease-in-out;
    -webkit-animation-iteration-count:infinite;
}

@-webkit-keyframes cupcakeAnimate{
    to{ height:90%; width:90%; }
}
@keyframes cupcakeAnimate{
    to{ height:90%; width:90%; }
}

@-webkit-keyframes coreAnimate{
    to{ height:90%; width:90%; }
}
@keyframes coreAnimate{
    to{ height:90%; width:90%; }
}
</style>
