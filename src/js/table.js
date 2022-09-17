function sendRequest(){
    
    if (validate(true)){

        let Y_value = $('#Y_value').val();
        let X_value = $('#X_value').val();
        let R_value = $('#R_value').val();


        $.ajax({
            type: 'POST',
            url: '../src/php/update.php',
            data: {'y': Y_value.trim(), 'x': X_value.trim(), 'r': R_value.trim()},
            success: function (response) {
                document.querySelector('#table > tbody').innerHTML = response;
            },
            error: function (data) {
                alert(data);
            }
        });
    }
    
}