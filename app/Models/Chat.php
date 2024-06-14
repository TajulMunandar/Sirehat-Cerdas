<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_konsul',
        'nama_pengirim',
        'chat'
    ];

    public function Konsultasionline()
    {
        return $this->belongsTo(Konsultasionline::class, 'id_konsul');
    }
}
