<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Pasien;
use App\Models\Dokter;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Registrasi;
use Exception;

class MobileRegistrasiController extends Controller
{
    public function index(Request $request)
    {
        $user_id = $request->id_user;
        $pasien = Pasien::where('id_user', $user_id)->first();
        $registrations = Registrasi::where('id_pasien', $pasien->id)->where('status', 0)->latest()->get(['id', 'poli', 'keluhan', 'tanggal', 'no_antrian']);
        $today = Carbon::now()->isoFormat('dddd'); // Mengambil hari ini dalam format 'Senin', 'Selasa', dst.

        $registrations->each(function ($registration) use ($today) {
            $dokter = Dokter::where('poli', $registration->poli)->first();
            
            if ($dokter) {
                $registration->dokter = $dokter->nama;

                // Ambil jadwal dokter hari ini
                $jadwal_hari_ini = $dokter->jadwal()->where('hari', $today)->first();

                // Masukkan jadwal ke dalam data registration
                $registration->jadwal_hari_ini = $jadwal_hari_ini ? [
                    'hari' => $jadwal_hari_ini->hari,
                    'rentang_waktu' => $jadwal_hari_ini->rentang_waktu,
                ] : null;
            } else {
                $registration->dokter = null;
                $registration->jadwal_hari_ini = null;
            }
        });

        return response()->json([
            'message' => 'Sukses Create Registrasi',
            'registrations' => $registrations
        ]);
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
