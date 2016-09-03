// ## Globals
var gulp = require('gulp');
var harp = require("harp");
var runSequence = require('run-sequence');
var shell = require('gulp-shell');
var deploy = require('gulp-gh-pages');

/**
 * 编译 docs 文件夹里面的说明文档
 */
gulp.task('harp', shell.task(['harp compile docs']));


/**
 * 编译所有资源
 */
gulp.task('build', function (callback) {
    runSequence('harp', callback);
});

/**
 * 发布到 gh-pages
 */
gulp.task('deploy', ['build'], function () {
    return gulp.src("docs/www/**/*")
        .pipe(deploy());
});