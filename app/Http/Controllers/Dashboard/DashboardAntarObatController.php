<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\AntarObat;
use App\Models\TransaksiObatOnline;
use Exception;
use Illuminate\Http\Request;

class DashboardAntarObatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $antarobats = [];
        $status = session('status');
        $status_code = session('status_code');
        $antarobats = AntarObat::with(['transaksiobatonline:id_konsul,id_apoteker','transaksiobatonline:id','kurir:id,nama'])->latest()->get();

        return Inertia::render('Dashboard/AntarObats', [
            'antarobats' => $antarobats,
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
                'id_to_online' => 'required',
                'id_kurir' => 'required',
                'status' => 'required'
            ]);

            AntarObat::create($validatedData);
            
            return response()->json('Sukses Create AntarObat');
            
        }catch(Exception $e){
            return response()->json('Error'. $e);
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
