<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kunjungan extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_dokter',
        'id_registrasi',
        'diagnosa',
        'tindakan'
    ];

    public function Dokter()
    {
        return $this->belongsTo(Dokter::class, 'id_dokter');
    }

    public function Registrasi()
    {
        return $this->belongsTo(Registrasi::class, 'id_registrasi');
    }

    public function TransaksiObat()
    {
        return $this->hasMany(TransaksiObat::class, 'id_kunjungan');
    }
}
