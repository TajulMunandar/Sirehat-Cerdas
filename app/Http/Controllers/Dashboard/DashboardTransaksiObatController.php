<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\TransaksiObat;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardTransaksiObatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $transaksiobats = [];
        $status = session('status');
        $status_code = session('status_code');
        $transaksiobats = TransaksiObat::with([
            'kunjungan:id,id_registrasi,id_dokter',
            'kunjungan.registrasi:id,id_pasien,tanggal',
            'kunjungan.dokter:id,nama',
            'kunjungan.registrasi.pasien:id,nama',
            'transaksiobatdetail:id,id_transaksi_obat,id_obat,ket',
            'transaksiobatdetail.obat:id,nama_obat'
        ])->latest()->get();
        
        return Inertia::render('Dashboard/TransaksiObats', [
            'transaksiobats' => $transaksiobats,
            'status' => $status,
            'status_code' => $status_code,

        ]);
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
