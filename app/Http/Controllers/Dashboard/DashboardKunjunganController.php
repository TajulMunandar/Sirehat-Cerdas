<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Kunjungan;
use App\Models\Registrasi;
use App\Models\TransaksiObat;
use App\Models\TransaksiObatDetail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class DashboardKunjunganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{

            $registrasis = [];
            if(Auth()->user()->role == 0){ 
                $registrasis = Registrasi::with(['Pasien:id,nik,no_kk,no_bpjs,nama,no_hp,alamat'])->where('status', True)->latest()->get();
            }else if(Auth()->user()->role == 2){
                $registrasis = Registrasi::with(['Pasien:id,nik,no_kk,no_bpjs,nama,no_hp,alamat'])->where('poli', Auth()->user()->dokter->poli)->where('status', True)->latest()->get();
            }

            return response()->json($registrasis);

        }catch(Exception $e){
            return response()->json('Error' . $e);  
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
            
            $validatedDataKunjungan = $request->validate([
                'id_dokter' => 'required',
                'id_registrasi' => 'required',
                'diagnosa' => 'required',
                'tindakan' => 'required'
            ]);

            $kunjungan = Kunjungan::create($validatedDataKunjungan);

            if($validatedDataKunjungan['tindakan'] == '1'){
                

                $transaksi_obat = TransaksiObat::create([
                    'id_kunjungan' => $kunjungan->id,
                    'status' => 0
                ]);

                foreach($request->id_obat as $key => $value) {

                    TransaksiObatDetail::create([
                        'ket' => $request->ket,
                        'id_obat' => $value,
                        'id_transaksi_obat' => $transaksi_obat->id
                    ]);
                }

                return response()->json('Sukses Create Kunjungan Pengobatan');
            }
            
            return response()->json('Sukses Create Kunjungan Rujukan');
            
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
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        try{

            $kunjungan = Kunjungan::whereId($id)->first();

            Kunjungan::destroy($id);

            return response()->json('Sukses Delete Kunjungan');

        }catch(Exception $e){
            return response()->json('Error' . $e);
        }
    }
}
