
function main() {

(function () {
   'use strict';
   
  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });

// affix the navbar after scroll below header
// $('#nav').affix({
//       offset: {
//         top: $('header').height()
//       }
// });	

	// skills chart
	$(document).ready(function(e) {
        //var windowBottom = $(window).height();
        var index=0;
        $(document).scroll(function(){
            var top = $('#skills').height()-$(window).scrollTop();

            if(window.screen.height < 800){
                if(top <-50){
                    if(index==0){	
                    
                        $('.chart').easyPieChart({
                            easing: 'easeOutBounce',
                            onStep: function(from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                        });
                    
                    }
                    index++;
                }
            }else{
                if(top <-300){
                    if(index==0){	
                    
                        $('.chart').easyPieChart({
                            easing: 'easeOutBounce',
                            onStep: function(from, to, percent) {
                                $(this.el).find('.percent').text(Math.round(percent));
                            }
                        });
                    
                    }
                    index++;
                }
            }
                
        })
        console.log(top);
	});


  	// Portfolio isotope filter
    $(window).load(function() {
        var $container = $('.portfolio-items');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });
	
	  	
    // CounterUp
	$(document).ready(function( $ ) {
		if($("span.count").length > 0){	
			$('span.count').counterUp({
                delay: 10, // the delay time in ms
                time: 1500 // the speed time in ms
			});
		}
	});
	
  	// Pretty Photo
	$("a[rel^='prettyPhoto']").prettyPhoto({
		social_tools: false
	});	

    var selectedLanguage = readCookie('language');
    if(selectedLanguage == undefined){
        selectedLanguage = "ukrainian";
    }else{
         selectedLanguage = readCookie('language');
    }
    
    $("#ukrainian").click(function(){
        $("#ukrainian").css("color", "#7bc3d1");
        $("#russian").css("color", "#656c6d");
        $("#english").css("color", "#656c6d");
        $(".english").css("display", "none");
        $(".ukrainian").css("display", "block");
        $(".russian").css("display", "none");
        saveLanguage("ukrainian");
    });
    $("#russian").click(function(){
        $("#russian").css("color", "#7bc3d1");
        $("#english").css("color", "#656c6d");
        $("#ukrainian").css("color", "#656c6d");
        $(".english").css("display", "none");
        $(".ukrainian").css("display", "none");
        $(".russian").css("display", "block");
        saveLanguage("russian");
    });
    $("#english").click(function(){
        $("#english").css("color", "#7bc3d1");
        $("#russian").css("color", "#656c6d");
        $("#ukrainian").css("color", "#656c6d");
        $(".english").css("display", "block");
        $(".ukrainian").css("display", "none"); 
        $(".russian").css("display", "none"); 
        saveLanguage("english");
    });
	
	if ((selectedLanguage == 'english') || (selectedLanguage == 'ukrainian') || (selectedLanguage == 'russian')) {
        if (selectedLanguage == 'english') {
            $("#english").css("color", "#7bc3d1");
            $("#russian").css("color", "#656c6d");
            $("#ukrainian").css("color", "#656c6d");
            $(".english").css("display", "block");
            $(".ukrainian").css("display", "none"); 
            $(".russian").css("display", "none"); 
        }else if (selectedLanguage =='ukrainian') {
            $("#ukrainian").css("color", "#7bc3d1");
            $("#russian").css("color", "#656c6d");
            $("#english").css("color", "#656c6d");
            $(".english").css("display", "none");
            $(".ukrainian").css("display", "block");
            $(".russian").css("display", "none");
        }else if (selectedLanguage =='russian') {
            $("#russian").css("color", "#7bc3d1");
            $("#english").css("color", "#656c6d");
            $("#ukrainian").css("color", "#656c6d");
            $(".english").css("display", "none");
            $(".ukrainian").css("display", "none");
            $(".russian").css("display", "block");
        }
    }

    function saveLanguage(cookieValue){
        setCookie('language', cookieValue, 365);
    }

    function setCookie(cookieName, cookieValue, nDays){
        var today = new Date();
        var expire = new Date();

        if (nDays==null || nDays==0)
            nDays=1;

        expire.setTime(today.getTime() + 3600000*24*nDays);
        document.cookie = cookieName+"="+escape(cookieValue) + ";expires="+expire.toGMTString();
        console.log(cookieValue);
    }

    function readCookie(name){
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    
}());

    
    
}



main();