/**
 * Created by Denis on 2014-12-20.
 */

$(document).ready(function() {
    $("#generate").unbind().on("click", function() {
        var data = {
            action: "generate"
        };
        $.ajax({
            data: data
        }).done(function(data) {
            $("#inputPassword").val(data).focus();
        });
    });
});