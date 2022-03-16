const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./app/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./app/css'))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    baseDir: './',
    host: 'localhost',
    port: 3060
  });
  gulp.watch('./app/scss/**/*.scss', style)
  gulp.watch('./app/**/*.html').on('change', browserSync.reload);
  gulp.watch('./app/js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;