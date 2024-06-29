<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TransaksiObatOnlineDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_to_online',
        'id_obat',
        'ket',
        'jumlah'
    ];

    public function TransaksiObatOnline()
    {
        return $this->belongsTo(TransaksiObatOnline::class, 'id_to_online', 'id');
    }

    public function Obat()
    {
        return $this->belongsTo(Obat::class, 'id_obat');
    }
    
}
