$(function(){

  // 상단 메뉴 스크롤하면 배경생기고 고정하기

  $('.header').hover(function(){
    $('.header').addClass('hover');
  },function(){
    $('.header').removeClass('hover');
  });


  $(window).scroll(function(){
    curr = $(this).scrollTop();

    if(curr > 0){
      $('.header').addClass('fixed');
    }else{
      $('.header').removeClass('fixed');
    }
  })

  $(window).trigger('scroll');


  // 메인 비주얼

  var mainSlide = new Swiper(".sc-visual .swiper", {
    loop: true,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  mainSlide.on('slideChange',function(){
    /* console.log(this.realIndex); //realInder : 고유값 */
    
    if(this.realIndex == 2){
      $('.header').addClass('last');
    } else {
      $('.header').removeClass('last');
    }
  })

  // 스크롤해서 리스트 이동

  var swiper = new Swiper(".sc-product .product", {
    slidesPerView:4.23,
    spaceBetween:20,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
      dragSize: 500,
    },
  });


  // 좌우 버튼 클릭해서 리스트 이동

  var swiper = new Swiper(".sc-magazine .magazine", {
    slidesPerView: 3,
    spaceAround: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });


  // 동영상에 소리 끄고 켜기

  $('.control-box').click(function(e){
    e.preventDefault();
    if($('.btn-on').hasClass('active')){
      $('.btn-on').removeClass('active');
      $('.btn-off').addClass('active');
      $('.slide-video').prop('muted', false);
    }else{
      $('.btn-off').removeClass('active');
      $('.btn-on').addClass('active');
      $('.slide-video').prop('muted', true);
    }
  })

  /// 더보기 토글 버튼
  $('.prd-color-wrap .btn-more').click(function(){
    $('.color-list').toggleClass('active');
  });


  // 클릭 시 이미지 변경 및 속성 변경하기

  $('.color-list li').click(function(e){
    e.preventDefault();
    idx = $(this).index()+1;
    data = $(this).data('name');

    $('.sc-best .front').attr('src',`./asset/images/bg/best-img${idx}.jpg`);
    $('.sc-best .back').attr('src',`./asset/images/bg/best-hover${idx}.jpg`);
    $('.sc-best .prd-name').text(data);
  })

  // 선택 요소 복제하기

  for (let index = 0; index < 35; index++) {
    $('.text-slide p').append('<span class="txt">BEST LIP EVER </span>');
  }

  html = $('.text-slide p').clone();

  $('.text-slide .inner2').append(html);


  // footer nav-area country 더보기

  $('.nav-area .selector').click(function(e){
    e.preventDefault();
    $('.country').toggleClass('active');
    $('.arrow svg').toggleClass('on')
  });

}) //end


