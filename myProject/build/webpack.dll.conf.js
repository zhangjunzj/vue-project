const path = require('path')
const webpack = require('webpack')

module.exports = {
	entry: {
		vender: ['vue/dist/vue.esm.js', 'vuex', 'vue-router', 'axios']
	},
	output: {
		path: path.resolve(__dirname, '../static'),
    	filename: '[name].dll.js',
    	library: '[name]_library'
	},
	 plugins: [
	    new webpack.DllPlugin({
	      path: path.resolve(__dirname, '../static', '[name]-manifest.json'),
	      name: '[name]_library',
	      context: __dirname
	    }),
	    new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    })
	 ]
}