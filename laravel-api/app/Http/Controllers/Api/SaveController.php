<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class SaveController extends Controller
{
    function addSave(string $id) {
        $user = auth()->user();
        return $user->userSaved()->attach($id);
    }

    function removeSave(string $id) {
        $user = auth()->user();
        return $user->userSaved()->detach($id);
    }
}
