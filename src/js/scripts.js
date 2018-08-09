$(document).ready(function($) {
    $("#slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        animateOut: 'fadeOut',
    });
    $("#news_img_slider").owlCarousel({
        items: 3,
        loop: true,
        autoplay: false,
        animateOut: 'fadeOut',
        nav: true,
        responsive : {
           0 : {
                items : 1,
                nav : true
           },
			 720 : {
                items : 2 ,
                nav : true
           },
			 1000 : {
                items : 3,
                nav : true
           }
        },
        navText: ''
    });
    $("#bottom_slider").owlCarousel({
        loop: true,
        autoplay: false,
        animateOut: 'fadeOut',
        responsive : {
           0 : {
                items : 1,
                nav : true
           },
			 600 : {
                items : 3,
                nav : true
           },
            750 : {
                items : 4,
                nav : true
           },
			 1000 : {
                items : 5,
                nav : true
           }
        },
        navText: ""
    });
    $("#other_news_slider").owlCarousel({
        loop: true,
        autoplay: false,
        animateOut: 'fadeOut',
        responsive : {
           0 : {
                items : 1,
                nav : true
           },
             550 : {
                items : 2,
                nav : true
           },
			 750 : {
                items : 3,
                nav : true
           },
			 1000 : {
                items : 5,
                nav : true
           }
        },
        navText: ""
    });
    $('.popup').magnificPopup({type:"image"});

});

$ (function() {
    $('.menuToggle').on('click', function () {
        $('.menu').slideToggle(300, function () {
            if ($(this).css('display') === 'none') {
                $(this).removeAttr('style');
            }
        });
    });
});
function openNav() {
    if ($('.aside_mn').css('width') === '0px'){
        document.querySelector(".aside_mn").style.width = "250px";
    }
    else if (document.documentElement.clientWidth < parseInt('576px') && ($('.aside_mn').css('width') != '0px')){
        document.querySelector(".aside_mn").style.width = "0";
}

}

 //
 // jQuery(document).ready(function(jQuery) {
 //            jQuery('.trigger').magnificPopup({
 //                type: 'image',
 //                callbacks: {
 //                    resize: changeImgSize,
 //                    imageLoadComplete:changeImgSize,
 //                    change:changeImgSize
 //                }
 //            });
 //        });
 //        function changeImgSize(){
 //            var img = this.content.find('img');
 //            img.css('max-height', '100%');
 //            img.css('width', 'auto');
 //            img.css('max-width', 'auto');
 //        }
