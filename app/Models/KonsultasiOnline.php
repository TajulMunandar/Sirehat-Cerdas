<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class KonsultasiOnline extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_dokter',
        'id_pasien',
        'status_konsul',
        'diagnosa'
    ];

    public function Dokter()
    {
        return $this->belongsTo(Dokter::class, 'id_dokter');
    }

    public function Pasien()
    {
        return $this->belongsTo(Pasien::class, 'id_pasien');
    }

    public function AntarObat()
    {
        return $this->hasMany(AntarObat::class);
    }

    public function Chat()
    {
        return $this->hasMany(Chat::class);
    }

    public function TransaksiObatOnline()
    {
        return $this->hasMany(TransaksiObatOnline::class);
    }
}
