<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resume extends Model
{
    use HasFactory;

    const UPDATED_AT = null;

    protected $fillable = ['user_id' , 'ad_id' , 'name' , 'email' , 'phone' , 'displayed' , 'resume_url' , 'status'];
    
    function user() {
        return $this->belongsTo(User::class);
    }
    
    function ad() {
        return $this->belongsTo(Ad::class);
    }
}
