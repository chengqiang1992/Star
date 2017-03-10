<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>Router 构造配置</h1>
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
