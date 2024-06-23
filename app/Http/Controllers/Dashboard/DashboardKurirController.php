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

        return Inertia::render('Dashboard/Kurirs', [
            'kurirs' => $kurirs,
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

            // dd($request);

            $validatedData = $request->validate([
                'nama' => 'required|max:255',
                'no_hp' => 'required|max:255',
                // 'foto' => 'mimes:jpeg,jpg,png',
                'foto' => 'required',
                'username' => ['required', 'max:255', 'unique:users']
            ]);

            if($request->file('foto')){
                $validatedData['foto'] = $request->file('foto')->store('data-kurir');
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
            
            $validatedData = $request->validate([
                'nama' => 'required|max:255',
                'no_hp' => 'required|max:255',
                // 'foto' => 'mimes:jpeg,jpg,png',
                'foto' => 'required'
            ]);
    
            if($request->file('foto')){
                if($request->oldImage){
                    Storage::delete($request->oldImage);
                }
                $validatedData['foto'] = $request->file('foto')->store('data-kurir');
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
                Storage::delete($kurir->foto);
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
