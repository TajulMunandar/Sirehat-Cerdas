<?php

namespace App\Http\Controllers;

use App\Models\Dokter;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class TentangController extends Controller
{
    public function index()
    {
        $dokter = Dokter::latest()->get();
        $dokters = Dokter::latest()->take(4)->get();
        foreach ($dokter as $d) {
            $foto = $d->foto;

            // Jika foto sudah memiliki awalan http, gunakan nilai yang sudah ada
            if (Str::startsWith($foto, 'http')) {
                $fotoUrl = $foto;
            } else {
                $fotoUrl = Storage::url($foto); // Gunakan accessor untuk mengambil URL lengkap foto
            }

            $d->foto_url = $fotoUrl; // Tambahkan foto_url ke objek dokter
        }

        foreach ($dokters as $d) {
            $foto = $d->foto;

            // Jika foto sudah memiliki awalan http, gunakan nilai yang sudah ada
            if (Str::startsWith($foto, 'http')) {
                $fotoUrl = $foto;
            } else {
                $fotoUrl = Storage::url($foto); // Gunakan accessor untuk mengambil URL lengkap foto
            }

            $d->foto_url = $fotoUrl; // Tambahkan foto_url ke objek dokter
        }
        return Inertia::render('Main/TentangPage')->with(compact('dokter', 'dokters'));
    }
}
