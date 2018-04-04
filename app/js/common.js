$(function () {

    $('.icon').on('click', function () {
       $(this).toggleClass('active');
    if(!$(this).hasClass('active')){
        $('.wrapper-menu').slideUp();
    } else if($(this).hasClass('active')){
        $('.wrapper-menu').slideDown().css({
            display: "flex"
        });

    }

    });

});