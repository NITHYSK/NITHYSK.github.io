<!doctype html>
<html lang="ja">
	<head>
		<!-- 文字コードを指定 -->
		<meta charset = 'utf-8'>

		<!-- タイトル -->
		<title>ゲーム一覧</title>

		<!-- スマホ表示対応 -->
		<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=yes" />

		<link rel="icon" href="../icon.png">

		<!-- スタイル指定 -->
		<link rel="stylesheet" href="../styles.css">
		<link rel="stylesheet" href="./styles.css">
	</head>

	<body>
<?php
$webroot = $_SERVER['DOCUMENT_ROOT'];
include($webroot."/header.php");
?>
		<h1>ゲーム一覧</h1>

		<a href="./game01/index.php">
			<img src="game01.png" alt="ブロック崩し">
		</a><br>
		<a href="./game01/index.php">ブロック崩し</a>
		</p>
		<a href="./game02/index.php">
			ジャイロセンサのテスト</a>


		</p>
		<a href="../index.php">早坂のホームページへ戻る</a>
	</body>
</html>
