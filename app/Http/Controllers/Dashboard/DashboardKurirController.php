<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Kurir;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;

class DashboardKurirController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $status = session('status');
        $status_code = session('status_code');
        $kurirs = Kurir::latest()->get();
        $formattedKurirs = $kurirs->map(function ($kurir) {
            $foto = $kurir->foto;

            // Jika foto sudah memiliki awalan http, gunakan nilai yang sudah ada
            if (Str::startsWith($foto, 'http')) {
                $fotoUrl = $foto;
            } else {
                $fotoUrl = Storage::url($foto); // Gunakan accessor untuk mengambil URL lengkap foto
            }

            return [
                'id' => $kurir->id,
                'nama' => $kurir->nama,
                'no_hp' => $kurir->no_hp,
                'foto' => $fotoUrl,
                'created_at' => $kurir->created_at->toDateTimeString(), // Opsional: format tanggal
                'updated_at' => $kurir->updated_at->toDateTimeString(), // Opsional: format tanggal
            ];
        });

        return Inertia::render('Dashboard/Kurirs', [
            'kurirs' => $formattedKurirs,
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
                'nama' => 'required|max:255',
                'no_hp' => 'required|max:255',
                'foto' => 'mimes:jpeg,jpg,png',
                'username' => ['required', 'max:255', 'unique:users']
            ]);

            if($request->file('foto')){
                $validatedData['foto'] = $request->file('foto')->store('data-kurir', 'public');
            }

            $userData = [
                'username' => $validatedData['username'],
                'password' => Hash::make($validatedData['username']),
                'role' => 5,
            ];

            User::create($userData);
        
            $validatedData['id_user'] = User::where('username', $validatedData['username'])->first(['id'])->id;
            Kurir::create($validatedData);
            
            return Redirect::route('kurir.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('kurir.index')->with([
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
    public function update(Request $request, Kurir $kurir)
    {

        try{
            // dd($request);
            $validatedData = $request->validate([
                'nama' => 'required|max:255',
                'no_hp' => 'required|max:255',
                'foto' => 'mimes:jpeg,jpg,png',
            ]);
    
            if($request->file('foto')){
                if($request->oldImage){
                    $file_path = str_replace('/storage/', '', $request->oldImage);
                    Storage::disk('public')->delete($file_path);
                }
                $validatedData['foto'] = $request->file('foto')->store('data-kurir', 'public');
            }
    
            Kurir::where('id', $kurir->id)->update($validatedData);
            
            return Redirect::route('kurir.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('kurir.index')->with([
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

            $kurir = Kurir::whereId($id)->first();
            if ($kurir->foto) {
                $file_path = str_replace('/storage/', '', $kurir->foto);
                Storage::disk('public')->delete($file_path);
            }
            Kurir::destroy($id);

            return Redirect::route('kurir.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('kurir.index')->with([
                'status_code' => 500,
            ]);
        }
    }
}
