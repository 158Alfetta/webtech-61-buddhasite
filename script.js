//capture scroll any percentage

$(document).ready(function(){
    $("#sepLine").animate({
        width: "40%"
      }, 1500,function() {
      });


    $(window).scroll(function(){
        var wintop = $(window).scrollTop(), docheight = 
    $(document).height(), winheight = $(window).height();
            var scrolled = (wintop/(docheight-winheight))*100;
    $('.navbar ul').css('background-image', ("linear-gradient(to right, orange "+scrolled+"%, #99460e)"));
    });


    $('#buddha2').fadeIn(1000);


/*      var elem = document.getElementById("buddha2");   
      var pos = 0;
      var id = setInterval(frame, 5);
      function frame() {
        if (pos == 350) {
          clearInterval(id);
        } else {
          pos++; 
          elem.style.top = pos + 'px'; 
          elem.style.left = pos + 'px'; 
        }
    }*/

});