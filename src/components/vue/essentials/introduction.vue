<template>
	<div>
		<h1>Introduction</h1>

		<h2>What is Vue.js?</h2>
		<p>Vue (pronounced /vju:/, like view) is a progressive framework for building user interfaces. Unlike other monolithic framework, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very seasy to pick up and intergrate with other libraries or existing projects。 On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Application when used in combination with modern tooling and supporting libraries.</p>

		<h2>Getting Started</h2>
		<p>The official guide assumes intermediate level knowledge of HTML, CSS, and JavaScript. If you are totally new to frountend development, it might not be the best idea to jump right into a framework as your first step-grasp the basics then come back! Prior experience with other frameworks helps, but is not required.</p>

		<h2>Declarative Rendering</h2>
		<p>We have already created our very first Vue app! This looks pretty similar to just rendering a string template, but Vue has done a lot of work under the hood. The data and the DOM are now linked, and everything is now reactive. How do we know? Just open your broser's JavaScript console.log and set app.message to a different value. You should see the rendered example above update accordingly.</p>
		<p>Here we are encountering something new. The v-bind attribute you are seeing is called a directive. Directives are prefixed with v- to indicate that they are special attributes provided by Vue, and as you may have guessed, they apply special reactive behavior to the rendered DOM. Here it is basically saying "keep this element's title attribute up-to-data with the message property on the Vue instance"</p>

		<h2>Conditional and Loops</h2>
		<p>This example demonstrates that we can bind data to not only text and attributes, but also the structure of the DOM. Moreover, Vue also provides a powerful transition effect system that can automatically apply transition effects when elements are inserted/updated/removed by value</p>

		<h2>Handling User Input</h2>
		<p>Note in the method we simply update the state of our appp without touching the DOM - all DOM manipulations are handler by Vue, and the code you write is focused on the underlying logic.</p>

		<h2>Composing with Components</h2>
		<p>The component system is another important concept in Vue, because it's an abstraction that allows us to build large-scale applications composed of small, self-contained, and often reusable components. If we think about is, almost any type of application interface can be abstracted into a tree of components</p>
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

</style>
