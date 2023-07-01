<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AdResource extends JsonResource
{
    public static $wrap = 'ad';
    
    public function toArray(Request $request): array
    {
        return [
            'id' => (string) $this->id,
            'attributes' => [
                'title' => $this->title,
                'img_url' => $this->img_url,
                'company_name' => $this->company_name,
                'country' => $this->country,
                'city' => $this->city,
                'cooperation_type' => $this->cooperation_type,
                'description' => $this->description,
                'responsibilities' => $this->responsibilities,
                'required_knowledge_skills' => $this->required_knowledge_skills,
                'bonus_skills' => $this->bonus_skills,
                'vancy' => $this->vancy,
                'need_experience' => $this->need_experience,
                'gender' => $this->gender,
                'telegram_link' => $this->telegram_link,
                'instagram_link' => $this->instagram_link,
                'facebook_link' => $this->facebook_link,
                'github_link' => $this->github_link,
                'created_at' => $this->created_at,
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
