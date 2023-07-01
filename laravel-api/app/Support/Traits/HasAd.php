<?PhP 
namespace App\Support\Traits;

use App\Models\Ad;
use Illuminate\Support\Facades\File;

trait HasAd {
    function doStore(array $validator) {
        $imgPath = $validator['img_url']->store('' , 'ad_image_storage');

        unset($validator['img_url']);

        $detailsToCreate = array_merge(['employer_id' => auth()->user()->id ?? 1 , 'img_url' => $imgPath] , $validator);
        
        $newAd = Ad::create($detailsToCreate);

        return $newAd;
    }

    function doUpdate(Ad $ad , array $validator) {
        if(isset($validator['img_url'])){
            $imgPath = $validator['img_url']->store('' , 'ad_image_storage');
            File::delete(public_path("images/ads/{$ad->img_url}"));
            $ad->update([
                'img_url' => $imgPath,
            ]);
        }

        unset($validator['img_url']);

        $ad->update($validator);
    }

    function doDestroy(Ad $ad) {
        $this->deletImage($ad->img_url);

        $ad->delete();
    }

    function deletImage(string $fileName) {
        File::delete(public_path("images/ads/{$fileName}"));
    }
}
