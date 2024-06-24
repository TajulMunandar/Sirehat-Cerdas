<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\Dashboard\DashboardAntarObatController;
use App\Http\Controllers\Dashboard\DashboardApotekerController;
use App\Http\Controllers\Dashboard\DashboardChatController;
use App\Http\Controllers\Dashboard\DashboardDokterController;
use App\Http\Controllers\Dashboard\DashboardJadwalController;
use App\Http\Controllers\Dashboard\DashboardKonsultasiOnlineController;
use App\Http\Controllers\Dashboard\DashboardKunjunganController;
use App\Http\Controllers\Dashboard\DashboardKurirController;
use App\Http\Controllers\Dashboard\DashboardObatController;
use App\Http\Controllers\Dashboard\DashboardOperatorController;
use App\Http\Controllers\Dashboard\DashboardPasienController;
use App\Http\Controllers\Dashboard\DashboardRegistrasiController;
use App\Http\Controllers\Dashboard\DashboardTransaksiObatController;
use App\Http\Controllers\Dashboard\DashboardTransaksiObatOnlineController;
use App\Http\Controllers\Dashboard\DashboardUserController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TentangController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
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


Route::get('/', [BerandaController::class, 'index']);

Route::get('/tentang', [TentangController::class, 'index']);

Route::get('/layanan', function () {
    return Inertia::render('Main/LayananPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/faq', function () {
    return Inertia::render('Main/FaqPage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard/index', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');



Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Creating By Alvin
Route::controller(AuthController::class)->group(function () {
    Route::post('/loginn', 'authenticate');
    Route::post('/logoutt', 'logout');
});

Route::prefix('/dashboard')->group(function () {
    Route::resource('/user', DashboardUserController::class);
    Route::resource('/pasien', DashboardPasienController::class);
    Route::resource('/dokter', DashboardDokterController::class);
    Route::resource('/apoteker', DashboardApotekerController::class);
    Route::resource('/kurir', DashboardKurirController::class);
    Route::resource('/operator', DashboardOperatorController::class);
    Route::resource('/obat', DashboardObatController::class);
    Route::resource('/registrasi', DashboardRegistrasiController::class);
    Route::put('/registrasi/approved/{registrasi}', [DashboardRegistrasiController::class, 'approved']);
    Route::resource('/kunjungan', DashboardKunjunganController::class);
    Route::resource('/transaksi-obat', DashboardTransaksiObatController::class);
    Route::resource('/konsultasi', DashboardKonsultasiOnlineController::class);
    Route::resource('/chat', DashboardChatController::class);
    Route::resource('/transaksi-obat-online', DashboardTransaksiObatOnlineController::class);
    Route::resource('/antar-obat', DashboardAntarObatController::class);
    Route::resource('/jadwal-dokter', DashboardJadwalController::class);
});




require __DIR__ . '/auth.php';
