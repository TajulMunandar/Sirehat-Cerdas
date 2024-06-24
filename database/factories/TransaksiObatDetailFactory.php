<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Obat;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TransaksiObatDetail>
 */
class TransaksiObatDetailFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $kets = ['3 X 1', '2 X 1', '1 X 1'];

        return [
            'id_obat' => Obat::inRandomOrder()->first()->id,
            'ket' => $this->faker->randomElement($kets),
        ];
    }
}
