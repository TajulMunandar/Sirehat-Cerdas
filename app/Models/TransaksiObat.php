<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransaksiObat extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_kunjungan',
        'id_apoteker',
        'status'
    ];

    public function Kunjungan()
    {
        return $this->belongsTo(Kunjungan::class, 'id_kunjungan');
    }

    public function Apoteker()
    {
        return $this->belongsTo(Apoteker::class, 'id_apoteker');
    }

    public function TransaksiObatOnline()
    {
        return $this->hasMany(TransaksiObatOnline::class);
    }
    
}
