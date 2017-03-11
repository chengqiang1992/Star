<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>Resource</h1>
            <p>The resource service can be used globally Vue.resource or in a Vue instance this.$http</p>

            <h2>Methods</h2>
            <ul><li>resource(url, [params], [actions], [options])</li></ul>

            <h2>Default Actions</h2>
            <pre>
              <code>
  get: {method: 'GET'},
  save: {method: 'POST'},
  query: {method: 'GET'},
  update: {method: 'PUT'},
  remove: {method: 'DELETE'},
  delete: {method: 'DELETE'}
              </code>
            </pre>

            <h2>Example</h2>
            <pre><code>
  {
    var resource = this.$resource('someItem{/id}');

    resource.get({id: 1}).then(response => {
      this.item = response.body;
    })

    resource.save({id: 1}, {item: this.item}).then(response => {
      // success callback
    }, response => {
      // error callback
    })
  }
            </code></pre>
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
