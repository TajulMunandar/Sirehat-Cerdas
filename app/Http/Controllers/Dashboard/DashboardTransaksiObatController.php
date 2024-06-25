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
        $transaksiobats = TransaksiObat::where('status', 0)->with([
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
    public function update(Request $request, TransaksiObat $transaksi_obat)
    {
        try{
            $validatedData = $request->validate([
                'status' => 'required'
            ]);

            $validatedData['id_apoteker'] = Auth()->user()->apoteker->id;

            TransaksiObat::where('id', $transaksi_obat->id)->update($validatedData);

            return Redirect::route('transaksi-obat.index')->with([
                'status_code' => 200,
            ]);

        } catch (Exception $e) {
            return Redirect::route('transaksi-obat.index')->with([
                'status_code' => 500,
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
