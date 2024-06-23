<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jadwal extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_dokter',
        'hari',
        'rentang_waktu'
    ];

    public function Dokter()
    {
        return $this->belongsTo(Dokter::class, 'id_dokter', 'id');
    }
}
