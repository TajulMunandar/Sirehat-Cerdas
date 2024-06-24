<?php

namespace App\Http\Controllers;

use App\Models\Dokter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TentangController extends Controller
{
    public function index()
    {
        $dokter = Dokter::latest()->get();
        $dokters = Dokter::latest()->take(4)->get();
        return Inertia::render('Main/TentangPage')->with(compact('dokter', 'dokters'));
    }
}
