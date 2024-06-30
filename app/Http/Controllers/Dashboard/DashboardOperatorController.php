<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Operator;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardOperatorController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

        $status = session('status');
        $status_code = session('status_code');
        $operators = Operator::latest()->get();

        return Inertia::render('Dashboard/Operators', [
            'operators' => $operators,
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
                'role' => 4,
            ];

            User::create($userData);
        
            $validatedData['id_user'] = User::where('username', $validatedData['username'])->first(['id'])->id;
            Operator::create($validatedData);

            return Redirect::route('operator.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('operator.index')->with([
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
    public function update(Request $request, Operator $operator)
    {
        try{

            $validatedData = $request->validate([
                'nama' => 'required|max:255',
                'no_hp' => 'required'
            ]);

            Operator::where('id', $operator->id)->update($validatedData);

            return Redirect::route('operator.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('operator.index')->with([
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

            $operator = Operator::whereId($id)->first();
            Operator::destroy($operator->id);
            User::destroy($operator->id_user);

            return Redirect::route('operator.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('operator.index')->with([
                'status_code' => 500,
            ]);
        }
    }
}
