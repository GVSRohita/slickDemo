/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $('.puppy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,
        slidesToScroll: 3,
        centerMode: true,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    centreMode: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    fade: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centreMode: true
                }
            }
        ]
    });
});