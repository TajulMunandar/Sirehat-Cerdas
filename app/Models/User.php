<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'username',
        'password',
        'role'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function Pasien()
    {
        return $this->hasMany(Pasien::class);
    }

    public function Apoteker()
    {
        return $this->hasMany(Apoteker::class);
    }

    public function Dokter()
    {
        return $this->hasMany(Dokter::class);
    }

    public function Operator()
    {
        return $this->hasMany(Operator::class);
    }
    
    public function Kurir()
    {
        return $this->hasMany(Kurir::class);
    }
}
