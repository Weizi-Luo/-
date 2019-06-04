

// 初始化
// let oMp = new Map([['name', 'cst'], ['age', 18], ['sex', true]]);
// console.log(oMp);

// api
let oMp = new Map();
oMp.set('name', 'cst');
oMp.set('age', 18);
let obj = {};
oMp.set(obj, '----');
oMp.set({}, '++++');

// 当用oMp.get() 取对象属性时必须要取声明的值 
console.log( oMp.get({}) ) // undefined
console.log( oMp.get(obj) ) // ----

let arr = oMp.keys();
console.log(arr, oMp.entries())

// 对于有迭代接口的可以用for of遍历属性
for (let prop of oMp) {
	console.log(prop)
}

oMp.forEach( (ele, key, self) => {
	// console.log(ele,key,self)
});


// 链表
//	{} {} {} {}
let node3 = {
	name: 'liu',
	age: 80,
	next: null
};
let node2 = {
	name: 'qu',
	age: 20,
	next: node3
};
let node1 = {
	name: 'jie',
	age: 18,
	next: node2
};

