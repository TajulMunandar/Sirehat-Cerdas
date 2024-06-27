<?php

namespace App\Http\Controllers;

use App\Models\Registrasi;
use Illuminate\Http\Request;

class KunjunganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    public function GetData()
    {
        $kunjunganCounts = Registrasi::leftJoin('kunjungans', 'registrasis.id', '=', 'kunjungans.id_registrasi')
            ->selectRaw('DATE(registrasis.tanggal) as tanggal, count(kunjungans.id) as jumlah_kunjungan')
            ->groupBy('tanggal')
            ->get();

        return response()->json($kunjunganCounts);
    }
}
