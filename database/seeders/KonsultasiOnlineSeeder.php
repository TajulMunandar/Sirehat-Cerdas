<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Seeder;
use App\Models\KonsultasiOnline;
use App\Models\TransaksiObatOnline;
use App\Models\TransaksiObatOnlineDetail;
use App\Models\Obat;
use App\Models\Dokter;
use App\Models\Apoteker;

class KonsultasiOnlineSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $diagnosa = [
            'Influenza', 'Migrain', 'Myalgia', 'Common Cold', 'Gastroenteritis',
            'Hipertensi', 'Diabetes Mellitus', 'Penyakit Jantung', 'Stroke', 'Gagal Ginjal',
            'Asma', 'Demam Berdarah', 'Cacar Air', 'Gizi Buruk', 'Infeksi Saluran Pernapasan',
            'Abses Gigi', 'Karies Gigi', 'Periodontitis', 'Gingivitis', 'Pulpitis',
            'Preeklampsia', 'Hiperemesis Gravidarum', 'Anemia pada Kehamilan', 'Infeksi Saluran Kemih', 'Placenta Previa'
        ];

        // 5 data dengan status konsul 0, status obat 0, diagnosa null
        KonsultasiOnline::factory()
            ->count(5)
            ->state(function (array $attributes) {
                return [
                    'status_konsul' => 0,
                    'status_obat' => 0,
                    'diagnosa' => null,
                ];
            })
            ->create();

        // 5 data dengan status konsul 1, status obat 0, diagnosa dari array
        KonsultasiOnline::factory()
            ->count(5)
            ->state(function (array $attributes) use ($diagnosa) {
                return [
                    'status_konsul' => 1,
                    'status_obat' => 0,
                    'diagnosa' => $this->faker->randomElement($diagnosa),
                ];
            })
            ->create();

        // 15 data dengan status konsul 1, status obat 1, diagnosa dari array
        $konsultasiOnlineWithObat = KonsultasiOnline::factory()
            ->count(15)
            ->state(function (array $attributes) use ($diagnosa) {
                return [
                    'status_konsul' => 1,
                    'status_obat' => 1,
                    'diagnosa' => $this->faker->randomElement($diagnosa),
                ];
            })
            ->create();

        // Bagi 15 data menjadi 3 grup masing-masing 5 data
        $konsultasiOnlineWithObat->chunk(5)->each(function ($chunk, $index) {
            switch ($index) {
                case 0:
                    // 5 transaksi obat online dengan id_apoteker null, status ambil 0, status antar 0
                    $chunk->each(function ($konsultasi) {
                        $transaksiObatOnline = TransaksiObatOnline::factory()
                            ->for($konsultasi, 'konsultasi')
                            ->state([
                                'id_apoteker' => null,
                                'status_ambil' => 0,
                                'status_antar' => 0,
                            ])
                            ->create();

                        // Buat minimal 3 transaksi obat detail
                        for ($i = 0; $i < $this->faker->numberBetween(1, 5); $i++) {
                            TransaksiObatDetail::factory()
                                ->for($transaksiObatOnline, 'transaksi')
                                ->create([
                                    'id_obat' => Obat::inRandomOrder()->first()->id, // Misalnya, mengambil id_obat secara acak dari model Obat
                                    'ket' => $this->faker->randomElement(['3 X 1', '2 X 1', '1 X 1']),
                                    'jumlah' => $this->faker->numberBetween(4, 8),
                                ]);
                        } 
                    });
                    break;
                case 1:
                    // 5 transaksi obat online dengan id_apoteker dari model apoteker, status ambil 0, status antar 1
                    $chunk->each(function ($konsultasi) {
                        $transaksiObatOnline = TransaksiObatOnline::factory()
                        ->for($konsultasi, 'konsultasi')
                        ->state([
                            'id_apoteker' => Apoteker::inRandomOrder()->first()->id,
                            'status_ambil' => 0,
                            'status_antar' => 1,
                        ])
                        ->create();

                    // Buat minimal 3 transaksi obat detail
                    for ($i = 0; $i < $this->faker->numberBetween(1, 5); $i++) {
                        TransaksiObatDetail::factory()
                            ->for($transaksiObatOnline, 'transaksi')
                            ->create([
                                'id_obat' => Obat::inRandomOrder()->first()->id, // Misalnya, mengambil id_obat secara acak dari model Obat
                                'ket' => $this->faker->randomElement(['3 X 1', '2 X 1', '1 X 1']),
                                'jumlah' => $this->faker->numberBetween(4, 8),
                            ]);
                        } 
                    });
                    break;
                case 2:
                    // 5 transaksi obat online dengan id_apoteker dari model apoteker, status ambil 1, status antar 1
                    $chunk->each(function ($konsultasi) {
                        $transaksiObatOnline = TransaksiObatOnline::factory()
                            ->for($konsultasi, 'konsultasi')
                            ->state([
                                'id_apoteker' => Apoteker::inRandomOrder()->first()->id,
                                'status_ambil' => 1,
                                'status_antar' => 1,
                            ])
                            ->create();

                        // Buat minimal 3 transaksi obat detail
                        for ($i = 0; $i < $this->faker->numberBetween(1, 5); $i++) {
                            TransaksiObatDetail::factory()
                                ->for($transaksiObatOnline, 'transaksi')
                                ->create([
                                    'id_obat' => Obat::inRandomOrder()->first()->id, // Misalnya, mengambil id_obat secara acak dari model Obat
                                    'ket' => $this->faker->randomElement(['3 X 1', '2 X 1', '1 X 1']),
                                    'jumlah' => $this->faker->numberBetween(4, 8),
                                ]);
                        }

                        $transaksiObatOnline = TransaksiObatOnline::factory()
                            ->for($konsultasi, 'konsultasi')
                            ->withApoteker()
                            ->statusAmbil(1)
                            ->statusAntar(1)
                            ->create();

                        // Buat minimal 3 transaksi obat detail
                        TransaksiObatDetail::factory()
                            ->count(3)
                            ->for($transaksiObatOnline, 'transaksi')
                            ->create();
                    });
                    break;
            }
        });  
    } 
}
    