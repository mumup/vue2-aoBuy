import Vue from 'vue'
import Index from 'src/components/user'

describe('Hello.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: (h) => h(Index)
    })
    expect(vm.$el.querySelector('.user-reg').textContent)
      .to.equal('立即注册')
  })
})
