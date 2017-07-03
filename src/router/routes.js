// 컴포넌트 불러오기
import Home from '../components/Home.vue';
import Detail from '../components/detail.vue';
import Region from '../components/region.vue';
import Header from '../components/header/header.vue';
import regionalHeader from '../components/header/regionalHeader.vue';
import Footer from '../components/footer/footer.vue';

export const routes = [
  { path: '/', components: {header: Header, default: Home, footer: Footer}, name: 'home' },
  { path: '/storedetail/:id', components: {header: Header, default: Detail, footer: Footer}, name: 'detail' },
  { path: '/region', components: {header: regionalHeader, default: Region, footer: Footer}, name: 'region' }
];
