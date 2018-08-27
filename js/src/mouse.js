/* 鼠标特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
   $("body").click(function(e) {
       var a = new Array("厚德", "求真", "砺学", "笃行", "做有理想", "有追求", "有担当" ,"的三有西电人");
       var $i = $("<span/>").text(a[a_idx]);
       a_idx = (a_idx + 1) % a.length;
       var x = e.pageX,
       y = e.pageY;
       $i.css({
           "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
           "top": y - 20,
           "left": x,
           "position": "absolute",
           "font-weight": "bold",
           "color": "#ff6651"
       });
       $("body").append($i);
       $i.animate({
           "top": y - 180,
           "opacity": 0
       },
       1500,
       function() {
           $i.remove();
       });
   });
});