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
		<h1>2022年1月11日</h1>
		<p>今日の変更点は以下の通り．</p>
		<p><ul>
<li>・ローカル環境にApacheやphpを導入し，phpで書かれたサイトをデバッグできるようにした．</li>
<li>・phpによってヘッダ等諸ファイルを統一した．</li>
		</ul></p>
		<p>未だに手書きでの更新が続いている．</p>
		<p>Apache+PHPの環境でWordpressとかいうのが動くらしいが，このブログの更新に何か役立つだろうか．</p>
		
		<a href="./index.php">戻る</a>
	</body>
</html>
