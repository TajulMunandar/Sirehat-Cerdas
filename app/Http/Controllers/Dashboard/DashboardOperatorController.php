<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Operator;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class DashboardOperatorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{

            $operators = Operator::latest()->get();

            return Inertia::render('Dashboard/Operators', [
                'operators' => $operators
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
            Operator::create($validatedData);

            return response()->json('Sukses Create Operator');
            
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
    public function update(Request $request, Operator $operator)
    {
        try{

            $validatedData = $request->validate([
                'nama' => 'required|max:255',
                'no_hp' => 'required',
                'id_user' => 'required'
            ]);

            Operator::where('id', $operator->id)->update($validatedData);

            return response()->json('Sukses Edit Operator');

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

            $operator = Operator::whereId($id)->first();
            Operator::destroy($operator->id);

            return response()->json('Sukses Delete Operator');

        }catch(Exception $e){
            return response()->json('Error');
        }
    }
}
