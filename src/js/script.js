jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ハンバーガー
  $('.js-hamburger').on('click', function () {
    if ($('.js-hamburger').hasClass('is-open')) {
      $('.js-drawer-menu').fadeOut();
      $(this).removeClass('is-open');
    } else {
      $('.js-drawer-menu').fadeIn();
      $(this).addClass('is-open');
    }
  });


  var topBtn = $('.page-top');
  topBtn.hide();

  // ボタンの表示設定
  $(window).scroll(function () {
    if ($(this).scrollTop() > 70) {
      // 指定px以上のスクロールでボタンを表示
      topBtn.fadeIn();
    } else {
      // 画面が指定pxより上ならボタンを非表示
      topBtn.fadeOut();
    }
  });

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ヘッダー
  // $(window).on('scroll', function () {
  //   if ($('.slider1').height() < $(this).scrollTop()) {
  //     $('.header').css('background', 'rgba(17,17,17,1)');
  //   } else {
  //     $('.header').css('background', 'rgba(17,17,17,0.5)');
  //   }
  // });

  //ドロワーメニュー
  $('.navbar_toggle').on('click', function () {
    $(this).toggleClass('open');
    $('.menu').toggleClass('open');
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({
      scrollTop: targetY
    }, time, 'swing');
    return false;
  });


  // スクロール後ヘッダースタイル変更
  $(window).scroll(function () {
    let header = $('.js-header');
    let mv = $('.js-mv').height();
    let top = $(window).scrollTop();
    if (mv < top) {
      $(header).css('background', 'rgba(17,17,17,1)')
    } else {
      $(header).css('background', 'rgba(17,17,17,0.5)')
    }
  });

  var aboPos = $(".js-mv").offset().top;

  aboPos -= -130;

  $(window).scroll(function () {

    if ($(window).scrollTop() > aboPos) {
      $(".js-to-top").addClass("to-top__scroll");
    } else {
      $(".js-to-top").removeClass("to-top__scroll");

    }

  });


  var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1.48, //画像を何枚表示するか
    spaceBetween: 20,
    centeredSlides: true, //見切らせたい場合メイン画像をセンターにもってくるか
    //自動再生する場合
    autoplay: {
      delay: 3000, //3秒後に次の画像に代わる
    },
    loop: true, //最後の画像までいったらループする
    //ページネーションをつける場合
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

  });

  let swiper = new Swiper('.works-swiper', {
    loop: true,
    effect: 'fade',
    //　自動で画像が切り替わっていく
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    //画像が切り替わるスピード
    speed: 2000,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets', //ページネーションの種類
      clickable: true, //クリックに反応させる
    },
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

 //メインスライド
const slider = new Swiper ('.js-works-detail-slide', {
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  loopedSlides: 8, //スライドの枚数と同じ値を指定
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

//サムネイルスライド
const thumbs = new Swiper ('.js-works-detail-thumbnail', {
  slidesPerView: 'auto',
  spaceBetween: 24,//サムネイルの間隔
  centeredSlides: true,
  loop: true,
  slideToClickedSlide: true,
});

slider.controller.control = thumbs;
thumbs.controller.control = slider;

//メインスライド PC
const sliderPC = new Swiper ('.js-works-detail-slide-pc', {
  slidesPerView: 1,
  loop: true,
  loopedSlides: 8, //スライドの枚数と同じ値を指定
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
});

//サムネイルスライド
const thumbsPC = new Swiper ('.js-works-detail-thumbnail-pc', {
  slidesPerView: 8,//スライドの枚数と同じ値を指定
  spaceBetween: 8,
  loop: true,
  slideToClickedSlide: true,

});

sliderPC.controller.control = thumbsPC;
thumbsPC.controller.control = sliderPC;

// エラーメッセージ
  window.addEventListener('DOMContentLoaded', () => {
    // 「送信」ボタンの要素を取得
    const submit = document.querySelector('.submit');

  // 「送信」ボタンの要素にクリックイベントを設定する
    submit.addEventListener('click', (event) => { 
      // デフォルトアクションをキャンセル
      e.preventDefault();

      // 「お名前」入力欄の空欄チェック
        // フォームの要素を取得
        const name = document.querySelector('#name');

        // エラーメッセージを表示させる要素を取得
        const errMsgName = document.querySelector('.err-msg-name');

        if(!name.value){
          // クラスを追加(エラーメッセージを表示する)
          errMsgName.classList.add('form-invalid');
          // エラーメッセージのテキスト
          errMsgName.textContent = 'お名前が入力されていません';
          // クラスを追加(フォームの枠線を赤くする)
          name.classList.add('p-contact-form--warning');
          // 後続の処理を止める
          return;
      }else{
          // エラーメッセージのテキストに空文字を代入
          errMsgName.textContent ='';
          // クラスを削除
          name.classList.remove('input-invalid');
      }
    }, false );
  })
});