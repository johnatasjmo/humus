import Vue from 'vue'
import Router from 'vue-router'
import Head from 'vue-head'
import { isNil } from 'lodash'
import Home from '@/views/Home'
import CheckLogin from '@/views/CheckLogin'
import store from '@/store'

Vue.use(Router)

/* If you don't know about VueHead, please refer to https://github.com/ktquez/vue-head */

Vue.use(Head, {
  complement: process.env.VUE_APP_TITLE
})

/* If you don't know about VueRouter, please refer to https://router.vuejs.org/ */

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/check-login',
      name: 'check-login',
      component: CheckLogin,
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-login" */ '@/views/Login.vue'
        ),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/feedstocks',
      name: 'Feedstocks',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-feedstocks-categories" */ '@/views/FeedstocksCategories.vue'
        ),
      meta: {
        authNotRequired: true
      }
    },
    {
      path: '/feedstocks/:categoryId',
      name: 'Material',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-feedstocks" */ '@/views/Feedstocks.vue'
        ),
      props: true,
      meta: {
        authNotRequired: true,
        backRoute: 'Feedstocks'
      }
    },
    {
      path: '/feedstocks/:categoryId/:id',
      name: 'Feedstock',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-feedstock-details" */ '@/views/FeedstockDetails.vue'
        ),
      props: true,
      meta: {
        authNotRequired: true,
        backRoute: 'Material'
      }
    },
    {
      path: '/myfeedstocks',
      name: 'My Feedstocks',
      beforeEnter: (to, from, next) => {
        if (from.name === 'Feedstocks') {
          to.meta.backRoute = 'Feedstocks'
        }
        next()
      },
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-myFeedstocks" */ '@/views/MyFeedstocks.vue'
        )
    },
    {
      path: '/myfeedstocks/create',
      name: 'Create Feedstock',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-myFeedstocks-create" */ '@/views/CreateFeedstock.vue'
        ),
      meta: {
        backRoute: 'My Feedstocks'
      }
    },
    {
      path: '/myfeedstocks/:id',
      name: 'My feedstock',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-my-feedstock-details" */ '@/views/FeedstockDetails.vue'
        ),
      props: true,
      meta: {
        backRoute: 'My Feedstocks'
      }
    },

    {
      path: '/products',
      name: 'products',
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-products" */ '@/views/Products.vue'
        )
    },
    {
      path: '/products/:id',
      name: 'product',
      props: true,
      component: () =>
        import(
          /* webpackChunkName: "client-chunk-product-details" */ '@/views/Product.vue'
        )
    },
    { path: '*', redirect: '/home' }
  ]
})

/**
 * Handle user redirections
 */
// eslint-disable-next-line consistent-return
router.beforeEach((to, from, next) => {
  if (
    !(to.meta && to.meta.authNotRequired) &&
    isNil(store.state.authentication.user)
  ) {
    const path =
      store.state.authentication.user === null ? '/login' : '/check-login'
    return next(`${path}?redirectUrl=${to.path}`)
  }
  next()
})

export default router
