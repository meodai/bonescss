var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function() {
  return gulp.src('./demo/src/main.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest('./demo/build'));
});
