<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class NewAdRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required' , 'string' , 'min:3' , 'max:50'],
            'img_url' => ['required' , 'image' , 'mimes:jpeg,png,jpg,gif'],
            'company_name' => ['required' , 'string' , 'min:3' , 'max:50'],
            'country' => ['required' , 'string' , 'min:2' , 'max:50'],
            'city' => ['required' , 'string' , 'min:2' , 'max:50'],
            'cooperation_type' => ['required' , 'string' , 'min:3' , 'max:50' , Rule::in(['Full Time' , 'Part Time' , 'Project Oriented' , 'Remote'])],
            'description' => ['required' , 'string' , 'min:3'],
            'responsibilities' => ['nullable' , 'string' , 'min:3'],
            'required_knowledge_skills' => ['nullable' , 'string' , 'min:3'],
            'bonus_skills' => ['nullable' , 'string' , 'min:3'],
            'vancy' => ['required' , 'integer'  , 'min:1', 'max:2000'],
            'need_experience' => ['required' , 'integer' , 'max:10'],
            'gender' => ['required' , 'string' , 'min:2' , 'max:50' , Rule::in(['Any' , 'Male' , 'Female'])],
            'telegram_link' => ['nullable' , 'string' , 'min:3' , 'max:200'],
            'instagram_link' => ['nullable' , 'string' , 'min:3' , 'max:200'],
            'facebook_link' => ['nullable' , 'string' , 'min:3' , 'max:200'],
            'github_link' => ['nullable' , 'string' , 'min:3' , 'max:200'],
        ];
    }
}

