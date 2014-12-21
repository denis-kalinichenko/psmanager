/**
 * Created by Denis on 2014-12-20.
 */

$(document).ready(function() {
    $("#generate").unbind().on("click", function(event) {
        event.preventDefault();
        preloader.on();

        var data = {
            action: "generate"
        };
        $.ajax({
            data: data,
            type: "POST",
            url: BASE_URL+"/"
        }).done(function(data) {
            $("#inputPassword").val(data).focus();
        }).fail(function(jqXHR, textStatus, errorThrown) {
            // If fail
            console.log(textStatus + ': ' + errorThrown);
        }).always(function() {
            preloader.off();
        });
    });
});