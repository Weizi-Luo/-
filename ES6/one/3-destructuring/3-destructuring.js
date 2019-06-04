

let obj = {
	name:'cst',
	age:18
}

// let name, age;
// ({name,age} = obj);

// let {name, age} = obj;

// 默认赋值
let {name: oName, age = '20', sex = 'male'} = obj;
console.log(name) // 无
console.log(oName,age,sex) // cst 18 male

// function sum (a = 10, b = 20) {
// 	return a + b;
// }
// console.log( sum(1) );

// 解构数组
let arr = [1,2,3];
let {0: x, 1:y, 2:z} = arr;
// let [x, y, z];
console.log(x, y, z); // 1 2 3

let arr = [1,2,3,{name:'cst'}];
// 前三个值不要
let [,,,{name}] = arr;
let [,,,{name= oName}] = arr;
console.log(oName); // cst
console.log(name); // cst	


//复杂数据里面