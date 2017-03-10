<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
            <h1>路由元信息</h1>
            <p>定义路由的时候可以配置 meta 字段：</p>
            <pre>
              <code>
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      children: [
        {
          path: 'bar',
          component: Bar,
          // a meta field
          meta: { requiresAuth: true}
        }
      ]
    }
  ]
})
              </code>
            </pre>
            <p>那么如何访问这个meta字段呢？</p>

            <p>首先，我们称呼 routes 配置中的每个路由对象为<strong>路由记录</strong>。路由记录可以是嵌套的，因此，当一个路由匹配成功后，他可能匹配多个路由记录</p>
            <p>例如，根据上面的路由配置，/foo/bar 这个 URL 将会匹配父路由记录以及子路由记录。</p>
            <P>一个路由匹配到的所有路由记录会暴露在 $route 对象（还有在导航钩子中的 route 对象）的 $route.matched数组。因此，我们需要遍历 $route.matched 来检查路由记录中的 meta 字段。</P>
            <p>下面例子展示在全局导航钩子中检查meta字段。</p>
  				</section>
  			</div>
  		</div>
  	</div>
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
	// @media (min-width: 600px)
	// 	.book
	// 		.book-body
	// 			left: 300px

	@media (max-width: 1240px)
		.book
			.book-body
				padding-bottom: 20px

	.book-body
		position: absolute
		top: 25rem
		right: 0
		bottom: 0
		z-index: 1
		overflow-y: auto
		text-align: left
		left: 300px

	.page-inner
		position: relative
		max-width: 800px
		margin: 0 0
		padding: 2rem 1.5rem 4rem 1.5rem

</style>
