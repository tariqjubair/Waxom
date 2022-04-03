
// ==== jQuery ====

$(function (){

// ==== ==== Header: Fixed-Header ==== ====

    $(window).on("scroll", function() {
		if($(window).scrollTop() > 200) {
			$(".navbar").addClass("ext_bg");
		} 
        else {
		   $(".navbar").removeClass("ext_bg");
		}
	});

// ==== ==== Header: x-sm Fixed-Header ==== ====

    $('#menu_bar').click(function(){
        $(".navbar").toggleClass("fix_head_bg");
    });

// ==== ==== Banner: Auto_Slick ==== ====

    $('.ban_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 3000,
        arrows: false,
        prevArrow: '<i class="fa fa-chevron-left arrow_left"></i>',
		nextArrow: '<i class="fa fa-chevron-right arrow_right"></i>',
    });

// ==== ==== Service: serv_slider ==== ====

    $('.serv_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

// ==== ==== Video: Veno-Box ==== ====

    $('.venobox').venobox();

// ==== ==== Counter_Part: Counter_Up ==== ====

    $('.counter').counterUp({
        delay: 10,
        time: 3000,
    });

// ==== ==== Recent Posts: post_slider ==== ====

    $('.post_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        centerMode: true,
        centerPadding: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

// ==== ==== Clients: Auto_Slick ==== ====

    $('.clt_logo_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        rtl: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768, // tablet breakpoint
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576, // mobile breakpoint
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

})

// ==== javascript ====

// ==== ==== Project: Mixitup ==== ====

var config = document.querySelector('.mix_config')
var mixer = mixitup(config);

