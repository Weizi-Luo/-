		
		(function () {
			function jQuery (selector) {
				return new jQuery.prototype.init(selector);
			}
			jQuery.prototype.init = function (selector) {
				//选出 dom 并且包装成jQuery 对象返回
				
				this.length = 0;

				// ep()方法中    
				if(selector == null) {
					return this;
				}

				// 	获取原生的 class 或 id
				
				if(typeof selector == 'string' && selector.indexOf('.') != -1){
					var dom = document.getElementsByClassName( selector.slice(1) );
				}else if (typeof selector == 'string' && selector.indexOf('#') != -1){
					var dom = document.getElementById( selector.slice(1) );
				}

				 if (selector instanceof Element || dom.length == undefined) {
				 	this[0] = dom || selector;
				 	this.length++
				 }else{
				 	for (var i =0; i < dom.length; i++){
				 		this[i] = dom[i];
				 		this.length++
				 	}
				 }
				 return this;
				
			}


			jQuery.prototype.pushStack = function (dom) {
				if(dom.constructor != jQuery) {
					dom = jQuery(dom);
				}
				dom.prevObjct = this;
				return dom;	
			}
			

			jQuery.prototype.css = function (config) {
				for (var i = 0; i < this.length; i++) {
					for (var attr in config) {
						this[i].style[attr] = config[attr];
					}
				}
				// 链式操作精髓
				return this;
			}

			// .get()  方法
			jQuery.prototype.get = function (num) {
				return num != null ? (num >= 0 ? this[num] : this[num + this.length]) : [].slice.call(this,0);
			}


			// .eq()   方法
			jQuery.prototype.eq = function (num) {
				var dom = num != null ? (num >= 0 ? this[num] : this[num + this.length]) : null;

				return this.pushStack(dom);
			}


			// .add()  方法
			jQuery.prototype.add = function (selector) {
				var curObj = jQuery(selector);
				var baseObj = this;
				var newObj = jQuery();


				for(var i = 0; i < curObj.length;i++) {
					newObj[newObj.length++] = curObj[i]
				}
				for(var i = 0; i < baseObj.length;i++) {
					newObj[newObj.length++] = baseObj[i]
				}

				this.pushStack(newObj);

				return newObj;

			}


			// .end()  方法
			jQuery.prototype.end = function () {
				return this.prevObjct;
			}


			// 	事件 .on() 方法


			jQuery.prototype.myOn = function (type, handle) {

				for (var i = 0; i < this.length; i++){
					if(!this[i].cacheEvent){
						this[i].cacheEvent = {};
					}
					if(!this[i].cacheEvent[type]){
						this[i].cacheEvent[type] = [handle];
					}else{
						this[i].cacheEvent[type].push(handle);
					}
					
				}
			}


			jQuery.prototype.myTrigger = function (type) {
				var params = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
				var self = this;
				console.log(this)
				for ( var i = 0; i < this.length; i++) {
					if (this[i].cacheEvent[type] ) {
						this[i].cacheEvent[type].forEach(function (ele, index) {
							ele.apply(self, params)
						});
					}
				}
			}


		//  queque() 队列方法

		// console.log(
		// 	$('.demo').myQueue('chain', function (a) {console.log(1);a()})
		// 			   .myQueue('chain', function (next) {console.log(2);next()})
		// 			    .myQueue('chain', function (next) {console.log(3);})
		// )	
	 	// console.log($('.demo').myDequeue('chain'))

			jQuery.prototype.myQueue = function () {
				var queueObj = this;
				var queueName = arguments[0] || 'fx';
				var addFunc = arguments[1] || null;
				var len = arguments.length;

				// 在myDequeue调用时获取到名为chain队列里的内容
				if (len == 1) {
					return queueObj[0][queueName];
				}

				// 1.创建dom[0]中名为chain的数组队列 {,,chain:[],,}  2.往已有队列中添加内容
				queueObj[0][queueName] == undefined ? queueObj[0][queueName] = [addFunc] : queueObj[0][queueName].push(addFunc);
				return this;
			}

			jQuery.prototype.myDequeue = function (type) {
				var self = this;
				
				var queueName = arguments[0] || 'fx';
				// 获取整个队列
				var queueArr = this.myQueue(queueName);
				// 定义:将第一个进队的返回
				var currFunc = queueArr.shift();
				// 所有入队的东西都取出，队列为空停止操作
				if (currFunc == undefined) {
					return;
				}
 
				var next = function () {
					self.myDequeue(queueName);
				}
				// 执行: 将第一个进队的返回 ( function (a) {} ), 并传入next实参,可由fn内
				// 	    的形参a接收然后执行，从而实现递归将后面进队的一一返回直到队列为空。
				currFunc(next);
				return this;			
			}


		// 由Dequeue方法 对闭包，形参，实参，数组以及函数传参和递归有了进一步的应用拓展
		// 其底层思想是 :
			// function all (a) {
			// 	console.log('b')
			// 	a();		
			// }

			// (function () {
			// 	var next = function () {
			// 		console.log('a')
			// 	}
			// 	all(next);
			// })();


		// animate() 方法

		jQuery.prototype.myDelay = function (duration) {
			var queueArr = this[0]['fx'];
			queueArr.pushr(function () {
				setTimeout(function () {
					next();
				}, duration)
			});
			return this;
		}

		jQuery.prototype.myAnimate = function (json, callback) {
			var len = this.length;
			var self = this;

			var baseFunc = function (next) {
				
				var times = 0;
				for (var i = 0;i < len; i++) {
					startMove(self[i], json, function () {
						times++;
						if(times == len) {
							callback && callback();
							next();
						}
					});
				}
			}

			this.myQueue('fx', baseFunc);
			if(this.myQueue('fx').length == 1) {
				this.myDequeue('fx');
			}
		}



		// Callbacks 方法

		jQuery.myCallbacks = function () {

			// 存储参数
			var options = arguments[0] || '';
			// 通过add 来加入的方法
			var list = [];
			// 索引记录当前要执行的函数的索引
			var fireIndex = 0;
			// 记录是否有被fire过
			var fired = false;
			// 实际参数列表
			var args = [];

			var fire = function () {
				for (;fireIndex < list.length; fireIndex++) {
					// console.log(fireIndex)
					list[fireIndex].apply(window, args);
				}
				if (options.indexOf('once') != -1) {
					list = [];
					fireIndex = 0;
				}
			}
			

			return {
				add: function (func) {
					list.push(func);
					if( options.indexOf('memory') != -1 && fired ) {
						// args = [];
						console.log(fireIndex)
						fire();
					}
					return this;
				},
				fire: function () {
					fired = true;
					// 归0后 第二次依然可以执行
					console.log(fireIndex)
					args = arguments;
					fire();

				}
			}
		}


		jQuery.myDeferred = function () {
			// 3个 callback
			var arr = [
				[
					jQuery.myCallbacks('once memory'), 'done', 'resolve'
				],[
					jQuery.myCallbacks('once memory'), 'fail', 'reject'
				],[
					jQuery.myCallbacks('memory'), 'progress', 'notify'
				]
			];

			var pendding = true;

			var deferred = {};

			for (var i = 0; i < arr.length; i ++) {


				// 注册
				// deferred['done'] = funciton() {}
				// deferred['fail'] = function() {}
				// deferred['progress'] = function() {}
				deferred[ arr[i][1] ] = (function (index) {
					return function (func) {
						arr[index][0].add(func)
					}
				})(i);


				// 触发

				// deferred['resolve'] = funciton() {}
				// deferred['reject'] = function() {}
				// deferred['notify'] = function() {}

				deferred[ arr[i][2] ] = (function (index) {
					return function () {
						var args = arguments;
						if(pendding) {
							arr[index][0].fire().apply(window, args);
							arr[index][2] == 'resolve' || arr[index][2] == 'reject' ? pendding = false : '';
						}
					}
				})(i);
			}
			return deferred;

		}












		




			jQuery.prototype.init.prototype = jQuery.prototype;
			window.$ = window.jQuery = jQuery;
		})();
























