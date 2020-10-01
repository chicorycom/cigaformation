import Vue from 'vue'
import VueRouter from 'vue-router'

// router setup
import routes from './routes'
Vue.use(VueRouter);


export default new VueRouter({
  base: '/administrator',
  mode: 'history',
  routes
})
