(function () {
'use strict';


const gulp = require('gulp');
const gutil = require('gulp-util');
const jshint = require('gulp-jshint');
const minify = require('gulp-minify');
const sass = require('gulp-sass');
const scsslint = require('gulp-scss-lint');
const connect = require('gulp-connect');
const exec = require('child_process').exec;
const autoprefixer = require('gulp-autoprefixer');

const src_dir = __dirname + '/demo_docs/';
const dist_dir = src_dir + 'build/html/';
const theme_dir = __dirname + '/jast/';
const static_dir = theme_dir + 'static/';

const paths = {
  'templates': theme_dir,
  'css': static_dir + 'css/',
  'js': __dirname + '/js/',
  'sass': __dirname + '/sass/',
};

const patterns = {
  'sass': [
    paths.sass + '*.scss',
    paths.sass + '_*.scss',
    paths.sass + '**/*.scss'
  ],
  'css': [
    paths.css + 'jast.css',
  ],
  'js': [
    paths.js + '*.js',
  ],
  'templates': [
    paths.templates + '*.html',
  ]
};

gulp.task('jslint', function() {
  gulp.src(patterns.js)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jscompress', function() {
  gulp.src(patterns.js)
    .pipe(minify({
      noSource: true,
      mangle: true
    }))
    .pipe(gulp.dest(static_dir + 'js/'));
});

gulp.task('prefixer', function() {
  return gulp.src(patterns.css)
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.css));
});

gulp.task('sass', function () {
  return gulp.src(patterns.sass)
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(gulp.dest(paths.css));
});

gulp.task('scsslint', function() {
  if(gutil.env.exitonerror === 1)
    gulp.src(patterns.sass)
      .pipe(scsslint({
        'config': 'scss-lint.yml',
      }))
      .pipe(scsslint.failReporter());
  else
    gulp.src(patterns.sass)
      .pipe(scsslint({
        'config': 'scss-lint.yml',
      }))
      .on('error', function(error) {
        gutil.log(error);
      });
});

gulp.task('build', function() {
  process.chdir(src_dir);
  exec('make html', function (err, stdout, stderr) {});
});

gulp.task('default', function () {
  gulp.start('scsslint');
  gulp.start('sass');
  gulp.start('prefixer');
  gulp.start('jslint');
  gulp.start('jscompress');

  gulp.watch(patterns.sass, ['scsslint']);
  gulp.watch(patterns.sass, ['sass']);
  gulp.watch(patterns.css, ['build']);
  gulp.watch(patterns.templates, ['build']);
  gulp.watch(patterns.js, ['jslint']);
  gulp.watch(patterns.js, ['jscompress']);
});

// end of gulpfile.js
}());

