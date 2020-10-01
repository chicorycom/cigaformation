<?php
/**
 * Created by PhpStorm.
 * User: assane
 * Date: 24/09/20
 * Time: 12:00
 */

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;


Route::get('login', [Chicorycom\Cigaformation\Http\Controllers\Admin\LoginController::class, 'index'])->name('login');
Route::post('login', [Chicorycom\Cigaformation\Http\Controllers\Admin\LoginController::class, 'login']);
Route::middleware('chicorycom')->get('', function () {
    $appjs = File::get(public_path('assets/js/app.js'));
    return view('admin/index', compact('appjs'));
});

Route::middleware('chicorycom')->get('{path}', function () {
    $appjs = File::get(public_path('assets/js/app.js'));
    return view('admin/index', compact('appjs'));
})->where('path', '(.*)');
