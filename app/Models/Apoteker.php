<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Apoteker extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'nama',
        'no_hp'
    ];

    public function User()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function TransaksiObat()
    {
        return $this->hasMany(TransaksiObat::class);
    }

    public function TransaksiObatOnline()
    {
        return $this->hasMany(TransaksiObatOnline::class);
    }
}
