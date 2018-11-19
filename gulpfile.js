var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    htmlmin = require('gulp-htmlmin');

gulp.task('minifyjs', function () {
    gulp.src('index.js')
        .pipe(uglify())
        .pipe(gulp.dest('build'));
});

gulp.task('minifycss', function () {
    return gulp.src('style.css')
        .pipe(csso())
        .pipe(gulp.dest('build'));
});

gulp.task('minifyhtml', () => {
    return gulp.src('*.html')
      .pipe(htmlmin({ collapseWhitespace: true }))
      .pipe(gulp.dest('build'));
  });