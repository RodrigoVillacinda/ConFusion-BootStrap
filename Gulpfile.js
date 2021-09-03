'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync');

    
gulp.task('sass', function () {
    return gulp.src('./css/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
  });
  
  gulp.task('sass:watch', function () {
    gulp.watch('./css/*.scss', gulp.series('sass'));
  });
  
  gulp.task('browser-sync', function(done) {   // added done here
    var files = [
        './*.html',
        './css/*.css',
        './img/*.{png,jpg,gif}',
        './js/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: "./"
        }
    });
  done();                                    // called done() here
});
  
  // Default task
  gulp.task('default', gulp.series('browser-sync', 'sass:watch'));
  
