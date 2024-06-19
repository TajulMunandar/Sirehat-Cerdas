<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\TransaksiObat;
use Exception;
use Illuminate\Http\Request;

class DashboardTransaksiObatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{

            $transakasi_obats = TransaksiObat::with(['kunjungan:id,id_dokter,id_registrasi','kunjungan.dokter:id,nama,poli','kunjungan.registrasi:id,id_pasien,keluhan','kunjungan.registrasi.pasien:id,nik,no_kk,no_bpjs,nama,no_hp,alamat','apoteker:id,nama'])->latest()->get();

            return response()->json($transakasi_obats);

        }catch(Exception $e){
            return response()->json('Error' . $e);
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
        try{

            $validatedData = $request->validate([
                'id_apoteker' => 'required',
                'status' => 'required'
            ]);

            TransaksiObat::where('id', $request->id)->update($validatedData);

            return response()->json('Sukses Create Transaksi');

        }catch(Exception $e){
            return response()->json('Error');
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
