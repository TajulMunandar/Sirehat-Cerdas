<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransaksiObatOnline extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_konsul',
        'id_apoteker',
        'status_ambil',
        'status_antar'
    ];

    public function KonsultasiOnline()
    {
        return $this->belongsTo(KonsultasiOnline::class, 'id_konsul');
    }

    public function Apoteker()
    {
        return $this->belongsTo(Apoteker::class, 'id_apoteker');
    }

    public function AntarObat()
    {
        return $this->hasMany(AntarObat::class);
    }

    public function JemputObat()
    {
        return $this->hasMany(JemputObat::class);
    }

    public function TransaksiObatOnlineDetail()
    {
        return $this->hasMany(TransaksiObatOnlineDetail::class);
    }
}
