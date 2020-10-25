<?php

namespace Chicorycom\Cigaformation\Http\Controllers;

use Chicorycom\Cigaformation\Cigaformation;
use Chicorycom\Cigaformation\Models\Event;
use Chicorycom\Cigaformation\Models\Formation;
use Chicorycom\Cigaformation\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

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
            $events = [];
            if($view == "/"){
                $view = 'home';
            }
            if($view == 'home'){
                $events = Event::events();
            }
            $default = view()->exists("chicorycom::pages.{$view}") ? $view : 'default';
            $v = Menu::where('slug', $view)->first();
            $view = $v ? $v : $view;


            $route = route('page', isset($view->name) ? $view->slug : $view ) ;
            return $this->view($default, compact('view', 'route', 'events'));
    }


    public function detail($view, $slug){

        $default = view()->exists("chicorycom::pages.{$view}") ? $view : 'default';
        $class = '\Chicorycom\Cigaformation\Models\\'.str::studly($default);
        $data = new \stdClass();
        $events = Event::events();

        if(class_exists($class)){
            $model = app($class);
            $data = $model->where('slug', $slug)->firstOrfail();
            views($data)->record();
        }
       // $data = Formation::where('slug', $slug)->firstOrfail();
        $route = route('page',  $view . '/'. $slug) ;

        return $this->view($default, compact('view', 'route', 'data', 'events'));
    }
}
