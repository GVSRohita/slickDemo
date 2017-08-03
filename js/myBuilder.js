/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function () {
    $('.puppy').slick({
        lazyLoad: 'ondemand',
        slidesToShow: 3,// the desktop to show the number of images
        slidesToScroll: 1,// the images to be scrolled
        centerMode: true,// enables centered view
        dots: true,// for the dots to appear
        infinite: true,// for infinite loop sliding
        autoplay: true, // automatic movement of the images is enabled
        autoplaySpeed: 2000,// the time with which the images slide is given in milliseconds
        adaptiveHeight: true,// to adapt the size of the images
        responsive: [// to make the page responsive
            {
                breakpoint: 768,// first break point at 768 px.(Reduce the size of the screen to see the magic!)
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centreMode: true
                }
            },
            {
                breakpoint: 480,// second break point at 480 px.(Reduce the size of the screen to see the magic!)
                settings: {
                    fade: true,// to enable fade effect on the page when used in mobile screens
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centreMode: true
                }
            }
        ]
    });
});