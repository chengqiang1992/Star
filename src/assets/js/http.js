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