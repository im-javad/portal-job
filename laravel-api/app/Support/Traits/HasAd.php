<?PhP 
namespace App\Support\Traits;

use App\Models\Ad;
use Illuminate\Support\Facades\File;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

trait HasAd {
    function doStore(array $validator) {
        $imgPath = Cloudinary::upload($validator['img_url']->getRealPath())->getSecurePath();

        unset($validator['img_url']);

        $detailsToCreate = array_merge(['employer_id' => auth()->user()->id ?? 1 , 'img_url' => $imgPath] , $validator);
        
        $newAd = Ad::create($detailsToCreate);

        return $newAd;
    }

    function doUpdate(Ad $ad , array $validator) {
        if(isset($validator['img_url'])){
            $imgPath = Cloudinary::upload($validator['img_url']->getRealPath())->getSecurePath();
            // File::delete(public_path("images/ads/{$ad->img_url}"));
            $ad->update([
                'img_url' => $imgPath,
            ]);
        }

        unset($validator['img_url']);

        $ad->update($validator);
    }

    function doDestroy(Ad $ad) {
        // $this->deletImage($ad->img_url);

        $ad->delete();
    }

    function deletImage(string $fileName) {
        // File::delete(public_path("images/ads/{$fileName}"));
    }
}
