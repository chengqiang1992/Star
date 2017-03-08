<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
    <h2>vue-router 2</h2>
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
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
