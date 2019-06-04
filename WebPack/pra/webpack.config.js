var path = require('path');
var CleanWebpack = require('clean-webpack-plugin');
var HtmlWebpack =  require('html-webpack-plugin');
var Webpack = require('webpack');

// webpack webpack-cli style-loader css-loader
// url-loader:对图片进行处理
// img-loader imagemin imagemin-pngquant:图片压缩
// html-loader:处理html页面里的img 
// clean-webpack-plugin:清楚旧的打包文件
// html-webpack-plugin:根据源html生成一个打包的html

module.exports = {
	entry:{
		index:'./index.js'
	},
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'[name][hash:5].bundle.js'
	},
	module:{
		rules:[
			{
				test:/\.css$/,
				use:[
					{loader:'style-loader'},
					{loader:'css-loader'}
				]
			},
			{
				test:/\.(jpg|png|jpeg|gif)$/,
				use:[
					{
						loader:'url-loader',
						options:{
							name:'[name][hash:5].[ext]',
							// 限制图片大小 <= 100kb 进行base64编码
							limit:5,
							outputPath:'img'
						}	
					}
				]
			},
			{
				loader:'img-loader',
				options:{
					plugins:[
						require('imagemin-pngquant')({
							quality:[0.3,0.5]
						})
					]
				}
			},
			{
				test:/\.html$/,
				use:[
					{
						loader:'html-loader',
						options:{
							attrs:['img:src']
						}       
					}
				]
			}
		]
	},
	mode:'development',
	plugins:[
		// new CleanWebpack(),
		new HtmlWebpack({
			template:'./index.html'
		}),
		new Webpack.HotModuleReplacementPlugin();
	],
	devServer:{
		// 修改端口号
		port:'9091',
		// 默认打开路径(dist下面的html页面)
		contentBase:'dist',
		hot:'true'
	}







}