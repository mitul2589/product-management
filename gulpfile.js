var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');

gulp.task('default', ['build-js', 'build-css'], () => {
    return gutil.log("Gulp Running...");
});

gulp.task('build-js', () => {
    return gulp.src('src/app/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('bundle.js'))
        //only uglify if gulp is ran with '--type production'
        .pipe(gutil.env.type === 'production' ? uglify() : gutil.noop())
        .pipe(sourcemaps.write())

        .pipe(gulp.dest('output'))
});

gulp.task('build-css', () => {
    return gulp.src('src/app/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('output'))
});

