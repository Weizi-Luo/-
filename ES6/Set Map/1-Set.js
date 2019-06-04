

let oS = new Set();
let arr = [1,2,3,2,3];
oS.add(123)
oS.add(arr)
oS.add(true)
console.log( oS.has(arr) )
// console.log(oS)


let oName = oS.keys();
// console.log(oName,oS.values())

// 遍历属性值，第一种方法
// oS.forEach((val) => {
// 	console.log(val)
// })

// let oP = {
// 	a: 1,
// 	b: 'jie'
// }
// console.log(oP)
// ES6 for of， 第二种方法,针对有迭代接口的
// for (let prop of oS) {
// 	console.log(prop)
// }


let arr0 = [1,2,3,4];
let oS0 = new Set(arr0);

// 将有迭代接口的数据转化为数组
// console.log(Array.from('11234'))
// console.log(Array.from(oS0))
// console.log(Array.from({a:3,b:'jie'}))

let ar = [
	1,
	'jie'
];
let br = '11123'; 
let ab = {
	...ar,
	c:'luo'
}
let as = [...ar];
console.log( Object.getOwnPropertyNames(ab) )
console.log(ab)

// ...可将迭代接口的展开成散列结构 
console.log(...br)

// Set去重比较完美
// let o = {
// 	name: 'cst'
// };
// let arr = [1,1,1,2,2,o,4,5,o,{name: 'jie'}]
// let oS = new Set(arr);

// 并集 交集和差集
// 集合
// arr obj set map

let arr1 = [1,2,3,2,3];
let arr2 = [3,2,4,4,5];
// Set
// 并集 
// let oS = new Set([...arr1, ...arr2]);

// 交集
let oS1 = new Set(arr1); // [1,2,3]
let oS2 = new Set(arr2); // [3,2,4,5]
// let newArr = [...oS1].filter( ele => oS2.has(ele));
// console.log(newArr)

// 差集
let newArr1 = [...oS1].filter( ele => !oS2.has(ele));
let newArr2 = [...oS2].filter( ele => !oS1.has(ele));
let newArr = [...newArr1, ...newArr2]
// console.log(newArr)




















