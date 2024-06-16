<?php

use App\Http\Controllers\Dashboard\DashboardApotekerController;
use App\Http\Controllers\Dashboard\DashboardDokterController;
use App\Http\Controllers\Dashboard\DashboardKurirController;
use App\Http\Controllers\Dashboard\DashboardObatController;
use App\Http\Controllers\Dashboard\DashboardOperatorController;
use App\Http\Controllers\Dashboard\DashboardPasienController;
use App\Http\Controllers\Dashboard\DashboardUserController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Main/LandingPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::prefix('/dashboard')->group(function () {
    Route::resource('/user', DashboardUserController::class);
    Route::resource('/pasien', DashboardPasienController::class);
    Route::resource('/dokter', DashboardDokterController::class);
    Route::resource('/apoteker', DashboardApotekerController::class);
    Route::resource('/kurir', DashboardKurirController::class);
    Route::resource('/operator', DashboardOperatorController::class);
    Route::resource('/obat', DashboardObatController::class);
});



require __DIR__ . '/auth.php';
