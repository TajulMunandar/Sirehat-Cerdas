<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Kunjungan;
use App\Models\Registrasi;
use App\Models\TransaksiObat;
use App\Models\TransaksiObatDetail;
use App\Models\Obat;
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
        $obats = Obat::latest()->get();
        if(Auth()->user()->role == 0){ 
            $kunjungans = Registrasi::with(['pasien:id,nama'])->whereDoesntHave('kunjungan')->where('status', 1)->latest()->get();
        }else if(Auth()->user()->role == 2){
            $kunjungans = Registrasi::with(['pasien:id,nama'])->whereDoesntHave('kunjungan')->where('poli', Auth()->user()->dokter->poli)->where('status', 1)->latest()->get();
        }

        return Inertia::render('Dashboard/Kunjungans', [
            'kunjungans' => $kunjungans,
            'obats' => $obats,
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
        //
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
    public function update(Request $request, Registrasi $kunjungan)
    {
        try{

            $validatedDataKunjungan = $request->validate([
                'diagnosa' => 'required',
                'tindakan' => 'required'
            ]);

            $validatedDataKunjungan['id_dokter'] = Auth()->user()->dokter->id;
            $validatedDataKunjungan['id_registrasi'] = $kunjungan->id;

            $kunjungan = Kunjungan::create($validatedDataKunjungan);

            if($validatedDataKunjungan['tindakan'] == '0'){
                

                $transaksi_obat = TransaksiObat::create([
                    'id_kunjungan' => $kunjungan->id,
                    'status' => 0
                ]);

                foreach($request->obat_diagnosa as $key => $value) {

                    TransaksiObatDetail::create([
                        'ket' => $value['ket'],
                        'id_obat' => $value['id_obat'],
                        'id_transaksi_obat' => $transaksi_obat->id
                    ]);
                }

                return Redirect::route('kunjungan.index')->with([
                    'status_code' => 200, 
                ]);
            }
            
            return Redirect::route('kunjungan.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {

            dd($e);
            return Redirect::route('kunjungan.index')->with([
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

            $kunjungan = Kunjungan::whereId($id)->first();

            Kunjungan::destroy($id);

            return response()->json('Sukses Delete Kunjungan');

        }catch(Exception $e){
            return response()->json('Error' . $e);
        }
    }
}
