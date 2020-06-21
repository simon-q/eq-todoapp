module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: false
    }
  },
  pages: {
    todoApp: {
      entry: 'src/main.ts',
      filename: 'app.html'
    }
  }
}