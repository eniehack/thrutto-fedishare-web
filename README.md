# スルッとFediverseShare（仮）
## 特徴

MastodonやMisskeyなどのFediverseに読んでいたWebページを共有するには、既存のmisskeyshareや、などでは、1回以上サーバのアドレスを記入する必要がありました。さらに、misskeyshareや、など様々なサービスが開発され、提供されてきましたが、それぞれでサーバのアドレスを入力する必要があるために共有が面倒でした。

そこでこの「するっとFediverseShare」ではブラウザ拡張に1度入力するだけで対応するサイトであればインストール後の初期設定1回だけですぐに共有ができるようになります。

## 使いかた

### ユーザ

最初に[ここ](https://github.com/eniehack/thrutto-fedishare-webext)からブラウザ拡張をインストールします。

ブラウザ拡張の設定を開き、普段使っているサーバーのURL（例: `https://misskey.io`、`https://fedibird.com`など）を入力し、保存を押します。

### サイト管理者

以下のように`head`に`script`タグを、`body`タグの中に`fediverse-share`タグを入れれば共有ボタンが動きます。

```html
<!DOCTYPE html>
<html>
    <head>
        ...
        <script src="./fediverse.js" type="module"></script>
    </head>
    <body>
        ...
        <fediverse-share title="するっとFediverseShare"></fediverse-share>
    </body>
</html>
```

詳しい使い方は[こちら]をご覧ください。

## 開発者向け

このプロダクトはブラウザ拡張が`window.fediverse`を定義し、その詳細を公開することで共有サイトの規格を統一し、UXの向上を図るために製作されました。

`window.fediverse`の規格に関しては[ブラウザ拡張のページに](https://github.com/eniehack/thrutto-fedishare-webext)詳細があります。