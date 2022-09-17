function validate(print_permission){
    let Y_value = $('#Y_value').val();
    let X_value = $('#X_value').val();
    let R_value = $('#R_value').val();
    let info = "";
    info += "<span>" + validate_y(Y_value) + "</span>";
    info += "<span>" + validate_x(X_value) + "</span>";
    info += "<span>" + validate_r(R_value) + "</span>";

    if (print_permission) {
        $('.Error_text').html(info);
    }

    return (info === "<span></span>".repeat(3));
}

function validate_x(value){
    // const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
    // const integer = /^[-+]?[0-9]+$/;
    if (!(value.trim() === "")){
        // if (!value.match(integer) && !value.match(decimal)) {
            if (isNaN(Number(value))) {
            return " Incorrect X value";
        }
        const x = parseFloat(value);
        if (x < -5 || x > 5 ){
            return " X should be between -5 and 5";
        }
        return "";
    } 
    else{
        return " Field X is empty";
    }  
    
}


function validate_y(value){
    // const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
    // const integer = /^[-+]?[0-9]+$/;
    if (!(value.trim() === "")){
        // if (!value.match(integer) && !value.match(decimal)) {
        if (isNaN(Number(value))) {
            return " Incorrect Y value\n ";
        }
        const y = parseFloat(value);

        if (y < -3 || y > 5 ){
            return " Y should be between -3 and 5";
        }
        return "";
    }   
    else{
        return " Field Y is empty";
    }  
}


function validate_r(value){
    // const decimal = /^[-+]?[0-9]+\.[0-9]+$/;
    // const integer = /^[-+]?[0-9]+$/;
     correct_values = ["1", "1.5", "2", "2.5", "3"].map(Number);
     if (!(value.trim() === null)){
        
        // if (!value.match(integer) && !value.match(decimal)){
        if (isNaN(Number(value))){
        return " Incorrect R input";
        }
        const r = parseFloat(value);
        if (!correct_values.includes(r)){
            return " Incorrect R value. Should be inside [1, 1.5, 2, 2.5, 3]";
         }
     return "";

     }    
     else{
        return " Field R is empty";
     }
}