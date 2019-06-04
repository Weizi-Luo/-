




class Plane {

			// 静态方法(类方法只能通过类来调用)，ES7写法
			// static alive = 10;
			static alive () {
				return true;
			}
			// 定义私有属性
			constructor () {
				this.name = name || '普通飞机';
				this.blood = 100;
			}
			// 定义一个原型上的方法fly
			fly () {
				console.log('fly')
			}
		};

		// var oP = new Plane();
		// 访问静态方法
		// console.log(Plane.alive, oP.alive);

		// extends继承原型，Plane.call(this,name)继承私有属性

		class AttackPlane extends Plane {
			constructor () {
				
				// Plane.call(this, name);与super方法一样
				super();
				this.logo = 'jie';
				
			}
			dan () {
				console.log('biubiubiu~');
			}
		}

		var aP = new AttackPlane();
		console.log(aP.logo)
