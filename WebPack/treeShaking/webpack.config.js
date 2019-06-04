const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const glob = require('glob-all');

const PurifyCSSPlugin = require('purifycss-webpack');

module.exports = {
	
	plugins: [

		// 注意：css抖动一定放在js之前
		new MiniCssExtractPlugin({
	      // Options similar to the same options in webpackOptions.output
	      // both options are optional
	      filename: '[name].css',
	      // chunkFilename: '[id].css',
	    }),
	    new PurifyCSSPlugin({
      		// Give paths to parse for rules. These should be absolute!
      		paths: glob.sync([
      			path.join(__dirname, './*.html'),
      			path.join(__dirname, './src/*.js'),
      			]),
    	}),
    	new WebpackDeepScopeAnalysisPlugin(),
		],

	module:{
		rules:[
			{
				test:/\.css$/,
				// 用插件后不可以解析style-loader
				// use:['style-loader','css-loader']
				use:[MiniCssExtractPlugin.loader,'css-loader']

			}
		]
	}
	
}