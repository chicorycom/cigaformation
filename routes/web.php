<?php

use Chicorycom\Cigaformation\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', [HomeController::class, 'index']);
Route::get('/{view}', [HomeController::class, 'index'])->name('page');
Route::get('/{view}/{slug}', [HomeController::class, 'detail'])->name('details');



