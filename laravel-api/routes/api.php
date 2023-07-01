<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function(){
    Route::apiResource('ads' , AdController::class);
});

Route::post('/register' , [AuthController::class , 'register'])->name('auth.register');
Route::post('/login' , [AuthController::class , 'login'])->name('auth.login');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user' , [AuthController::class , 'user'])->name('auth.user');
    Route::post('/logout' , [AuthController::class , 'logout'])->name('auth.logout');
});
