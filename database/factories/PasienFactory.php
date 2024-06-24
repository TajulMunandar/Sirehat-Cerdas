<?php

namespace Database\Factories;
use App\Models\Pasien;
use App\Models\User;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pasien>
 */
class PasienFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_user' => User::factory()->pasien()->create()->id,
            'nik' => $this->faker->numerify('################'),
            'no_kk' => $this->faker->numerify('################'),
            'no_bpjs' => $this->faker->numerify('################'),
            'nama' => $this->faker->name,
            'no_hp' => $this->faker->phoneNumber,
            'alamat' => $this->faker->address,
            'foto' => $this->faker->imageUrl(480, 880, 'people', true, 'Faker'),
        ];
    }
}
