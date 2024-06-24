<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Chat;
use App\Models\KonsultasiOnline;
use App\Models\TransaksiObatOnline;
use App\Models\TransaksiObatOnlineDetail;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardKonsultasiOnlineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        $konsultasis = [];
        $status = session('status');
        $status_code = session('status_code');
        if(Auth()->user()->role == 0){
            $konsultasis = KonsultasiOnline::where('status_konsul', 0)->with(['pasien:id,nama','dokter:id,nama'])->get();
        }elseif(Auth()->user()->role == 2){
            $konsultasis = KonsultasiOnline::where('id_dokter', Auth()->user()->dokter->id)->where('status_konsul', 0)->with(['pasien:id,nama','dokter:id,nama'])->get();
        }elseif(Auth()->user()->role == 6){
            $konsultasis = KonsultasiOnline::where('id_pasien', Auth()->user()->pasien->id)->where('status_konsul', 0)->with(['pasien:id,nama','dokter:id,nama'])->get();
        }
        
        return Inertia::render('Dashboard/Konsultasis', [
            'konsultasis' => $konsultasis,
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
                'id_pasien' => 'required',
                'id_dokter' => 'required',
                'status_konsul' => 'required'
            ]);

            KonsultasiOnline::create($validatedData);
            
            return response()->json('Sukses Create Konsultasi');
            
        }catch(Exception $e){
            return response()->json('Error'. $e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        try{

            $chats = Chat::where('id_konsul', $id)->get();
            
            return response()->json($chats);
            
        }catch(Exception $e){
            return response()->json('Error'. $e);
        }
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

            $validatedData = $request->validate([
                'status_konsul' => 'required',
                'status_obat' => 'required',
                'diagnosa' => 'required'
            ]);

            KonsultasiOnline::where('id', $id)->update($validatedData);

            if($validatedData['status_obat'] == '1'){
                

                $transaksi_obat = TransaksiObatOnline::create([
                    'id_konsul' => $id,
                    'status_ambil' => 0,
                    'status_antar' => 0,
                ]);

                foreach($request->id_obat as $key => $value) {

                    TransaksiObatOnlineDetail::create([
                        'ket' => $request->ket,
                        'id_obat' => $value,
                        'id_to_online' => $transaksi_obat->id
                    ]);
                }

                return response()->json('Sukses Update Konsultasi Obat');
            }

            return response()->json('Sukses Update Konsultasi Tanpa Obat');

        }catch(Exception $e){
            return response()->json('Error' .$e);
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
