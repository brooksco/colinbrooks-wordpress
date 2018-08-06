'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var babel = require('gulp-babel');

gulp.task('sass', function () {
    return gulp.src([
        './sass/**/*.scss'
    ])
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));

    // var sassStream, cssStream;

    // sassStream = gulp.src('./sass/**/*.scss',)
    // .pipe(sass()
    // 	.on('error', sass.logError));

    // cssStream = gulp.src([
    // 	'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css'
    // 	]);

    // return merge(sassStream, cssStream)
    // .pipe(concat('style.css'))
    // .pipe(gulp.dest('./'));
});

gulp.task('js', function () {
    return gulp.src([
        'node_modules/isotope-layout/dist/isotope.pkgd.min.js',
        'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js',
        'node_modules/p5/lib/p5.min.js',
        'js/p5/*.js',
        'js/app.js'
    ])
        .pipe(concat('app.min.js'))
        // .pipe(babel({
        //     presets: ['env'],
        //     plugins: ['transform-runtime']
        // }))
        // .pipe(uglify())
        .pipe(gulp.dest('js'))
});

gulp.task('default', function () {
    gulp.watch('./sass/**/*.scss', gulp.series('sass'));
    gulp.watch(['./js/app.js', './js/p5/*.js'], gulp.series('js'));

    gulp.task('sass')();
    gulp.task('js')();
});
