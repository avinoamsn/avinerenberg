jQuery(document).ready(function(s){s("body").removeClass("preload");s("#portfolio-nav").on("click",function(){s("#index").css({transform:"translateY(100vh)"});s("#portfolio").css({transform:"translateY(0vh)"})});s("#resume-nav").on("click",function(){s("#index").css({transform:"translateX(-100vw)"});s("#resume").css({transform:"translateX(0vw)"})});s("#blog-nav").on("click",function(){s("#index").css({transform:"translateY(-100vh)"});s("#blog").css({transform:"translateY(0vh)"})});s(".return").on("click",function(){s("#index").css({transform:"translateY(0vh)"});s("#portfolio").css({transform:"translateY(-100vh)"});s("#resume").css({transform:"translateX(100vw)"});s("#blog").css({transform:"translateY(100vh)"})});var n=0;s("#resume-png").bind("mousewheel DOMMouseScroll",function(r){if(r.originalEvent.wheelDelta>0||r.originalEvent.detail<0){if(n==0)return;n+=10;s("#resume-png").css({transform:"translateY("+n+"vh)"})}else{if(n==-40)return;n-=10;s("#resume-png").css({transform:"translateY("+n+"vh)"})}console.log(n)});s("#portfolio-imgs").slick({nextArrow:s("#arrow-poly-right"),prevArrow:s("#arrow-poly-left")})});