export default defineConfig({
	entry: {
    main: './src/index.js'
  },
  // output: {
  //   filename: '[name].js',
  //   path: __dirname + '/dist'
  // },
	resolve: {
			alias: [{ find: '@', replacement: '/src' }]
		},
  // plugins: [react()]
})