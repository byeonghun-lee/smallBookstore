<template>
  <div class="allBookList">
    <ul v-for="store in bookstore">
      <router-link :to="{name:'detail', params:{id: store.id}}" tag="li" class="storeList">
      <div class="bookStorePhoto">
          <img :src="store.thumbnail" alt="책방 사진">
      </div>
      <p class="namePosition">{{ store.shopname }}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyBPFkMbEl6XuT_GDv9cmTOEp3EIXfEOb8E",
  authDomain: "smallbookstore-ad9d6.firebaseapp.com",
  databaseURL: "https://smallbookstore-ad9d6.firebaseio.com",
  projectId: "smallbookstore-ad9d6",
  storageBucket: "smallbookstore-ad9d6.appspot.com",
  messagingSenderId: "680514796006"
};

var app = Firebase.initializeApp(config);

var db = app.database();

var bookstoreRef = db.ref('bookstore');

window.bookstoreRef = bookstoreRef;

export default {
  // name: 'app',
  firebase: {
    bookstore: bookstoreRef
  },
  data () {
    return {
    };
  }
};

</script>

<style lang="scss">
.allBookList{
  @media screen and (min-width: 480px){
    display: flex;
    flex-wrap: wrap;
    padding: 0 12%;
  }
}
ul{
  list-style: none;
  padding: 0 10px;
  position: relative;
  margin: 0;
  @media screen and (min-width: 480px){
    width: 33.3333333%;
    padding: 0;
    :hover{
      box-sizing: border-box;
      background: black;
      opacity: 0.7;
      border: 2px solid #ffba41;
    }
  }
}
.bookStorePhoto{
  @media screen and (max-width: 480px){
    margin: 10px 0;
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
    & img{
      width: 100%;
      position: absolute;
      top: -15%;
    }
  }
  @media screen and (min-width: 480px){
    height: 300px;
    overflow: hidden;
    & img{
      width: 150%;
    }
  }
}
.namePosition{
  color: white;
  position: absolute;
  top: 30%;
  left: 50%;
  font-size: 1.5rem;
  transform: translateX(-50%);
  letter-spacing: 0.3rem;
}

</style>
