<?php
/**
 * Created by PhpStorm.
 * User: assane
 * Date: 24/09/20
 * Time: 12:00
 */


use Chicorycom\Cigaformation\Http\Controllers\Admin\AppController;
use Chicorycom\Cigaformation\Http\Controllers\Admin\FormationController;
use Chicorycom\Cigaformation\Models\Menu;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
use Chicorycom\Cigaformation\Http\Controllers\Admin\LoginController;
use Chicorycom\Cigaformation\Http\Controllers\Admin\UserController;
use Chicorycom\Cigaformation\Http\Controllers\Admin\MenusController;

Route::group(['middleware' => 'chicorycomguest:api'], function () {
    //Route::get('login', [LoginController::class, 'index'])->name('login');
    Route::post('login', [LoginController::class, 'login']);
});

Route::get('menus-admin', [MenusController::class, 'index']);
Route::get('menus-public', [MenusController::class, 'publicMenus']);

Route::middleware('auth:api')->group(function(){
    Route::post('logout', [LoginController::class, 'logout']);
    Route::post('menus-store', [MenusController::class, 'store']);
    Route::delete('menus-delete/{menu}', [MenusController::class, 'destroy']);

    //User Route
    Route::get('user', [UserController::class, 'user']);
    Route::get('user/{user}/edit', [UserController::class, 'edit']);
    Route::put('user/{user}', [UserController::class, 'update']);
    Route::post('user', [UserController::class, 'store']);
    Route::delete('user/{user}', [UserController::class, 'destroy']);
    Route::post('roles', [AppController::class, 'roles']);
    Route::get('users-fetch', [UserController::class, 'users']);


    Route::get('slide-carousel', [AppController::class, 'carousel']);
    Route::post('slide-carousel', [AppController::class, 'storeCarousel']);
    Route::put('slide-carousel/{slide}', [AppController::class, 'updateCarousel']);
    Route::put('slide-carousel-status/{id}', [AppController::class, 'statusCarousel']);
    Route::delete('slide-carousel/{slide}', [AppController::class, 'deleteCarousel']);
    Route::get('slide-carousel/{slide}/edit', [AppController::class, 'editCarousel']);

    Route::get('formation-type', [FormationController::class, 'type']);
    Route::get('formation-data', [FormationController::class, 'index']);
    Route::get('formation-data/{formation}/edit', [FormationController::class, 'edit']);
    Route::post('formation-data', [FormationController::class, 'store']);
    Route::put('formation-data/{formation}', [FormationController::class, 'update']);
    Route::post('formation-data/{formation}', [FormationController::class, 'destroy']);
});



Route::get('', function () {
    $appjs = File::get(public_path('assets/js/app.js'));
    $menus = Menu::admin();
    return view('chicorycom::admin/index', compact('appjs', 'menus'));
});
Route::get('{path}', function ($path) {
    $appjs = File::get(public_path('assets/js/app.js'));
    $menus = Menu::admin();
    return view('chicorycom::admin/index', compact('appjs', 'menus'));
})->where('path', '(.*)');

