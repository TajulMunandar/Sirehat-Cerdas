<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Pasien;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Registrasi>
 */
class RegistrasiFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $polis = ['umum', 'ptm', 'anak', 'gigi', 'ibu dan anak'];
        $keluhan = [
            'umum' => [
                'Demam dan pusing',
                'Sakit kepala',
                'Nyeri otot',
                'Batuk dan pilek',
                'Diare'
            ],
            'ptm' => [
                'Nyeri dada sesak napas',
                'Tekanan darah tinggi',
                'Pusing mendadak',
                'Lemah tubuh',
                'Penurunan penglihatan'
            ],
            'anak' => [
                'Batuk pilek',
                'Demam tinggi',
                'Diare',
                'Ruam kulit',
                'Kehilangan nafsu makan'
            ],
            'gigi' => [
                'Muncul benjolan nanah di sekitar gigi',
                'Sakit gigi parah',
                'Gusi bengkak',
                'Gigi berlubang',
                'Nyeri saat mengunyah'
            ],
            'ibu dan anak' => [
                'Nyeri saat hamil',
                'Mual dan muntah',
                'Kontraksi dini',
                'Pendarahan',
                'Nyeri punggung bawah'
            ]
        ];
        $poli = $this->faker->randomElement($polis);
        $randomKeluhan = $this->faker->randomElement($keluhan[$poli]);

        return [
            'id_pasien' => Pasien::inRandomOrder()->first()->id,
            'tanggal' => now(),
            'status' => $this->faker->randomElement(['selesai', 'belum']),
            'keluhan' => $randomKeluhan,
            'poli' => $poli,
        ];
    }

    public function selesai()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => 1,
            ];
        });
    }

    public function belum()
    {
        return $this->state(function (array $attributes) {
            return [
                'status' => 0,
            ];
        });
    }
}
