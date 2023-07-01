<?PhP 

namespace App\Http\Controllers;

use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Hash;
use Symfony\Component\HttpFoundation\Response;

class AuthController extends Controller
{
    function register(RegisterRequest $request)
    {
        $validator = $request->validated();

        $user = User::create([
            'name' => $validator['name'],
            'email' => $validator['email'],
            'password' => Hash::make($validator['password']),
        ]);

        return $user;
    }

    function login(LoginRequest $request) {
        $validator = $request->validated();

        if(!Auth::attempt($validator)){
            return response()->json([
                'status' => 'fail',
                'message' => 'Invalid Credentials',
            ])->setStatusCode(Response::HTTP_UNAUTHORIZED);
        }

        $user = Auth::user();

        $token = $user->createToken('token')->plainTextToken;
        
        $cookie = cookie('jwt' , $token , 60 * 24); // 1 day
        
        return response()->json([
            'status' => 'success',
            'message' => 'Valid Credentials',
        ])->withCookie($cookie)->setStatusCode(Response::HTTP_NO_CONTENT);
    }
    
    function logout() {
        $cookie = Cookie::forget('jwt');

        return response()->json([
            'status' => 'success',
            'message' => 'Successful Logout'
        ])->withCookie($cookie)->setStatusCode(Response::HTTP_OK);
    }
    
    function user() 
    {
        return Auth::user();
    }
}
