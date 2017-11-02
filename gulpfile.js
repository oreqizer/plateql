const gulp = require("gulp");
const plumber = require("gulp-plumber");
const babel = require("gulp-babel");
const sourcemaps = require("gulp-sourcemaps");
const watch = require("gulp-watch");

const compile = () =>
  gulp
    .src(["src/**"])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./dist"));

const develop = () =>
  watch(["src/**"], { ignoreInitial: false })
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./.tmp"));

module.exports = {
  default: compile,
  watch: develop,
};
