<template>
	<div class="book-body">
		<div class="body-inner">
			<div class="page-wrapper">
				<div class="page-inner">
					<h1>Template Syntax</h1>
					<p>Vue.js uses an HTML-based template syntax that allows you to declaratively bind the redered DOM to the underlying Vue instance's data. All Vue.js templates are valid HTML that can be parsed by spec-compliant browsers and HTML parsers.</p>

					<p>Under the hood, Vue compiles the templates into Virtual DOM render functions. Combined with the reactivity system, Vue is able to intelligently figure out the minimal amount of components to re-render and apply the minimal amount of DOM manipulations when the app state changes.</p>
					<section class="normal markdown-section">
						<h2>Interpolations</h2>
						<h3>Text</h3>
						<p>The most basic form of data binding is text interpolation using the "Mustache" syntax (double curly braces):</p>
						<pre>
							<code>
	&lt;span&gt;Message: {{ msg }}&lt;/span&gt;
							</code>
						</pre>
						<p>The mustache tag will be replaced with the value of the <strong>msg</strong> property on the corresponding data object. It will also be updated whenever the data object's <strong>msg</strong> property changes.</p>

						<p>You can also perform one-time interpolation that do not update on data change by using the <a href="">v-once directive</a>, but keep in mind this will also affect any bindling on the same node:</p>
						<pre>
							<code>
	&lt;span v-once&gt;This will never change: {{ msg }}&lt;/span&gt;
							</code>
						</pre>

						<br>
						<h3>Raw HTML</h3>
						<p>The double mustaches interprets the data as plain text, not HTML, In order to output real HTML, you will need to use the <strong>v-html</strong> directive:</p>
						<pre>
							<code>
	&lt;div v-html=&quot;rawHtml&quot;&gt;&lt;/div&gt;
							</code>
						</pre>
						<p>The contents are inserted as plain HTML - data bindings are ingnored. Note that you cannot use v-html to compose template partials, because Vue is not a string based templating engine. Instead, components are preferred as the fundamental unit for UI reuse and composition.</p>

						<br>
						<h3>Attributes</h3>
						<p>Mustaches cannot be used inside HTML attributes, instead use a <a>v-bind directive</a>:</p>
						<pre>
							<code>
	&lt;div v-bind:id=&quot;dynamicId&quot;&gt;&lt;/div&gt;
							</code>
						</pre>
						<p>It also works for boolean attributes - the attribute will be removed if the condition evaluates to a falsy value:</p>
						<pre>
							<code>
	&lt;button v-bind:disabled=&quot;someDynamicCondition&quot;&gt;Button&lt;/button&gt;
							</code>
						</pre>

						<br>
						<h3>Using JavaScript Expressions</h3>
						<p>So far we've only been binding to simeple property key's in our templates. BUt Vue.js actually support the full power of JavaScript expressions inside all data bindings:</p>
						<pre>
							<code>
<!-- 	{{ number +1 }}
	{{ ok ? 'YES' : 'No'}}
	{{ message.split('').reverse().join('')}}
	&lt;div v-bind:id=&quot;&#39;list-&#39; + id&quot;&gt;&lt;/div&gt; -->
							</code>
						</pre>
						<p>These expressions will be evaluated as JavaScript in the data scope of the owner Vue instance. One restriction is that each binding can only contain <strong>One single expression</strong>, so the following will <strong>NOT</strong> work:</p>
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
