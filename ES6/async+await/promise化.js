

let fs = require('fs');
// 异步操作
// fs.readDir fs.writeFile 异步方法 (node单线程)
fs.readFile('./data/number1.txt', 'utf-8', (err, data) => {
	// if (err) {

	// }else{
	// 	console.log(data)
	// }

	fs.readFile(data, 'utf-8', (err, data) => {
		fs.readFile()
	})
})

// 优化
// promise化

function readFile (path) {
	return new Promise ( (res, rej) => {
		fs.readFile('./data/number1.txt', 'utf-8', (err, data) => {
			if (err) { 

			}else{
				console.log(data)
			}
		}
	}) 
}


function promisify (func) {
	return function (...arg) {
		return new Promise( (res, rej) => {
			func(...arg, (err, data) => {
				if(err) {
					rej(err);
				}else{
					res(data);
				}
			})
		});
	}
}


// promise化异步操作
let readFile = promisify(fs.readFile);
let writeFile = promisify(fs.writeFile);
let readDir = promisify(fs.readDir);

readFile('./data/number1.txt', 'utf-8').then( (val) => {
	console.log(val)
}); 



// 依赖与promisify函数
//将fs上的方法一起处理成异步操作
function promisifyAll (obj) {
	for (let key in obj) {
		let fn = obj[key];
		if (typeof fn === 'function') {
			obj[key + 'Async'] = promisify(fn);
		}
	}
}

promisifyAll(fs);

fs.readFileAsync('./data/number1.txt')

// npm install bluebird
// 这个插件有此功能
let bluebird = require('bluebird')
bluebird.promisify()








