<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Dokter;
use App\Models\Pasien;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\KonsultasiOnline>
 */
class KonsultasiOnlineFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $diagnosa = [
            'Influenza', 'Migrain', 'Myalgia', 'Common Cold', 'Gastroenteritis',
            'Hipertensi', 'Diabetes Mellitus', 'Penyakit Jantung', 'Stroke', 'Gagal Ginjal',
            'Asma', 'Demam Berdarah', 'Cacar Air', 'Gizi Buruk', 'Infeksi Saluran Pernapasan',
            'Abses Gigi', 'Karies Gigi', 'Periodontitis', 'Gingivitis', 'Pulpitis',
            'Preeklampsia', 'Hiperemesis Gravidarum', 'Anemia pada Kehamilan', 'Infeksi Saluran Kemih', 'Placenta Previa'
        ];

        return [
            'id_dokter' => Dokter::inRandomOrder()->first()->id,
            'id_pasien' => Pasien::inRandomOrder()->first()->id,
            'status_konsul' => $this->faker->randomElement([0, 1]),
            'status_obat' => $this->faker->randomElement([0, 1]),
            'diagnosa' => $this->faker->randomElement($diagnosa),
        ];
    }
}
