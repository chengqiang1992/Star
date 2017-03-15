console.log('hello world')

var promise = new Promise(function(resolve, reject) {
	// ... some code

	if (/* 异步操作成功 */) {
		resolve(value);
	} else {
		reject(error);
	}
});

promise.then(function(value) {
	// success
}, function(error) {
	// failure
});

function timeout(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(resolve, ms, 'done')
	});
}
timeout(100).then((value) => {
	console.log(value);
});

let promise = new Promise(function(resolve, reject) {
	resolve();
	console.log('Promise');
	resolve();
});

promise.then(function() {
	console.log('Resolved');
});

console.log('Hi!')

function loadImageAsync(url) {
	return new Promise(function(resolve, reject) {
		var image = new Image();
		image.onload = function() {
			resolve(image);
		};
		image.onerror = function() {
			reject(new Error('Could not load image at ' + url));
		};
		image.src = url
	});
}
loadImageAsync('https://flipermag.com/2016/12/09/grandmaster/')


var getJSON = function(url) {
	var promise = new Promise(function(resolve, reject) {
		var client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = 'json';
		client.setRequestHeader('Accept', 'application/json');
		client.send();

		function handler() {
			if (this.readyStatus !== 4) {
				return;
			}
			if (this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
	});
	return promise;
};

getJSON('/posts.json').then(function(json) {
	console.log('Contents: ' + json);
}, function(error) {
	console.log('出错了', error)
});

var p1 = new Promise(function (resolve, reject) {
	// ...
});

var p2 = new Promise(function (resolvem reject) {
	// ...
	resolve(p1);
});


var p1 = new Promise(function (resolve, reject) {
	setTimeout(() => reject(new Error('fail')), 3000)
});

var p2 = new Promise(function (resolvem reject) {
	setTimeout(() => resolve(p1), 1000)
});
p2
	.then(result => console.log(result))
	.catch(error => console.log(error))


new Vue({
	el: "#some-element",
	// options
})

Vue.component('my-component', {
	// options
})

