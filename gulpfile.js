const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const livereload = require('gulp-livereload');
const del = require('del');

let name = 'book-admin';
let version = '1.0.0';
let src = 'script/src';
let dist = 'script/dist';

let path = {
  js: `${src}/**/*.js`,
  transpiled_js : `${dist}/**/*.js`
};

// ES2015 트랜스코딩
gulp.task('transpile', () => {
  return gulp.src(path.js)
    .pipe(babel())
    .pipe(gulp.dest(`${dist}`));
});

// 자바스크립트 파일을 하나로 합친다
gulp.task('concat-js', () => {
  return gulp.src(path.transpiled_js)
    .pipe(concat(`${name}-${version}.js`))
    .pipe(gulp.dest(`public`));
});

// 자바스크립트 파일을 하나로 합치고 압축한다.
gulp.task('combine-js', () => {
  return gulp.src(path.transpiled_js)
    .pipe(concat(`${name}-${version}.min.js`))
    .pipe(uglify())
    .pipe(gulp.dest(`public`));
});

//파일초기화
gulp.task('clean', del.bind(null, [`public/${name}-${version}.min.js`,`public/${name}-${version}.js`]));

// transpild 삭제
gulp.task('transpild-clean', del.bind(null, ['script/dist/']));

// 파일 변경 감지 및 브라우저 재시작
gulp.task('watch', () => {
  livereload.listen();

  gulp.watch(path.js, gulp.series('clean', 'transpile', 'prepare', 'transpild-clean'));
  gulp.watch(`${src}/**`).on('change', livereload.changed);
});

//gulp.task('prepare', gulp.parallel('concat-js', 'combine-js'));
gulp.task('prepare', gulp.parallel('concat-js'));
gulp.task('build', gulp.series('clean', 'transpile', 'prepare', 'transpild-clean'));
gulp.task('run', gulp.series('clean', 'transpile', 'prepare', 'transpild-clean', 'watch'));
