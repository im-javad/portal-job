<?PhP 
namespace App\Support\Traits;

use App\Models\Ad;
use App\Models\Resume;
use App\Models\User;
use Illuminate\Support\Facades\File;

trait HasResume{
    function doStore(User $user , Ad $ad , array $validator) {
        $resumeFilePath = $validator['resume_url']->store('' , 'resume_file_storage');
        
        unset($validator['resume_url']);
        
        $detailsToCreate = array_merge(
            [
                'user_id' => $user->id ,
                'resume_url' => $resumeFilePath,
                'displayed' => 0,
                'status' => 'Not Determined'
            ]
            , $validator
        );

        return $ad->resumes()->create($detailsToCreate);
    }

    function doUpdate(Resume $resume , array $validator) {
        return $resume->update($validator);
    }

    function doDestroy(Resume $resume) {
        $this->deleteResume($resume->resume_url);

        return $resume->delete();
    }

    function deleteResume(string $fileName) {
        File::delete(storage_path("app/resumes/{$fileName}"));
    }
}
