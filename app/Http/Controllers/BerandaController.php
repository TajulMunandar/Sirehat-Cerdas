<?php

namespace App\Http\Controllers;

use App\Models\Dokter;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BerandaController extends Controller
{
    public function index()
    {
        $dokter = Dokter::latest()->take(2)->get();
        $dokters = Dokter::latest()->take(4)->get();
        return Inertia::render('Main/LandingPage')->with(compact('dokter', 'dokters'));
    }
}
