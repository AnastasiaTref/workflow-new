'use strict';

module.exports = function() {

	$.gulp.task('css.libs', function() {

		return $.gulp.src( $.path.libs.cssLibs(), {since: $.gulp.lastRun('css.libs')} )
	        .pipe($.pl.concatCss('bundle.css'))
	        .pipe($.pl.csso())
	        .pipe($.gulp.dest( `./${$.path.temp.folder}/${$.path.temp.css}` ))
	        .on('end', $.browserSync.reload);
	})
};

