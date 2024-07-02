<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pasien;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Registrasi;
use Exception;

class MobileRegistrasiController extends Controller
{
    public function index()
    {
        $data = Registrasi::where('id_pasien', Auth()->user()->pasien->id)->with('dokter:id,nama')->latest()->get(['id', 'no_antrian', 'id_dokter']);
        return response()->json(['message' => 'Sukses Create Registrasi', 'registrasis' => $data], 200);
    }

    public function store(Request $request)
    {
        try {
            // Ambil tanggal hari ini
            $tanggal = Carbon::today();

            // Cari data pasien berdasarkan id_user
            $pasien = Pasien::where('id_user', $request->id_user)->first();

            // Validasi data yang diterima
            $validatedData = $request->validate([
                'keluhan' => 'required',
                'poli' => 'required'
            ]);

            // Set id_pasien dari hasil pencarian pasien
            $validatedData['id_pasien'] = $pasien->id;

            // Tambahkan tanggal dan status ke data yang akan disimpan
            $validatedData['tanggal'] = $tanggal;
            $validatedData['status'] = 0;

            // Tentukan nomor antrian berdasarkan poli dan tanggal
            $nomorAntrian = Registrasi::whereDate('tanggal', $tanggal)
                ->where('poli', $validatedData['poli'])
                ->max('no_antrian');

            if ($nomorAntrian > 0) {
                $validatedData['no_antrian'] = $nomorAntrian + 1;
            } else {
                $validatedData['no_antrian'] = 1;
            }

            // Simpan data registrasi baru
            Registrasi::create($validatedData);

            // Respon sukses
            return response()->json(['message' => 'Sukses Create Registrasi'], 200);
        } catch (\Exception $e) {
            // Respon jika terjadi kesalahan
            return response()->json(['message' => 'Gagal Create Registrasi'], 500);
        }
    }
}
