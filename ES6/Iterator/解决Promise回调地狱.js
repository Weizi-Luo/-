
// node

let fs = require('fs');
function reaFile (path) {
	return new Promise ( (res, rej) => {
		fs.readfile(path, 'utf-8', (err, data) => {
			if (data) {
				res(data);
			}else {
				rej(err);
			}
		})
	});
}

readFile('./data/number.txt').then( (val) => {
	return readFile(val);
}).then( (val) => {
	return readFile(val);
}).then( (val) => {
	console.log(val);
})


// Generator函数

function *read() {
	let val1 = yield readFile('./data/number.txt');
	let val2 = yield readFile(val1);
	let val3 = yield readFile(val2);
	return val3;
};

// let oG = read();
// let {value, done} = oG.next();
// value.then( (val) => {
// 	let {value, done} = oG.next(val);
// 	value.then( (val) => {
// 		let {value, done} = oG.next(val);
// 		value.then( (val) => {
// 			console.log(val);
// 		});
// 	});
// });

// 用递归优化

// TJ大神写了co插件，还写过express koa => node
function Co (oIt) {
	return new Promise( (res, rej) => {
		let next = (data) => {
			let {value, done} = oIt.next(data);
			if(done) {
				res(value);
			}else{
				value.then( (val) => {
					next(val);
				})
			}

			
		}
		return next();
	})
}

Co( read() ).then( (val) => {

})