$(document).ready(function(){       
  var scroll_start = 0;
  var startchange = $('.banner-div');
  var offset = startchange.offset();
  if (startchange.length){
    $(document).scroll(function() { 
        scroll_start = $(this).scrollTop();
        if(scroll_start > offset.top) {
            $(".navbar").css('background', '#141414');
        } else {
            $('.navbar').css('background', 'transparent');
        }
    });
  }
});