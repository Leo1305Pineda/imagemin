const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
 
gulp.task('imagemin' , function() {
    return gulp.src('image/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('image'))
});
