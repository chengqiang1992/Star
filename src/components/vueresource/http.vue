<template>
  <div class="book-body">
  	<div class="body-inner">
  		<div class="page-wrapper">
  			<div class="page-inner">
  				<section class="normal markdown-section">
  					<h1>HTTP</h1>
  					<p>The http service can be used globally Vue.http or in a Vue instance this.$http.</p>
            <h2>Usage</h2>
            <p>A Vue instance provides the this.$http service which can send HTTP requests. A request method call returns a Promise that resolves to the response. Also the Vue instance will be automatically to this in all function callback.</p>
            <pre>
              <code>
  {
    // GET /someUrl
    this.$http.get('/someUrl').then(response => {
      // success callback
    }, response => {
      // error callback
    });
  }
              </code>
            </pre>

            <h2>Methods</h2>
            <p>Shortcut methods are available for all requests types. These methods work globally or in a Vue instance</p>
            <pre>
              <code>
  // global Vue object
  Vue.http.get('/someUrl', [options].then(successCallback, errorCallback));
  Vue.http.post('/someUrl', [body], [options].then(successCallback, errorCallback));

  // in a Vue instance
  this.$http.get('/someUrl', [options].then(successCallback, errorCallback));
  this.$http.post('/someUrl', [body], [options].then(successCallback, errorCallback));
              </code>
            </pre>
            <p>List of shortcut methods:</p>
            <pre>
              <code>
  get(url, [options])
  head(url, [options])
  delete(url, [options])
  jsonp(url, [options])
  post(url, [body], [options])
  put(url, [body], [options])
  patch(url, [body], [options])
              </code>
            </pre>

            <p>Options</p>
            <table>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Type</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    url
                  </td>
                  <td>string</td>
                  <td>URL to which the request is send</td>
                </tr>
                <tr>
                  <td>body</td>
                  <td>Object, ForData, string</td>
                  <td>Data to be sent as the request body</td>
                </tr>
                <tr>
                  <td>header</td>
                  <td>Object</td>
                  <td>Headers object to be sent as HTTP request headers</td>
                </tr>
                <tr>
                  <td>params</td>
                  <td>Object</td>
                  <td>Parameters object to be sent as URL parameters</td>
                </tr>
                <tr>
                  <td>method</td>
                  <td>string</td>
                  <td>HTTP method(e.g. GET,POST,...)</td>
                </tr>
                <tr>
                  <td>timeout</td><td>number</td><td>Request timeout in milliseconds(0 means no timeoute)</td>
                </tr>
                <tr>
                  <td>before</td><td>function(request)</td><td>Callback function to modify the request options before it is sent</td>
                </tr>
                <tr>
                  <td>progress</td><td>function(event)</td><td>Callback function to handle the ProgressEvent of uploads</td>
                </tr>
                <tr>
                  <td>credentials</td><td>boolean</td><td>Indicates whether or not cross-site Access-Control requests should be made using credentials</td>
                </tr>
                <tr>
                  <td>emulateHTTP</td><td>boolean</td><td>Send PUT,PATCH and DELETE requests with a HTTP POST and set the X-HTTP-Method-Override header</td>
                </tr>
                <tr>
                  <td>emulateJSON</td><td>boolean</td><td>Send request body as application/x-www-form-urlencoded content type</td>
                </tr>

              </tbody>
            </table>

            <h2>Response</h2>
            <p>A request resolves to a response objetc with the following properties and methods:</p>
            <table>
              <thead>
                <tr><th>Property</th><th>Type</th><th>Description</th></tr>
              </thead>
              <tbody>
                <tr><td>url</td><td>string</td><td>Response URL origin</td></tr>
                <tr><td>body</td><td>Object, Blob, string</td><td>Response body data</td></tr>
                <tr><td>headers</td><td>header</td><td>Response Headers object</td></tr>
                <tr><td>ok</td><td>boolean</td><td>HTTP status code between 200 and 299</td></tr>
                <tr><td>status</td><td>number</td><td>HTTP status code of the response</td></tr>
                <tr><td>statusText</td><td>string</td><td>HTTP status text of the response</td></tr>
              </tbody>
            </table>

            <h2>Example</h2>
            <pre>
              <code>
  {
    // post /someUrl
    this.$http.post('/someUrl', {foo: 'bar'}).then(response => {
      // get status
      response.status;

      // get status text
      response.statusText

      //get 'Expires' header
      response.header.get('Expires')

      // get body data
      response.someData = response.body
    }, response => {
      // error callback
    })
  }
              </code>
            </pre>

            <p>Fetch an image and use the blob() method to extract the image body content from the response.</p>
            <pre>
              <code>
  {
    // GET /image.jph
    this.$http.get('/image.jpg').then(response => {
      // resolve to Blob
      return response.Blob();
    }).then(blob => {
      // use image Blob
    });
  }
              </code>
            </pre>

            <h2>Interceptors</h2>
            <p>Interceptors can be defined globally and are used for pre- and postprocessing of a request. If a request  is send using this.$http or this.$resource the current Vue instance is available as this in a interceptor callback</p>
            <h3>Request processing</h3>
            <pre>
              <code>
  Vue.http.interceptors.push(function(request, next){
    // modify method
    request.method = 'POST';

    // modify headers
    request.headers.set('X-CSRF-TOKEN', 'TOKEN');
    request.headers.set('Authorzation', 'Bearer Token');

    // continue to next interceptor
    next();
  })
              </code>
            </pre>
            <p>实例</p>
            <pre>
              <code>
  Vue.http.interceptors.push(function(request, next){

    // 请求发送前的处理逻辑

    next((response) => {

      // 请求发送后的处理逻辑
      return response
    })
  })
              </code>
            </pre>
            <h3>Request and Response processing</h3>
            <pre>
              <code>
  Vue.http.interceptor.push(function(request, next) {
    // modify request
    request.method = 'POST'
    // continue to next interceptor
    next(function(response) {
      // modify response
      response.body = '...';
    });
  });
              </code>
            </pre>
            <h3>Return a Response and stop processing</h3>
            <pre>
              <code>
  Vue.http.interceptor.push(function(request, next) {
    // modify request ...

    // stop and return response
    next(request.responseWith(body, {
      status: 404,
      statusText: 'Not found'
    }));
  });
              </code>
            </pre>
  				</section>
  			</div>
  		</div>
  	</div>
  </div>
</template>

<script>
// import http from '../../assets/js/http.js'
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
