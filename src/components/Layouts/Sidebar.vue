<template>
  <div class="book-summary">
    <nav role="navigation">
      <ul class="summary">
        <li class="chapter">
          <a href="">介绍</a>
        </li>
        <li class="chapter">
          <span>基础</span>
          <ul class="articles">
            <li class="chapter">
              <router-link :to="{ name: 'GettingStarted'}">开始</router-link>
            </li>
            <li class="chapter">
              <router-link :to="{ name: 'DynamicMatching'}">动态路由匹配</router-link>
            </li>
            <li class="chapter">
              <a href="">嵌套路由</a>
            </li>
            <li class="chapter">
              <a href="">编程式导航</a>
            </li>
            <li class="chapter">
              <a href="">命名路由</a>
            </li>
            <li class="chapter">
              <a href="">重定向和别名</a>
            </li>
            <li class="chapter">
              <a href="">HTML History 模式</a>
            </li>
          </ul>
        </li>
        <li class="chapter">
          <span>进阶</span>
          <ul class="articles">
            <li class="chapter">
            <router-link :to="{ name: 'NavigationGuards'}">导航钩子</router-link>
            </li>
            <li class="chapter">
              <router-link :to="{ name: 'Meta'}">路由元信息</router-link> 
            </li>
            <li class="chapter">
              <a href="">过渡动效</a>
            </li>
            <li class="chapter">
              <a href="">数据获取</a>
            </li>
            <li class="chapter">
              <a href="">滚动行为</a>
            </li>
            <li class="chapter">
              <a href="">懒加载</a>
            </li>
          </ul>
        </li>
        <li class="chapter">
          <span>API文档</span>
          <ul class="articles">
            <li class="chapter">
              <a href="">router-link</a>
            </li>
            <li class="chapter">
              <a href="">router-view</a>
            </li>
            <li class="chapter">
              <a href="">路由信息对象</a>
            </li>
            <li class="chapter">
              <router-link :to="{ name: 'Options'}">Router 构造配置</router-link>
            </li>
            <li class="chapter">
              <router-link :to="{ name: 'RouterInstance'}">Router 实例</router-link>
            </li>
            <li class="chapter">
              <router-link :to="{ name: 'ComponentInjections'}">对组件注入</router-link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
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
  .book-summary
    position: absolute
    top: 25rem
    bottom: 0
    z-index: 1
    overflow-y: auto
    width: 300px
    ul.summary
      text-align: left
      li ul
        padding-left: 2rem
      li a,span
        display: block
        padding: 0.3rem 1.5rem
      li span
        color: #7f8c8d
        opacity: 0.6
        cursor: not-allowed


</style>
