<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class DashboardUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $users = User::latest()->get();
        // dd($users);

        return Inertia::render('Dashboard/Users', [
            'users' => $users
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
        try {

            $validatedData = $request->validate([
                'username' => ['required', 'max:255', 'unique:users'],
                'password' => 'required|max:255',
                'role' => 'required'
            ]);

            $validatedData['password'] = Hash::make($validatedData['password']);

            User::create($validatedData);

            return response()->json('Sukses Create User');
        } catch (Exception $e) {
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
    public function update(Request $request, User $user)
    {
        try {

            $rules = [
                'role' => 'required'
            ];

            if ($request->username != $user->username) {
                $rules['username'] = ['required', 'max:16', 'unique:users'];
            }

            $validatedData = $request->validate($rules);

            User::where('id', $user->id)->update($validatedData);

            return response()->json('Sukses Edit User');
        } catch (Exception $e) {
            return response()->json('Error');
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {

            $user = User::whereId($id)->first();
            User::destroy($user->id);

            return response()->json('Sukses Delete User');
        } catch (Exception $e) {
            return response()->json('Error');
        }
    }
}
