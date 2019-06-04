

// es5 模仿 es6

		// 总结:
		// 1. class构造的函数不能通过非new的方式执行
		// 2. class里的Plane.prototype和静态属性不能不能枚举
		// 3. 静态属性要放到Plane 非原型


		// 通过非new的方式执行报错
		function _classCallcheck (instance, Constructor) {
			if (!(instance instanceof Constructor)) {
				throw new TypeError("Cannot call a class as a function");
			
		}

		// function Plane () {
		// 	// new的时候会创建一个this
		// 	_classCallcheck(this, Plane);
		// }
		
		// new Plane();


		var Plane = (function () {
			function Plane (name) {
				// 判断是否已new的方式来执行
				_classCallcheck(this, Plane);
				this.name = name || '普通飞机';
				this.blodd = 100;
			}
			return Plane;
		})();



