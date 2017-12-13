let gulp = require('gulp');
let sass = require('gulp-sass');
let cleanCSS = require('gulp-clean-css');
let path = {
	scss: 'styles/sass/',
	css: 'styles/css/'
};

gulp.task('sass', () => {
	return gulp.src(path.scss + '**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(gulp.dest(path.css));
});

gulp.task('default', () => {
	gulp.watch(path.scss + '**/*.scss', ['sass']);
});