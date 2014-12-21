/**
 * Created by Denis on 2014-12-20.
 */

$(document).ready(function() {
    $.material.init();

    preloader = new $.materialPreloader({
        position: 'bottom',
        height: '5px',
        col_1: '#159756',
        col_2: '#da4733',
        col_3: '#3b78e7',
        col_4: '#fdba2c',
        fadeIn: 200,
        fadeOut: 200
    });

    $(".navbar ul:not(.navbar-right) li a").on("click", function() {
        if($(this).hasClass("navbar-brand")) {
            $(".navbar-nav li").removeClass("active");
        } else {
            $(this).parent("li").addClass("active").siblings().removeClass("active");
        }
    });

    $("#logout").on("click", function() {
        window.location.href = BASE_URL+"/?action=logout";
    });
});
