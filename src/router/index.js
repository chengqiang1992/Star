import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

const Foo = {template: '<div>foo</div>'}
const Bar = {template: '<div>bar</div>'}
const User = {template: `
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <router-view></router-view>
  </div>`
}
// const UserHome = { template: '<div>Home</div>' }
// const UserProfile = { template: '<div>Profile</div>' }
// const UserPosts = { template: '<div>Posts</div>' }

export default new Router({
  routes: [
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
    }
  ]
})
