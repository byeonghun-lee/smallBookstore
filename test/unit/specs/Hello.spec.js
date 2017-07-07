import Vue from 'vue';
import Region from '@/components/region';

describe('region.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Region)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.region h2').textContent)
      .to.equal('서울')
  })
})
