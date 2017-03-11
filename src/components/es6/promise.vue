<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>Promise 对象</h1>
		            <ul>
		              <li>
		              	<a href="#1">1. Promise的含义</a>
		              </li>
		              <li><a href="#2">2. 基本的用法</a></li>
		              <li><a href="#3">3. Promise.prototype.then()</a></li>
		              <li><a href="#4">4. Promise.protype.catch()</a></li>
		              <li><a href="">5. Promise.all()</a></li>
		              <li><a href="">6. Promise.race()</a></li>
		              <li><a href="">7. Promise.resolve()</a></li>
		              <li><a href="">8. Promise.reject()</a></li>
		              <li><a href="">9. 两个有用的附加方法</a></li>
		              <li><a href="">10. 应用</a></li>
		              <li><a href="">11. Promise.try()</a></li>
		            </ul>

		            <h2 id="1">1. Promise 的含义</h2>
		            <p>Promise 是异步编程的一种解决方案，比传统的解决方案 -- 回调函数和事件 -- 更合理和更强大。它有社区更早提出和实现，ES6 将其写入了语言标准，统一了用法，原生提供了 Promise 对象。</p>
		            <p>所谓 Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）。从语法上说，Promise是一个对象，从他可以获取异步操作的消息。Promise提供统一的API，各种异步操作都可以用同样的方法进行处理。</p>
		            <p>Promise对象有一下两点。</p>
		            <p>（1）对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending（进行中）、Resolved（已完成，又称Fullfilled）和Rejected（已失败）。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，他的英语意思是“承诺”，表示其他手段无法改变。</p>
		            <p>（2）一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：从Pending到Resolved和从Pending到Rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果。就算改变已经发生了，你再对 Promise 对象添加回调函数，也会立即得到这个结果。这与事件完全不停。</p>


		            <h2 id="2">2. 基本用法</h2>
		            <p>ES6规定，Promise对象是一个构造函数，用来生成Promise实例。</p>
		            <p>下面代码创造了一个Promise实例。</p>
		            <pre>
		            	<code>
	var promise = new Promise(function(resolve, reject) {
		// ... some code

		if (/* 异步操作成功 */) {
			resolve(value);
		} else {
			reject(error);
		}
	});
		            	</code>
		            </pre>
		            <p>Promise构造函数接受一个函数作为参数，该函数的两个参数分别是 resolve 和 reject。他们是两个函数，由JavaScript引擎提供，不用自己部署。</p>
		            <p>resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”（即从Pending变为Resolved），在异步操作成功时调用，并将异步操作的结果，作为参数传递出去；reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”（即从Pending变为Rejected），在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。</p>
		            <p>Promise实例生成以后，可以用then方法分别指定resolved状态和Rejected状态的回调函数。</p>
		            <pre>
		            	<code>
		            		
	promise.then(function(value) {
		// success
	}, function(error) {
		// failure
	});
		            	</code>
		            </pre>

		            <p>下面是一个简单的例子</p>
		            <h2 id="3">1. Promise 的含义</h2>
		            <h2 id="4">1. Promise 的含义</h2>
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
  },
  created: function () {
    // `this` 指向 vm 实例
    console.log('a is: ' + this.a)
    function timeout (ms) {
      return new Promise((resolve, reject) => {
        setTimeout(resolve, ms, 'done')
      })
    }
    timeout(1000 * 3).then((value) => {
      console.log(value)
    })
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
