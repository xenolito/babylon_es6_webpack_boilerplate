const del = require("del");
const { src, dest } = require("gulp");

const sourcemaps = require("gulp-sourcemaps");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const concat = require("gulp-concat");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

const DEVELOPMENT = process.env.NODE_ENV === "development" ? true : false;
const OUT_DIR = "./build";

// always copy the html first to dist folder
const srcHTML = "./app/template/index.html";
const srcCSS = "./app/template/style.css";
const srcAssets = "./app/assets/**";

const baseSourcePath = "./app/";
const sourcePaths = {
    css: baseSourcePath + "template/**/*.scss",
    //js_modules: baseSourcePath + "js/modules/*.js",
    html: baseSourcePath + "template/index.html"
};

const cssSourceOrder = [
    baseSourcePath + "template/globals.scss",
    baseSourcePath + "template/layouts.scss",
    baseSourcePath + "template/style.scss",
    baseSourcePath + "template/**/*.scss"
];

// Sass task: compiles the style.scss file into style.css
function scssTask() {
    return src(cssSourceOrder)
        .pipe(sourcemaps.init({ loadMaps: true, largFile: true })) // initialize sourcemaps first
        .pipe(concat("style.min.css"))
        .pipe(sass().on("error", sass.logError)) // compile SCSS to CSS
        .pipe(postcss([autoprefixer("last 2 versions"), cssnano()])) // PostCSS plugins
        .pipe(sourcemaps.write(".")) // write sourcemaps file in current directory
        .pipe(dest(OUT_DIR + "/css")); // put final CSS in dist folder
}

function clean(done) {
    // Clean the dist folder
    del.sync([OUT_DIR]);

    // Signal completion
    return done();
}

function copyHtml(done) {
    src(srcHTML).pipe(dest(OUT_DIR));
    done();
}

function copyAssets(done) {
    src(srcAssets, { base: "./app/assets" }).pipe(dest(OUT_DIR + "/assets/"));
    done();
}

exports.clean = clean;
exports.copyHtml = copyHtml;
exports.copyCss = scssTask;
exports.copyAssets = copyAssets;
