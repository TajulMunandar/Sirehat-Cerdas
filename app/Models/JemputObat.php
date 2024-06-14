<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JemputObat extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_to_online',
        'nama_pengambil'
    ];

    public function TransaksiObatOnline()
    {
        return $this->belongsTo(TransaksiObatOnline::class, 'id_to_online');
    }
}
