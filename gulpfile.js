const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
var gm = require('gulp-gm');
var argv = require('yargs').argv;
 
/*
 *usege gulp imagemin --path 'storage/app/public/products/*' --dest products
 */
gulp.task('imagemin' , function() {
	const base = 'storage/app/public/';
	const dest = argv.dest || 'products';
	const src = argv.path || `${base}${dest}/*`;
    return gulp.src(src)
	    .pipe(gm(function (gmfile) {
	      return gmfile.resize(argv.width || 1200, argv.height || 1200);
	    }))
	    /*.pipe(gm(function (gmfile, done) {
	    	gmfile.size(function (err, size) {
	      		done(null, gmfile.rotate('transparent', size.width < size.height ? -90 : 0));
	    	});
	    }))*/
        .pipe(imagemin())
        .pipe(gulp.dest(`${base}${dest}`))
});