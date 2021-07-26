const gulp = require('gulp');
var sass = require('gulp-sass') (require('sass'));
var autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer() )
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(gulp.dest('css'))
}

function watchFiles() {
    gulp.watch('scss/*.scss', css);
    gulp.watch('index.html')
}

// tasks
gulp.task('css', css);
gulp.task("watch", gulp.parallel(watchFiles));