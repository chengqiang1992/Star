<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>Vue.js</h1>
  					<p>The Progressive JavaScript Framework</p>
            <h2>Approachable</h2>
            <p>Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!</p>
            <h2>Versatile</h2>
            <p>Simple, minimal core with an incrementally adoptable stack that can handle apps of any scale.</p>
            <h2>Performant</h2>
            <p>18kb min+gzip Runtime Blazing Fast Virtual DOM Minimal Optimization Efforts</p>
            <ul class="summary">
              <li class="chapter">
                <span>Essentials</span>
                <ul class="articles">
                  <li class="chapter">
                    <router-link :to="{ name: 'introduction'}">Installation</router-link>
                  </li>
                  <li class="chapter">
                    <router-link :to="{ name: 'DynamicMatching'}">Introduction</router-link>
                  </li>
                  <li class="chapter">
                    <a href="">The Vue Instance</a>
                  </li>
                  <li class="chapter">
                    <a href="">Template Syntax</a>
                  </li>
                  <li class="chapter">
                    <a href="">Computed Properties and Watchers</a>
                  </li>
                  <li class="chapter">
                    <a href="">Class and Style Bindings</a>
                  </li>
                  <li class="chapter">
                    <a href="">Conditional Rendering</a>
                  </li>
                  <li class="chapter">
                    <a href="">List Rendering</a>
                  </li>
                  <li class="chapter">
                    <a href="">Event Handling</a>
                  </li>
                  <li class="chapter">
                    <a href="">Form Input Bindings</a>
                  </li>
                  <li class="chapter">
                    <a href="">Components</a>
                  </li>
                </ul>
              </li>
              <li class="chapter">
                <span>Advanced</span>
                <ul class="articles">
                  <li class="chapter">
                  <router-link :to="{ name: 'NavigationGuards'}">Reactivity in Depth</router-link>
                  </li>
                  <li class="chapter">
                    <router-link :to="{ name: 'Meta'}">Transition Effects</router-link> 
                  </li>
                  <li class="chapter">
                    <a href="">Transitioning State</a>
                  </li>
                  <li class="chapter">
                    <a href="">Render Functions</a>
                  </li>
                  <li class="chapter">
                    <a href="">Custom Directives</a>
                  </li>
                  <li class="chapter">
                    <a href="">Mixins</a>
                  </li>
                  <li class="chapter">
                    <a href="">Plugins</a>
                  </li>
                  <li class="chapter">
                    <a href="">Single File Components</a>
                  </li>
                  <li class="chapter">
                    <a href="">Production Deployment Tips</a>
                  </li>
                  <li class="chapter">
                    <a href="">Routing</a>
                  </li>
                  <li class="chapter">
                    <a href="">State Management</a>
                  </li>
                  <li class="chapter">
                    <a href="">Unit Testing</a>
                  </li>
                  <li class="chapter">
                    <a href="">Server-Side Rendering</a>
                  </li>
                  <li class="chapter">
                    <a href="">TypeScript Support</a>
                  </li>
                </ul>
              </li>
            </ul>
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
