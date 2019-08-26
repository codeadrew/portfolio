// content1 page_down fade효과
$(document).ready(function() {
    $(window).scroll( function(){
        $('.content1-items').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1'},1000);
            }
            
        }); 
    });
});
// content2 page_down fade효과
$(document).ready(function() {
    $(window).scroll( function(){
        $('.content2-left, .content2-right').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'px'},1000);
            }
            
        }); 
    });
});
// content3-osan page_down fade효과
$(document).ready(function() {
    $(window).scroll( function(){
        $('.content3-osan-container').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'px'},1000);
            }
            
        }); 
    });
});
// content3-samjin page_down fade효과
$(document).ready(function() {
    $(window).scroll( function(){
        $('.content3-samjin-container').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'px'},1000);
            }
            
        }); 
    });
});
$(function () {
    // bx slider 초기화
    $('.content2-right-slider').bxSlider({
      // 옵션
      //mode: "fade", // 효과
      auto: true, // 자동재생(true/false)
      pause: 2000, // 대기시간(ms),
      pager: false, // 하단 인디케이터 표시
      controls: false, // 좌우 화살표
      captions: true,
      autoHover: true, // 마우스오버시 정지
      touchEnabled: true, // 터치 지원
      minSlides: 1,
      maxSlides: 1,
      slideWidth: 210
    });
  })