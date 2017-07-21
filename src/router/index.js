// 컴포넌트 불러오기
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Detail from '@/components/detail';
import Region from '@/components/region';
import RegionDetail from '@/components/regiondetail';
import Header from '@/components/header/header';
import regionalHeader from '@/components/header/regionalHeader';
import Footer from '@/components/footer/footer';

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', components: {header: Header, default: Home, footer: Footer}, name: 'home' },
    { path: '/storedetail/:id', components: {header: Header, default: Detail, footer: Footer}, name: 'detail' },
    { path: '/region', components: {header: regionalHeader, default: Region, footer: Footer}, name: 'region' },
    { path: '/regin/:regionName', components: {header: regionalHeader, default: RegionDetail, footer: Footer}, name: 'RegionDetail' }
  ]
})
