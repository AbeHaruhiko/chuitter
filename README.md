chuitter
========


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

### git（ぎっと）

http://git-scm.com/

分散型バージョン管理システム。Linuxを作ったLinusさんが、Subversionにムカついて一週間くらいで作ったらしい。


### GitHub（ぎっとはぶ）

https://github.com/

gitのリポジトリをWebで提供するサービス。ソーシャルコーディングという言葉を生んだ。が、最近はクローズドソースなソフトウェア開発でも、GitHubのいろいろなコラボレーション・コミュニケーション機能が有用との認識が広まっている。

2014/07には **あの** マイクロソフトがTypeScriptなどのソースコードをGitHubで公開。

## ちゅいったぁ作成手順

```
$ npm install -g generator-angular
$ mkdir chuitter
$ cd chuitter
$ yo angular
$ grunt serve	# 動作確認
mail.htmlを編集
input=textと送信ボタンをおく。モデルデータ表示用divも。

parseでアプリ作成
quick starg guideからコピペ（オブジェクトの保存も下の方にある）

main.jsに追加、取得関数追加


$ npm install -g generator-heroku
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

