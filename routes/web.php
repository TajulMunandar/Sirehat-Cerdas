<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BerandaController;
use App\Http\Controllers\Dashboard\DashboardController;
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
use App\Http\Controllers\Dashboard\DashboardRiwayatKesehatanController;
use App\Http\Controllers\Dashboard\DashboardUserController;
use App\Http\Controllers\Dashboard\DashboardAntarJemputObatController;
use App\Http\Controllers\Dashboard\DashboardJemputObatController;
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
 
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Creating By Alvin
Route::prefix('/dashboard')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->middleware('dashboard');
    Route::resource('/user', DashboardUserController::class)->middleware('superadmin');
    Route::resource('/pasien', DashboardPasienController::class)->middleware('superadmin');
    Route::resource('/dokter', DashboardDokterController::class)->middleware('superadmin');
    Route::resource('/apoteker', DashboardApotekerController::class)->middleware('superadmin');
    Route::resource('/kurir', DashboardKurirController::class)->middleware('superadmin');
    Route::resource('/operator', DashboardOperatorController::class)->middleware('superadmin');
    Route::resource('/obat', DashboardObatController::class)->middleware('apoteker');
    Route::resource('/registrasi', DashboardRegistrasiController::class)->middleware('operator');
    Route::put('/registrasi/approved/{registrasi}', [DashboardRegistrasiController::class, 'approved'])->middleware('operator');
    Route::resource('/kunjungan', DashboardKunjunganController::class)->middleware('dokter');
    Route::resource('/transaksi-obat', DashboardTransaksiObatController::class)->middleware('apoteker');
    Route::resource('/konsultasi', DashboardKonsultasiOnlineController::class)->middleware('pimpinan');
    Route::resource('/chat', DashboardChatController::class)->middleware('auth');
    Route::resource('/transaksi-obat-online', DashboardTransaksiObatOnlineController::class)->middleware('apoteker');
    Route::resource('/jadwal-dokter', DashboardJadwalController::class)->middleware('dokter');
    Route::resource('/riwayat-kesehatan', DashboardRiwayatKesehatanController::class)->middleware('konsulriwayat');
    Route::resource('antar-jemput-obat', DashboardAntarJemputObatController::class)->middleware('pimpinan');
});




require __DIR__ . '/auth.php';
