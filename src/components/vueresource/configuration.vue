<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>Configuration</h1>
  					<p>Set default values using the global configuration.</p>
            <pre>
              <code>
                Vue.http.options.root = '/root';
                Vue.http.headers.common['Authorization'] = 'Basic YXBpOnBhc3N3b3Jk'
              </code>
            </pre>
            <p>Set default values inside your Vue component options.</p>
            <pre>
              <code>
                new Vue({
                  http: {
                    root: '/root',
                    header: {
                      Authorization: 'Basic YXBpOnBhc3N3b3Jk'
                    }
                  }
                })
              </code>
            </pre>
            <P>Note thta for the root option to work, the path of the request must be relative. This will use this the root option:Vue.http.get('someUrl') while this will not: Vue.http.get('/someUrl').</P>

            <h2>Webpack/Browserify</h2>
            <p>Add vue and vue-resource to your package.json. then npm install, then add these lines in your code:</p>
            <pre>
              <code>
                var Vue = require('vue');
                var VueRequire = require('vue-resource');

                Vue.sue(VueRequire)
              </code>
            </pre>
            <h2>Legacy web servers</h2>
            <p>If your web server can't handle requests encoded as application/json, you can enable the emulateJSON option. This will send the request as application/x-www-form-urlencoded MIME type, as if an normal HTML form</p>
            <pre>
              <code>
                Vue.http.options.emulateJSON = true;
              </code>
            </pre>
            <p>If your web server can't handle REST/HTTP requests like PUT, PATCH and DELETE, you can ebable the emulateHTTP option. THis will set the X-HTTP-Metghod-Override header with the actual HTTP method and use a normal POST request.</p>
            <pre>
              <code>
                Vue.http.options.emulateHTTP = true;
              </code>
            </pre>
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
