// {
// 	// GET /someUrl
// 	this.$http.get('/someUrl').then(response => {
// 		// success callback
// 	}, response => {
// 		// error callback
// 	});
// }

// // global Vue object
// Vue.http.get('/someUrl', [options].then(successCallback, errorCallback));
// Vue.http.post('/someUrl', [body], [options].then(successCallback, errorCallback));

// // in a Vue instance
// this.$http.get('/someUrl', [options].then(successCallback, errorCallback));
// this.$http.post('/someUrl', [body], [options].then(successCallback, errorCallback));

// get(url, [options])
// head(url, [options])
// delete(url, [options])
// jsonp(url, [options])
// post(url, [body], [options])
// put(url, [body], [options])
// patch(url, [body], [options])

// {
// 	// post /someUrl
// 	this.$http.post('/someUrl', {foo: 'bar'}).then(response => {
// 		// get status
// 		response.status;

// 		// get status text
// 		response.statusText

// 		//get 'Expires' header
// 		response.header.get('Expires')

// 		// get body data
// 		response.someData = response.body
// 	}, response => {
// 		// error callback
// 	})
// }

// {
// 	// GET /image.jph
// 	this.$http.get('/image.jpg').then(response => {
// 		// resolve to Blob
// 		return response.Blob();
// 	}).then(blob => {
// 		// use image Blob
// 	});
// }

// Vue.http.interceptors.push(function(request, next){
// 	// modify method
// 	request.method = 'POST';

// 	// modify headers
// 	request.headers.set('X-CSRF-TOKEN', 'TOKEN');
// 	request.headers.set('Authorzation', 'Bearer Token');

// 	// continue to next interceptor
// 	next();
// })

// Vue.http.interceptors.push(function(request, next){

// 	// 请求发送前的处理逻辑

// 	next((response) => {

// 		// 请求发送后的处理逻辑
// 		return response
// 	})
// })

// Vue.http.interceptor.push(function(request, next) {
// 	// modify request
// 	request.method = 'POST'
// 	// continue to next interceptor
// 	next(function(response) {
// 		// modify response
// 		response.body = '...';
// 	});
// });

// Vue.http.interceptor.push(function(request, next) {
// 	// modify request ...

// 	// stop and return response
// 	next(request.responseWith(body, {
// 		status: 404,
// 		statusText: 'Not found'
// 	}));
// });

// get: {method: 'GET'},
// save: {method: 'POST'},
// query: {method: 'GET'},
// update: {method: 'PUT'},
// remove: {method: 'DELETE'},
// delete: {method: 'DELETE'}

// {
// 	var resource = this.$resource('someItem{/id}');

// 	resource.get({id: 1}).then(response => {
// 		this.item = response.body;
// 	})

// 	resource.save({id: 1}, {item: this.item}).then(response => {
// 		// success callback
// 	}, response => {
// 		// error callback
// 	})
// }

// {
// 	var formData = new FormData();

// 	// append string
// 	formData.append('foo', 'bar');

// 	// append Blob/File object
// 	formData.append('pic', fileInput, 'mupic.jpg')

// 	// post /someUrl
// 	this.$http.post('someUrl', formData).then(response => {
// 		// success callback
// 	}, response => {
// 		// error callback
// 	})
// }