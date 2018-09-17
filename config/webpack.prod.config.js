const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
	entry:"../src/index.js",
	output:{
		path:__dirname,
		filename:"./dist/salmon-ui.min.js"
	},
	module:{
		rules:[
			{test:/\.js$/,loader:"babel-loader",options: {
				presets: ['stage-1']
			}},
			{test:/\.vue$/,loader:"vue-loader"},
			{test: /\.css$/, loader: 'style-loader!css-loader' },
            {test: /\.(png|jpg)$/, loader: 'url-loader' },
            {test: /\.(eot|svg|ttf|woff)$/, loader: 'url-loader' },
		]
	},
	devtool:"source-map",
	mode:"development",
	plugins:[
		new VueLoaderPlugin()
	]
}