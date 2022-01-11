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
		<h1>2022年1月5日</h1>
		<p><a href="../games/index.php">ブロック崩し</a>を作った。というか、ほとんど写経である。<br>
		JavaScriptで何かを書いた経験が全く無いというわけではないが、思いのほか時間がかかった。<br>
		htmlの中にJSを直接書き込むとVIMのハイライトがしょっちゅうおかしくなるので、今後は別のファイルに分けようかと思う。<br>
		スマホでのプレイにも対応予定。</p>

		<a href="../index.php">早坂のホームページに戻る</a>
	</body>
</html>
