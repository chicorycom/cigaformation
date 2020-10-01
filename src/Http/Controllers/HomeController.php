<?php

namespace Chicorycom\Cigaformation\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends ChicorycomBaseController
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth')->except(['index']);
    }

    /**
     * Show the application dashboard.
     *
     * @param $view
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index($view='/')
    {
            $default = view()->exists("chicorycom::pages.{$view}") ? $view : 'default';
            return $this->view($default, compact('view'));
    }


    public function detail(Request $request, $view, $slug){

        $default = view()->exists("chicorycom::pages.{$view}") ? $view : 'default';
        return $this->view($default, compact('view', 'slug'));
    }
}
