<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Dokter;
use App\Models\User;
use Faker\Factory as FakerFactory;

class DokterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $faker = FakerFactory::create('id_ID');

        $polis = ['umum', 'gigi', 'anak', 'anak dan ibu'];

        foreach ($polis as $poli) {
            // Buat user dokter terlebih dahulu
            $user = User::factory()->dokter()->create();

            // Buat dokter dengan poli yang ditentukan
            Dokter::factory()->create([
                'id_user' => $user->id,
                'poli' => $poli,
                'no_hp' => $faker->phoneNumber,
                'nama' => $faker->name,
                'foto' => $faker->imageUrl(640, 480, 'people', true, 'Faker'),
            ]);
        }
    }
}
