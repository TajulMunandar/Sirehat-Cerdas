<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Obat;
use Exception;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardObatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{

            $obats = Obat::latest()->get();

            return Inertia::render('Dashboard/Obats', [
                'obats' => $obats
            ]);

        }catch(Exception $e){
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
        try{
            
            $validatedData = $request->validate([
                'nama_obat' => 'required|max:255',
                'satuan' => 'required',
                'jumlah' => 'required',
                'dosis' => 'required'
            ]);

            
            $validatedData['jumlah'] = intval($validatedData['jumlah']); 

            $obat = new Obat();
            $obat->nama_obat = $validatedData['nama_obat'];
            $obat->satuan = $validatedData['satuan'];
            $obat->jumlah = $validatedData['jumlah'];
            $obat->dosis = $validatedData['dosis'];
            $obat->save();

            return response()->json('Sukses Create Obat');
            
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
    public function update(Request $request, Obat $obat)
    {
        try{

            $validatedData = $request->validate([
                'nama_obat' => 'required|max:255',
                'satuan' => 'required',
                'jumlah' => 'required',
                'dosis' => 'required'
            ]);

            Obat::where('id', $obat->id)->update($validatedData);

            return response()->json('Sukses Edit Obat');

        }catch(Exception $e){
            return response()->json('Error');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{

            $obat = Obat::whereId($id)->first();
            Obat::destroy($obat->id);

            return response()->json('Sukses Delete Obat');

        }catch(Exception $e){
            return response()->json('Error');
        }
    }
}
