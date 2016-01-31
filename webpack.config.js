module.exports = {
  // entry point of our application
  entry: './demo/src/main.js',
  // where to place the compiled bundle
  output: {
    path: __dirname,
    filename: './demo/build.js'
  },
  sassResources: './demo/src/_demo-settings.scss',
  module: {
    // `loaders` is an array of loaders to use.
    // here we are only configuring vue-loader
    loaders: [
      {
        test: /\.vue$/, // a regex for matching all files that end in `.vue`
        loader: 'vue'   // loader to use for matched files
      },{
        test: /\.scss$/,
        loader: "!css-loader!sass-loader"
      }
    ]
  }
}
