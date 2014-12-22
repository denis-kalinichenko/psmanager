/**
 * Created by Denis on 2014-12-20.
 */


    $("#generate").on("click", function() {
        var data = {
            action: "generate"
        };
        $.ajax({
            data: data
        }).done(function(data) {
            $("#inputPassword").val(data).focus();
        });
    });

    $("#addValue").submit(function() {
        alert("addValue");
    });
