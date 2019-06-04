var path = require('path');
var MiniCssExtractPlugin = require('mini-css-extract-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
	entry:{
		// index:'./index.js'
		pageA:'./src/pageA.js',
		pageB:'./src/pageB.js',
	},
	output:{
		path:path.resolve(__dirname, 'dist'),
		filename:'[name][hash:5].bundle.js',
		// 公共js
		chunkFilename:'[name][hash:5].js'
	},
	// 在4版本中新增的
	optimization:{
		// 新增分离包
		splitChunks:{
			// 需缓存的
			cacheGroups:{
				common:{
					name:'common',
					// 查看在哪些范围内引入了
					chunks:'all',
					// 被抽离出来的最小体积
					minSize:1,
					// 出现多少次数后被作为公共模块
					minChunks:2,
					// 优先级
					priority:1
				},
				// 在配置一个代码块
				vendor:{
					name:'vender',
					// 从哪部分里抽离
					test:/[\\/]node_modules[\\/]/,
					// 优先级
					priority:10,
					// 查看在哪些范围内引入了
					chunks:'all'
				}
			}
		}
	},
	module:{
		rules:[
			// {
			// 	test:/\.css$/,
			// 	use:[MiniCssExtractPlugin.loader,'css-loader'] 
			// }

			{
				test:/\.less$/,
				use:[
					{
						loader:MiniCssExtractPlugin.loader
					},
					{
						loader:'css-loader'
					},
					{
						loader:'postcss-loader',
						// 插件的使用是单独针对于谁
						options:{
							ident:'postcss',
							plugins:[
								require('postcss-cssnext'),// 此插件包含了autoprefixer自动添加前缀功能
								// require('autoprefixer')(),
								require('cssnano')()// 压缩功能
							]
						}
					},
					{
						loader:'less-loader'
					},
				]
			}
		]
	},
	plugins:[
		new MiniCssExtractPlugin({
			filename:'[name][hash:5].css'
		}),
		new HtmlWebpackPlugin({
			filenama:'index.html',
			// 模版
			template:'./index.html',
			// title:'My Html',
			
			minify:{
				// 清理注释
				removeComments:true,
				// 清理空格
				collapseWhitespace:true

			}
		}),
		new CleanWebpackPlugin()
	],
	mode:'development'
}