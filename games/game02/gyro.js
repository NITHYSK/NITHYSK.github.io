/**
 * GYRO.JS
 */

/**
 * Author:	早坂
 * References:
 * 		1.https://qiita.com/kob58im/items/b4d3b52b013c7d9dfa5d
 * 		2.https://developer.mozilla.org/ja/docs/Web/API/Detecting_device_orientation
 */

/* <canvas>要素への参照を取得し、canvasに格納 */
const canvas	= document.getElementById("myCanvas");

/* 2D描画コンテキストを保存する変数 */
var ctx		= canvas.getContext("2d");

/* 向きを三軸で管理 */
let orientation	= [];
for(var i=0; i<4; i++)
{
	orientation[i]	= 0;		// 向きを初期化
}

window.addEventListener("deviceorientation", handleOrientation, true); // デバイスの角加速から発火したイベントを処理

/***** DRAW() *****/
draw();

/* デバイスの角加速から発火したイベントを処理 */
function handleOrientation(e)
{
	/* デバイスの向きを一時的に格納する変数 */
	let orientation_tmp	= [];
	orientation_tmp[0]	= e.absolute;
	orientation_tmp[1]	= e.alpha;
	orientation_tmp[2]	= e.beta;
	orientation_tmp[3]	= e.gamma;
	
	/* 取得した値に以上がなければ向きを更新 */
	for(let i=0; i<4; i++)
	{
		if(orientation_tmp[i]!==null)
		{
			orientation[i]	= orientation_tmp[i];
		} else {
			/* DO NOTHING */
		}
	}
}

/* デバイスの向きをキャンバスに描画 */
function drawOrientation()
{
	ctx.font	= "20px Arial";
	ctx.fillStyle	= "#000000";
	ctx.fillText("Absolute:	"+orientation[0], 10, 20);
	ctx.fillText("Alpha:	"+orientation[1], 10, 40);
	ctx.fillText("Beta:	"+orientation[2], 10, 60);
	ctx.fillText("Gamma:	"+orientation[3], 10, 80);

}

/* 最初に呼び出される描画ループ */
function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawOrientation();
	requestAnimationFrame(draw);	// 次の描画ループを呼び出す
}
