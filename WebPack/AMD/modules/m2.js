// 第一个参数：ID名字，第二个参数：依赖于哪个模块，第三个参数：
define(['m1'],function(m1){
	var msg = 'm2-amd';
	function show() {
		console.log(msg, m1.getName());
	}
	return {show};
})