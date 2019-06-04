import './index.css';

import $ from 'jquery';
var json = require('./data.json');
console.log(json);
console.log('111');



// 开启服务器后 dist里打包的东西自动消失。将data.json手动放入
$.ajax({
	url:'http://localhost:9091/data.json',
	success:function(data) {
		console.log(data);
	},
	error:function() {
		console.log('error');
	}
})


if(module.hot) {
	module.hot.accept();
}