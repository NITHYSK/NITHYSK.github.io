/**
 * BRICKBREAKER.JS
 */

/**
 * ネストが深すぎるように思われる部分もあるが、これは参考文献のものをほぼそのままに実装したためである。
 * 私自身のセンスの欠如を示すものではないことに注意されたし。
 */

/* <canvas>要素へ描画するには、まずJavascriptから<canvas>要素への参照を取得しなければならない */
/* <canvas>要素への参照をcanvasに保存 */
var canvas = document.getElementById("myCanvas");

/* 2D描画コンテキストを保存するためにctx変数を作成 */
var ctx = canvas.getContext("2d");

var x = canvas.width/2;		// ボールの初期位置
var y = canvas.height-30;	// ボールの初期位置

var dx = 2.0;			// ボールの速度
var dy = -2.0;			// ボールの速度

var ballRadius = 10;		// ボールの半径
var paddleHeight = 10;		// パドルの高さ
var paddleWidth = 70;		// パドルの幅
var paddleX = (canvas.width-paddleWidth)/2;	// パドルの初期位置

var rightPressed = false;	// アローキー右の状態
var leftPressed = false;	// アローキー左の状態

var ballColor = "#0095DD";	// ボールの色
var paddleColor = "#0095DD"	// パドルの色

var brickRowCount	= 3;	// ブロックの行数
var brickColumnCount	= 5;	// ブロックの列数
var brickWidth		= 75;	// ブロックの幅
var brickHeight		= 20;	// ブロックの高さ
var brickPadding	= 10;	// ブロックの間隙
var brickOffsetTop	= 30;	// ブロックの上端の隙間
var brickOffsetLeft	= 30;	// ブロックの左端からの相対位置
var score		= 0;	// スコア
var lives		= 3;	// プレイヤーのライフ

/* 1つの二次元配列ですべてのブロックを記録する。 */
var bricks		= [];
for(var col=0; col<brickColumnCount; col++)
{
	bricks[col] = [];
	for(var row=0; row<brickRowCount; row++)
	{
		bricks[col][row] = { x: 0, y: 0, status: 1 };
	}
}

function collisionDetection(col, row)
{
	for(var col=0; col<brickColumnCount; col++)
	{
		for(var row=0; row<brickColumnCount; row++)
		{
			var b = bricks[col][row];
			if(b.status == 1)
			{
				if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight)
				{
					dy = -dy;
					b.status = 0;
				} else {
					/* DO NOTHING */
				}
			} else {
				/* DO NOTHING */
			}
		}
	}
}

/* ブロックの描画 */
function drawBricks()
{
	for(var col=0; col<brickColumnCount; col++)
	{
		for(var row=0; row<brickRowCount; row++)
		{
			collisionDetection(col, row);
			if(bricks[col][row].status == 1)
			{
				var brickX = (col*(brickWidth+brickPadding))+brickOffsetLeft;
				var brickY = (row*(brickHeight+brickPadding))+brickOffsetTop;
				bricks[col][row].x = brickX;
				bricks[col][row].y = brickY;
				ctx.beginPath();
				ctx.rect(brickX, brickY, brickWidth, brickHeight);
				ctx.fillStyle = "#0095DD";
				ctx.fill();
				ctx.closePath();
			} else {
				/* DO NOTHING */
			}
		}
	}
}

/* パドルの描画 */
function drawPaddle()
{
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = paddleColor;
	ctx.fill();
	ctx.closePath();
}

/* 以下２つの関数はどちらも変数eで表されるイベントをパラメーターとして受け取る。 */
/* 大抵のブラウザではアローキー左右にArrowLeftとArrowRightが対応しているが、IE/EdgeではLeftとRightも確認する必要がある。 */

/* イベントリスナーがキーの押下によるイベントの発火を検知すると、keyDownHandlerが実行され、その情報が変数xxxPressedに保存される。 */
function keyDownHandler(e)
{
	if(e.key == "Right" || e.key == "ArrowRight")
	{
		rightPressed = true;
	} else {
		if(e.key == "Left" || e.key == "ArrowLeft")
		{
			leftPressed = true;
		} else {
			/* DO NOTHING */
		}
	}
}

/* イベントリスナーがキーの引きによるイベントの発火を検知すると、keyUpHandlerが実行され、その情報が変数xxxPressedに保存される。 */
function keyUpHandler(e)
{
	if(e.key == "Right" || e.key == "ArrowRight")
	{
		rightPressed = false;
	} else {
		if(e.key == "Left" || e.key == "ArrowLeft")
		{
			leftPressed = false;
		} else {
			/* DO NOTHING */
		}
	}
}

/* 衝突検出関数 */
function collisionDetection()
{
	for(var col=0; col<brickColumnCount; col++)
	{
		for(var row=0; row<brickRowCount; row++)
		{
			var b = bricks[col][row];
			if(b.status == 1)
			{
				if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight)
				{
					dy = -dy;
					b.status = 0;
					score++;
					if(score == brickRowCount*brickColumnCount)
					{
						alert("YOU WIN, CONGRATULATIONS!");
						document.location.reload();
					} else {
						/* DO NOTHING */
					}
					ballColor = ballColor == "#0095DD" ? "#DD9500" : "#0095DD";
				} else {
					/* DO NOTHING */
				}
			} else {
				/* DO NOTHING */
			}
		}
	}
}

function drawScore()
{
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Score: "+score, 8, 20);
}

function drawLives()
{
	ctx.font = "16px Arial";
	ctx.fillStyle = "#0095DD";
	ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

/* ボールの描画 */
function drawBall()
{
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle=ballColor;
	ctx.fill();
	ctx.closePath();
}

/* メインの描画ループ */
function draw()
{
	/* 画面の初期化 */
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBricks();		// ブロックを描画
	drawBall();		// ボールを描画
	collisionDetection();	// 衝突を検出
	drawPaddle();		// パドルを描画
	drawScore();		// スコアを表示
	drawLives();		// プレイヤーのライフを表示
	if(rightPressed)	// アローキー右が押された際の動作
	{
		if(paddleX < canvas.width-paddleWidth)
		{
			paddleX += 7;
		} else {
			/* DO NOTHING */
		}
	} else {
		/* DO NOTHING */
	}
	if(leftPressed)		// アローキー左が押された際の動作
	{
		if(paddleX > 0)
		{
			paddleX -= 7;
		} else {
			/* DO NOTHING */
		}
	} else {
		/* DO NOTHING */
	}
	x += dx;		// ボールの座標を更新
	y += dy;		// ボールの座標を更新
	if(y + dy < ballRadius)	// ボールが上端に触れた場合、y方向の速度を逆転させる
	{
		dy = -dy;
	} else {		// ボールが上端に触れていない場合
		/* ボールがパドルと同じ高さの領域に侵入した場合 */
		if(y+dy > canvas.height-ballRadius-paddleHeight)
		{
			/* ボールのx座標がパドルの内側に収まっていた場合、y方向の速度を逆転させ、ボールのスピードを上げる */
			if(paddleX < x && x<paddleX + paddleWidth)
			{
				dy = -dy;
				dx *= 1.05;
				dy *= 1.05;
			} else {	// ボールがパドルと同じ高さの領域に侵入し、かつx座標がパドルの内側に収まっていなかった場合
				lives = lives - 1;	//プレイヤーのライフをデクリメント
				if(!lives)	//ライフが0ならば
				{
					/* ゲームオーバーのアラートを表示 */
					alert("GAME OVER");
					/* 再読み込み */
					document.location.reload();
					/* Needed for Chrome */
					clearInterval(interval);
				} else {
					x = canvas.width/2;
					y = canvas.height-30;
					dx=2;
					dy=-2;
					//paddleX = (canvas.width-paddleWidth)/2;
				}

			}
		} else {
			/* DO NOTHING */
		}

	}
	/* ボールが左右の画面端に侵入した場合は、x方向の速度を逆転させる。 */
	if(x + dx > canvas.width-ballRadius || x + dy < ballRadius)
	{
		dx = -dx;
	} else {
		/* DO NOTHING */
	}
	/**
	 * draw()が自分自身を何度も呼び出す
	 * requestAnimationFrame()を使う場合、フレームレートの制御はブラウザ側に託される。
	 * ブラウザはフレームレートを適切に同期し図形を必要なときにだけ描画する。
	 * そのため、setIntervalメソッドよりも効率的で滑らかなアニメーションループを生み出す。
	 */
	requestAnimationFrame(draw);
}
/* キーの押下または引きによるイベントの発火を検知し、指定された関数keyDownHandlerまたはkeyUpHandlerを実行するためのイベントリスナーを設定 */
// document.addEventListener("keydown", keyDownHandler, false);
// document.addEventListener("keyup", keyUpHandler, false);
/* マウスカーソルの移動によるイベントの発火を検知し、指定された関数mouseMoveHandlerを実行するためのイベントリスナーを設置 */
document.addEventListener("mousemove", mouseMoveHandler, false);

/* イベントリスナがマウスカーソルの移動によるイベントの発火を検知した際に呼び出される */
function mouseMoveHandler(e)
{
	var relativeX = e.clientX - canvas.offsetLeft;	// イベントのパラメータからX座標を取り出し、canvasの左端との差分をとる。
	if(relativeX > 0 && relativeX < canvas.width)	// 差分が0を超過かつcanvasの幅未満である場合
	{
		paddleX = relativeX - paddleWidth/2;	// パドルの中心座標を更新
	} else {
		/* DO NOTHING */
	}
	if(canvas.width-paddleWidth < paddleX)		// パドルの右端がcanvasの幅を超えた場合
	{
		paddleX = canvas.width-paddleWidth;	// パドルの右端がcanvasの右端に来るようにする
	} else {
		if(paddleX < 0)				// パドルの左端がcanvasの左端未満となった場合
		{
			paddleX = 0			// パドルの左端がcanvasの左端に来るようにする
		} else {
			/* DO NOTHING */
		}
	}
}

// var interval = setInterval(draw, 10);			// 10ms間隔でのPollingを設置し、それに合わせてdraw関数を呼び出す？

draw();
