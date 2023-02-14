$(function () {
  // 파비콘 애니메이션
  // 파비콘의 href 속성 변경하기
  function animateFavicon() {
    var cnt = 0;
    // 배열을 만들어서 적용하는 방법
    // var faviconPath = [
    //   'images/favicon/favicon_logo_01.ico',
    //   'images/favicon/favicon_logo_02.ico',
    //   'images/favicon/favicon_logo_03.ico',
    //   'images/favicon/favicon_logo_04.ico',
    //   'images/favicon/favicon_logo_05.ico',
    //   'images/favicon/favicon_logo_06.ico',
    //   'images/favicon/favicon_logo_07.ico',
    // ];

    // setInterval(function () {
    //   cnt++;

    //   if (cnt === 7) {
    //     cnt = 0;
    //   }
    //   $('#favicon').attr('href', faviconPath[cnt]);
    // }, 200);

    // 배열없이 바로 주소에서 처리하는 방법
    setInterval(function () {
      cnt++;

      if (cnt === 7) {
        cnt = 0;
      }
      $('#favicon').attr('href', 'images/favicon/favicon_logo_0' + (cnt + 1) + '.ico');
    }, 150);
  }
  animateFavicon();

  // 헤더
  var header = $('#header');
  $('#header .gnb_wrap').on('mouseenter', function () {
    header.addClass('on');
  });

  header.on('mouseleave', function () {
    header.removeClass('on');
  });

  // 이벤트 두 개 동시에 걸기(두개 이상 가능)
  $(window)
    .on('scroll resize', function () {
      var st = $(this).scrollTop();
      var winW = $(this).outerWidth();

      if (winW > 1200) {
        if (st > 162) {
          header.addClass('fixed');
        } else {
          header.removeClass('fixed');
        }
      } else {
        if (st > 0) {
          header.addClass('fixed');
        } else {
          header.removeClass('fixed');
        }
      }
    })
    .trigger('scroll');

  // 모바일 메뉴
  $('#header .header_top .btn_open').on('click', function (e) {
    e.preventDefault();
    $('#header .m_gnb_area').addClass('on');
    $('#header .dimmed').show();
  });

  $('#header .m_gnb_area .btn_close, #header .dimmed').on('click', function () {
    $('#header .m_gnb_area').removeClass('on');
    $('#header .dimmed').hide();
  });

  // 모바일 gnb
  // 여러번 클릭해도 한번만 열리도록
  // $(this).next().css('display')로 조건판단 가능
  $('#header .m_gnb>li>a').on('click', function (e) {
    e.preventDefault();
    if (!$(this).next().is(':visible')) {
      $(this).parent().addClass('on').siblings().removeClass('on');
      $(this).next().slideDown(300).parent().siblings().find('.depth02').slideUp(300);
    } else {
      $(this).parent().removeClass('on');
      $(this).next().slideUp(300);
    }
  });

  // 메인슬라이더
  var mainSlider = new Swiper('.main_slider ', {});

  var liveSlider = new Swiper('.live_slider', {
    slidesPerView: 3,
    spaceBetween: 40,
    pagination: {
      el: '.swiper-pagination',
    },

    breakpoints: {
      // 1200이하
      1200: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      // 767이하
      767: {
        slidesPerView: 'auto',
        spaceBetween: 20,
      },
    },
  });

  // 메인 뉴스
  $('.main_news .news a').on('click', function (e) {
    e.preventDefault();
    $('body').addClass('on');
    $('.news_popup').fadeIn();
  });

  $('.news_popup .btn_close').on('click', function () {
    $('body').removeClass('on');
    $('.news_popup').fadeOut();
  });

  // 패밀리사이트
  $('#footer .footer_bottom .family_wrap .btn_family').on('click', function () {
    $(this).toggleClass('on');
    $(this).next().toggle();
  });

  // 탑버튼
  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();

      if (st > 162) {
        $('#footer .top_wrap').fadeIn();
        $('#footer .quick_wrap').removeClass('active');
      } else {
        $('#footer .top_wrap').fadeOut();
        $('#footer .quick_wrap').addClass('active');
      }
    })
    .trigger('scroll');

  $('#footer .top_wrap').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: '0' }, 500);
  });
});
