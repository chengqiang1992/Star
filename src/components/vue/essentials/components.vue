<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>Components</h1>
            <h2>What are Components</h2>
            <p>Components are one of the most powerful features of Vue. They help you extend basic HTML elements to encapsulate reusable code. At a high level, components are custom elementsthat Vue's compiler attaches behaviors to. In some cases, they may also appear as a native HTML element extended with the special is attribute.</p>

            <h2>Using Components</h2>
            <h3>Registration</h3>
            <p>We've learned in the previous sections that we can create a new Vue instance with:</p>
            <pre>
              <code>
    new Vue({
      el: "#some-element",
      // options
    })
              </code>
            </pre>
            <p>To register a global component, you can use Vue.component(tagName, Options). For example:</p>
            <pre>
              <code>
    Vue.component('my-component', {
      // options
    })
              </code>
            </pre>
            <p>Once registered, a component can be used in an instance's template as a custom element, <my-component></my-component>.Make sure component is registered before you instantiate the root Vue instance. Here's the full example:</p>
            <pre>
              <code>
    <div id="example">
      <my-component></my-component>
    </div>
              </code>
            </pre>

            <h3>Local Registration</h3>

            <h3>Dom Template Parsing Caveats</h3>

            <h3>data Must Be a Function</h3>

            <h3>Composing Components</h3>

            <h2>Props</h2>

            <h3>Passing Data with Props</h3>

            <h3>camelCase vs. Kebab-case</h3>

            <h3>Dynamic Props</h3>

            <h3>Literal vs. Dynamic</h3>

            <h3>One-way Data Flow</h3>

            <h3>Prop Validation</h3>

            <h2>Custom Events</h2>

            <h3>Using v-on with custom Events</h3>
            <h3>Form Input Components using custom Events</h3>
            <h3>Customzing Component v-model</h3>
            <h3>Non Parent-child Communication</h3>

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
