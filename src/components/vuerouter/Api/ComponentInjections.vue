<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>对组件注入</h1>
  					<h3>注入的属性</h3>
  					<p>通过在 Vue 根实例的 <code>router</code> 配置传入 router 实例，下面的这些属性成员会被注入到每个子组件。</p>
  					<ul>
  						<li>
  							<h4>$router</h4>
  							<p>router 实例</p>
  						</li>
  						<li>
  							<h4>$route</h4>
  							<p>当前激活的<a href="">路由信息对象</a>。这个属性是只读的，里面的属性是 imumutable （不可变）的，不过你可以 watch （检测变化）他。</p>
  						</li>
  					</ul>
  					<h3>允许的额外配置</h3>
  					<ul>
  						<li><strong>beforeRouteEnter</strong></li>
  						<li><strong>beforeRouteLeave</strong></li>
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
