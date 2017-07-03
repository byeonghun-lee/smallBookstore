<template>
  <div>
    <!-- <transition-group
    enter-active-class="animated flipInX"
    appear> -->
      <div  class="regions" v-for="region in regionList">
        <div class="regionImageSize">
          <img :src="region.photo" :alt="region.name + '사진'">
        </div>
        <h2 class="namePosition">{{ region.name }}</h2>
        <button :class="region.enName" class="regionButtonPosition" type="button">view more <i class="fa fa-angle-double-right" aria-hidden="true"></i></button>
      </div>
    <!-- </transition-group> -->
  </div>
</template>

<script>
export default {
  data: function data() {
    return {
      regionList: [
        {name: '서울', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        {name: '인천', enName: 'incheon', photo: 'http://cfile8.uf.tistory.com/image/235A1D37556D24FC013943'},
        {name: '대전', enName: 'seoul', photo: 'http://cfile226.uf.daum.net/image/2366B74552736563237476'},
        {name: '대구', enName: 'seoul', photo: 'http://cfile2.uf.tistory.com/image/2323763B54AAB0FC308656'},
        {name: '광주', enName: 'seoul', photo: 'http://tour.gwangju.go.kr/uploads/board/_old/COMPETITION_2008_20130412180907_0.jpg'},
        {name: '부산', enName: 'seoul', photo: 'http://cfile27.uf.tistory.com/attach/271E423457D89DB1130864'}
        // {name: '울산', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        // {name: '세종특별자치시', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        // {name: '경기도', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        // {name: '강원도', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        // {name: '충청북도', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        // {name: '충청남도', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        // {name: '경상북도', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        // {name: '경상남도', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        // {name: '전라북도', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        // {name: '전라남도', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'},
        // {name: '제주도', enName: 'seoul', photo: 'http://blog.besunny.com/wp-content/uploads/korea-seoul-cityview-1024x576.jpg'}
      ]
    };
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

</style>
