<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::create([
            'username' => 'admin',
            'password' => 'admin',
            'role' => 0,
        ]);
        
        \App\Models\User::create([
            'username' => 'pimpinan',
            'password' => 'pimpinan',
            'role' => 1,
        ]);

        $this->call([
            DokterSeeder::class,
        ]);
        
        \App\Models\Apoteker::factory()->count(5)->create();
        
        \App\Models\Operator::factory()->count(5)->create();
        
        \App\Models\Kurir::factory()->count(10)->create();
        
        \App\Models\Pasien::factory()->count(50)->create();

        $this->call([
            ObatSeeder::class,
        ]);

        $this->call([
            RegistrasiSeeder::class,
        ]);
    }
}
