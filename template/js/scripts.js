/**
 * Created by Denis on 2014-12-20.
 */

function go(page) {
    console.log("open "+page);
    var el = $("#smartContent");
    el.addClass("animate");
    var data = {
        action: "open",
        page: page
    };
    $.ajax({
        data: data
    }).done(function(data) {
        el.bind("webkitTransitionEnd oTransitionEnd otransitionend transitionend msTransitionEnd", function(){
            el.html(data).removeClass("animate");
        });
    });
}

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

    $.ajaxSetup({
        type: "POST",
        url: BASE_URL+"/"
    });
    $( document ).ajaxStart(function() {
        preloader.on();
    }).ajaxComplete(function() {
        preloader.off();
    }).ajaxError(function(jqXHR, textStatus, errorThrown) {
        $.snackbar({content: "<b>Connection error:</b> "+jqXHR.type});
    });

    $("a[data-open]").unbind().on("click", function() {
        var page = $(this).data("open");
        go(page);
        $(this).parent("li").addClass("active").siblings("li").removeClass("active");
    });

    $("#logout").on("click", function() {
        window.location.href = BASE_URL+"/?action=logout";
    });
});
