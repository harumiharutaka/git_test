/*********************************
    コーディングルール
*********************************/



/* CSS基本ルール */

1.CSS設計は「BEM」を採用
2.命名規則は「MindBEMding（.Block__Element--Modifier）」を採用
3.modifierのキーと値はハイフンで繋ぐ（key-val）
4.複数単語は「ハイフンケース（multi-word）」で記載する
5.Sassは「Dart Sass」を採用
6.Sassのコンパイルは「gulp」を使用（ターミナルで「npx gulp」と入力すれば起動）
7.JavaScriptの命名は接頭辞「js_」をつけ「スネークケース」で記載する（js_multi-word_multi-word）
8.基本的に子孫セレクタは使用しない
9.Blockの閉じタグには極力コメント「<!-- /.class-name -->」をつける
10.font-sizeは「rem」で指定する
11.z-indexは変数管理する（「$z_index_header」等）



/* Sassネスト構成 */

1.「__Element」を「&」でネストしない
2.「__Modifier」は「&」でネストする
3.疑似クラス,疑似要素は「&」でネストする

.Block {
    &--Modifier {
    }

    &:hover {
    }

    &::before {
    }
}

.Block__Element {
    &--Modifier {
    }

    &:hover {
    }

    &::before {
    }
}



/* Sassディレクトリ構成 */

scss
　┣━ style.scss
　┣━ base //基本設定などを格納
　┃　　┣━ _index.scss
　┃　　┣━ _base.scss //基本設定
　┃　　┣━ _helper.scss //ヘルパークラス
　┃　　┗━ _import.scss //外部ファイル
　┣━ global //mixin,変数などを格納
　┃　　┣━ _index.scss
　┃　　┣━ _media.scss //メディアクエリ
　┃　　┗━ _valiables.scss //変数
　┃　　　　　：
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
