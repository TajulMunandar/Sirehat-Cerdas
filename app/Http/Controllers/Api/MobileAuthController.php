<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Pasien;
use App\Models\Dokter;
use App\Models\Kurir;

use Illuminate\Support\Facades\Validator;

class MobileAuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required'
        ]);

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $data = match ($user->role) {
                6 => Pasien::where('id_user', $user->id)->first(),
                2 => Dokter::where('id_user', $user->id)->first(),
                5 => Kurir::where('id_user', $user->id)->first(),
                default => null,
            };
            $token = $user->createToken('authToken')->plainTextToken;

            return response()->json(['access_token' => $token, 'user_profile' => $user, 'data' => $data], 200);
        }

        return response()->json(['access_token' => null], 200);
    }

    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'username' => 'required|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
            'nik' => 'required|string|max:255',
            'no_kk' => 'required|string|max:255',
            'no_bpjs' => 'required|string|max:255',
            'nama' => 'required|string|max:255',
            'no_hp' => 'required|string|max:255',
            'alamat' => 'required|string|max:255',
            'foto' => 'required|image|max:2048',
        ]);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $user = User::create([
            'username' => $request->username,
            'password' => Hash::make($request->password),
            'role' => 6, 
        ]);

        $fotoPath = null;
        if ($request->hasFile('foto')) {
            $fotoPath = $request->file('foto')->store('data-pasien', 'public');
        }

        $pasien = Pasien::create([
            'id_user' => $user->id,
            'nik' => $request->nik,
            'no_kk' => $request->no_kk,
            'no_bpjs' => $request->no_bpjs,
            'nama' => $request->nama,
            'no_hp' => $request->no_hp,
            'alamat' => $request->alamat,
            'foto' => $fotoPath,
        ]);

        $token = $user->createToken('authToken')->plainTextToken;

        return response()->json(['access_token' => $token, 'user_profile' => $user, 'pasien_data' => $pasien], 201);
    }

    public function profile()
    {
        $user = Auth::user();
        $data = match ($user->role) {
            6 => Pasien::where('id_user', $user->id)->first(),
            2 => Dokter::where('id_user', $user->id)->first(),
            5 => Kurir::where('id_user', $user->id)->first(),
            default => null, 
        };
        return response()->json($data, 200);
    }
}
