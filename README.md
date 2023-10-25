
# WPへの埋め込み

__index.html__

```html
    <link rel="stylesheet" href="https://unpkg.com/destyle.css@4.0.0/destyle.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <title>Cart Implementation</title>
    <!-- ↓この部分 -->
    <script defer="defer" src="./static/js/main.8380b19f.js"></script>
    <link href="./static/css/main.f4d01a19.css" rel="stylesheet">
    <!-- ↑この部分 -->
  </head>
  <body>
    <!-- ↓この部分 -->
    <div id="root"></div>
    <!-- ↑この部分 -->
  </body>
</html>
```

埋め込むWPの固定ページへ持っていく。
リンクの書式はWPに合わせる。

__ page-cart.php　__

```php
<?php get_header(); ?>

<div class="page">
  <div id="root"></div>
  <script
    src="<?php echo get_template_directory_uri(); ?>/static/js/main.8380b19f.js">
  </script>
  <link 
    href="<?php echo get_template_directory_uri(); ?>/static/css/main.f4d01a19.css" 
    rel="stylesheet">
</div>

<?php get_footer(); ?>
```

# カート機能の実装

参照したコード
https://github.com/Index-Zero-0/react-js-shopping-cart

# create app
```
npx create-react-app my-app
```

## アプリケーションの核をApp.jsで管理

### App.js: 

このファイルは、ショッピングカートアプリケーションのメインコンポーネントを表し、コースをカートに追加するためのロジック、コースの削除、金額の管理、チェックアウトなどの全体的なロジックを管理します。

### App.css: 

このファイルには、h1 タグのスタイリングやカートが空の場合のメッセージのスタイリングを含む、すべてのスタイリングコードが含まれています。アプリケーションの外観と感触は、このスタイリングファイルで指定されています。

## 各コンポーネントの機能

__「components」というディレクトリを作成し以下のファイルを作成。__

* SearchComponent.js
* ShowCourseComponent.js
* UserCartComponent.js

### SearchComponent.jsx: 

このファイルのコードは、ユーザーが特定のコースを検索できる検索バーのロジックを保持しています。

### ShowCourseComponent.jsx: 

このファイルには、ユーザーの入力に応じて一致するコースを表示するコードが含まれています。言い換えれば、コースが表示されるカードは、このファイルからレンダリングされます。

### UserCartComponent.jsx: 

このファイルは、ユーザーカートのロジックを保持しています。異なるプロップを使用して、追加されたコースを削除したり、ユーザーが数量を選択したり、異なる機能を実行したりできます。

