<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TransaksiObatOnlineDetail>
 */
class TransaksiObatOnlineDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $keterangan = ['3 X 1', '2 X 1', '1 X 1'];

        return [
            'id_to_online' => TransaksiObatOnline::factory(),
            'id_obat' => Obat::inRandomOrder()->first()->id,
            'ket' => $this->faker->randomElement($keterangan),
            'jumlah' => $this->faker->numberBetween(4, 8),
        ];
    }
}
