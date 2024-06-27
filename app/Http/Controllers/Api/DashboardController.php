<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\TransaksiObatDetail;
use Illuminate\Support\Facades\DB;

class DashboardController extends Controller
{
    public function getClustering()
    {
        $kunjungan = TransaksiObatDetail::with(['obat:id,nama_obat','transaksiobat:id,id_kunjungan','transaksiobat.kunjungan:id,id_registrasi','transaksiobat.kunjungan.registrasi:id,tanggal'])
                    ->get(['id', 'id_obat', 'id_transaksi_obat']);

        return response()->json($kunjungan);
    }
}
