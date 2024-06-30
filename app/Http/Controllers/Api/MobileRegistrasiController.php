<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Carbon\Carbon;
use App\Models\Registrasi;

class MobileRegistrasiController extends Controller
{
    public function index()
    {
        $data = Registrasi::where('id_pasien', Auth()->user()->pasien->id)->with('dokter:id,nama')->latest()->get(['id', 'no_antrian', 'id_dokter']);
        return response()->json(['message' =>'Sukses Create Registrasi', 'registrasis' => $data], 200);
    }

    public function store(Request $request)
    {
        try {

            $tanggal = Carbon::today();

            $validatedData = $request->validate([
                'id_pasien' => 'required',
                'keluhan' => 'required',
                'poli' => 'required'
            ]);
            $validatedData['tanggal'] = $tanggal;
            $validatedData['status'] = 0;

            $nomorAntrian = Registrasi::whereDate('tanggal', $tanggal)->where('poli', $validatedData['poli'])->max('no_antrian');
            if($nomorAntrian > 1){
                $validatedData['no_antrian'] = $nomorAntrian + 1;
            }else{
                $validatedData['no_antrian'] = 1;
            }

            Registrasi::create($validatedData);

            return response()->json(['message' =>'Sukses Create Registrasi'], 200);
        } catch (Exception $e) {
            return response()->json(['message' =>'Gagal Create Registrasi'], 404);
        }
    }
}
