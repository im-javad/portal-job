<?Php 
namespace App\Support\Traits;

trait WithResponse{
    function withContent($content , int $statusCode) {
        return ($content)
            ->response()
            ->setStatusCode($statusCode);
    }

    function noContent(int $statusCode) {
        return response()->json(null , $statusCode);
    }
}