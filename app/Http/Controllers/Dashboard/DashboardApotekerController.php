<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Apoteker;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardApotekerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $status = session('status');
        $status_code = session('status_code');
        $apotekers = Apoteker::latest()->get();

        return Inertia::render('Dashboard/Apotekers', [
            'apotekers' => $apotekers,
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
                'nama' => 'required|max:255',
                'no_hp' => 'required'
            ]);

            $userData = [
                'username' => $validatedData['username'],
                'password' => Hash::make($validatedData['username']),
                'role' => 3,
            ];

            User::create($userData);
        
            $validatedData['id_user'] = User::where('username', $validatedData['username'])->first(['id'])->id;
            Apoteker::create($validatedData);

            return Redirect::route('apoteker.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('apoteker.index')->with([
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
    public function update(Request $request, Apoteker $apoteker)
    {
        try{

            $validatedData = $request->validate([
                'nama' => 'required|max:255',
                'no_hp' => 'required',
            ]);

            Apoteker::where('id', $apoteker->id)->update($validatedData);

            return Redirect::route('apoteker.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('apoteker.index')->with([
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

            $apoteker = Apoteker::whereId($id)->first();
            Apoteker::destroy($apoteker->id);

            return Redirect::route('apoteker.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('apoteker.index')->with([
                'status_code' => 500,
            ]);
        }
    }
}
