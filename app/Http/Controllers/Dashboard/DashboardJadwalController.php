<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Models\Dokter;
use App\Models\Jadwal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class DashboardJadwalController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $status = session('status');
        $status_code = session('status_code');
        $jadwals = Jadwal::with('Dokter')->latest()->get();
        $dokters = Dokter::latest()->get();
        $formattedJadwals = $jadwals->map(function ($jadwal) {
            return [
                'id' => $jadwal->id,
                'dokter' => [
                    'id' => $jadwal->dokter->id,
                    'nama' => $jadwal->dokter->nama,
                ],
                'hari' => $jadwal->hari,
                'rentang_waktu' => $jadwal->rentang_waktu,
            ];
        });
        // dd($users);

        return Inertia::render('Dashboard/Jadwal', [
            'jadwals' => $formattedJadwals,
            'user' => auth()->user(),
            'dokters' => $dokters,
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
                'id_dokter' => 'required',
                'hari' => 'required',
                'rentang_waktu' => 'required'
            ]);

            Jadwal::create($validatedData);

            return Redirect::route('jadwal-dokter.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('jadwal-dokter.index')->with([
                'status_code' => 500,
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
    public function update(Request $request, Jadwal $jadwal_dokter)
    {
        try{
            $validatedData = $request->validate([
                'id_dokter' => 'required',
                'hari' => 'required',
                'rentang_waktu' => 'required'
            ]);

            Jadwal::where('id', $jadwal_dokter->id)->update($validatedData);

            return Redirect::route('jadwal-dokter.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('jadwal-dokter.index')->with([
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

            $apoteker = Jadwal::whereId($id)->first();
            Jadwal::destroy($apoteker->id);

            return Redirect::route('jadwal-dokter.index')->with([
                'status_code' => 200, 
            ]);

        } catch (Exception $e) {
            return Redirect::route('jadwal-dokter.index')->with([
                'status_code' => 500,
            ]);
        }
    }
}
