const gulp = require('gulp');
const responsive = require('gulp-responsive');

// Tâche pour traiter les images et générer des versions responsives
gulp.task('images', function () {
  return gulp.src('assets/images/**/*.{jpg,jpeg,png,webp}') // Chemin des images sources
    .pipe(responsive({
      // Génération de différentes tailles d'images pour le responsive
      '**/*.jpg': [{
        width: 320,
        rename: { suffix: '-320w' }
      }, {
        width: 480,
        rename: { suffix: '-480w' }
      }, {
        width: 800,
        rename: { suffix: '-800w' }
      }, {
        width: 1200,
        rename: { suffix: '-1200w' }
      }],
      '**/*.png': [{
        width: 320,
        rename: { suffix: '-320w' }
      }, {
        width: 480,
        rename: { suffix: '-480w' }
      }, {
        width: 800,
        rename: { suffix: '-800w' }
      }, {
        width: 1200,
        rename: { suffix: '-1200w' }
      }],
      '**/*.webp': [{
        width: 320,
        rename: { suffix: '-320w' }
      }, {
        width: 480,
        rename: { suffix: '-480w' }
      }, {
        width: 800,
        rename: { suffix: '-800w' }
      }, {
        width: 1200,
        rename: { suffix: '-1200w' }
      }]
    }, {
      quality: 75,
      progressive: true,
    }))
    .pipe(gulp.dest('dist/images')); // Répertoire de sortie
});

// Tâche par défaut
gulp.task('default', gulp.series('images'));
