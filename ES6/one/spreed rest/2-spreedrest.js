
// 求和函数
function sum () {
	console.log(arguments);
	let sumNumber = 0;
	let arg = [].slice.call(arguments, 0);
	console.log(arg)
	// arg.sort pop shift
	for (var i = 0; i < arguments.length; i++) {
		sumNumber += arguments[i];
	};
	return sumNumber;
};

sum(1, 2, 3);
sum(1, 2, 3, 4, 5);




function sum (...arg) {
	let sumNumber = 0;
	arg.forEach(function (ele) {
		sumNumber += ele;
	});
	return sumNumber;
}


function computedScore (...arg) {
	
}




// ES7  ...{}  克隆方法

// let company = {
// 	name:'duyi',
// 	age:18
// }

// let leader = {
// 	name:'cg',
// 	age:20
// }

// let teachDepartment = {
// 	leader: {
// 		...leader
// 	},
// 	personNum: 25
// }

//  let obj = {
//  	...company,
//  	...teachDepartment,
//  	leader: {
//  		...leader
//  	}
//  }

//  obj.leader.name = 'stg'

// 有缺陷的深度克隆
// let obj = JSON.parse(JSON.stringify(teachDepartment));
// obj.leader.name = 'stg';

// ES6 浅层clone,可理解为$.extend那里演化过来  不方便
// object.assign({}, company, teachDepartment);











