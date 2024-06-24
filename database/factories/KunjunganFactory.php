<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Registrasi;
use App\Models\Dokter;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Kunjungan>
 */
class KunjunganFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {

        $diagnosa = [
            'umum' => [
                'Influenza',
                'Migrain',
                'Myalgia',
                'Common Cold',
                'Gastroenteritis'
            ],
            'ptm' => [
                'Hipertensi',
                'Diabetes Mellitus',
                'Penyakit Jantung',
                'Stroke',
                'Gagal Ginjal'
            ],
            'anak' => [
                'Asma',
                'Demam Berdarah',
                'Cacar Air',
                'Gizi Buruk',
                'Infeksi Saluran Pernapasan'
            ],
            'gigi' => [
                'Abses Gigi',
                'Karies Gigi',
                'Periodontitis',
                'Gingivitis',
                'Pulpitis'
            ],
            'ibu dan anak' => [
                'Preeklampsia',
                'Hiperemesis Gravidarum',
                'Anemia pada Kehamilan',
                'Infeksi Saluran Kemih',
                'Placenta Previa'
            ]
        ];

        $registrasi = Registrasi::inRandomOrder()->first();
        if ($registrasi === null) {
            throw new \Exception('No Registrasi found. Please ensure Registrasi records exist before creating Kunjungan.');
        }
        $poli = $registrasi->poli;

        $dokter = Dokter::where('poli', $poli)->inRandomOrder()->first();
        if ($dokter === null) {
            throw new \Exception("No Dokter found for poli: {$poli}. Please ensure Dokter records exist for each poli.");
        }

        $randomDiagnosa = $this->faker->randomElement($diagnosa[$poli]);

        return [
            'id_dokter' => $dokter->id,
            'id_registrasi' => $registrasi->id,
            'diagnosa' => $randomDiagnosa,
            'tindakan' => 0,
        ];
    }
}
