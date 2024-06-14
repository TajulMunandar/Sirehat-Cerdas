<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Obat extends Model
{
    use HasFactory;

    protected $fillable = [
        'nama_obat',
        'satuan',
        'dosis'
    ];

    public function TransaksiObatDetail()
    {
        return $this->hasMany(TransaksiObatDetail::class);
    }

    public function TransaksiObatOnlineDetail()
    {
        return $this->hasMany(TransaksiObatOnlineDetail::class);
    }
    
}
