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
var AIComment1 = [ "おはようございます" , "こんにちは" , "こんばんは" ];
var AIComment2 = [ "","","" ];
var AiComment3 = [ "","","" ];
/*選択肢*/
var UserComment1 = [ "test1","test2","test3" ];
var UserComment2 = [ "test2","test2","test3" ];
var UserComment3 = [ "test3","test3","test3" ];


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

/*button1.id = UserComment1[0];

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
    button1.value = (UserComment3[0]);
    break;
    }
}

/*ボタン2が押された場合の処理*/
function bt2push() {
	switch (flg){
  case 0:
    tx.value = (AIComment1[1]);
    break;
  case 1:
    tx.value = (AIComment2[1]);
    break;
  case 2:
    tx.value = (AIComment3[1]);
    break;
    }
}

/*ボタン3が押された場合の処理*/
function bt3push() {
	switch (flg){
  case 0:
    tx.value = (AIComment1[2]);
    break;
  case 1:
    tx.value = (AIComment2[2]);
    break;
  case 2:
    tx.value = (AIComment3[2]);
    break;
    }
}
