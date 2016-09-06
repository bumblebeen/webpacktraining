var webpack = require("webpack");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractLess = new ExtractTextPlugin('styles.css')


module.exports = {
	entry: './index.js',
	output: {
		filename: './bundle.js',
		path: __dirname
	},
	plugins: [
		extractLess,
		// Instead of finding only a package.json, it will also check bower.json as well
	    new webpack.ResolverPlugin(
	      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
	    ),
	    // Creation of Global Variable available to all modules
	    new webpack.DefinePlugin({
      		MY_GLOBAL_VAR: JSON.stringify("Variable FROM Webpack during bundling")
    	}),
  	],
	resolve: {
		//files in these directory can be required without a relative path
		modulesDirectories: [
		  'node_modules',
		  'bower_components'
		]
		// Alternatively ,root: [ './bower_components'] this gets prepended to modulesDirectories
	},
	module: {
		loaders: [
			{test: /\.less$/, loader: ExtractTextPlugin.extract(['css?sourceMap', 'less?sourceMap']) }
		]

	}
}