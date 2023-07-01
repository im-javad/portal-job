<?php

namespace App\Http\Resources;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class AdCollection extends ResourceCollection
{
    public static $wrap = 'ads';
    
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
        ];
    }

    function with(Request $request) :array
    {
        return [
            'status' => 'success',
        ];
    }

    function withResponse(Request $request, JsonResponse $response)
    {
        $request->header('Version' , '1.0.0');
    }
}
