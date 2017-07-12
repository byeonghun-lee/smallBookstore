# 작은 책방 정보 사이트
## 사이트 접속  
- [작은 책방](https://byeonghun-lee.github.io/smallBookstore/)  

##### 어떻게 만들 것 인가  
- 데스크탑 뷰와 모바일뷰  
- 메인에서 책방 선택 시 책방 고유 정보를 나오게 하기.  
- Firebase에서 책방 정보 가져오기 (인프런 Firebase 강좌 듣고 예제 따라해 봤음.)  
- 인스타그램에서 책방 사진을 가져와서 뿌려준다.
- 구글맵을 불러온다.  
- 지역별로 책방정보를 불러온다.  

##### 나타난 문제점  
1. Firebase를 vue에서 어떻게 쓸 것인가.  
2. 인스타그램에서 사진을 가져올 수 없음.(인증을 해야하거나 본인 인스타 사진 몇개만 가져오게 정책 변경.)  

##### 해결 방법  
1. Vue 2.0에서 Firebase를 사용하기 위한 방법으로 vuefire를 찾음  
- [관련 강의](https://www.youtube.com/watch?v=we4zuQIXmnw)  
2. 인스타그램에서 네이버, 다음을 다 찾아봤으나 문제가 있음. 구글 커스텀서치에서 사진을 검색해서 가져오는 것으로 변경.
- [자세한 방법은 블로그 정리](https://byeonghun-lee.github.io/2017/06/29/googleCustomSearch/)
