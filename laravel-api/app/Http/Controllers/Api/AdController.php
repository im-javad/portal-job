<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\NewAdRequest;
use App\Http\Requests\UpdateAdRequest;
use App\Http\Resources\AdCollection;
use App\Http\Resources\AdResource;
use App\Models\Ad;
use App\Support\Traits\HasAd;
use App\Support\Traits\WithResponse;
use Illuminate\Http\Request;

class AdController extends Controller
{
    use HasAd , WithResponse;

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $adsQuery = Ad::query();

        if(isset($request->cooperation_type) && $request->cooperation_type != null && !$request->cooperation_type == 'All Time')
        {
            $adsQuery->where('cooperation_type' , $request->cooperation_type);
        }
        
        if(isset($request->need_experience) && $request->need_experience != null && !$request->need_experience == 'All Time')
        {
            $experience = $request->need_experience;
            if($experience == 'ud-3'){
                $adsQuery->where('need_experience' , '<=' , 3);
            }
            if($experience == 'ov-3'){
                $adsQuery->where('need_experience' , '>=' , 3);
            }
        }

        if(isset($request->title) && $request->title != null)
        {
            $adsQuery->where('title' , 'like' , '%'.$request->title.'%');
        }

        if(isset($request->page) && $request->page != null){
            $adsQuery->paginate(20 , ['*'] , 'page' , $request->page);
        }
        
        $ads = $adsQuery->get();
        
        return new AdCollection($ads);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(NewAdRequest $request)
    {
        $validator = $request->validated();

        $newAd = $this->doStore(auth()->user() , $validator);

        return $this->withContent(new AdResource($newAd) , 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(Ad $ad)
    {
        return $this->withContent(new AdResource($ad) , 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAdRequest $request, Ad $ad)
    {
        # We could have used the NewAdRequest request as well, but we made a separate request for future data steam
        $validator = $request->validated();

        $this->doUpdate(auth()->user() , $ad , $validator);

        return $this->withContent(new AdResource($ad) , 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Ad $ad)
    {
        $this->doDestroy($ad);

        return $this->noContent(204);
    }
}
