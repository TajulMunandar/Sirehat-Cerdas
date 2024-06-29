<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\JemputObat;
use App\Models\TransaksiObatOnline;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

use function Pest\Laravel\json;

class DashboardTransaksiObatOnlineController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $transaksiobats = [];
        $status = session('status');
        $status_code = session('status_code');
        $transaksiobatonlines = TransaksiObatOnline::where('status_ambil', 0)->with([
            'konsultasionline:id,id_pasien,id_dokter',
            'konsultasionline.dokter:id,nama',
            'konsultasionline.pasien:id,nama',
            'transaksiobatonlinedetail:id,id_to_online,id_obat,ket',
            'transaksiobatonlinedetail.obat:id,nama_obat'
            ])->latest()->get();
        
        return Inertia::render('Dashboard/TransaksiObatOnlines', [
            'transaksiobatonlines' => $transaksiobatonlines,
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
    public function update(Request $request, TransaksiObatOnline $transaksi_obat_online)
    {

        try{
            $validatedData = $request->validate([
                'status_ambil' => 'required'
            ]);

            $validatedData['id_apoteker'] = Auth()->user()->apoteker->id;

            TransaksiObatOnline::where('id', $transaksi_obat_online->id)->update($validatedData);

            return Redirect::route('transaksi-obat-online.index')->with([
                'status_code' => 200,
            ]);

        } catch (Exception $e) {
            return Redirect::route('transaksi-obat-online.index')->with([
                'status_code' => 500,
            ]);
        }

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }

    // public function approvedAntar(Request $request){
    //     try{

    //         $validatedDataTransaksi = $request->validate([
    //             'status_antar' => 'required',
    //         ]);
            
    //         if($validatedDataTransaksi['status_antar'] == '0'){

    //             $validatedDataJemput = $request->validate([
    //                 'nama_pengambil' => 'required',
    //             ]);

    //             $validatedDataJemput['id_to_online'] = $id;

                
    //             TransaksiObatOnline::where('id', $request->id)->update($validatedDataTransaksi);
    //             JemputObat::create($validatedDataJemput);
                
    //             return response()->json('Sukses Update Transaksi Jemput');
    //         }
            
            
    //         TransaksiObatOnline::where('id', $id)->update($validatedDataTransaksi);  
            
    //         return response()->json('Sukses Update Transaksi Antar');
            
    //     }catch(Exception $e){
    //         return response()->json('Error'. $e);
    //     }
    // }
}
