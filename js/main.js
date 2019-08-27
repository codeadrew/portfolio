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
// content3-samjin page_down fade효과
$(document).ready(function() {
    $(window).scroll( function(){
        $('.content3-container').each( function(i){
            
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            if( bottom_of_window > bottom_of_element ){
                $(this).animate({'opacity':'1','margin-top':'px'},500);
            }
            
        }); 
    });
});
$(function(){
    var img_num = 0;      // 이미지 번호 
    var duration = 2000;  // 재생시간(ms)
    var img_length = $('.content2-right-slider > img').length;
    console.log($('.content2-right-slider > img').length);

    setInterval(function(){

      // 이미지 뷰 초기화(안보이게)
      $('.content2-right-slider > img').css('opacity', 0);

      // 현재 재생될 이미지
      $('.content2-right-slider > img')
        .eq(img_num)
        .css('opacity', 1);

        // 마지막 이미지이면 처음으로
        if(img_num == img_length - 1) {
          img_num = 0;
        } else{
          img_num++;
        }
    }, duration)

  });