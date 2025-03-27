const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Função para minificar imagens
function minifyImages() {
    return gulp.src('src/images/*.{jpg,png,gif,svg}')
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 })
        ]))
        .pipe(gulp.dest('dist/images'));
}

// Função para compilar SASS
function compileSass() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
}

// Função para minificar JavaScript
function minifyJavaScript() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist/js'));
}

// Tarefa padrão que executa todas as funções em série
exports.default = gulp.series(minifyImages, compileSass, minifyJavaScript);
