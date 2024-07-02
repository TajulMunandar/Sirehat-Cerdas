<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Dokter;

class MobileDokterController extends Controller
{
    public function index()
    {
        $data = Dokter::latest()->get(['id', 'poli', 'nama']);
        return response()->json(['dokters' => $data], 200);
    }
}
