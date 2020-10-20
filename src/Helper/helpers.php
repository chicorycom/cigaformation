<?php
/**
 * Created by PhpStorm.
 * User: assane
 * Date: 19/10/20
 * Time: 18:44
 */

use Illuminate\Support\Str;

if (! function_exists('Strlen')) {
    /**
     * @param $string
     * @param int $number
     * @return string
     */
    function Strlen($string, $number=130){

        Str::words($string, 25, '...');
        return $string;
    }
}
