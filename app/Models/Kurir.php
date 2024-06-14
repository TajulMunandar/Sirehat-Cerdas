<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kurir extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'nama',
        'no_hp',
        'foto'
    ];

    public function User()
    {
        return $this->belongsTo(User::class, 'id_user');
    }

    public function AntarObat()
    {
        return $this->hasMany(AntarObat::class);
    }

    public function Obat()
    {
        return $this->hasMany(Obat::class);
    }
}
