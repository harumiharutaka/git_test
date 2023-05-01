// gulpプラグインの読み込み
const { src, dest, watch, parallel } = require("gulp");
// Sassをコンパイルするプラグインの読み込み
const sass = require("gulp-sass")(require("sass"));
// ベンダープレフィックスを自動付与するプラグインの読み込み
const autoprefixer = require('gulp-autoprefixer');
// CSSをミニファイ化するプラグインの読み込み
const cssnano = require('gulp-cssnano');
// リネームプラグインの読み込み
const rename = require('gulp-rename');
// ソースマップを作成するプラグインの読み込み
const sourcemaps = require('gulp-sourcemaps');
// JSをミニファイ化するプラグインの読み込み
const uglify = require("gulp-uglify");

/**
 * Sassをコンパイルするタスクです
 */
const compileSass = () =>
  // style.scssファイルを取得
  src("css/scss/style.scss")
    // ソースマップの作成を実行　スタート
    .pipe(sourcemaps.init())
    // Sassのコンパイルを実行
    .pipe(sass())
    // ベンダープレフィックスの自動付与を実行
    .pipe(autoprefixer()) 
    // cssフォルダー以下にstyle.cssを保存
    .pipe(dest("css"))
    // CSSのミニファイ化を実行
    .pipe(cssnano())
    // ソースマップの作成を実行　エンド
    .pipe(sourcemaps.write('.'))
    // リネームを実行
    .pipe(
      rename(path => {
        // mapファイルにはminをつけたくないのでif文
        if (!path.extname.endsWith('.map')) {
          path.basename += '.min';
        }
      })
    )
    // cssフォルダー以下にとstyle.min.cssを保存
    .pipe(dest("css"));

/**
 * JSをコンパイルするタスクです
 */
const compileJs = () =>
  // *.jsファイルを取得
  src(['js/*.js', '!js/*.min.js'])
    // Jsのミニファイ化を実行
    .pipe(uglify())
    // リネームを実行
    .pipe(
      rename({
        extname: '.min.js'
      })
    )
    // jsフォルダー以下に保存
    .pipe(dest("js"));

/**
 * SassとJSファイルを監視し、変更があったらSassとJSを変換します
 */
const watchSassFiles = () => watch("css/scss/**/*.scss", compileSass);
const watchJsFiles = () => watch(['js/*.js', '!js/*.min.js'], compileJs);

// npx gulpというコマンドを実行した時、watchSassFilesとwatchJsFilesが実行されるようにします
exports.default = parallel(watchSassFiles, watchJsFiles);