module.exports = {
	lintOnSave: false,
  productionSourceMap: false,
	devServer: {
	    proxy: {
	      '/api': {
	        target: 'http://localhost:4001',
	        changeOrigin: true,
					pathRewrite: { // 路径重写
						'^/api': ''
					}
	      }
	    }
	  }
}
