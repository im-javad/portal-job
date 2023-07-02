<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AdCollection;
use App\Http\Resources\ResumeCollection;

class DashboardController extends Controller
{
    function employerAds() {
        $user = auth()->user();
        return (new AdCollection($user->ads));
    }
    
    function userRequests() {
        $user = auth()->user();
        return (new ResumeCollection($user->resumes));
    }

    function userSaved() {
        $user = auth()->user();
        return (new AdCollection($user->userSaved));
    }
}
