// gulpプラグインの読み込み
const { src, dest, watch, parallel } = require('gulp');
// Sassをコンパイルするプラグインの読み込み
const sass = require('gulp-sass')(require('sass'));
// ベンダープレフィックスを自動付与するプラグインの読み込み
const autoprefixer = require('gulp-autoprefixer');
// CSSをミニファイ化するプラグインの読み込み
const cssnano = require('gulp-cssnano');
// リネームプラグインの読み込み
const rename = require('gulp-rename');
// ソースマップを作成するプラグインの読み込み
const sourcemaps = require('gulp-sourcemaps');
// JSをミニファイ化するプラグインの読み込み
const uglify = require('gulp-uglify');
// EJSをコンパイルするプラグインの読み込み
const ejs = require('gulp-ejs');
// webpackのJavaScript APIを使用するためのライブラリ
const webpack = require('webpack'); 
// webpackをgulpで使用するためのプラグイン
const webpackStream = require('webpack-stream'); 
// webpackの設定ファイルの読み込み（さきほど作成したwebpack.config.jsのコンフィグ情報を読み込む）
const webpackConfig = require('./webpack.config'); 

/**
 * Sassをコンパイルするタスクです
 */
const compileSass = () =>
  // style.scssファイルを取得
  src('scss/style.scss')
    // ソースマップの作成を実行　スタート
    .pipe(sourcemaps.init())
    // Sassのコンパイルを実行
    .pipe(sass())
    // ベンダープレフィックスの自動付与を実行
    .pipe(autoprefixer()) 
    // cssフォルダー以下にstyle.cssを保存
    .pipe(dest('css'))
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
    // cssフォルダー以下にstyle.min.cssを保存
    .pipe(dest('css'));

/**
 * JSをコンパイルするタスクです
 */
const compileJs = () =>
  // webpackStreamを使用して、webpackを実行します。webpackConfigは設定ファイル、webpackはwebpackの実行ファイルを指定します。
  webpackStream(webpackConfig, webpack) 
    // 出力先ディレクトリを指定して、バンドルしたJavaScriptファイルを出力
    .pipe(dest("js"))
    // Jsのミニファイ化を実行
    .pipe(uglify())
    // リネームを実行
    .pipe(
      rename({
        extname: '.min.js'
      })
    )
    // jsフォルダー以下に保存
    .pipe(dest('js'));

/**
 * EJSをコンパイルするタスクです
 */
const compileEjs = () =>
  // *.ejsファイルを取得
  src(['ejs/*.ejs'])
    // EJSのコンパイルを実行
    .pipe(ejs({}, {}, { ext: '.html' }))
    // リネームを実行
    .pipe(
      rename({
        extname: '.html'
      })
    )
    // ルートフォルダー以下に保存
    .pipe(dest('./'));

/**
 * 各ファイルを監視し、変更があったら各ファイルを変換します
 */
const watchSassFiles = () => watch('scss/**/*.scss', compileSass);
const watchJsFiles = () => watch(['js_src/**/*.js'], compileJs);
const watchEjsFiles = () => watch(['ejs/**/*.ejs'], compileEjs);

// npx gulpというコマンドを実行した時、各タスクが実行されるようにします
exports.default = parallel(watchSassFiles, watchJsFiles, watchEjsFiles);