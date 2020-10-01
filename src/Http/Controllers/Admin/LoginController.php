<?php

namespace Chicorycom\Cigaformation\Http\Controllers\Admin;

use Chicorycom\Cigaformation\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

class LoginController extends Controller
{
    use AuthenticatesUsers;

    protected $redirectTo = '/administrator';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $login = File::get(public_path('assets/js/login.js'));
        return view('chicorycom::admin/login', compact('login'));
    }

}
