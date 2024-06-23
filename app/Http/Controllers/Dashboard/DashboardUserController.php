<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $status = session('status');
        $status_code = session('status_code');
        $users = User::latest()->get();
        // dd($users);

        return Inertia::render('Dashboard/Users', [
            'users' => $users,
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
        // dd($request);
        try {

            $validatedData = $request->validate([
                'username' => ['required', 'max:255', 'unique:users'],
                'password' => 'required|max:255',
                'role' => 'required'
            ]);

            $validatedData['password'] = Hash::make($validatedData['password']);

            User::create($validatedData);

            return Redirect::route('user.index')->with([
                'status_code' => 200, // Sesuaikan dengan kode status HTTP yang Anda inginkan
            ]);
        } catch (Exception $e) {
            return Redirect::route('user.index')->with([
                'status_code' => 500, // Atau kode status HTTP yang sesuai dengan kesalahan
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
    public function update(Request $request, User $user)
    {

        try {
            $rules = [
                'role' => 'required|integer', // pastikan role adalah integer dan required
            ];

            // Validasi username jika berubah
            if ($request->username != $user->username) {
                $rules['username'] = ['required', 'max:16', 'unique:users'];
            }

            // Validasi data yang diterima
            $validatedData = $request->validate($rules);

            // Update user
            User::where('id', $user->id)->update($validatedData);

            return Redirect::route('user.index')->with([
                'status_code' => 200, // Sesuaikan dengan kode status HTTP yang Anda inginkan
            ]);
        } catch (Exception $e) {
            // Penanganan kesalahan
            return Redirect::route('user.index')->with([
                'status_code' => 500, // Atau kode status HTTP yang sesuai dengan kesalahan
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();

            // Jika penghapusan berhasil, kembalikan respons dengan status dan pesan yang sesuai
            return Redirect::route('user.index')->with([
                'status' => 'User deleted successfully',
                'status_code' => 200, // Sesuaikan dengan kode status HTTP yang Anda inginkan
            ]);
        } catch (\Exception $e) {
            // Jika terjadi kesalahan, kembalikan respons dengan pesan error
            return Redirect::route('user.index')->with([
                'error' => 'Error deleting user',
                'status_code' => 500, // Atau kode status HTTP yang sesuai dengan kesalahan
            ]);
        }
    }
}
