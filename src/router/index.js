import Vue from 'vue'
import VueRouter from 'vue-router'

// 1. 定义（路由）组件。
// 可以从其他 import 进来
import Hello from '@/components/Hello'

import vuerouter from '@/components/vuerouter'
import gettingstarted from '@/components/vuerouter/essentials/gettingstarted'
import dynamicmatching from '@/components/vuerouter/essentials/dynamicmatching'
import navigationguards from '@/components/vuerouter/advanced/navigationguards'
import meta from '@/components/vuerouter/advanced/meta'
import componentinjections from '@/components/vuerouter/api/componentinjections'
import routerinstance from '@/components/vuerouter/api/routerinstance'
import options from '@/components/vuerouter/api/options'

import vueresource from '@/components/vueresource/index'
import configuration from '@/components/vueresource/configuration'
import http from '@/components/vueresource/http'
import resource from '@/components/vueresource/resource'
import recipes from '@/components/vueresource/recipes'

import es6 from '@/components/es6/index'
import promise from '@/components/es6/promise'

const Foo = {
  template: `
    <transition name="fade">
      <div class="foo">foo...</div>
    </transition>
  `
}
const Bar = {
  template: `
    <transition name="slide">
      <div class="bar">bar...</div>
    </transition>
  `
}
const User = {template: `
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>`
}

// 0. 如果使用模块化机制编程，导入 Vue和 VueRouter，要调用 Vue.use(VueRouter)
Vue.use(VueRouter)

// 2. 定义路由
// 每个路由应该映射一个组件。其中"component"可以是通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。我们晚点再讨论嵌套路由。
const routes = [
  {
    path: '/',
    name: 'Hello',
    component: Hello
  },
  {
    path: '/foo',
    component: Foo
  },
  {
    path: '/bar',
    component: Bar
  },
  // {
  //   path: '/user/:id',
  //   component: User,
  //   children: [
  //     {
  //       path: '',
  //       component: UserHome
  //     },
  //     {
  //       path: 'profile',
  //       component: UserProfile
  //     },
  //     {
  //       path: 'posts',
  //       component: UserPosts
  //     }
  //   ]
  // },
  {
    path: '/user/:id',
    name: 'user',
    component: User
  },
  {
    path: '/router',
    name: 'vuerouter',
    component: vuerouter,
    beforeEnter: (to, from, next) => {
      console.log('路由独享的钩子')
      next()
    }
  },
  {
    path: '/essentials/getting-started',
    name: 'gettingstarted',
    component: gettingstarted
  },
  {
    path: '/essentials/dynamic-matching',
    name: 'dynamicmatching',
    component: dynamicmatching
  },
  {
    path: '/advanced/navigation-guards',
    name: 'navigationguards',
    component: navigationguards
  },
  {
    path: '/advanced/meta',
    name: 'meta',
    component: meta
  },
  {
    path: '/api/options',
    name: 'options',
    component: options
  },
  {
    path: '/api/router-instance',
    name: 'routerinstance',
    component: routerinstance
  },
  {
    path: '/api/component-injections',
    name: 'componentinjections',
    component: componentinjections
  },
  {
    path: '/vue-resource',
    name: 'vueresource',
    component: vueresource
  },
  {
    path: '/configuration',
    name: 'configuration',
    component: configuration
  },
  {
    path: '/http',
    name: 'http',
    component: http
  },
  {
    path: '/resource',
    name: 'resource',
    component: resource
  },
  {
    path: '/recipes',
    name: 'recipes',
    component: recipes
  },
  {
    path: '/es6',
    name: 'es6',
    component: es6
  },
  {
    path: '/es6/promise',
    name: 'promise',
    component: promise
  }
]

// 3. 创建 router 实例，然后传 `routes`配置
// 你还可以传入别的配置参数，不过先这么简单着吧。
// export default new VueRouter({
//   routes
// })

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  next()
})
router.afterEach(route => {
  console.log(route)
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.

    // let tmp = !auth.loggedIn()
    let tmp = true
    if (tmp) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next()    // 确保一定要用next()
  }
})

export default router

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由
// 从而让整个应用都有功能

// 这段代码在 main.js里边

// 现在，应用已经启动了！
