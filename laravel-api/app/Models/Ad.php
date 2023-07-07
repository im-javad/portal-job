<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ad extends Model
{
    use HasFactory;

    const UPDATED_AT = null;

    // protected $guarded = []; # Method 1
    protected $fillable = [ #Method 2
    'employer_id' , 'title' , 'img_url' , 'company_name' , 'country' , 'city' , 'cooperation_type' , 
    'description' , 'responsibilities' , 'required_knowledge_skills' , 'bonus_skills' , 'vancy' , 'need_experience' , 'gender' ,
    'telegram_link' , 'instagram_link' , 'facebook_link' , 'github_link' , 'created_at'
    ];

    function resumes() {
        return $this->hasMany(Resume::class);
    }

    function employer() {
        return $this->belongsTo(User::class , 'id');
    }

    function getCreatedAtAttribute($value) {
        $time = date_diff(date_create($value) , now());
        if($time->d) return $time->d . 'days ago';
        if($time->h) return $this->h . 'hours ago';
        return $time->i . 'mint ago';
    }
}
