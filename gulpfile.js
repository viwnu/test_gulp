let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

gulp.task('css', function(){
      return gulp.src('app/css/*.css')
      .pipe(browserSync.reload({stream:true}))
});

gulp.task('html', function(){
  return gulp.src('app/*.html')
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('js', function(){
  return gulp.src([
    'node_modules/animejs/lib/anime.js',
    'node_modules/magnific-popup/dist/jquery.magnific-popup.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
  .pipe(browserSync.reload({stream:true}))
})

gulp.task('watch', function(){
  gulp.watch('app/css/*.css', gulp.parallel('css'))
  gulp.watch('app/*.html', gulp.parallel('html'))
  gulp.watch('app/js/*.js', gulp.parallel('js'))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app/"
        }
    });
});

gulp.task('default', gulp.parallel('browser-sync', 'watch'));
