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
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardKunjunganController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $kunjungans = [];
        $status = session('status');
        $status_code = session('status_code');
        if(Auth()->user()->role == 0){ 
            $kunjungans = Registrasi::with(['pasien:id,nama'])->where('status', 1)->latest()->get();
        }else if(Auth()->user()->role == 2){
            $kunjungans = Registrasi::with(['pasien:id,nama'])->where('poli', Auth()->user()->dokter->poli)->where('status', 1)->latest()->get();
        }

        return Inertia::render('Dashboard/Kunjungans', [
            'kunjungans' => $kunjungans,
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
