<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>动态路由匹配</h1>
            <p>我们经常需要把某种模式匹配的所有路由，全都映射到同个组件。例如，我们有一个 User 组件，对于所有 ID 和不相同的用户，都要使用这个组件来渲染。那么，我们可以在 vue-router 的路由路径中使用 [动态路径参数](dynamic segment) 来达到这个效果：</p>
            <pre>
              <code>
const User = {
  template: '&lt;div&gt;User&lt;/div&gt;'
}

const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User}
  ]
})
              </code>
            </pre>
            <p>现在呢，像 /user/foo 和 /user/bar 都将映射到相同的路由。</p>
            <p>一个[路径参数]使用冒号: 标记。当匹配到一个了路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用。于是，我们可以更新User的模板，输出当前用户的ID：</p>
            <pre>
              <code>

const User = {
  template: '&lt;div&gt;User&lt; {{ $route.params.id }}/div&gt;'
}
              </code>
            </pre>
            <p>你可以看这个在线的例子</p>
            <p>你可以在一个路由中设置多段[路径参数]，对应的值都会设置到 $route.params 中。例如：</p>
            <table>
              <thead>
                <tr>
                  <th>模式</th>
                  <th>匹配路径</th>
                  <th>$route.params</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>/user/:username</td>
                  <td>/user/evan</td>
                  <td>{ username: 'evan' }</td>
                </tr>
                <tr>
                  <td>/user/:username/post/:post_id</td>
                  <td>/user/evan/post/123</td>
                  <td>{ username: 'evan', post_id: 123}</td>
                </tr>
              </tbody>
            </table>
                
  					<h4>routes</h4>
            <ul>
              <li>
                类型：Array&lt;RouteConfig&gt;<br>
                RouteConfig 的类型定义：
                <pre>
                  <code>
  declare type RouteConfig = {
    path: string;
    component?: Component;
    name?: string;  // for name routes (命名路由)
    components?: { [name: string]: Component };   // for named views (命名视图组件)
    redirect?: string | Location | Function;
    alias?: string | Array&lt;string&gt;;
    children?: Array&lt;RouteConfig&gt;;    // for nested route
    beforeEnter?: (to: Route, from: Route, next: Function) => void;
    meta?: any;
  }
                  </code>
                </pre>
              </li>
            </ul>
            <h4>mode</h4>
            <ul>
              <li>
                类型：string
              </li>
              <li>
                默认值："hash" (浏览器环境) | "abstract" (node.js 环境)
              </li>
              <li>
                <p>可选值："hash" | "history" | "abstract"</p>
                <p>配置路由模式：</p>
                <ul>
                  <li>hash：使用 URL hash值来作路由。支持所有浏览器，包括不支持 HTML History Api 的浏览器</li>
                  <li>history: 依赖 HTML5 History API 和服务器配置。查看 HTML5 History 模式</li>
                  <li>abstract: 支持所有 JavaScript 运行环境，如 Node.js 服务器端。<strong>如果发现没有浏览器的 API，路由会自动强制进入这个模式</strong></li>
                </ul>        
              </li>
            </ul>
            <h4>base</h4>
            <ul>
              <li>类型：string</li>
              <li>
                <p>默认值："/"</p>
                <p>应用的基路径。例如，如果整个单页应用服务在 /app/ 下，然后 base 就应该设为 "/app/"</p>
              </li>
            </ul>
            <h4>scrollBehavior</h4>
            <ul>
              <li>
                <p>类型：Function</p>
                <p>签名：</p>
              </li>
              <li>
                <p>默认值："/"</p>
                <pre>
                  <code>
(
  to: Route,
  from: Route,
  savePostion?: { x: number, y: number}
) => { x:number, y: number} | { selector: string } | ?{}
                  </code>
                </pre>
              </li>
            </ul>

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
