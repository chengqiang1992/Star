<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>Router 实例</h1>
  					<h3>属性</h3>
  					<h4>router.app</h4>
            <ul>
              <li>
                类型：Vue instance<br>
                配置了 router 的 Vue 根实例
              </li>
            </ul>
            <h4>router.mode</h4>
            <ul>
              <li>
                类型：string<br>
                路由使用的<a href="">模式</a>
              </li>
            </ul>
            <h4>router.currentRouter</h4>
            <ul>
              <li>
                类型：Route<br>
                当前路由对应的<a href="">路由信息对象</a>
              </li>
            </ul>
  					<h3>方法</h3>
  					<ul>
  						<li><strong>router.beforeEach(guard)</strong></li>
  						<li><strong>router.afterEach(guard)</strong><br>增加全局的导航钩子。参考<a href="">导航钩子</a></li>
              <li><strong>router.push(location)</strong></li>
              <li><strong>router.replace(location)</strong></li>
              <li><strong>router.go(n)</strong></li>
              <li><strong>router.back()</strong></li>
              <li><strong>router.forward()</strong><br>动态的导航到一个新的 url。参考<a href="">编程式导航栏</a></li>
              <li><strong>router.getMatchedComponents(location?)</strong><br>返回目标位置或是当前路由匹配的组件数组（是数组的定义/构造类，不是实例）。通常在服务端渲染的数据预加载时时候。</li>
              <li><strong>router.resolve(location, current?,append?)</strong><br>2.2.0+<br>解析目标位置(格式和/<router-link/>的to prop一样)。返回如下属性的对象</li>
              <li><strong>router.addRoute(routes)</strong><br>2.2.0+<br>动态添加更多的路由规则。参数必须是一个符合 routes 选项要求的数组。</li>
              <li><strong>router.onReady(callback)</strong><br>2.2.0+<br>添加一个会在第一次路由跳转完成时被调用的回调函数。此方法通常用于等待异步的导航钩子完成，比如在惊醒服务端渲染的时候。</li>

  					</ul>
  					<p>查看<a href="">组件级导肮钩子</a></p>
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
