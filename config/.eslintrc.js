module.exports = {
	root: true,
	env: {
	  node: true
	},
	'extends': [
	  'plugin:vue/essential',
	  'eslint:recommended'
	],
	rules: {
	  'no-console': 1,
	  'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
	},
	parserOptions: {
	  	parser: 'babel-eslint'
		}
  }