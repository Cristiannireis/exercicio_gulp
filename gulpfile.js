const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

function minifyImages() {
    return gulp.src('src/images/*.{jpg,png,gif,svg}') // Pega as imagens da pasta src/images
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 75, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 })
        ]))
        .pipe(gulp.dest('dist/images')); // Salva as imagens otimizadas em dist/images
}

exports.default = gulp.series(minifyImages);

