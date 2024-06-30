<?php

use App\Http\Controllers\KunjunganController;
use App\Http\Controllers\Api\DashboardController;
use App\Http\Controllers\Api\MobileAuthController;
use App\Http\Controllers\Api\MobileRegistrasiController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::post('/login', [MobileAuthController::class, 'login']);
Route::post('/register', [MobileAuthController::class, 'register']);
Route::get('/profile', [MobileAuthController::class, 'profile']);
Route::get('/registrasi', [MobileRegistrasiController::class, 'index']);
Route::post('/registrasi', [MobileRegistrasiController::class, 'store']);
Route::get('/get-data-kunjungan', [KunjunganController::class, 'GetData']);
Route::get('/get-data-clustering', [DashboardController::class, 'getClustering']);
