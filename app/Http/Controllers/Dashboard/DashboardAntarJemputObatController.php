<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\AntarObat;
use App\Models\JemputObat;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardAntarJemputObatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $antarobats = [];
        $status = session('status');
        $status_code = session('status_code');
        $antarobats = AntarObat::with(['transaksiobatonline:id,id_konsul','transaksiobatonline.konsultasionline:id,id_pasien','transaksiobatonline.konsultasionline.pasien:id,nama','kurir:id,nama'])->latest()->get();
        $jemputobats = JemputObat::with(['transaksiobatonline:id,id_konsul,status_ambil','transaksiobatonline.konsultasionline:id,id_pasien','transaksiobatonline.konsultasionline.pasien:id,nama',])->latest()->get();

        return Inertia::render('Dashboard/AntarJemputObats', [
            'antarobats' => $antarobats,
            'jemputobats' => $jemputobats,
            'user' => auth()->user(),
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
