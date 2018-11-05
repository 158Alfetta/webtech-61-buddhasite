var list = ["ไตรลักษณ์- ลักษณะทั่วไปของสิ่งทั้งปวง<br>&nbsp&nbsp๑.อนิจจัง ความไม่เที่ยง<br>&nbsp&nbsp๒.ทุกขัง ความทุกข์<br>&nbsp&nbsp๓.อนัตตา ความไม่ใช่ตัวตนแท้จริง",
    "พรหมวิหาร ๔  ธรรมสำหรับผู้เป็นใหญ่<br>&nbsp&nbsp๑. เมตตา ความรักใคร่<br>&nbsp&nbsp๒. กรุณา ความสงสาร<br>&nbsp&nbsp๓. มุทิตา ความยินดีเมื่อเห็นคนอื่นได้ดี<br>&nbsp&nbsp๔. อุเบกขา ความวางเฉยไม่ดีใจไม่เสียใจ",
    "สังคหวัตถุ ๔ หลักธรรมที่เป็นเครื่องยึดเหนี่ยวน้ำใจคน<br>&nbsp&nbsp๑.ทาน การให้<br>&nbsp&nbsp๒.ปิยวาจา การกล่าวถ้อยคำไพเราะอ่อนหวาน<br>&nbsp&nbsp๓.อัตถจริยา การบำเพ็ญประโยชน์<br>&nbsp&nbsp๔.สมานัตตตา การประพฤติตนสม่ำเสมอทั้งต่อหน้าและลับหลัง",
    "ฆราวาสธรรม ๔ หลักธรรมสำหรับผู้ครองเรือน<br>&nbsp&nbsp๑.สัจจะ การมีความซื่อตรงต่อกัน<br>&nbsp&nbsp๒.ทมะ การรู้จักข่มจิตของตน<br>&nbsp&nbsp๓. ขันติ ความอดทนและให้อภัย<br>&nbsp&nbsp๔.จาคะ การเสียสละแบ่งปัน"]

var i = -1;

$(document).ready(function(){
    for(n = 0; n < list.length; n++){
        var $newdiv1 = $( "<div class='dot' id="+'d'+n+"></div>" );
        $(".bar").append($newdiv1);
    }
    show();
    $(".dot").click(function(){
        $("#d"+i).removeClass("active");
        i = $(this).attr('id')[1];
        $("#d"+i).addClass("active");
        $("#mess").html(list[i]);
        $("#mess").css("opacity", "1");
    });
});

function show() {
    i++;
    if (i >= list.length) {
        i = 0;
    }
    $("#d"+i).addClass("active");
    $("#mess").html(list[i]);
    $("#mess").animate({
        opacity: 1,
    }, 1000, function () {
        fout();
    });
}

function fout() {
    setTimeout(function () {
        $("#mess").animate({
            opacity: 0,
        }, 1000, function () {
            $("#d"+i).removeClass("active");
            show();
        });
    }, 2000);
}