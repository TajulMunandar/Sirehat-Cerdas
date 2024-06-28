<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Registrasi;
use App\Models\Kunjungan;
use App\Models\Obat;
use App\Models\TransaksiObat;
use App\Models\TransaksiObatDetail;

class RegistrasiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $startDate = now()->subMonths(6);
        $endDate = now();
        $currentDate = $startDate->copy();

        while ($currentDate <= $endDate) {
            $registrasiCount = rand(2, 5);

            for ($i = 0; $i < $registrasiCount; $i++) {
                $registrasi = Registrasi::factory()->selesai()->create(['tanggal' => $currentDate]);
                $kunjungan = Kunjungan::factory()->create(['id_registrasi' => $registrasi->id]);

                $transaksiObat = TransaksiObat::factory()->create(['id_kunjungan' => $kunjungan->id]);

                // Ambil obat yang berbeda untuk setiap detail transaksi obat
                $obatIds = Obat::inRandomOrder()->limit(4)->pluck('id')->toArray();
                $transaksiDetailCount = rand(3, 4);

                for ($j = 0; $j < $transaksiDetailCount; $j++) {
                    // Pilih obat secara acak dari $obatIds yang sudah diambil sebelumnya
                    $randomObatId = $obatIds[array_rand($obatIds)];

                    TransaksiObatDetail::factory()->create([
                        'id_transaksi_obat' => $transaksiObat->id,
                        'id_obat' => $randomObatId,
                    ]);

                    // Hapus obat dari $obatIds agar tidak dipilih lagi
                    $key = array_search($randomObatId, $obatIds);
                    if ($key !== false) {
                        unset($obatIds[$key]);
                        $obatIds = array_values($obatIds); // Reset array keys after unset
                    }
                }
            }

            $currentDate->addDay();
        }
    }
}
