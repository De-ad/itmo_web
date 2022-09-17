 function get_table(){
    $.ajax({
        type: "GET",
        url: "../src/php/update.php",
        async: false,
        success: function(response) {
            document.querySelector('#table > tbody').innerHTML = response;
        },
        error: function(data) {
            alert(data);
        }
    });

    document.querySelector('.values').onchange = function () {
        let Y_value = $('#Y_value').val();
        let X_value = $('#X_value').val();
        let R_value = $('#R_value').val();
        let dot = $('#dot');
    
        if (validate(false)) {
            dot.attr('r', '3px');
            dot.attr('cx', 150 + 100 / R_value * X_value);
            dot.attr('cy', 150 - 100 / R_value * Y_value);
        }
        }
 }