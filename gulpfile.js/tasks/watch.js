var gulp = require('gulp');

gulp.task('watch', ['browser-sync'], function () {
    gulp.watch([
        '_scss/**/*'
    ], ['sass']);
    gulp.watch([
        '_layouts/**/*.html',
        '_includes/**/*',
        '_pages/*',
        '_posts/**/*',
        '_data/*',
        '_js/**/*',
        'assets/img/**/*',
        'assets/fonts/*',
        '_config.yml'
    ], ['jekyll-rebuild']);
});
