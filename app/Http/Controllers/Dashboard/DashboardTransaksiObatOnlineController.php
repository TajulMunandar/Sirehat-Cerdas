<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\JemputObat;
use App\Models\TransaksiObatOnline;
use Exception;
use Illuminate\Http\Request;

use function Pest\Laravel\json;

class DashboardTransaksiObatOnlineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        try{

            $transakasi_obats = TransaksiObatOnline::with(['konsultasionline:id,id_dokter,id_pasien','konsultasionline.dokter:id,nama,poli','konsultasionline.pasien:id,nik,no_kk,no_bpjs,nama,no_hp,alamat','apoteker:id,nama'])->latest()->get();

            return response()->json($transakasi_obats);

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

            $validatedData = $request->validate([
                'id_apoteker' => 'required',
                'status_ambil' => 'required'
            ]);

            TransaksiObatOnline::where('id', $request->id)->update($validatedData);

            return response()->json('Sukses Create Transaksi Online');

        }catch(Exception $e){
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
    public function update(Request $request, string $id)
    {
        try{

            $validatedDataTransaksi = $request->validate([
                'status_antar' => 'required',
            ]);
            
            if($validatedDataTransaksi['status_antar'] == '0'){

                $validatedDataJemput = $request->validate([
                    'nama_pengambil' => 'required',
                ]);

                $validatedDataJemput['id_to_online'] = $id;

                
                TransaksiObatOnline::where('id', $request->id)->update($validatedDataTransaksi);
                JemputObat::create($validatedDataJemput);
                
                return response()->json('Sukses Update Transaksi Jemput');
            }
            
            
            TransaksiObatOnline::where('id', $id)->update($validatedDataTransaksi);  
            
            return response()->json('Sukses Update Transaksi Antar');
            
        }catch(Exception $e){
            return response()->json('Error'. $e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
