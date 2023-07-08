 <?php

use App\Http\Controllers\Api\AdController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\ResumeController;
use App\Http\Controllers\Api\SaveController;
use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;

//? Ad Routes 
Route::get('/ads/' , [AdController::class , 'index'])->name('ads.index');
Route::get('/ads/{ad}' , [AdController::class , 'show'])->name('ads.show');
Route::middleware(['auth:sanctum'])->prefix('/ads/')->group(function(){
    Route::post('' , [AdController::class , 'store'])->name('ads.store');
    Route::put('{ad}' , [AdController::class , 'update'])->name('ads.update');
    Route::delete('{ad}' , [AdController::class , 'destroy'])->name('ads.destroy');
});
// Route::prefix('/')->group(function(){
    // Route::apiResource('ads' , AdController::class);
// });

//? Resume Routes
Route::middleware(['auth:sanctum'])->prefix('/ads/{ad}/resumes/')->group(function(){
    Route::get('' , [ResumeController::class , 'index'])->name('resumes.index');
    Route::post('' , [ResumeController::class , 'store'])->name('resumes.store');
    Route::get('{resume}' , [ResumeController::class , 'show'])->name('resumes.show');
    Route::put('{resume}' , [ResumeController::class , 'update'])->name('resumes.update');
    Route::delete('{resume}' , [ResumeController::class , 'destroy'])->name('resumes.destroy');
    Route::get('/resumes/{resume}/download' , [ResumeController::class , 'downloadResume'])->name('resumes.download');
});
// Route::prefix('/ads/{ad}/')->group(function(){
    //     Route::apiResource('resumes' , ResumeController::class);
// });

//? Dashboard Routes
Route::middleware(['auth:sanctum'])->prefix('/dashboard/')->group(function() {
    Route::get('employer/ads' , [DashboardController::class , 'employerAds'])->name('dashboard.ads');
    Route::get('user/requests' , [DashboardController::class , 'userRequests'])->name('dashboard.requests');
    Route::get('user/saved' , [DashboardController::class , 'userSaved'])->name('dashboard.saved');
    Route::get('user/saved/{id}' , [SaveController::class , 'addSave'])->name('dashboard.save.add');
    Route::delete('user/saved/{id}' , [SaveController::class , 'removeSave'])->name('dashboard.save.remove');
});
Route::middleware(['auth:sanctum'])->get('/saved-resume-checker/{id}' , [ResumeController::class , 'savedAndResumeChecker'])->name('save.resume.checker');

//? Auth Routes
Route::post('/register' , [AuthController::class , 'register'])->name('auth.register');
Route::post('/login' , [AuthController::class , 'login'])->name('auth.login');
Route::middleware(['auth:sanctum'])->get('/user-checker' , [AuthController::class , 'userChecker'])->name('auth.cheker');
Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/user' , [AuthController::class , 'user'])->name('auth.user');
    Route::post('/logout' , [AuthController::class , 'logout'])->name('auth.logout');
});
