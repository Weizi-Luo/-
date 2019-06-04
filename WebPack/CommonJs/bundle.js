(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var m1 = require('./modules/m1');
var m2 = require('./modules/m2');
var m3 = require('./modules/m3');

console.log(m1.foo(),m2(),m3.foo());
},{"./modules/m1":2,"./modules/m2":3,"./modules/m3":4}],2:[function(require,module,exports){
module.exports = {
	msg:'m1',
	foo: function() {
		return this.msg;
	}
}
},{}],3:[function(require,module,exports){
module.exports = function () {
	return 'm2';
}
},{}],4:[function(require,module,exports){
// var exports = module.exports;

	exports.foo = function() {
		return 'm3';
	}
},{}]},{},[1]);
