/*変数の定義*/
var t = document.getElementById("tx");
var flg;
var jikan = new Date();
var hour = jikan.getHours();
var AIComment1 = new Array(3);
var AIComment2 = new Array(3);
var AIComment3 = new Array(3);
var UserComment1 = new Array(3);
var UserComment2 = new Array(3);
var UserComment3 = new Array(3);

/*AIのコメント*/
var AIComment1 = [ "ありがとうございます" , "" , "" ];
var AIComment2 = [ "もちろんです","","" ];
var AIComment3 = [ "さようなら","","" ];
/*選択肢*/
var UserComment1 = [ "明日もよろしくね","","" ];
var UserComment2 = [ "バイバイ","","" ];


/*読み込み完了時の実行内容*/
/*
textarea"tx"に文字を出力する
・6時0分0秒～11時59分59秒　　	おはようございます
・12時0分0秒～17時59分59秒　	こんにちは
・18時0分0秒～5時59分59秒　　	こんばんは
*/

window.onload = function Greeting() {
	
	if(hour <= 5) {
		tx.value = ("こんばんは");
        
	}else if(hour <= 11) {
		tx.value = ("おはようございます");
	}else if(hour <= 17) {
		tx.value = ("こんにちは");
	}else if(hour <= 23) {
		tx.value = ("こんばんは");
	}
	flg = 0;
}

/*ボタン1が押された場合の処理*/
function bt1push() {
	switch (flg){
  case 0:
    tx.value = (AIComment1[0]);
    button1.value = (UserComment1[0]);
    flg ++;
    break;
  case 1:
    tx.value = (AIComment2[0]);
    button1.value = (UserComment2[0]);
    flg ++;
    break; 
  case 2:
    tx.value = (AIComment3[0]);
    break;   
    }
}

/*ボタン2が押された場合の処理*/
function bt2push() {
	switch (flg){
  case 0:
    tx.value = (AIComment1[1]);
    button2.value = (UserComment2[1]);
    flg ++;
    break;
  case 1:
    tx.value = (AIComment2[1]);
    button2.value = (UserComment2[1]);
    flg ++;
    break;
  case 2:
    tx.value = (AIComment3[1]);
    flg ++;
    break;
    }
}

/*ボタン3が押された場合の処理*/
function bt3push() {
	switch (flg){
  case 0:
    tx.value = (AIComment1[2]);
    button3.value = (UserComment2[2]);
    flg ++;
    break;
  case 1:
    tx.value = (AIComment2[2]);
    button3.value = (UserComment2[2]);
    flg ++;
    break;
  case 2:
    tx.value = (AIComment3[2]);
    flg ++;
    break;
    }
}