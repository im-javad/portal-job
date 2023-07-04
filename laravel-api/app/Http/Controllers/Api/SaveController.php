<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class SaveController extends Controller
{
    function addSave(string $id) {
        $user = auth()->user();
        $user->userSaved()->attach($id);
        return response()->json([
            'status' => 'success',
        ])->setStatusCode(202);
    }

    function removeSave(string $id) {
        $user = auth()->user();
        $user->userSaved()->detach($id);
        return response()->json([
            'status' => 'success',
        ])->setStatusCode(200);
    }
}
