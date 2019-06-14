$(document).ready(function(){

    $(window).scroll(function(){
        let scrollUp =  $('.scrollup')
        if ($(this).scrollTop() > 100) {
           scrollUp.fadeIn();
        } else {
            scrollUp.fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
    $(document).on('click', 'a[href^="#"]', function(e) {
        // target element id
        let id = $(this).attr('href');
        // target element
        let $id = $(id);
        if ($id.length === 0) {
            return;
        }
        e.preventDefault();
        let pos = $id.offset().top;
        $('body, html').animate({scrollTop: pos - pos/4});
    });

});