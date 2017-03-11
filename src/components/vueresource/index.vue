<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>vue-resource</h1>
  					<p>The plugin for Vue.js procides services for making web requests and handle response using a XMLHttpRequest or JSONP.</p>
  					<h3>Features</h3>
  					<ul>
  						<li>Supports the Promise API and URI Templates</li>
  						<li>Supports interceptors for request and response</li>
  						<li>Supports latest Firex, Chrome, Safari, Opera and IE9+</li>
  						<li>Compact size 14kb (5.3 kv gzipped)</li>
  					</ul>
  					<h3>Documentation</h3>
  					<ul>
  						<li><router-link :to="{ name: 'configuration'}">Configuration</router-link></li>
  						<li><router-link :to="{ name: 'http'}">HTTP Requests/Response</router-link></li>
  						<li><router-link :to="{ name: 'resource'}">Creating Resources</router-link></li>
  						<li><router-link :to="{ name: 'recipes'}">Code Recipes</router-link></li>
  						<li>API Reference</li>
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
