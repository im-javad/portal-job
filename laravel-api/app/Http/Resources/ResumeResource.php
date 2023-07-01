<?php

namespace App\Http\Resources;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResumeResource extends JsonResource
{
    public static $wrap = 'resume';
    
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'attributes' => [
                'name' => $this->name,
                'email' => $this->email,
                'phone' => $this->phone,
                'resume_url' => $this->resume_url,
                'displayed' => $this->displayed,
                'status' => $this->status,
                'created_at' => $this->created_at,
            ],
            'relationships' => [
                'ad' => [
                    $this->ad,
                ],
            ]
        ];
    }

    function with(Request $request)
    {
        return [
            'status' => 'success',
        ];
    } 
}
    
