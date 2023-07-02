<?php

use App\Http\Controllers\Api\AdController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\ResumeController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

Route::prefix('/')->group(function(){
    Route::apiResource('ads' , AdController::class);
});

Route::prefix('/ads/{ad}/')->group(function(){
    Route::apiResource('resumes' , ResumeController::class);
});

Route::middleware(['auth:sanctum'])->prefix('/dashboard/')->group(function() {
    Route::get('employer/ads' , [DashboardController::class , 'employerAds'])->name('dashboard.ads');
    Route::get('user/requests' , [DashboardController::class , 'userRequests'])->name('dashboard.requests');
    Route::get('user/saved' , [DashboardController::class , 'userSaved'])->name('dashboard.saved');
});

Route::post('/register' , [AuthController::class , 'register'])->name('auth.register');

Route::post('/login' , [AuthController::class , 'login'])->name('auth.login');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user' , [AuthController::class , 'user'])->name('auth.user');
    Route::post('/logout' , [AuthController::class , 'logout'])->name('auth.logout');
});
