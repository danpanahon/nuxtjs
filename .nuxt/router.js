import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _328123f6 = () => interopDefault(import('../pages/marketing/index.vue' /* webpackChunkName: "pages/marketing/index" */))
const _b1aeac7a = () => interopDefault(import('../pages/marketing/about/index.vue' /* webpackChunkName: "pages/marketing/about/index" */))
const _6e05ae89 = () => interopDefault(import('../pages/marketing/iclp1/index.vue' /* webpackChunkName: "pages/marketing/iclp1/index" */))
const _02ea614a = () => interopDefault(import('../pages/marketing/iclp2/index.vue' /* webpackChunkName: "pages/marketing/iclp2/index" */))
const _d061d7ea = () => interopDefault(import('../pages/marketing/iclp3/index.vue' /* webpackChunkName: "pages/marketing/iclp3/index" */))
const _36b177f4 = () => interopDefault(import('../pages/marketing/nathan/index.vue' /* webpackChunkName: "pages/marketing/nathan/index" */))
const _4041a81c = () => interopDefault(import('../pages/marketing/vjhp/index.vue' /* webpackChunkName: "pages/marketing/vjhp/index" */))
const _2b3a972f = () => interopDefault(import('../pages/marketing/vjlp1/index.vue' /* webpackChunkName: "pages/marketing/vjlp1/index" */))
const _5503fcb1 = () => interopDefault(import('../pages/marketing/vjlp3/index.vue' /* webpackChunkName: "pages/marketing/vjlp3/index" */))
const _2c2ea11c = () => interopDefault(import('../pages/marketing/vjlp4/index.vue' /* webpackChunkName: "pages/marketing/vjlp4/index" */))
const _7ecd6233 = () => interopDefault(import('../pages/marketing/vjlp5/index.vue' /* webpackChunkName: "pages/marketing/vjlp5/index" */))
const _13b214f4 = () => interopDefault(import('../pages/marketing/vjlp6/index.vue' /* webpackChunkName: "pages/marketing/vjlp6/index" */))
const _2f5a41f8 = () => interopDefault(import('../pages/marketing/iclp1/_slug/index.vue' /* webpackChunkName: "pages/marketing/iclp1/_slug/index" */))
const _38fcbd05 = () => interopDefault(import('../pages/marketing/iclp2/_slug/index.vue' /* webpackChunkName: "pages/marketing/iclp2/_slug/index" */))
const _ecb2c9f4 = () => interopDefault(import('../pages/marketing/iclp3/_slug/index.vue' /* webpackChunkName: "pages/marketing/iclp3/_slug/index" */))
const _257eac2f = () => interopDefault(import('../pages/marketing/nathan/_slug/index.vue' /* webpackChunkName: "pages/marketing/nathan/_slug/index" */))
const _3cf799ac = () => interopDefault(import('../pages/marketing/vjlp1/_slug/index.vue' /* webpackChunkName: "pages/marketing/vjlp1/_slug/index" */))
const _fa5021a8 = () => interopDefault(import('../pages/marketing/vjlp3/_slug/index.vue' /* webpackChunkName: "pages/marketing/vjlp3/_slug/index" */))
const _58fc65a6 = () => interopDefault(import('../pages/marketing/vjlp4/_slug/index.vue' /* webpackChunkName: "pages/marketing/vjlp4/_slug/index" */))
const _242bab2e = () => interopDefault(import('../pages/marketing/vjlp5/_slug/index.vue' /* webpackChunkName: "pages/marketing/vjlp5/_slug/index" */))
const _74d5892f = () => interopDefault(import('../pages/marketing/vjlp6/_slug/index.vue' /* webpackChunkName: "pages/marketing/vjlp6/_slug/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/marketing",
    component: _328123f6,
    name: "marketing"
  }, {
    path: "/marketing/about",
    component: _b1aeac7a,
    name: "marketing-about"
  }, {
    path: "/marketing/iclp1",
    component: _6e05ae89,
    name: "marketing-iclp1"
  }, {
    path: "/marketing/iclp2",
    component: _02ea614a,
    name: "marketing-iclp2"
  }, {
    path: "/marketing/iclp3",
    component: _d061d7ea,
    name: "marketing-iclp3"
  }, {
    path: "/marketing/nathan",
    component: _36b177f4,
    name: "marketing-nathan"
  }, {
    path: "/marketing/vjhp",
    component: _4041a81c,
    name: "marketing-vjhp"
  }, {
    path: "/marketing/vjlp1",
    component: _2b3a972f,
    name: "marketing-vjlp1"
  }, {
    path: "/marketing/vjlp3",
    component: _5503fcb1,
    name: "marketing-vjlp3"
  }, {
    path: "/marketing/vjlp4",
    component: _2c2ea11c,
    name: "marketing-vjlp4"
  }, {
    path: "/marketing/vjlp5",
    component: _7ecd6233,
    name: "marketing-vjlp5"
  }, {
    path: "/marketing/vjlp6",
    component: _13b214f4,
    name: "marketing-vjlp6"
  }, {
    path: "/marketing/iclp1/:slug",
    component: _2f5a41f8,
    name: "marketing-iclp1-slug"
  }, {
    path: "/marketing/iclp2/:slug",
    component: _38fcbd05,
    name: "marketing-iclp2-slug"
  }, {
    path: "/marketing/iclp3/:slug",
    component: _ecb2c9f4,
    name: "marketing-iclp3-slug"
  }, {
    path: "/marketing/nathan/:slug",
    component: _257eac2f,
    name: "marketing-nathan-slug"
  }, {
    path: "/marketing/vjlp1/:slug",
    component: _3cf799ac,
    name: "marketing-vjlp1-slug"
  }, {
    path: "/marketing/vjlp3/:slug",
    component: _fa5021a8,
    name: "marketing-vjlp3-slug"
  }, {
    path: "/marketing/vjlp4/:slug",
    component: _58fc65a6,
    name: "marketing-vjlp4-slug"
  }, {
    path: "/marketing/vjlp5/:slug",
    component: _242bab2e,
    name: "marketing-vjlp5-slug"
  }, {
    path: "/marketing/vjlp6/:slug",
    component: _74d5892f,
    name: "marketing-vjlp6-slug"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
