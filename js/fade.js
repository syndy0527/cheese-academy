// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

    // ふわっ
    $('.fadeUpTrigger').each(function () { //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 20;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');// 画面内に入ったらfadeUpというクラス名を追記
        } else {
            $(this).removeClass('fadeUp');// 画面外に出たらfadeUpというクラス名を外す
        }
    });

    $('.fadeDownTrigger').each(function () { //fadeDownTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeDown');// 画面内に入ったらfadeDownというクラス名を追記
        } else {
            $(this).removeClass('fadeDown');// 画面外に出たらfadeDownというクラス名を外す
        }
    });
}
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

//スクロールすると上部に固定させるための設定を関数でまとめる
function FixedAnime() {
    var headerH = $('.header').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= headerH) {//headerの高さ以上になったら
        $('.header').addClass('fixed');//fixedというクラス名を付与
    } else {//それ以外は
        $('.header').removeClass('fixed');//fixedというクラス名を除去
    }
}
//ナビゲーションをクリックした際のスムーススクロール
$('.menulist - items').click(function () {
    var elmHash = $(this).attr('href'); //hrefの内容を取得
    var pos = Math.round($(elmHash).offset().top - 120);  //headerの高さを引く
    $('body,html').animate({ scrollTop: pos }, 500);//取得した位置にスクロール※数値が大きいほどゆっくりスクロール
    return false;//リンクの無効化
});
// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
});


