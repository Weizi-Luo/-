define(function(require, exports, module) {
	var msg = 'm4';
	// 同步加载
	var m2 = require('./m2');
	m2();
	// 异步加载 按需加载
	require.async('./m3',function(m3) {
		m3.m3();
	})

	function fun() {
		console.log(msg);
	}

	exports.m4 = fun;




});

