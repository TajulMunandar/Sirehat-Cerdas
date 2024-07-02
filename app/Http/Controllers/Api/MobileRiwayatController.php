<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Kunjungan;
use App\Models\Pasien;
use App\Models\User;
use Illuminate\Http\Request;


class MobileRiwayatController extends Controller
{
    public function index(Request $request)
    {
        $userId = $request->id;

        // Ambil id_pasien berdasarkan id_user dari Pasien
        $pasien = Pasien::where('id_user', $userId)->first();

        if (!$pasien) {
            return response()->json(['message' => 'Pasien not found'], 404);
        }

        $idPasien = $pasien->id;

        // Ambil kunjungan berdasarkan id_pasien yang sudah ditemukan
        $kunjungans = Kunjungan::whereHas('Registrasi', function ($query) use ($idPasien) {
            $query->where('id_pasien', $idPasien);
        })
            ->with('Registrasi', 'Dokter', 'TransaksiObat.TransaksiObatDetail.Obat')
            ->latest()
            ->get();

        return response()->json(['kunjungans' => $kunjungans], 200);
    }
}
