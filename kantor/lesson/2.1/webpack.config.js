"use strict";

const keys = {
	env: {
		dev: 'development'
	}
};

const NODE_ENV = process.env.NODE_ENV || keys.env.dev;
const webpack = require('webpack');

module.exports = {

	entry: './home',
	output: {
		filename: 'build.js',
		library: 'home'
	},

	watch: NODE_ENV === keys.env.dev,

	watchOptions: {
		aggregateTimeout: 300
	},

	devtool: NODE_ENV === keys.env.dev ? 'source-map' : null,

	plugins: [
		new webpack.DefinePlugin({
			NODE_ENV: JSON.stringify(NODE_ENV),
			LANG: JSON.stringify('ru') // or '"ru"' <-  (") with (')
		})
	],

	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel',
			query: {
				presets: ['es2015'],
				plugins: ['transform-runtime']
			}
		}]
	}

};
