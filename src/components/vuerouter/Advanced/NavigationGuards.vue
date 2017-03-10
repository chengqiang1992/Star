<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>导航钩子</h1>
            <p>正如其名，vue-router 提供的导航钩子主要是来拦截导航，让他完成跳转或取消。有多种方法可以在路由导航发生时执行钩子：全局的，单个路由独享的，或者组件级的。</p>

            <h4>全局钩子</h4>
            <p>你可以使用 router.beforeEach 注册一个全局的 before 钩子：</p>
            <ul>
              <li>
                类型：Array&lt;RouteConfig&gt;<br>
                RouteConfig 的类型定义：
                <pre>
                  <code>
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
                  </code>
                </pre>
              </li>
            </ul>
            <p>当一个导航触发时，全局的 before 钩子按照创建顺序调用。钩子是异步解析执行，此时导航在所有钩子 resolve 完之前一直处于等待中。</p>
            <p>每个钩子方法接受三个参数：</p>
            <ul>
              <li>
                <strong>to: Route：</strong>即将要进入的目标<a href="">路由对象</a>
              </li>
              <li>
                <strong>from: Route：</strong>当前导航正要离开的路由
              </li>
              <li>
                <strong>next: Function：</strong>一定要调用该方法来resolve这个钩子。执行效果依赖next方法的调用参数。
                <ul>
                  <li><strong>next():</strong>进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是confirmed（确认的）。</li>
                  <li><strong>next(false):</strong>中断当前的导航。如果浏览器的URL改变了（可能是用户手动或者浏览器后退按钮），那么 URL 地址会重置到 from 路由对应的地址。</li>
                  <li><strong>next('/') 或者 next({path: '/'}):</strong>跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。</li>
                </ul>
              </li>
            </ul>
            <p><strong>确保要调用 next 方法，否则钩子就不会被 resolved.</strong></p>
            <p>也同样可以注册一个全局的 after 钩子，不过它不想before钩子那样，after钩子没有next方法，不能改变导航。</p>
            <pre>
              <code>
router.afterEach(route  => {
  // ...
})
              </code>
            </pre>

            <h4>某个路由独享的钩子</h4>
            <p>你可以在一个路由配置上直接定义 beforeEnter 钩子：</p>
            <pre>
              <code>
const router = new VueRouter({
  routes: [
    {
      path: '/router',
      name: 'Vuerouter',
      component: Vuerouter,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
              </code>
            </pre>
            <p>这些钩子与全局 before 钩子的方法参数是一样的。</p>

            <h4>组件内的钩子</h4>
            <p>最后，你可以在路由组件内直接定义路由导航钩子：</p>
            <ul>
              <li>beforeRouteEnter</li>
              <li>beforeRouteUpdate</li>
              <li>beforeRouteLeave</li>
            </ul>
            <pre>
              <code>
  const Foo = {
    template: '...',
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被confirm前调用
      // 不！能！获取组件实例 this
      // 因为当钩子执行前，组件实例还没被创建
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的动态 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下调用。
      // 可以访问能组件实例 this
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 this
    },
  }
              </code>
            </pre>
            <p>beforeRouteEnter 钩子 不能 访问 this，因为钩子在导航确认前被调用,因此即将登场的新组件还没被创建。</p>
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
