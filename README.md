chuitter(http://chuitter.herokuapp.com/)
========

## ちゅいったぁ作成手順

```
# npm install -g generator-angular
$ mkdir chuitter
$ cd chuitter
$ yo angular
$ grunt serve	# 動作確認
mail.htmlを編集
input=textと送信ボタンをおく。モデルデータ表示用divも。

parseでアプリ作成
quick starg guideからコピペ（オブジェクトの保存も下の方にある）

main.jsに保存関数追加、取得関数追加

main.htmlにリスト配置。

# npm install -g generator-heroku
$ yo heroku

Gruntfileに設定追加。

$ grunt build
$ heroku apps:create chuitter
$ git init
$ git add .
$ git commit -m’initial commit’
$ git remote add heroku master
$ git subtree push --prefix dist heroku master

```

## 各種ツール・コマンドの紹介

### yeoman（よーまん）

http://yeoman.io/


> WebページやWebアプリケーションなどの制作を迅速にはじめることができ、制作中のいろいろな作業をサポートしてくれるツールセット。

[今話題のワークフロー構築ツール「Yeoman」とは？](https://www.engcafe.tv/news/2014071410791/)

ちなみにGoogle製。

* yo … Webページやフレームワークのひな形を生成する
* Grunt … 制作用Webサーバの起ち上げ、リリースビルドなど制作を支援する機能を提供する
* Bower … JavaScriptライブラリ、CSSフレームワークなどのパッケージマネージャ。パッケージの検索、更新などを行う。Twitter社製

### node.js（のーど、のーどじぇいえす）

http://nodejs.org/

> Node.jsとは，ブラウザGoogle Chrome用に開発されたJavaScriptエンジンV8がサーバ上でプログラムを実行できるように，ファイルやネットワークI/Oなど多くの機能を追加したものです。軽量で効率よく多くのリクエストを処理するネットワークアプリケーションの構築ができるプラットフォームになっています。

[第1回 Node.jsとは：基礎から学ぶNode.js｜gihyo.jp … 技術評論社](http://gihyo.jp/dev/serial/01/nodejs/0001)

アプリケーションサーバ（サーバサイドJavaScript）として有名だが、ローカルPC上でいろんなツールを動作させるプラットフォームとしても人気。yeomanもnode.js上で動く。

大浦さんが使っているらしい（？）。

#### npm

node.js用のパッケージマネージャ。
`$ npm install hogehoge` で、hogehogeパッケージをインストールできたり。

### angularjs（あんぎゅらー、あんぎゅらーじぇいえす）

https://angularjs.org/

Google製のJavaScript MVCライブラリ。
双方向バインディング、DI、ルーティングなど変態的機能が盛りだくさん。基本機能はお手軽に使える。
jQueryなどに比べると機能が高度に抽象化されているので難しそうに見える。

前に安部が作ったまゆげジェネレータ <https://github.com/AbeHaruhiko/mayuge> でも利用した。

### Bootstrap（ぶーとすとらっぷ。旧Twitter Bootstrap）

http://getbootstrap.com/

CSSフレームワーク。CSS（とJS）で、まあまあモダンな雰囲気のサイトにできる。
世界中で使われすぎてBootstrap感が出ると逆にダサいという罠がある。
まゆげでも利用。

### Parse.com（ぱーす）

http://www.parse.com

いわゆるBaaS（Backend as a Service）。アプリやサービスのバックエンドに必要な機能（データストア、プッシュ通知など）をクラウド上で提供する。
当初はmBaas（mobile BaaS）だったが、いま（2014/09）はWeb（JavaScript, PHP）、OS X、.NETなどのSDKも提供している。
Facebookに買収されて、えらい勢いで成長中。Yコンビネーター出身。

大武さんが詳しい。

### heroku（へろく）

https://www.heroku.com/

いわゆるPaaS（Platform as a Service）。最初はRuby専用だったが、いまはnode.js、PHPなどいろいろサポート。データストア、プッシュ、検索など超多数のモジュールをサポートしており、超簡単に導入できる。
heroとhaiku（俳句）の合成語らしい。Yコンビネーター出身。
Immutable infrastructure。←社内のWeb DB Press No.81参照。

### git（ぎっと）

http://git-scm.com/

分散型バージョン管理システム。Linuxを作ったLinusさんが、Subversionにムカついて一週間くらいで作ったらしい。


### GitHub（ぎっとはぶ）

https://github.com/

gitのリポジトリをWebで提供するサービス。ソーシャルコーディングという言葉を生んだ。が、最近はクローズドソースなソフトウェア開発でも、GitHubのいろいろなコラボレーション・コミュニケーション機能が有用との認識が広まっている。

2014/07には **あの** マイクロソフトがTypeScriptなどのソースコードをGitHubで公開。

松永さんが詳しい。

### その他参考情報・関連用語

#### YUI廃止に当たってのYahooの発表（2014/09/01）

> 皆さんご存じの通り、Webプラットフォームはこの数年で劇的な変化が起きています。JavaScriptは以前よりずっとユビキタスな存在となりました。Node.jsの登場はJavaScriptをサーバサイドでも使えるものとし、シングルページアプリケーションといった一連の世界を開拓しました。
> 新しいパッケージマネージャ（npm、bower）は、サードパーティのエコシステムやオープンソース、特定用途のツールといったものの登場に拍車をかけていると同時に、UNIXの精神（UNIX philosophy）を内包し、非常に複雑な開発手法を可能にしています。
> 新しいビルドツール（Gruntやそのプラグイン、Broccoli、Gulp）は、小さなモジュールを組み上げて、大規模で結束したシステムの実現を容易にしました。
> 新しいアプリケーションフレームワーク（Backbone、React、Ember、Polymer、Angularなど）は、アプリケーションがスケーラブルでメンテナブルな構造を持つことを助けています。
> 新しいテスティングツール（Mocha、Casper、Karmaなど）は一、貫した継続的デリバリのパイプラインの導入を容易にしました。

[米Yahoo!がYUI新規開発中止を発表。その背景となったJavaScriptの現状解説](http://www.publickey1.jp/blog/14/yahooyuijavascript.html)

（原文）http://yahooeng.tumblr.com/post/96098168666/important-announcement-regarding-yui

#### MEAN

MongoDB + Express + AngularJS + Node.jsのこと。
昔で言うLAMP的なあれ。

#### Sass, Compass

CSSプリプロセッサ。CSSの記述にプログラミング的な概念を持ち込める仕組み。何度も同じ記述をしないですむよう繰り返し処理をさせたり、変数を定義して各所に埋め込んだり。専用の記法で書いて、コンパイルすると普通のCSSが生成される。

#### altJS

JavaScriptのイケてないところをカバーする言語の総称。TypeScript、CoffeeScriptなど。コンパイルしてJSを生成する。

#### CI

Continuous Integration、継続的インテグレーション。ユニットテスト（※）を高頻度に回しながら開発しようぜ的なあれ。

※ユニットテストは単体テストのことではありません。

#### マークダウン

軽量なマークアップ言語。
行頭にシャープをひとつ付けると見出しレベル1、HTMLでいうH1を表す、など。

このREADMEもマークダウン記法で書かれている。
