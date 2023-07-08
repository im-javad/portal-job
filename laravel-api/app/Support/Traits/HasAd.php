<?PhP 
namespace App\Support\Traits;

use App\Models\Ad;
use App\Models\User;
use Illuminate\Support\Facades\File;
use CloudinaryLabs\CloudinaryLaravel\Facades\Cloudinary;

trait HasAd {
    function doStore(User $user ,array $validator) {
        $imgPath = Cloudinary::upload($validator['img_url']->getRealPath())->getSecurePath();

        unset($validator['img_url']);

        $detailsToCreate = array_merge(['img_url' => $imgPath] , $validator);
       
        $newAd = $user->ads()->create($detailsToCreate);

        return $newAd;
    }

    function doUpdate(User $user , Ad $ad , array $validator) {
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
