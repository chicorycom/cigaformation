<?php

namespace Chicorycom\Cigaformation\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;


class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    private function exist(String $view){
        return view()->exists("chicorycom::pages.{$view}") ?: abort(404);
    }

    protected function view(String $view, ...$args){
        if($view == "/"){
            $view = 'home';
        }
        $this->exist("$view");
        return view("chicorycom::pages.{$view}", $args[0]);
    }
}
