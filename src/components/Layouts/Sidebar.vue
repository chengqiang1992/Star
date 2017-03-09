<template>
  <div class="hello">
    <h2><router-link :to="{ name: 'Vuerouter'}">vue-router 2</router-link></h2>
    <ul>
      <li><router-link to="/foo">Go to Foo</router-link></li>
      <li><router-link to="/bar">Go to Bar</router-link></li>
    </ul>
    <ul>
      <li>开始</li>
      <li><router-link to="/user/foo">Go to User1</router-link></li>
      <li><router-link to="/user/bar">Go to User2</router-link></li>
    </ul>
    <ul>
      <li>动态路由匹配</li>
      <li><router-link to="/user/1992">Go to User</router-link></li>
      <li><router-link to="/user/1993">Go to User</router-link></li>
    </ul>
    <ul>
      <li>嵌套路由</li>
      <li><router-link to="/user/foo">/user/foo</router-link></li>
      <li><router-link to="/user/foo/profile">/user/foo/profile</router-link></li>
      <li><router-link to="/user/foo/posts">/user/foo/posts</router-link></li>
    </ul>
    <ul>
      <li>命名路由</li>
      <li><router-link :to="{ name: 'user', params: { id: 123 }}">User</router-link></li>
      <li>router.push({ name: 'user', params: { userId: 123 }})</li>
    </ul>
    <ul>
      <li>导航钩子</li>
    </ul>
    <ul>
      <li>路由元信息</li>
    </ul>
    <ul>
      <li>过渡动效</li>
    </ul>
    <ul>
      <li>数据获取</li>
    </ul>
    <ul>
      <li>滚动行为</li>
    </ul>
    <ul>
      <li>懒加载</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
h1, h2
  font-weight: normal

ul
  list-style-type: none
  padding: 0

li
  display: inline-block
  margin: 0 10px
</style>
