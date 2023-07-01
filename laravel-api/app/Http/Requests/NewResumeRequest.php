<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class NewResumeRequest extends FormRequest
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
            'name' => ['required' , 'min:3' , 'max:50' , 'string'],
            'resume_url' => ['required' , 'mimes:pdf,xlx,xls,txt,csv' , 'max:2048'],
            'email' => ['required' , 'string' , 'min:5' , 'max:200'] ,
            'phone' => ['required'], 
        ];
    }
}
