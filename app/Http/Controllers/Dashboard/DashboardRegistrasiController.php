<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Dokter;
use App\Models\Registrasi;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardRegistrasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $registrasis = Registrasi::with(['Pasien:id,nik,no_kk,no_bpjs,nama,no_hp,alamat,foto'])->latest()->get();
            $dokter = Dokter::all();
            $registrasiData = $registrasis->map(function ($registrasi) use ($dokter) {
                $dokterPoli = $dokter->firstWhere('poli', $registrasi->poli); // Cari dokter dengan poli yang sama

                // Buat array baru yang menggabungkan informasi registrasi dan dokter jika ditemukan
                return [
                    'id' => $registrasi->id,
                    'poli' => $registrasi->poli,
                    'keluhan' => $registrasi->keluhan,
                    'tanggal' => $registrasi->tanggal,
                    'nama' => $registrasi->pasien->nama,
                    'nik' => $registrasi->pasien->nik,
                    'kk' => $registrasi->pasien->no_kk,
                    'bpjs' => $registrasi->pasien->no_bpjs,
                    'alamat' => $registrasi->pasien->alamat,
                    'foto' => $registrasi->pasien->foto,
                    'nama_dokter' => $dokterPoli ? $dokterPoli->nama : null, // Ambil nama dokter jika ditemukan
                ];
            });

            return Inertia::render('Dashboard/Registrasis', [
                'registrasis' => $registrasiData,
                'dokter' => $dokter
            ]);
        } catch (Exception $e) {
            return response()->json('Error');
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

            $validatedData = $request->validate([
                'id_pasien' => 'required',
                'tanggal' => 'required',
                'status' => 'required',
                'keluhan' => 'required',
                'poli' => 'required'
            ]);

            Registrasi::create($validatedData);

            return response()->json('Sukses Create Registrasi');
        } catch (Exception $e) {
            return response()->json('Error' . $e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Registrasi $registrasi)
    {
        try {

            $validatedData = $request->validate([
                'id_pasien' => 'required',
                'tanggal' => 'required',
                'status' => 'required',
                'keluhan' => 'required',
                'poli' => 'required'
            ]);

            Registrasi::where('id', $registrasi->id)->update($validatedData);

            return response()->json('Sukses Edit Registrasi');
        } catch (Exception $e) {
            return response()->json('Error');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {

            $registrasi = Registrasi::whereId($id)->first();

            Registrasi::destroy($id);

            return response()->json('Sukses Delete Registrasi');
        } catch (Exception $e) {
            return response()->json('Error');
        }
    }

    public function approved(Request $request, Registrasi $registrasi)
    {
        try {

            $validatedData = $request->validate([
                'status' => 'required'
            ]);

            Registrasi::where('id', $registrasi->id)->update($validatedData);

            return response()->json('Sukses Approved Registrasi');
        } catch (Exception $e) {
            return response()->json('Error');
        }
    }
}
