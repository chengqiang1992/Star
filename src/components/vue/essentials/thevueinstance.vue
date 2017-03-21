<template>
	<div class="book-body">
		<div class="body-inner">
			<div class="page-wrapper">
				<div class="page-inner">
					<section class="normal markdown-section">
						<h1>The Vue Instance</h1>

						<h2>Constructor</h2>
						<p>Every Vue vm is bootstrapped by creating a <strong>root Vue instance</strong>with the <strong>Vue</strong> constructor function:</p>
						<pre>
							<code>
	var vm = new Vue({
		// option
	})
							</code>
						</pre>
						<p>Although not strictly associated with the <a href="">MVVM pattern</a>, Vue's design was partly inspired by it. As a convention, we often use the variable <strong>vm</strong>(short for ViewModel) to refer to our Vue instances.</p>
						<p>When you instantiate a Vue instance, you need to pass in an <strong>option object</strong> which can contain options for data, template, element to mount on, methods, lifecycle callbacks and more. The full list of options can be found in the <a href="">API reference</a>.</p>

						<p>The <strong>Vue</strong> constructor cna be extended to create reusable component constructor with pre-defined options:</p>
						<pre>
							<code>
	var MyComponent = Vue.extend({
		// extension options
	})

	// all instances of MyComponent are created with
	// the pre-defined extension options
	var myComponentInstance = new MyComponent()
							</code>
						</pre>
						<p>Although it is possible to create extended instance imperatively, most of the time it si recommended to compose them declaratively in templates as custom elements. We will talk about <a href="">the component system</a>in detail later. For now, you just need to know that all Vue components are essentially extended Vue instance.</p>
					</section>

					<section class="normal markdown-section">
						<h2>Properties and Methods</h2>
						<p>Each Vue instance <strong>proxies(代理)</strong> all the properties found in its <strong>data</strong>object:</p>
						<pre>
							<code>
	var data = { a: 1}
	var vm = new Vue({
		data: data
	})
	vm.a === data.a 	// -> true
	// setting the property also affects original data
	vm.a = 2
	data.a 		// -> 2
	// ... and vice-versa
	data.a = 3
	vm.a 	// -> 3
							</code>
						</pre>
						<p>It should be noted that only theses proxied properties are reactive. If you attach a new property to the instance after it has been created, it will not trigger any view updates. We will discuss the reactivity system in detail later.</p>

						<p>In addition to data properties, Vue instances expose a number of useful instances properties and methods. These properties and methods are profixed with <strong>$</strong> to differentiate them from profixed data properties. For example:</p>
						<pre>
							<code>
	var data = { a: 1 }
	var vm = new Vue({
	  el: '#example',
	  data: data
	})
	vm.$data === data // -> true
	vm.$el === document.getElementById('example') // -> true
	// $watch is an instance method
	vm.$watch('a', function (newVal, oldVal) {
	  // this callback will be called when `vm.a` changes
	})
							</code>
						</pre>
					</section>

					<section class="normal markdown-section">
						<h2>Instance Lifecycle Hooks</h2>
						<p>Each Vue instances goes through a series of initialization steps when it is created for example, it needs to set up data observation, compile the template, mount the instance to the DOM, and update the DOM when data changes. Aloong the way, it will also invoke some <strong>Lifecycle hooks</strong>, which give us the opportunity to execute custom logic. For example, the <strong>created</strong> hook is called after the instance is created:</p>
						<pre>
							<code>
	var vm = new Vue({
		data: {
			a: 1
		},
		created: function () {
			// 'this' points to the vm instance
			console.log('a is:' + this.a)
		}
	})
							</code>
						</pre>
						<p>There are also other hooks which will be called at different stages of the instances's lifecycle, for example <strong>mounted, updated, and destroyed</strong></p>
						<strong>beforeCreate</strong>
						<strong>created</strong>
						<strong>beforeMount</strong>
						<strong>mounted</strong>
						<strong>beforeUpdate</strong>
						<strong>updated</strong>
						<strong>beforeDestory</strong>
						<strong>Destoryed</strong>
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
