<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Dokter;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Illuminate\Support\Str;

class DashboardDokterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $status = session('status');
        $status_code = session('status_code');
        $dokters = Dokter::latest()->get();
        $formattedDokters = $dokters->map(function ($dokter) {
            $foto = $dokter->foto;

            if (Str::startsWith($foto, 'http')) {
                $fotoUrl = $foto;
            } else {
                $fotoUrl = Storage::url($foto);
            }

            return [
                'id' => $dokter->id,
                'nama' => $dokter->nama,
                'poli' => $dokter->poli,
                'no_hp' => $dokter->no_hp,
                'foto' => $fotoUrl,
                'created_at' => $dokter->created_at->toDateTimeString(),
                'updated_at' => $dokter->updated_at->toDateTimeString(),
            ];
        });

        return Inertia::render('Dashboard/Dokters', [
            'dokters' => $formattedDokters,
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
                'poli' => 'required|max:255',
                'no_hp' => 'required|max:255',
                'nama' => 'required|max:255',
                'foto' => 'mimes:jpeg,jpg,png',
                'username' => ['required', 'max:255', 'unique:users']
            ]);

            if($request->file('foto')){
                $validatedData['foto'] = $request->file('foto')->store('data-dokter', 'public');
            }

            $userData = [
                'username' => $validatedData['username'],
                'password' => Hash::make($validatedData['username']),
                'role' => 2,
            ];

            User::create($userData);
        
            $validatedData['id_user'] = User::where('username', $validatedData['username'])->first(['id'])->id;
            Dokter::create($validatedData);
            
            return Redirect::route('dokter.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('dokter.index')->with([
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
    public function update(Request $request, Dokter $dokter)
    {
        try{

            $validatedData = $request->validate([
                'poli' => 'required|max:255',
                'no_hp' => 'required|max:255',
                'nama' => 'required|max:255',
                'foto' => 'mimes:jpeg,jpg,png',
            ]);

            if($request->file('foto')){
                if($request->oldImage){
                    $file_path = str_replace('/storage/', '', $request->oldImage);
                    Storage::disk('public')->delete($file_path);
                }
                $validatedData['foto'] = $request->file('foto')->store('data-dokter', 'public');
            }

            Dokter::where('id', $dokter->id)->update($validatedData);

            return Redirect::route('dokter.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            dd($e);
            return Redirect::route('dokter.index')->with([
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

            $dokter = Dokter::whereId($id)->first();
            if ($dokter->foto) {
                $file_path = str_replace('/storage/', '', $dokter->foto);
                Storage::disk('public')->delete($file_path);
            }
            Dokter::destroy($id);

            return Redirect::route('dokter.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('dokter.index')->with([
                'status_code' => 500,
            ]);
        }
    }
}
