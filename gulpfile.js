// Gulp
var gulp = require('gulp');

// Stylus
var stylus = require('gulp-stylus');
gulp.task('styl', function () {
  return gulp.src('app/styles/style.styl')
  .pipe(stylus())
  .pipe(gulp.dest('dist/assets/'))
});

// Pug
var pug = require('gulp-pug');
gulp.task('pug', function() {
  return gulp.src('app/pages/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(gulp.dest('dist/'))
});

// Watch
var watch = require('gulp-watch');

gulp.task('watch', function() {
  gulp.watch('app/**/*.styl', ['styl']);
  gulp.watch('app/**/*.pug', ['pug']);
});
