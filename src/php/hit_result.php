<?php

function is_hit($x, $y, $r ): bool {
    return (squate_hit($x, $y, $r) || tringle_hit($x, $y, $r) || circle_hit($x, $y, $r));
}
 
function squate_hit($x, $y, $r): bool {
    return (($x <= ($r/2)) && ($y <= $r) && ($x>=0) && ($y>=0));
}

function tringle_hit($x, $y, $r): bool {
    return  (($x<=0) && ($y>=0) && ($y - 2 * $x <=$r));        
}

function circle_hit($x, $y, $r): bool {
    return (($x<=0) && ($y <= 0) && ( pow($r,2) >= (pow($x, 2) + pow($y,2))));
}
?>