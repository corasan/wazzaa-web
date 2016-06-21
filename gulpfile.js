var gulp = require('gulp');
var minify = require('gulp-clean-css');

gulp.task('default', function() {
    return gulp.src('./public/*.css')
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});
