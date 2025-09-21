<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\MetalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
Use App\Models\Admin;
use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/admin', function (Request $request) {
    return $request->user(); // this will now return the Admin model
});






Route::post('/login', function(Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $admin = Admin::where('email', $request->email)->first();

    if (! $admin || ! Hash::check($request->password, $admin->password)) {
        return response()->json([
            'message' => 'Invalid email or password'
        ], 401);
    }

    // generate Sanctum token
    $token = $admin->createToken('admin-token')->plainTextToken;

    return response()->json([
        'message' => 'Login successful',
        'token' => $token,
        'admin' => $admin
    ]);
});


Route::middleware('auth:sanctum')->group(function () {
    Route::post('/metals', [MetalController::class, 'store']);
});

// routes/api.php to fetch metals
Route::get('/metals', [MetalController::class, 'index']);

Route::get('/metals/{serialNumber}', [MetalController::class, 'show']);





// Details route using ID
Route::get('/details/{id}', [MetalController::class, 'detailsById']);
Route::put('/metals/{id}', [MetalController::class, 'updateById']);


Route::delete('/metals/{id}', [MetalController::class, 'deleteById']);
