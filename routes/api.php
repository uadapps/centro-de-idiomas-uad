<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('login', [App\Http\Controllers\LoginController::class, 'login']);
Route::post('verificar-token', [App\Http\Controllers\LoginController::class, 'verificarToken']);
Route::post('/auth', [App\Http\Controllers\LoginController::class, 'auth']);
Route::resource('planes', App\Http\Controllers\PlanController::class);
Route::post('materias', [App\Http\Controllers\PlanController::class, 'nueva_materia']);

Route::resource('rvoes', App\Http\Controllers\RvoeController::class);