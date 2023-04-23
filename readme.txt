/*********************************
    コーディングルール
*********************************/



/* CSS基本ルール */

1.CSS設計は「BEM（.Block__Element--modifier）」を採用
2.Sassは「Dart Sass」を採用
3.Sassのコンパイルは「gulp」を使用（ターミナルで「npx gulp」と入力すれば起動）
4.複数の単語はケバブケース（class-name）で表記する
5.JavaScript用の命名は「js-name」のように接頭辞「js-」をつける
6.基本的に子孫セレクタを使用しない
7.font-sizeは「rem」で指定する
8.z-indexは変数管理する（「$z_index_header」等）



/* Sassネスト構成 */

1.「__Element」「--modifier」を「&」でネストする

.Block {
    &--modifier {
        
    }
    
    &__Element {
        &--modifier {

        }
    }
}



/* Sassディレクトリ構成 */

sass
　┣━ style.scss
　┣━ base //基本設定などを格納
　┃　　┣━ _index.scss
　┃　　┣━ _base.scss //基本設定
　┃　　┣━ _helper.scss //ヘルパークラス
　┃　　┗━ _import.scss //外部ファイル
　┣━ global //mixin,変数などを格納
　┃　　┣━ _index.scss
　┃　　┣━ _mixins.scss //mixin
　┃　　┗━ _valiables.scss //変数
　┣━ module //コンポーネントとして使うBlockを格納
　┃　　┣━ _index.scss
　┃　　┣━ _header.scss //ヘッダー
　┃　　┣━ _footer.scss //フッター
　┃　　┣━ _container.scss //コンテナ
　┃　　┗━ _content.scss //コンテンツ
　┃　　　　　：
　┗━ page //ページ毎に使うCSSを格納
　　　　┣━ _index.scss
　　　　┗━ _top.scss //indexページ
　　　　 　　：
