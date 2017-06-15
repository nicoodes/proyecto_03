var gulp = require("gulp"),
	sass = require("gulp-sass"),
	browserSync = require("browser-sync").create(),
	plumber = require("gulp-plumber"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	autoprefixer = require("gulp-autoprefixer"),
	del = require("del"),
	imagemin = require("gulp-imagemin"),
	cssnano = require("gulp-cssnano");


/* UGLIFY */
gulp.task("scripts", function(){
	gulp.src(["app/js/**/*.js", "!app/js/**/*.min.js"])
	.pipe(plumber())
	.pipe(rename({suffix:".min"}))
	.pipe(uglify())
	.pipe(gulp.dest("app/js"))
	.pipe(browserSync.stream());
});


/* SASS COMPILER */
gulp.task("sass", function(){
	return gulp.src("app/sass/**/*.scss")
	.pipe(plumber({
		  errorHandler: function(err) {
		    console.log(err);
		    this.emit('end') }
		}))
	.pipe(sass())
	.pipe(autoprefixer("last 2 versions"))
	.pipe(gulp.dest("app/css"))
	.pipe(browserSync.stream());
});


/* BROWSER SYNC */
gulp.task("serve", ["sass"], function(){
	
	browserSync.init({
		server: "./app"
	});

	gulp.watch("./app/sass/**/*.scss", ["sass"]);
	gulp.watch("./app/*.html").on("change", browserSync.reload);
	gulp.watch("./app/js/**/*.js", ["scripts"]);
});


gulp.task("default", ["serve"]);


/////////////////////////////
/*//////// BUILD //////////*/
/////////////////////////////

gulp.task("build:cleanfolder", function(cb) {
	del([
		"build/**"
	], cb);
});


gulp.task("build:copy", /*["build:cleanfolder"],*/ function () {
	return gulp.src("app/**/*/")
	.pipe(gulp.dest("build/"));
});


gulp.task("build:remove", ["build:copy"], function(cb){
	del([
		"build/sass/",
		"build/js/!(*.min.js)"
	], cb);
});


gulp.task("images", function(){
	gulp.src("app/img/*")
	.pipe(imagemin())
	.pipe(gulp.dest("build/img"));
});


gulp.task("css", function(){
	gulp.src("app/css/*")
	.pipe(cssnano())
	.pipe(gulp.dest("build/css"));
});


gulp.task("build", ["build:copy", "build:remove"]);

gulp.task("compress", ["images", "css"]);


gulp.task("build:sync", ["sass"], function(){
	
	browserSync.init({
		server: "./build"
	});

	gulp.watch("./build/*.html").on("change", browserSync.reload);
	gulp.watch("./build/js/**/*.js", ["scripts"]);
});