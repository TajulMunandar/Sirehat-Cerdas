<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registrasi extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_pasien',
        'tanggal',
        'status',
        'keluhan',
        'poli'
    ];

    public function Pasien()
    {
        return $this->belongsTo(Pasien::class, 'id_pasien');
    }

    public function Kunjungan()
    {
        return $this->hasMany(Kunjungan::class, 'id_registrasi');
    }
}
