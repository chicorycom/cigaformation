<?php

namespace Chicorycom\Cigaformation\Http\Controllers;

use Chicorycom\Cigaformation\Models\Formation;
use Chicorycom\Cigaformation\Models\Menu;
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
            $data = null;
            if($view == "/"){
                $view = 'home';
            }
            $default = view()->exists("chicorycom::pages.{$view}") ? $view : 'default';
            $v = Menu::where('slug', $view)->first();
            $view = $v ? $v : $view;

            $route = route('page', isset($view->name) ? $view->slug : $view ) ;
            return $this->view($default, compact('view', 'route'));
    }


    public function detail($view, $slug){

        $default = view()->exists("chicorycom::pages.{$view}") ? $view : 'default';
        $data = Formation::where('slug', $slug)->firstOrfail();
        $route = route('page',  $view . '/'. $slug) ;
        return $this->view($default, compact('view', 'route', 'data'));
    }
}
