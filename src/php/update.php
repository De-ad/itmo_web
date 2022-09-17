<?php
include 'hit_result.php';

date_default_timezone_set("Europe/Moscow");
$start = microtime(true);
$response = [];
$current_time = date('h:i:s');

session_start();
const MIN_X = -5;
const MIN_Y = -3;
const MAX_X = 3;
const MAX_Y= 3;
const values_of_radious = [1, 1.5, 2, 2.5, 3];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if(!isset($_SESSION['table'])) {
        $_SESSION['table'] = '';
    }

    $response = $_SESSION['table'];

    exit($response);
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $_SESSION['table'] = null;

    $message = "Table cleaned successfully!";

    exit($message);
}

if (isset($_POST["x"]) || !isset($_POST["y"]) || !isset($_POST["r"])){
    $r= $_POST["r"];
    $x= $_POST["x"];
    $y= $_POST["y"]; 
    if (!is_numeric($x) || !is_numeric($y) || !is_numeric($r)) {
        // http_response_code(400);
        exit("Only number must be passed");
    }
    else{
        $is_hit = is_hit($x, $y, $r);
        if($is_hit){
            $res = "true";
        }
        else{
            $res = "false"; 
        }

        $script_time = round((microtime(true) - $_SERVER['REQUEST_TIME_FLOAT']) * 1000, 2);

        $line = "
        <tr>
            <td>$x </td>
            <td>$y </td>
            <td>$r </td>
            <td>$res</td>
            <td>$current_time </td>
            <td> $script_time </td>    
        </tr>
        ";
        if(!isset($_SESSION['table'])) {
            $_SESSION['table'] = '';
        }

        $response = $_SESSION['table'].$line;

        $_SESSION['table'] = $response;

        http_response_code(200);
    }
}
else{
    // http_response_code(400);
    exit("Not all parameters were passed");
}

  

function validate($x, $y, $r)
{
    if ((!is_int($x)) || (!is_int($y)) || (!is_int($r)) || ($x < MIN_X) || ($x> MAX_X) || ($y > MAX_Y) || ($y <MIN_Y)
    || in_array($r, values_of_radious)){
       http_response_code(400);
       exit("Parameters are invalid");
    }
    
}

echo $response;
?>


