

function sum (a, b) {
	return a + b;
}

var sum = function (a, b) {
	return a + b;
}

// 箭头函数
let sum = (a, b) => {
	return a + b;
}
// 可省略return
let sum = (a, b) => a + b;

let sum = (a, b) => ({a:a, b:b});

function sum (x) {
	return function (y) {
		return function (z) {
			return x + y + z;
		}
	}
}
var sum1 = sum(1);
var sum2 = sum1(2);
console.log( sum2(3) );


let sum = x => y => z => x + y +z;
sum(1)(2)(3);

// 参数不允许重复

// es5
var sum1 = function (a, a) {
	console.log(a)
}
// es6
let sum = (x, x) => {}

let arr = [10, 20, 30, 40, 50, 60];
arr.map(function (ele) {
	return ele * ele;
})

arr.map(ele => ele * ele)
arr.filter(ele => ele > 20)



let sum = () => {

} 
sum();

let obj = {
	fn: () => {

	}
}
obj.fn();

let arr = [() => {}];
arr[0]();


// arguments
function Curry() {
	// var arg = arguments;
	// return function () {
	// 	console.log(arg, arguments)
	// }
	return () => {
		console.log(arguments)
	}
}
Curry('a', 'b')(1, 2)



// this  外面无非箭头函数套住 this为window
var a = 'outerObj';
let sum = () => {
	console.log(this.a);
}
sum();

let obj = {
	a: 'innerObj',
	fn: sum
}
obj.fn();  // 箭头函数this指向一旦确定是window 接下来调用也不更改

// 用法
let obj = {
	ms: 'abc',
	fn () {
		// var self = this;
		// setTimeout(function () {
		// 	console.log(self.ms)
		// }, 500)

		setTimeout( () => {
			console.log(this.ms)
		}, 500)
	}
};
obj.fn()
























