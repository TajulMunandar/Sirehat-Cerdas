<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Pasien;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Illuminate\Support\Str;

class DashboardPasienController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $status = session('status');
        $status_code = session('status_code');
        $pasiens = Pasien::latest()->get();
        $formattedPasiens = $pasiens->map(function ($pasien) {
            $foto = $pasien->foto;

            // Jika foto sudah memiliki awalan http, gunakan nilai yang sudah ada
            if (Str::startsWith($foto, 'http')) {
                $fotoUrl = $foto;
            } else {
                $fotoUrl = Storage::url($foto); // Gunakan accessor untuk mengambil URL lengkap foto
            }

            return [
                'id' => $pasien->id,
                'nik' => $pasien->nik,
                'no_kk' => $pasien->no_kk,
                'no_bpjs' => $pasien->no_bpjs,
                'nama' => $pasien->nama,
                'no_hp' => $pasien->no_hp,
                'alamat' => $pasien->alamat,
                'foto' => $fotoUrl,
                'created_at' => $pasien->created_at->toDateTimeString(), // Opsional: format tanggal
                'updated_at' => $pasien->updated_at->toDateTimeString(), // Opsional: format tanggal
            ];
        });

        return Inertia::render('Dashboard/Pasiens', [
            'pasiens' => $formattedPasiens,
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
        try{
            
            $validatedData = $request->validate([
                'username' => ['required', 'max:255', 'unique:users'],
                'nik' => 'required|max:255',
                'no_kk' => 'required|max:255',
                'no_bpjs' => 'required|max:255',
                'nama' => 'required|max:255',
                'no_hp' => 'required',
                'alamat' => 'required',
                'foto' => 'mimes:jpeg,jpg,png',
            ]);

            $userData = [
                'username' => $validatedData['username'],
                'password' => Hash::make($validatedData['username']),
                'role' => 6,
            ];

            if($request->file('foto')){
                $validatedData['foto'] = $request->file('foto')->store('data-pasien', 'public');
            }

            User::create($userData);
        
            $validatedData['id_user'] = User::where('username', $validatedData['username'])->first(['id'])->id;
            Pasien::create($validatedData);

            return Redirect::route('pasien.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            dd($e);
            return Redirect::route('pasien.index')->with([
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
                'foto' => 'mimes:jpeg,jpg,png',
            ]);

            if($request->file('foto')){
                if($request->oldImage){
                    $file_path = str_replace('/storage/', '', $request->oldImage);
                    Storage::disk('public')->delete($file_path);
                }
                $validatedData['foto'] = $request->file('foto')->store('data-pasien', 'public');
            }

            Pasien::where('id', $pasien->id)->update($validatedData);

            return Redirect::route('pasien.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('pasien.index')->with([
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

            $pasien = Pasien::whereId($id)->first();
            Pasien::destroy($pasien->id);
            User::destroy($pasien->id_user);
            if ($pasien->foto) {
                $file_path = str_replace('/storage/', '', $pasien->foto);
                Storage::disk('public')->delete($file_path);
            }

            return Redirect::route('pasien.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('pasien.index')->with([
                'status_code' => 500,
            ]);
        }
    }
}
