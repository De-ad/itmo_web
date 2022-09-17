// add clean session
function cleanTable(){
    $('#table > tbody').html('');
    $.ajax({
        type: "DELETE",
        url: "../src/php/update.php",
        async: false,
        success: function(data){
        },
        error: function(data) {
            alert(data);
        }
    })
}