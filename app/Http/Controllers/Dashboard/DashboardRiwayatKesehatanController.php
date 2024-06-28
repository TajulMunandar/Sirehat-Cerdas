<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Kunjungan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardRiwayatKesehatanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kunjungans = [];
        $status = session('status');
        $status_code = session('status_code');
        if(Auth()->user()->role == 0){
            $kunjungans = Kunjungan::with(['registrasi:id,id_pasien,tanggal,status,keluhan,poli','dokter:id,nama', 'registrasi.pasien:id,nama'])->get();
        }elseif(Auth()->user()->role == 2){
            $kunjungans = Kunjungan::where('id_dokter', Auth()->user()->dokter->id)->with(['registrasi:id,id_pasien,tanggal,status,keluhan,poli','dokter:id,nama', 'registrasi.pasien:id,nama'])->get();
        }
        
        return Inertia::render('Dashboard/RiwayatKesehatans', [
            'kunjungans' => $kunjungans,
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
