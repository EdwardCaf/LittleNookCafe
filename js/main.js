$(document).ready(function(){
    $(this).scrollTop(0);
});
function moveToFooter() {
    $('html, body').animate({
        scrollTop: $("#footer").offset().top
    }, 2000);
};
function moveToAbout() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1500);
};

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.animcontent').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).removeClass("animcontent");
                $(this).addClass("animated fadeInDown")
            }
        });
    });
});

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.animmenu').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object - 100){
                $(this).removeClass("animmenu");
                $(this).addClass("animated fadeInDownMenu menu-pic")
            }
        });
    });
});

$(document).ready(function() {
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        /* Check the location of each desired element */
        $('.animfooter').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
                $(this).removeClass("animfooter");
                $(this).addClass("animated fadeInLeft")
            }
        });
    });
});
