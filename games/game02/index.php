<!DOCTYPE html>
<html lang="ja">
	<head>
		<!-- 文字コードを指定 -->
		<meta charset='utf-8'>

		<!-- タイトル -->
		<title>ジャイロセンサのテスト</title>

		<style>
*{ padding: 0; margin:0; }
canvas { background: #eee; display: block; margin: 0 auto; }
		</style>

		<!-- スマホ表示対応 -->
		<meta name="viewport" content="width=device-width,initial-scale=1.0" />

		<link rel="icon" href="../../icon.png">

		<!-- スタイル指定 -->
		<link rel="stylesheet" href="../../styles.css">
		<link rel="stylesheet" href="../styles.css">
	</head>
	<body>
<?php
$webroot = $_SERVER['DOCUMENT_ROOT'];
include($webroot."/header.php");
?>
		<h1>
			ジャイロセンサのテスト</h1></p>

		<canvas id="myCanvas" width="300px" height="300px"></canvas>

		<script src="./gyro.js">
		</script>
		<output id="outputText"></output>
		</p>
		<hr/>
		<a href="../index.php">ゲーム一覧へ戻る</a>
	</body>

</html>

</body>

</html>
