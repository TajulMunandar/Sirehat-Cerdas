<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pasien extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'nik',
        'no_kk',
        'no_bpjs',
        'nama',
        'no_hp',
        'alamat'
    ];

    public function User()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function KonsultasiOnline()
    {
        return $this->hasMany(KonsultasiOnline::class);
    }

    public function Registrasi()
    {
        return $this->hasMany(Registrasi::class);
    }
}
