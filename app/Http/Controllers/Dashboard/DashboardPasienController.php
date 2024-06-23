<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Pasien;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class DashboardPasienController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{

            $pasiens = Pasien::latest()->get();

            return Inertia::render('Dashboard/Pasiens', [
                'pasiens' => $pasiens
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
                'username' => ['required', 'max:255', 'unique:users'],
                'nik' => 'required|max:255',
                'no_kk' => 'required|max:255',
                'no_bpjs' => 'required|max:255',
                'nama' => 'required|max:255',
                'no_hp' => 'required',
                'alamat' => 'required'
            ]);

            $userData = [
                'username' => $validatedData['username'],
                'password' => Hash::make($validatedData['username']),
                'role' => 4,
            ];

            User::create($userData);
        
            $validatedData['id_user'] = User::where('username', $validatedData['username'])->first(['id'])->id;
            Pasien::create($validatedData);

            return response()->json('Sukses Create Pasien');
            
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
    public function update(Request $request, Pasien $pasien)
    {
        try{

            $validatedData = $request->validate([
                'nik' => 'required|max:255',
                'no_kk' => 'required|max:255',
                'no_bpjs' => 'required|max:255',
                'nama' => 'required|max:255',
                'no_hp' => 'required',
                'alamat' => 'required',
                'id_user' => 'required'
            ]);

            Pasien::where('id', $pasien->id)->update($validatedData);

            return response()->json('Sukses Edit Pasien');

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

            $pasien = Pasien::whereId($id)->first();
            Pasien::destroy($pasien->id);

            return response()->json('Sukses Delete Pasien');

        }catch(Exception $e){
            return response()->json('Error');
        }
    }
}
