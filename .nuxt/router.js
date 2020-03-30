import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2631feb8 = () => interopDefault(import('..\\pages\\calls\\index.vue' /* webpackChunkName: "pages_calls_index" */))
const _763a1907 = () => interopDefault(import('..\\pages\\helps\\index.vue' /* webpackChunkName: "pages_helps_index" */))
const _4b0bd6e4 = () => interopDefault(import('..\\pages\\lists\\index.vue' /* webpackChunkName: "pages_lists_index" */))
const _6c082546 = () => interopDefault(import('..\\pages\\polls.vue' /* webpackChunkName: "pages_polls" */))
const _787386ce = () => interopDefault(import('..\\pages\\polls\\condition.vue' /* webpackChunkName: "pages_polls_condition" */))
const _145bb511 = () => interopDefault(import('..\\pages\\polls\\logic.vue' /* webpackChunkName: "pages_polls_logic" */))
const _2643edf0 = () => interopDefault(import('..\\pages\\polls\\parametrs.vue' /* webpackChunkName: "pages_polls_parametrs" */))
const _2b741c00 = () => interopDefault(import('..\\pages\\polls\\questions.vue' /* webpackChunkName: "pages_polls_questions" */))
const _33283e20 = () => interopDefault(import('..\\pages\\polls\\respondents.vue' /* webpackChunkName: "pages_polls_respondents" */))
const _f6d092de = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _bd4332ca = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calls",
    component: _2631feb8,
    name: "calls"
  }, {
    path: "/helps",
    component: _763a1907,
    name: "helps"
  }, {
    path: "/lists",
    component: _4b0bd6e4,
    name: "lists"
  }, {
    path: "/polls",
    component: _6c082546,
    name: "polls",
    children: [{
      path: "condition",
      component: _787386ce,
      name: "polls-condition"
    }, {
      path: "logic",
      component: _145bb511,
      name: "polls-logic"
    }, {
      path: "parametrs",
      component: _2643edf0,
      name: "polls-parametrs"
    }, {
      path: "questions",
      component: _2b741c00,
      name: "polls-questions"
    }, {
      path: "respondents",
      component: _33283e20,
      name: "polls-respondents"
    }]
  }, {
    path: "/users",
    component: _f6d092de,
    name: "users"
  }, {
    path: "/",
    component: _bd4332ca,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
