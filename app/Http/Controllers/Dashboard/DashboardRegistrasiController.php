<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Dokter;
use App\Models\Registrasi;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class DashboardRegistrasiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try {
            $registrasiData = [];
            $status = session('status');
            $status_code = session('status_code');
            $registrasis = Registrasi::where('status', 0)->with(['Pasien:id,nik,no_kk,no_bpjs,nama,no_hp,alamat,foto'])->latest()->get();
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
                'user' => auth()->user(),
                'dokter' => $dokter,
                'status' => $status,
                'status_code' => $status_code,
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
        //
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
        //
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

            return Redirect::route('registrasi.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('registrasi.index')->with([
                'status_code' => 500,
            ]);
        }
    }
}
