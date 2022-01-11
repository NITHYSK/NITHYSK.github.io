<!doctype html>
<html lang="ja">
	<head>
		<!-- 文字コードを指定 -->
		<meta charset = 'utf-8'>

		<!-- タイトル -->
		<title>早坂のブログ</title>

		<!-- スマホ表示対応 -->
		<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=yes" />

		<link rel="icon" href="../icon.png">

		<!-- スタイル指定 -->
		<link rel="stylesheet" href="../styles.css">
	</head>

	<body>
<?php
$webroot = $_SERVER['DOCUMENT_ROOT'];
include($webroot."/header.php");
?>
		<h1>2022年1月10日</h1>
		<p>
		細部の更新を行った。<br>
		具体的には、<br>
		</p>
		<ul>
			<li>ゲーム一覧ページのデザインを微修正</li>
			<li>ブロック崩しのスクリプトを別のファイルに分けた</li>
			<li>ブロック崩しをマウス操作に対応させ、コードにも全体的な微修正を加えた</li>
		</ul>
		<p>
		HTML手書きでブログを書くことに飽きてきたので、そろそろサイトジェネレータを導入したい。<br>
		BBSも実装したいが、DBやバックエンドの実装は残念ながらgithub Pagesでサポートされていない。<br>
		そのあたりのサービスはherokuあたりを使うのがいいんじゃないかと思っている。
		</p>


		<a href="./index.php">戻る</a>
	</body>
</html>
