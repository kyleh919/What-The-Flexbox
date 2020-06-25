var gulp = require("gulp");
var autoprefixer = require("gulp-autoprefixer");

gulp.task("styles", function (done) {
  return gulp
    .src("css/styles.css")
    .pipe(autoprefixer())
    .pipe(gulp.dest("build"));
  // done();
});

gulp.task("watch", function () {
  gulp.watch("css/styles.css", ["styles"]);
});
