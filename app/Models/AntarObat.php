<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AntarObat extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_to_online',
        'id_kurir',
        'status'
    ];

    public function TransaksiObatOnline()
    {
        return $this->belongsTo(TransaksiObatOnline::class, 'id_to_online');
    }

    public function Kurir()
    {
        return $this->belongsTo(Kurir::class, 'id_kurir');
    }
}
