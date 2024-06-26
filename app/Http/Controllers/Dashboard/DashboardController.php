<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Kunjungan;
use App\Models\Dokter;
use App\Models\Pasien;
use App\Models\KonsultasiOnline;
use Inertia\Inertia;
use Carbon\Carbon;


class DashboardController extends Controller
{
    public function index(){
        $countKunjungan = Kunjungan::count();
        $countKunjunganHariIni = Kunjungan::whereDate('created_at', Carbon::today())->count();
        $countKonsultasiOnline = KonsultasiOnline::count();
        $countDokter = Dokter::count(); 
        $countPasien = Pasien::count(); 

        return Inertia::render('Dashboard/index', [
            'countKunjungan' => $countKunjungan,
            'countDokter' => $countDokter,
            'countPasien' => $countPasien,
            'countKonsultasiOnline' => $countKonsultasiOnline,  
            'countKunjunganHariIni' => $countKunjunganHariIni  
        ]);
    }
}
