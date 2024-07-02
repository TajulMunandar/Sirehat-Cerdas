<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Dokter extends Model
{
    use HasFactory;
    protected $table = 'dokters';

    protected $fillable = [
        'id_user',
        'poli',
        'no_hp',
        'nama',
        'foto'
    ];

    public function User()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function Jadwal()
    {
        return $this->hasMany(Jadwal::class);
    }

    public function KonsultasiOnline()
    {
        return $this->hasMany(KonsultasiOnline::class);
    }

    public function Kunjungan()
    {
        return $this->hasMany(Kunjungan::class);
    }
}
