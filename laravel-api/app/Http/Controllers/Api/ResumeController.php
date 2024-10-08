<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewResumeRequest;
use App\Http\Requests\UpdateResumeRequest;
use App\Http\Resources\ResumeCollection;
use App\Http\Resources\ResumeResource;
use App\Models\Ad;
use App\Models\Resume;
use App\Support\Traits\HasResume;
use App\Support\Traits\WithResponse;
use Illuminate\Http\Request;

class ResumeController extends Controller
{
    use HasResume , WithResponse;
    
    /**
     * Display a listing of the resource.
     */
    public function index(Ad $ad)
    {
        return new ResumeCollection($ad->resumes);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NewResumeRequest $request , Ad $ad)
    {
        $validator = $request->validated();

        $newResume = $this->doStore(auth()->user() , $ad , $validator);

        return response()->json([
            'status' => 'success',
        ])->setStatusCode(201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Ad $ad , string $resumeId)
    {
        $selectedResume = $ad->resumes->where('id' , $resumeId)->first();

        return $this->withContent(new ResumeResource($selectedResume) , 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateResumeRequest $request , Ad $ad , string $resumeId)
    {
        $selectedResume = $ad->resumes->where('id' , $resumeId)->first();
        
        $validator = $request->validated();

        $this->doUpdate($selectedResume , $validator);

        return $this->withContent(new ResumeResource($selectedResume) , 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ad $ad , string $resumeId)
    {
        $selectedResume = $ad->resumes->where('id' , $resumeId)->first();

        $this->doDestroy($selectedResume);
        
        return $this->noContent(204);
    }

    function savedAndResumeChecker(string $adId) {
        $sendedResumesIds = auth()->user()->resumes->pluck('ad_id')->toArray();
        $savedIds = auth()->user()->userSaved->pluck('id')->toArray();
        return response()->json([
            'resume' => in_array($adId , $sendedResumesIds),
            'save' => in_array($adId , $savedIds),
        ]);
    }

    function downloadResume(Resume $resume) {
       return response()->download($resume->resume_url);
    }
}
