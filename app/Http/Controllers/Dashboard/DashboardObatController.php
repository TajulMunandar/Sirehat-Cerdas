<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Obat;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardObatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $status = session('status');
        $status_code = session('status_code');
        $obats = Obat::latest()->get();

        return Inertia::render('Dashboard/Obats', [
            'obats' => $obats,
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

            return Redirect::route('obat.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('obat.index')->with([
                'status_code' => 500,
            ]);
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

            return Redirect::route('obat.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('obat.index')->with([
                'status_code' => 500,
            ]);
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

            return Redirect::route('obat.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('obat.index')->with([
                'status_code' => 500,
            ]);
        }
    }
}
