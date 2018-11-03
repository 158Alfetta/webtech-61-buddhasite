//capture scroll any percentage

$(document).ready(function(){
    $("#sec1_sepLine").animate({
        width: "100%"
      }, 1200,function() {
      });

      $(".data").animate({
        opacity: "1"
      }, 1800,function() {
      });

      $("#sec1_pic").animate({
        opacity: "1"
      }, 1200,function() {
      });

    $(window).scroll(function(){
        var wintop = $(window).scrollTop(), docheight = 
    $(document).height(), winheight = $(window).height();
            var scrolled = (wintop/(docheight-winheight))*100;
    $('.menu').css('background-image', ("linear-gradient(to right, orange "+scrolled+"%, #99460e)"));
    });

});
