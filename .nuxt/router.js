import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _8992d700 = () => interopDefault(import('..\\pages\\calls\\index.vue' /* webpackChunkName: "pages_calls_index" */))
const _4489ace3 = () => interopDefault(import('..\\pages\\helps\\index.vue' /* webpackChunkName: "pages_helps_index" */))
const _195b6ac0 = () => interopDefault(import('..\\pages\\lists\\index.vue' /* webpackChunkName: "pages_lists_index" */))
const _a87a8dfe = () => interopDefault(import('..\\pages\\polls.vue' /* webpackChunkName: "pages_polls" */))
const _aa4466ac = () => interopDefault(import('..\\pages\\polls\\condition.vue' /* webpackChunkName: "pages_polls_condition" */))
const _3aa96e26 = () => interopDefault(import('..\\pages\\polls\\logic.vue' /* webpackChunkName: "pages_polls_logic" */))
const _58ae33cc = () => interopDefault(import('..\\pages\\polls\\parametrs.vue' /* webpackChunkName: "pages_polls_parametrs" */))
const _1cb037dc = () => interopDefault(import('..\\pages\\polls\\questions.vue' /* webpackChunkName: "pages_polls_questions" */))
const _275c1fcc = () => interopDefault(import('..\\pages\\polls\\respondents.vue' /* webpackChunkName: "pages_polls_respondents" */))
const _52e74a6d = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _f9b59b82 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _8992d700,
    name: "calls"
  }, {
    path: "/helps",
    component: _4489ace3,
    name: "helps"
  }, {
    path: "/lists",
    component: _195b6ac0,
    name: "lists"
  }, {
    path: "/polls",
    component: _a87a8dfe,
    name: "polls",
    children: [{
      path: "condition",
      component: _aa4466ac,
      name: "polls-condition"
    }, {
      path: "logic",
      component: _3aa96e26,
      name: "polls-logic"
    }, {
      path: "parametrs",
      component: _58ae33cc,
      name: "polls-parametrs"
    }, {
      path: "questions",
      component: _1cb037dc,
      name: "polls-questions"
    }, {
      path: "respondents",
      component: _275c1fcc,
      name: "polls-respondents"
    }]
  }, {
    path: "/users",
    component: _52e74a6d,
    name: "users"
  }, {
    path: "/",
    component: _f9b59b82,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
