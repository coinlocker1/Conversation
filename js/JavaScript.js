/*変数の定義*/
var jikan = new Date();
var hour = jikan.getHours();

/*AIのコメント*/
/*var AIComment1 {};
var AIComment2 {};

/*選択肢
var UserComment1 {"おはよう","こんにちは","こんばんは"};
*/

/*読み込み完了時の実行内容*/
/*
textarea"tx"に文字を出力する
・6時0分0秒～11時59分59秒　　	おはようございます
・12時0分0秒～17時59分59秒　	こんにちは
・18時0分0秒～5時59分59秒　　	こんばんは
*/
window.onload = function Greeting() {
	var t = document.getElementById("tx")
	if(hour <= 5) {
		tx.value = ("こんばんは");
	}else if(hour <= 11) {
		tx.value = ("おはようございます");
	}else if(hour <= 17) {
		tx.value = ("こんにちは");
	}else if(hour <= 23) {
		tx.value = ("こんばんは");
	}
}

/*ボタン1が押された場合の処理*/
function bt1push() {
	
}

/*ボタン2が押された場合の処理*/
function bt2push() {
	
}

/*ボタン3が押された場合の処理*/
function bt3push() {
	
}
