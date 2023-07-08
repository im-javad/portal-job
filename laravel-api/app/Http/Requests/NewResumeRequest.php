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
            'email' => ['required' , 'email' , 'min:5' , 'max:200'] ,
            'phone' => ['required' , 'max:13'], 
        ];
    }

    public function messages()
    {
        return [
            'phone.max' => 'The phone field in not invalid.', 
            'resume_url.required' => 'The resume file is required.',
            'resume_url.mimes' => 'The resume file must be a file of type: pdf, xlx, xls, txt, csv.',
            'resume_url.max' => "The resume file must not be greater than 2048 kilobytes.",
        ];
    }
}
